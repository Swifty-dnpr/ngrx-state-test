import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class LoggingEffects {
  @Effect()
  incrementing$: Observable<Action> = this.actions$.pipe(
    tap(action => console.log(action))
  );

  constructor(
    private actions$: Actions
  ) {
  }
}
