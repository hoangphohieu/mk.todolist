import {put,takeEvery} from 'redux-saga/effects';
import getItemsAPI from './../fetchAPI/getItems';
import postItemAPI from './../fetchAPI/postItem';
import putItemAPI from './../fetchAPI/putItem';
import deleteItemAPI from './../fetchAPI/deleteItem';
import searchItemAPI from './../fetchAPI/searchItem';
import getAllItemsAPI from './../fetchAPI/getAllItemsAPI';

import * as type  from './../constant';

function* getListItem(params) {
    
    try {
        const res1= yield getItemsAPI(params);
        yield put({
            type:type.GET_ITEM_SUCSESS,
            payload: res1
        })


    } catch (error) {
        yield put ({
            type:type.GET_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}

function* postItemToList(params) {
    try {
        const res= yield postItemAPI(params);
        yield put({
            type:type.POST_ITEM_SUCSESS,
            payload: res
        })
        yield put({
            type:type.GET_ITEM_REQUEST,payload:1
        })
    } catch (error) {
        yield put ({
            type:type.POST_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}


function* updateItem(params) {
    try {
        const res= yield putItemAPI(params);
        yield put({
            type:type.PUT_ITEM_SUCSESS,
            payload: res
        })
        yield put({
            type:type.GET_ITEM_REQUEST, payload:params.payload.page
        })
    } catch (error) {
        yield put ({
            type:type.PUT_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    } 
}

function* deleteItem(params) {
    console.log(params.payload.page)

    try {
        const res= yield deleteItemAPI(params);
        yield put({
            type:type.DELETE_ITEM_SUCSESS,
            payload: res
        })
        const res2= yield getAllItemsAPI();
        if(params.payload.page===(Math.ceil(res2.length/5))){
            yield put({
                type:type.GET_ITEM_REQUEST, payload:params.payload.page
            })
        } else{
            yield put({
                type:type.GET_ITEM_REQUEST, payload:params.payload.page-1
            });
            yield put({
                type:type.GET_ALL_ITEM_SUCSESS, payload:res2
            });
        }
        
    } catch (error) {
        yield put ({
            type:type.DELETE_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    } 
}

function* searchItem(params) {
    try {
        const res= yield searchItemAPI(params);
        yield put({
            type:type.SEARCH_ITEM_SUCSESS,
            payload: res
        })
        

    } catch (error) {
        yield put ({
            type:type.SEARCH_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    } 
}



export const IteamSaga=[
    takeEvery(type.GET_ITEM_REQUEST, getListItem),
    takeEvery(type.POST_ITEM_REQUEST, postItemToList),
    takeEvery(type.PUT_ITEM_REQUEST, updateItem),
    takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(type.SEARCH_ITEM_REQUEST, searchItem),
    


];  