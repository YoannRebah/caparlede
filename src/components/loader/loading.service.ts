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
      setTimeout(() => this.showLoading(), 0);
    } else if (--this.requestCount <= 0) {
      this.requestCount = 0;
      setTimeout(() => this.hideLoading, 1500);
    }
  }

  showLoading() {
    this.loadingSubject.next(true);
  }

  hideLoading() {
    this.loadingSubject.next(false);
  }
}