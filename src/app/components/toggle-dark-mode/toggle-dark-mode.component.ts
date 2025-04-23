import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-toggle-dark-mode',
  imports: [],
  templateUrl: './toggle-dark-mode.component.html',
  styleUrl: './toggle-dark-mode.component.scss'
})
export class ToggleDarkModeComponent {
  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkMode$.subscribe(val => this.isDarkMode = val);
  }

  toggleDarkMode(): void {
    this.darkModeService.toggle();
  }
}
