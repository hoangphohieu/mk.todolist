import {combineReducers} from 'redux';
import ItemReducers from './ItemReducer';
import getNumber from './numberPageReducer'; 
import totalPage from './totalPage';
import valueSearch from './valueSearchReducer';


export default combineReducers({
    items:ItemReducers,
    page:getNumber,
    totalPage,
    valueSearch
})
