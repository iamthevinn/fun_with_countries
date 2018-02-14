import axios from "axios"

export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const CHANGE_SELECTED_BLOCK = "CHANGE_SELECTED_BLOCK";
export const GET_BLOC_DATA = "GET_BLOC_DATA"
export const CHANGE_SELECTED_COUNTRY = "CHANGE_SELECTED_COUNTRY"

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
