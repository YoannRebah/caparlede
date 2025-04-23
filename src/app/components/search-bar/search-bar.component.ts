import { Component, ElementRef, ViewChild, HostListener, OnInit, AfterViewInit, Input } from '@angular/core';
import { RoutesService } from '../../routes/routes.service';
import { RouterLink } from '@angular/router';
import { ToggleDarkModeComponent } from '../toggle-dark-mode/toggle-dark-mode.component';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [RouterLink, ToggleDarkModeComponent, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  showFullScreen: boolean = false;
  allRoutesData!: any;
  resultFiltered!: any;
  inputValue: string = '';
  isShortcutTriggered = false;

  @Input() defaultData?: any = this.allRoutesDataFiltered;

  @ViewChild('searchBarTrigger', { static: true }) searchBarTrigger!: ElementRef;
  @ViewChild('searchBarFullScreen', { static: false }) searchBarFullScreen!: ElementRef;
  @ViewChild('searchBarContent', { static: false }) searchBarContent!: ElementRef;
  @ViewChild('triggerInput', { static: true }) triggerInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fullscreenInput', { static: false }) fullscreenInput!: ElementRef<HTMLInputElement>;

  constructor(
    private routesService: RoutesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.allRoutesData = this.routesService.getAllRoutesWithStandardExclusions();
    this.resultFiltered = this.allRoutesData;
  }

  ngAfterViewInit(): void {
    if (this.searchBarFullScreen) {
      this.searchBarFullScreen.nativeElement.style.display = 'none';
    }
  }

  get allRoutesDataFiltered() {
    return this.resultFiltered
  }

  openFullScreenSearch(): void {
    this.triggerInput?.nativeElement.blur();
    this.showFullScreen = true;
    setTimeout(() => {
      this.fullscreenInput?.nativeElement.focus();
    }, 0);
  }

  closeFullScreenSearch(): void {
    this.showFullScreen = false;
    if (this.searchBarFullScreen) {
      this.searchBarFullScreen.nativeElement.style.display = 'none';
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const triggerEl = this.searchBarTrigger.nativeElement;
    const fullScreenEl = this.searchBarFullScreen?.nativeElement;
    const contentEl = this.searchBarContent?.nativeElement;

    if (!this.showFullScreen || !fullScreenEl || !contentEl) return;

    const clickedInsideContent = contentEl.contains(event.target as Node);
    const clickedOnTrigger = triggerEl.contains(event.target as Node);

    if (!clickedInsideContent && !clickedOnTrigger) {
      this.closeFullScreenSearch();
    }
  }

  onSearchInput(value: string) {
    if(value) {
      this.resultFiltered = this.searchService.genericSearch(value, this.allRoutesData);
    } else {
      this.resultFiltered = this.allRoutesData;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const isMac = navigator.platform.toLowerCase().includes('mac');
    const isCtrlK = (!isMac && event.ctrlKey && event.key === 'k') || (isMac && event.metaKey && event.key === 'k');

    if (isCtrlK) {
      event.preventDefault();
      this.onCtrlK();
    }
  }

  onCtrlK() {
    this.isShortcutTriggered = true;
    if(this.showFullScreen) {
      this.closeFullScreenSearch();
    } else {
      this.openFullScreenSearch();
    }
  }
  
}
