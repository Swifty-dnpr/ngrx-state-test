import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state-management/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoggingEffects } from './state-management/effects/loggin.effects';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}),
    EffectsModule.forRoot([LoggingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
