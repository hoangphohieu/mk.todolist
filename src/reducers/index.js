import {combineReducers} from 'redux';
import ItemReducers from './ItemReducer';
import getNumber from './numberPageReducer'; 
import totalPage from './totalPage'


export default combineReducers({
    items:ItemReducers,
    page:getNumber,
    totalPage
})
