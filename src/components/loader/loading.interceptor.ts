import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true);
    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const interceptor = inject(LoadingInterceptor);
  const handler = { handle: next } as HttpHandler;
  return interceptor.intercept(req, handler);
}