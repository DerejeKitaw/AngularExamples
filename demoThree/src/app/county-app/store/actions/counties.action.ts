import { County } from '../../../models/county.model';
import { Action } from '@ngrx/store';

/****************************************
 * Actin to load County
 ****************************************/
export const LOAD_COUNTIES = '[ALL] Counties';
export const LOAD_COUNTIES_SUCCESS = '[ALL] Counties Success';
export const LOAD_COUNTIES_ERROR = '[ALL] Counties Error';

/****************************************
 * LOAD all the counties
 ****************************************/
export class LoadAllCounties implements Action {
  readonly type = LOAD_COUNTIES;
}

export class LoadAllCountiesSuccess implements Action {
  readonly type = LOAD_COUNTIES_SUCCESS;

  constructor(public payload: County[]) {}
}

export class LoadAllCountiesError implements Action {
  readonly type = LOAD_COUNTIES_ERROR;

  constructor(public payload: Error) {}
}

export type PizzasAction = LoadAllCounties | LoadAllCountiesSuccess | LoadAllCountiesError;
