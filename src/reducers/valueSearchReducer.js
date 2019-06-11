import * as type from './../constant';
const INIT_STALTE = {
    valueSearch: null
};
function valueSearch(state = INIT_STALTE, action) {

    switch (action.type) {
        case type.GET_VALUE_SEARCH:

            return {
                ...state,
                valueSearch: action.payload
            };

        default:
            return state;
    }
} export default valueSearch;