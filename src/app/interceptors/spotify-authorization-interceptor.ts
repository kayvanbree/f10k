import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthenticationState} from '../store/states/authentication.state';
import {catchError, map} from 'rxjs/operators';
import {Login} from '../store/actions/authentication.actions';

@Injectable()
export class SpotifyAuthorizationInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(AuthenticationState.token);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.dispatch(new Login());
        }
        return throwError(error);
      }),
    );
  }
}
