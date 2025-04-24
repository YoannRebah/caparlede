import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { RoutesService } from '../routes.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../components/loader/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  imports: [SearchBarComponent, HeaderComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {

  loading$: Observable<boolean>;
  data: any;

  constructor(
    private routesService: RoutesService,
    private http: HttpClient, 
    private loadingService: LoadingService
  ) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit():void {
    const allRoutes = this.routesService.getAllRoutesWithStandardExclusions();
    console.log('Toutes les routes Angular :', allRoutes);
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe({
        next: (response) => {
          this.data = response;
          console.log('Données reçues:', response);
        },
        error: (err) => {
          console.error('Erreur:', err);
        },
      });
  }
}
