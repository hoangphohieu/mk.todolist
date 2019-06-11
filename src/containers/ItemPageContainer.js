import React, {Component} from 'react';
import Items from './../components/items';
import * as action from './../actions/ItemPageActions';
import {connect} from 'react-redux';

class ItemPageContainer extends Component {

    render() {
        return (
            <Items {...this.props}/>
        );
    }
}

const mapStateToProps= (state)=>{
    return {
        items: state.items.listItem,
        page:state.page,
        valueSearch:state.valueSearch.valueSearch
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        getPagePagination:(payload)=> dispatch(action.getListItem(payload)),
        doIsDone:(payload)=>dispatch(action.updateStatus(payload)),
        deleteItem:(payload)=>dispatch(action.deleteItem(payload)),
   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer);