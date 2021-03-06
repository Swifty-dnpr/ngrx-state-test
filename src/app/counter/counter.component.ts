import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../state-management/actions/counter.actions';


interface AppState {
  count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }
  decrement() {
    this.store.dispatch({type: DECREMENT});
  }
  reset() {
    this.store.dispatch({type: RESET});
  }

  ngOnInit() {
    console.log('hello');
  }

}
