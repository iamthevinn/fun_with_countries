import axios from "axios"

export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const CHANGE_SELECTED_BLOCK = "CHANGE_SELECTED_BLOCK";
export const GET_BLOC_DATA = "GET_BLOC_DATA"
export const CHANGE_SELECTED_COUNTRY = "CHANGE_SELECTED_COUNTRY"
export const UPDATE_TRACKED_COUNTRIES = "UPDATE_TRACKED_COUNTRIES"

export function loadCountryDataToState() {
  return (dispatch, getState, api) => {
    const promise = axios.get(api);

    promise.then(({ data: countryData }) => {
      dispatch({ type: GET_COUNTRY_DATA, payload: countryData })
    }, () => { })
  }
}

export function loadBlocDataToState(id) {
  return (dispatch, getState, api) => {
    const promise = axios.get(api + "regionalbloc/" + id);

    promise.then(({ data: blocData }) => {
      dispatch({ type: GET_BLOC_DATA, payload: blocData })
    }, () => { })
  }
}

export function loadTrackedCountriesToState() {
  console.log("updating tracked countries")
  return (dispatch, getState, api) => {
    const promise = axios.get('http://5a8499bd3015220012486c1d.mockapi.io/countries');

    promise.then(({ data: trackedCountries }) => {
      dispatch({ type: UPDATE_TRACKED_COUNTRIES, payload: trackedCountries })
    }, () => { })
  }
}

export function addCountryToTrack(countryObj) {
  console.log("in add country")
  return (dispatch, getState, api) => {
    const promise = axios.post('http://5a8499bd3015220012486c1d.mockapi.io/countries', countryObj);

    promise.then(({ data: trackedCountries }) => {
      dispatch(loadTrackedCountriesToState())
    }, () => { })
  }
}