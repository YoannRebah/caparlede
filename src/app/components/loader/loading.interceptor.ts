import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor: Requête démarrée', req.url);
    this.loadingService.setLoading(true);
    return next.handle(req).pipe(
      finalize(() => {
        console.log('Interceptor: Requête terminée', req.url);
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