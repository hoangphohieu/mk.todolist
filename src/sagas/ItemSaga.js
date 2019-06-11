import { put, takeEvery } from 'redux-saga/effects';
import getItemsAPI from './../fetchAPI/getItems';
import postItemAPI from './../fetchAPI/postItem';
import putItemAPI from './../fetchAPI/putItem';
import deleteItemAPI from './../fetchAPI/deleteItem';
import getAllItemsAPI from './../fetchAPI/getAllItemsAPI';

import * as type from './../constant';

function* getListItem(params) {

    try {
        const res1 = yield getItemsAPI(params);
        yield put({
            type: type.GET_ITEM_SUCSESS,
            payload: res1
        })


    } catch (error) {
        yield put({
            type: type.GET_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* postItemToList(params) {
    console.log(params);
    
    try {
        const res = yield postItemAPI(params);
        yield put({
            type: type.POST_ITEM_SUCSESS,
            payload: res
        })
        yield put({
            type: type.GET_ITEM_REQUEST, payload: 1
        })
        const res2 = yield getAllItemsAPI(params);
        yield put({
            type: type.GET_ALL_ITEM_SUCSESS, payload: res2
        })
    } catch (error) {
        yield put({
            type: type.POST_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


function* updateItem(params) {
    try {
        const res = yield putItemAPI(params);
        yield put({
            type: type.PUT_ITEM_SUCSESS,
            payload: res
        })
        yield put({
            type: type.GET_ITEM_REQUEST, payload: {
                                                    valueSearch:params.payload.valueSearch,
                                                    activePage:params.payload.page
                                                }
        })
    } catch (error) {
        yield put({
            type: type.PUT_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }
}

function* deleteItem(params) {

    try {
        const res = yield deleteItemAPI(params);
        yield put({
            type: type.DELETE_ITEM_SUCSESS,
            payload: res
        }) 
        
        const res2 = yield getAllItemsAPI(params);
        yield put({
            type: type.GET_ALL_ITEM_SUCSESS, payload: res2
        })

        // get api để tìm total page
        if(Math.ceil(res2.length/5)<params.payload.page){
            console.log(Math.ceil(res2.length/5));
            
            yield put({
                type: type.GET_ITEM_REQUEST, payload: {
                                                        valueSearch:params.payload.valueSearch,
                                                        activePage:(Math.ceil(res2.length/5))
                                                    }
            })
            yield put({
                type: type.CHANGE_ACTIVE_PAGE, payload: {
                                                        valueSearch:params.payload.valueSearch,
                                                        activePage:(Math.ceil(res2.length/5))
                                                    }
            })
            
        } else{
        
            yield put({
                type: type.GET_ITEM_REQUEST, payload: {
                                                        valueSearch:params.payload.valueSearch,
                                                        activePage:params.payload.page
                                                    }
    })
        }


    } catch (error) {
        yield put({
            type: type.DELETE_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }
}




export const IteamSaga = [
    takeEvery(type.GET_ITEM_REQUEST, getListItem),
    takeEvery(type.POST_ITEM_REQUEST, postItemToList),
    takeEvery(type.PUT_ITEM_REQUEST, updateItem),
    takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),
    



];   