// components/loader/loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  private requestCount = 0;

  setLoading(isLoading: boolean) {
    if (isLoading) {
      this.requestCount++;
      setTimeout(() => this.loadingSubject.next(true), 0);
    } else if (--this.requestCount <= 0) {
      this.requestCount = 0;
      setTimeout(() => this.loadingSubject.next(false), 3000);
    }
  }
}