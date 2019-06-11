import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/ItemPageActions';
import SearchItem from '../components/searchItem';

function mapDispatchToProps(dispatch) {
    return {
        getListItem:(payload)=>dispatch(action.getListItem(payload)),
        getValueSearch:(payload)=>dispatch(action.getValueSearch(payload)),
        getAllItems:(payload)=>dispatch(action.getAllItems(payload)),
        getActivePageToDefault :()=>dispatch(action.getActivePageToDefault())
    };
}

class SearchItemContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchItem {...this.props}/>
            </React.Fragment>
        );
    }
}

export default connect(
    null,mapDispatchToProps
)(SearchItemContainer);