import * as type from './../constant';

export function getListItem(payload) {
    return ({type: type.GET_ITEM_REQUEST,payload})
}

export function addItem(payload) {
    return ({type: type.POST_ITEM_REQUEST, payload})
}

export function updateStatus(payload) {
    return ({type: type.PUT_ITEM_REQUEST, payload})
}
export function deleteItem(payload) {
    return ({type: type.DELETE_ITEM_REQUEST, payload})
}

export function searchItem(payload) {
    return ({type: type.SEARCH_ITEM_REQUEST, payload})
}

export function getNumberPage(payload) {
    return ({type: type.GET_NUMBER_PAGE, payload})
}
export function getAllItems() {
    return ({type: type.GET_ALL_ITEM_REQUEST})
}

export function changeActivePage(payload) {
    return ({type: type.CHANGE_ACTIVE_PAGE,payload})
}
export function getActivePageToDefault() {   
    return ({type: type.GET_ACTIVE_PAGE_TO_DEFAULT})
}


