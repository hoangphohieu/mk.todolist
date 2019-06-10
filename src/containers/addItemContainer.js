import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddItem from './../components/addItem';
import * as action from './../actions/ItemPageActions';

function mapDispatchToProps(dispatch) {
    return {
        addItem:(payload)=>dispatch(action.addItem(payload)),
        getActivePageToDefault: ()=>dispatch(action.getActivePageToDefault())
    };
}

class AddItemContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <AddItem {...this.props}/>
            </React.Fragment>
        );
    }
}

export default connect(
    null,mapDispatchToProps
)(AddItemContainer);