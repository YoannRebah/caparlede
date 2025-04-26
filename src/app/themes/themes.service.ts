import { Injectable } from '@angular/core';
import { themesConfig } from './themes.config';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private modalElement: HTMLDivElement | null = null;

  constructor() {
    this.initKeyboardShortcut();
  }

  get themesConfig() {
    return themesConfig;
  }

  get theme() {
    const stored = sessionStorage.getItem('theme');
    return stored ? JSON.parse(stored) : null;
  }

  setTheme(themeId: string) {
    if (themeId) {
      const documentBody = document.body;

      documentBody.setAttribute('data-theme', `theme-${themeId}`);
      sessionStorage.setItem('theme', JSON.stringify(themeId));

      Object.keys(this.themesConfig).forEach(key => {
        documentBody.classList.remove(key);
      });

      documentBody.classList.add(`theme-${themeId}`);
    }
  }

  private initKeyboardShortcut() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'm') {
        event.preventDefault();
        this.toggleThemeModal();
      }
    });
  }

  private toggleThemeModal() {
    if (this.modalElement) {
      this.modalElement.remove();
      this.modalElement = null;
      return;
    }

    this.createThemeModal();
  }

  private createThemeModal() {
    const modal = document.createElement('div');
    modal.classList.add('theme-modal');

    const select = document.createElement('select');
    select.classList.add('theme-select');

    Object.entries(this.themesConfig).forEach(([key, value]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = value.name;
      select.appendChild(option);
    });

    select.value = `theme-${this.theme ?? '1'}`;

    select.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLSelectElement;
      this.setTheme(target.value.split('-')[1]);
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.classList.add('theme-close-button');
    closeButton.addEventListener('click', () => this.toggleThemeModal());

    modal.appendChild(select);
    modal.appendChild(closeButton);

    document.body.appendChild(modal);
    this.modalElement = modal;
  }
}
