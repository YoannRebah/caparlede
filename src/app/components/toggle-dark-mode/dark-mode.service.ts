import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private readonly storageKey = 'isDarkMode';

  private _isDarkMode = new BehaviorSubject<boolean>(this.getInitialMode());
  isDarkMode$ = this._isDarkMode.asObservable();

  constructor() {
    this.applyDarkMode(this._isDarkMode.value);
  }

  toggle(): void {
    const newValue = !this._isDarkMode.value;
    this._isDarkMode.next(newValue);
    this.applyDarkMode(newValue);
    sessionStorage.setItem(this.storageKey, JSON.stringify(newValue));
  }

  setDarkMode(enabled: boolean): void {
    this._isDarkMode.next(enabled);
    this.applyDarkMode(enabled);
    sessionStorage.setItem(this.storageKey, JSON.stringify(enabled));
  }

  private getInitialMode(): boolean {
    const saved = sessionStorage.getItem(this.storageKey);
    return saved !== null ? JSON.parse(saved) : false;
  }

  private applyDarkMode(isDark: boolean): void {
    document.documentElement.classList.toggle('dark', isDark);
  }
}
