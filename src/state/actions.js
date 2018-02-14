import axios from "axios"

export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA";
export const CHANGE_SELECTED_BLOCK = "CHANGE_SELECTED_BLOCK";

export function loadCountryDataToState(id) {
    return (dispatch, getState, api) => {
        const promise = axios.get(api);

        promise.then(({ data: countryData }) => {
            dispatch({ type: GET_COUNTRY_DATA, payload: countryData })
        }, () => { })
    }
}
