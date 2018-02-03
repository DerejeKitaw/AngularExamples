import * as countyActions from '../actions/counties.action';
import { County } from '../../../models/county.model';

export interface CountyState {
  data: County[];
  action: string;
  done: boolean;
  error?: Error;
}

export const initialState: CountyState = {
  data: [
    {
      windSpeed: 90,
      groundSnowLoad: 25,
      FireLaneRequirement: 2017,
      RoofMountIncludesWellAndSeptic: false,
      RoofMountIncludesSitePlan: true,
      FootingPlan: false,
      RapidShutdown: true,
      Stampeddrawing: 'none',
      Certletter: 2017,
      NEC: 2014,
      IBC: 2015,
      IRC: 2015,
      countyName: 'Somerset',
      age: 24,
      isActive: true
    },
    {
      windSpeed: 115,
      groundSnowLoad: 30,
      FireLaneRequirement: 2017,
      RoofMountIncludesWellAndSeptic: false,
      RoofMountIncludesSitePlan: true,
      FootingPlan: true,
      RapidShutdown: false,
      Stampeddrawing: 'WET',
      Certletter: 2017,
      NEC: 2014,
      IBC: 2015,
      IRC: 2015,
      countyName: 'Frederick',
      age: 34,
      isActive: true
    }
  ],
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: countyActions.CountyAction): CountyState {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all games actions
     ************************/
    case countyActions.LOAD_COUNTIES:
      return { ...state, action: countyActions.LOAD_COUNTIES, done: false };
    case countyActions.LOAD_COUNTIES_SUCCESS:
      return { ...state, data: action.payload, done: true };
    case countyActions.LOAD_COUNTIES_ERROR:
      return { ...state, done: false, error: action.payload };
  }
  return state;
}

// export const getCountiesLoading = (state: CountyState) => state.;
// export const getCountiesLoaded = (state: CountyState) => state.done;
// export const getCountiesEntities = (state: CountyState) => state.data;