import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/ItemPageActions';
import Pagination from '../components/pagination';
function mapDispatchTopProps(dispatch) {
      return {
            getPagePagination: (param)=>dispatch(action.getListItem(param)),
            getNumberPage: (param)=> dispatch(action.getNumberPage(param)),
            getAllItems:(param)=>dispatch(action.getAllItems(param)),
            changeActive:(param)=>dispatch(action.changeActivePage(param))
      };
}
function mapStateToProps(state) {
      return {
            totalPage:state.totalPage,
            search:state.valueSearch
      };
}

class PaginationContainer extends Component {
      render() {
            return (
                  <React.Fragment>
                        <Pagination  {...this.props} />
                  </React.Fragment>
            );
      }
}

export default connect(
      mapStateToProps,mapDispatchTopProps
)(PaginationContainer);