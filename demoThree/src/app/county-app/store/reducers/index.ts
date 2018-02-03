import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as pizzasReducer from './counties.reducer';

export interface CountiesState {
    Counties: pizzasReducer.CountyState;
  }
  export const reducers: ActionReducerMap<CountiesState> = {
    Counties: pizzasReducer.reducer,
  };
