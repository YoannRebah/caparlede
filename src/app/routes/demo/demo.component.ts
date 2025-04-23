import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { RoutesService } from '../routes.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-demo',
  imports: [SearchBarComponent, HeaderComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {
  constructor(private routesService: RoutesService) {}

  ngOnInit():void {
    const allRoutes = this.routesService.getAllRoutesWithStandardExclusions();
    console.log('Toutes les routes Angular :', allRoutes);
  }
}
