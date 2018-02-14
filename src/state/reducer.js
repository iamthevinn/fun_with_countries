import { GET_COUNTRY_DATA, CHANGE_SELECTED_BLOCK } from './actions';

const initialState = {
    countryData: [],
    selectedBloc: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY_DATA:
            return { ...state, countryData: action.payload }
        case CHANGE_SELECTED_BLOCK:
            return { ...state, selectedBloc: action.payload}

        default:
            return state;
    }
}

export default reducer;