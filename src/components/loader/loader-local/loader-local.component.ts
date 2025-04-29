import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderComponent } from '../loader.component';

@Component({
  selector: 'app-loader-local',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './loader-local.component.html',
  styleUrl: './loader-local.component.scss'
})
export class LoaderLocalComponent {

  @Input({ required: true }) id!: string;
  @Input() classNames?: string;

  constructor() {}
}
