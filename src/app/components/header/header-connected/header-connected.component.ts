import { Component } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';

@Component({
  selector: 'app-header-connected',
  imports: [HeaderComponent, SearchBarComponent],
  templateUrl: './header-connected.component.html',
  styleUrl: './header-connected.component.scss'
})
export class HeaderConnectedComponent {

}
