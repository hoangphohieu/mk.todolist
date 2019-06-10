import {put,takeEvery} from 'redux-saga/effects';
import getAllItemsAPI from './../fetchAPI/getAllItemsAPI';
import * as type  from './../constant';

function* getTotalPage(params) {

    try {

        const res= yield getAllItemsAPI();
        yield put({
            type:type.GET_ALL_ITEM_SUCSESS,
            payload: res
        })

    } catch (error) {
        yield put ({
            type:type.GET_ALL_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}

export const totalPageSaga=[
    takeEvery(type.GET_ALL_ITEM_REQUEST, getTotalPage),
];  