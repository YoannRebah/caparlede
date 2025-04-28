import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { ButtonComponent } from '../../button/button.component';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { DEV_DATA_NAV } from '../../../routes/demo/demo.data';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../dropdown/dropdown.component';

@Component({
  selector: 'app-header-connected',
  imports: [HeaderComponent, ButtonComponent, SearchBarComponent, RouterLink, DropdownComponent],
  templateUrl: './header-connected.component.html',
  styleUrl: './header-connected.component.scss'
})
export class HeaderConnectedComponent {
  @Input({ required: true }) id!: string;
  @Input() classNames?: string;

  get DEV_DATA_NAV() {
    return DEV_DATA_NAV
  }
}
