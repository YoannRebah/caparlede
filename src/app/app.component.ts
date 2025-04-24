import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './components/loader/loading.service';
import { Observable } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { DarkModeService } from './components/toggle-dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isDarkMode!:boolean;
  isLoading$: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private darkModeService: DarkModeService
  ) {
    this.isLoading$ = this.loadingService.loading$;
    this.darkModeService.isDarkMode$.subscribe(val => this.isDarkMode = val);
  }
}
