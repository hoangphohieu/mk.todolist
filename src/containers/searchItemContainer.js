import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchItem} from './../actions/ItemPageActions';
import SearchItem from '../components/searchItem';

function mapDispatchToProps(dispatch) {
    return {
        searchItem:(payload)=>dispatch(searchItem(payload)) 
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