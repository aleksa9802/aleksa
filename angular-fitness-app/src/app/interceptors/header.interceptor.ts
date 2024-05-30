import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  //radi

  console.log('asdad');
  const API_KEY = 'x-api-key';
  const request = req.clone({
    setHeaders: {
      API_KEY,
    },
  });
  console.log(request.headers);
  return next(request);
};
