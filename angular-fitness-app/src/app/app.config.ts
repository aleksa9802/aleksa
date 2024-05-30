import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrainingService } from './training/training.service';
import { UserService } from './auth/user.service';
import { ApiService } from './api.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { headerInterceptor } from './interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([headerInterceptor])),
    //withInterceptors([loggingInterceptor])
    TrainingService,
    UserService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: Headers, multi: true },
    provideAnimationsAsync(),
  ],
};
// export function loggingInterceptor(
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> {
//   console.log(req.headers, 'from app.');
//   return next(req);
// }
