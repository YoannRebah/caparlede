import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from '../components/toggle-dark-mode/dark-mode.service';
import { ThemeService } from '../themes/themes.service';
import { BrowserService } from '../browser/browser.service';
import { LoaderRequestComponent } from '../components/loader/loader-request/loader-request.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, LoaderRequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  browserTheme: 'light' | 'dark' = 'light';
  isDarkMode!: boolean;

  constructor(
    private darkModeService: DarkModeService,
    private themeService: ThemeService,
    private browserService: BrowserService
  ) {
    this.darkModeService.isDarkMode$.subscribe(val => this.isDarkMode = val);
    this.browserService.theme$.subscribe(theme => this.browserTheme = theme);
  }

  ngOnInit() {
    const theme = this.themeService.theme || '1';
    this.themeService.setTheme(theme);
  }
}
