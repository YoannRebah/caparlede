import { Component } from '@angular/core';
import { HeaderConnectedComponent } from '../../components/header/header-connected/header-connected.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderConnectedComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
