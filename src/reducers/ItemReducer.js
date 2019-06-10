import * as type from './../constant';
let DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessesage: null
}
export default(state = DEFAULT_STATE, action) => {
    switch (action.type) {

            // get
        case type.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.GET_ITEM_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
                listItem: action.payload
            }

        case type.GET_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }

            // post
        case type.POST_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.POST_ITEM_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null
            }
        case type.POST_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }

            // put

        case type.PUT_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.PUT_ITEM_SUCSESS:


            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
                

            }
        case type.PUT_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }

            // delete
        case type.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case type.DELETE_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }

            // search
        case type.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case type.SEARCH_ITEM_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
                listItem: [...action.payload]

            }

            

        default:
            return state;
    }
}