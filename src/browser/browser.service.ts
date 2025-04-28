import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  private themeSubject = new BehaviorSubject<'light' | 'dark'>(this.detectTheme());
  private onlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  private visibilitySubject = new BehaviorSubject<'visible' | 'hidden'>(document.visibilityState as 'visible' | 'hidden');

  theme$: Observable<'light' | 'dark'> = this.themeSubject.asObservable();
  online$: Observable<boolean> = this.onlineSubject.asObservable();
  visibility$: Observable<'visible' | 'hidden'> = this.visibilitySubject.asObservable();

  constructor(private zone: NgZone) {
    this.listenToThemeChanges();
    this.listenToOnlineStatus();
    this.listenToVisibility();
  }

  // --- THEME ---

  private detectTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private listenToThemeChanges(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.zone.runOutsideAngular(() => {
      mediaQuery.addEventListener('change', (event) => {
        this.zone.run(() => {
          this.themeSubject.next(event.matches ? 'dark' : 'light');
        });
      });
    });
  }

  // --- ONLINE STATUS ---

  private listenToOnlineStatus(): void {
    this.zone.runOutsideAngular(() => {
      merge(
        fromEvent(window, 'online').pipe(map(() => true)),
        fromEvent(window, 'offline').pipe(map(() => false))
      )
      .pipe(startWith(navigator.onLine))
      .subscribe(status => {
        this.zone.run(() => {
          this.onlineSubject.next(status);
        });
      });
    });
  }

  // --- VISIBILITY STATUS ---

  private listenToVisibility(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(document, 'visibilitychange')
        .pipe(startWith(document.visibilityState))
        .subscribe(() => {
          this.zone.run(() => {
            this.visibilitySubject.next(document.visibilityState as 'visible' | 'hidden');
          });
        });
    });
  }

  // --- INFOS SYSTEME ---

  getUserAgent(): string {
    return navigator.userAgent;
  }

  getBrowserName(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome') && !ua.includes('Edg') && !ua.includes('OPR')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('OPR') || ua.includes('Opera')) return 'Opera';
    return 'Unknown';
  }

  getOS(): string {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'MacOS';
    if (platform.includes('linux')) return 'Linux';
    if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
    if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return 'iOS';
    return 'Unknown';
  }

  // --- SESSION STORAGE ---

  setSessionItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionItem<T>(key: string): T | null {
    const item = sessionStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Error parsing sessionStorage item', error);
      return null;
    }
  }

  removeSessionItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  // --- LOCAL STORAGE ---

  setLocalItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Error parsing localStorage item', error);
      return null;
    }
  }

  removeLocalItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearLocal(): void {
    localStorage.clear();
  }
}
