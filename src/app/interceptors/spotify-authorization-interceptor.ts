import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthenticationState} from '../store/states/authentication.state';
import {catchError} from 'rxjs/operators';
import {RefreshLogin} from '../store/actions/authentication.actions';
import {SpotifyConfig} from '../definitions/spotify-config';

@Injectable()
export class SpotifyAuthorizationInterceptor implements HttpInterceptor {
  constructor(
    private store: Store,
    private http: HttpClient,
    @Inject('SpotifyConfig') private config: SpotifyConfig,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(AuthenticationState.token);

    if (request.url.indexOf(this.config.f10kApiBase) === -1) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.dispatch(new RefreshLogin()).subscribe(() => {
            next.handle(request);
          });
        } else {
          return throwError(error);
        }
      }),
    );
  }
}
