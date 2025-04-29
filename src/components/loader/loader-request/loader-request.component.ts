import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderComponent } from '../loader.component';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loader-request',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './loader-request.component.html',
  styleUrl: './loader-request.component.scss'
})
export class LoaderRequestComponent {

  isLoading$: Observable<boolean>;

  @Input({ required: true }) id!: string;
  @Input() classNames?: string;

  constructor(
    private loadingService: LoadingService,
  ) {
    this.isLoading$ = this.loadingService.loading$;
  }
}
