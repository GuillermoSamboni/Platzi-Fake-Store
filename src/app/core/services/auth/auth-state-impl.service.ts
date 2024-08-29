import { signalSlice } from 'ngxtension/signal-slice';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { inject, Injectable } from "@angular/core";
import AuthService from './auth.service';
import StateSignIn from '@core/interfaces/states/state-sing-in.interface';
import SigIn from '@core/interfaces/auth/sign-in.interface';

@Injectable()
export default class AuthStateImplService {
  private service = inject(AuthService)

  private initStateProduct: StateSignIn = {
    response: null,
    status: 'loading',
  };

  stateSingIn = signalSlice({
    initialState: this.initStateProduct,
    actionSources: {
      signIn: (_state, action: Observable<SigIn>) => action.pipe(
        switchMap((data) => this.service.login(data).pipe(
          map((response) => ({ response, status: 'success' as const })),
          catchError(() => {
            return of({
              response: null,
              status: 'error' as const
            })
          })
        ))
      )
    }
  })

}
