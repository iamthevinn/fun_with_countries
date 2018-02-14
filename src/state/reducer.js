import { GET_COUNTRY_DATA, CHANGE_SELECTED_BLOCK, GET_BLOC_DATA, CHANGE_SELECTED_COUNTRY } from './actions';

const initialState = {
    countryData: [],
    selectedBloc: undefined,
    blocData: [],
    selectedCountry: undefined,
    trackedCountries: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY_DATA:
            return { ...state, countryData: action.payload }
        case CHANGE_SELECTED_BLOCK:
            return { ...state, selectedBloc: action.payload}
        case GET_BLOC_DATA:
            return { ...state, blocData: action.payload }
        case CHANGE_SELECTED_COUNTRY:
            return { ...state, selectedCountry: action.payload }

        default:
            return state;
    }
}

export default reducer;