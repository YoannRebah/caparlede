import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserService } from './browser.service'; // <-- adapte le chemin si besoin

@Component({
  standalone: true,
  selector: 'app-browser-test',
  imports: [CommonModule],
  templateUrl: './browser-test.component.html'
})
export class BrowserTestComponent {
  theme: 'light' | 'dark' = 'light';
  online = true;
  visibility: 'visible' | 'hidden' = 'visible';
  userLocalStorage: any = null;
  userSessionStorage: any = null;

  constructor(private browserService: BrowserService) {
    this.browserService.theme$.subscribe(theme => this.theme = theme);
    this.browserService.online$.subscribe(online => this.online = online);
    this.browserService.visibility$.subscribe(vis => this.visibility = vis);

    this.loadStorage();
  }

  saveToLocal(): void {
    this.browserService.setLocalItem('user', { id: 1, name: 'Local User' });
    this.loadStorage();
  }

  saveToSession(): void {
    this.browserService.setSessionItem('user', { id: 2, name: 'Session User' });
    this.loadStorage();
  }

  clearLocal(): void {
    this.browserService.clearLocal();
    this.loadStorage();
  }

  clearSession(): void {
    this.browserService.clearSession();
    this.loadStorage();
  }

  loadStorage(): void {
    this.userLocalStorage = this.browserService.getLocalItem<any>('user');
    this.userSessionStorage = this.browserService.getSessionItem<any>('user');
  }

  getUserAgent(): string {
    return this.browserService.getUserAgent();
  }

  getOS(): string {
    return this.browserService.getOS();
  }

  getBrowser(): string {
    return this.browserService.getBrowserName();
  }
}
