import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoadingService } from '../components/loader/loading.service';
import { DarkModeService } from '../components/toggle-dark-mode/dark-mode.service';
import { ThemeService } from '../themes/themes.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isDarkMode!: boolean;
  isLoading$: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private darkModeService: DarkModeService,
    private themeService: ThemeService
  ) {
    this.isLoading$ = this.loadingService.loading$;
    this.darkModeService.isDarkMode$.subscribe(val => this.isDarkMode = val);
  }

  ngOnInit() {
    const theme = this.themeService.theme || '1';
    this.themeService.setTheme(theme);
  }
}
