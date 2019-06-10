import React, {Component} from 'react';

class ItemPagination extends Component {
   
    nextPage =()=>{
        this.props.getPagePagination(this.props.numberPage);  // call API
        this.props.changeActive(this.props.numberPage);   // change active
        this.props.getNumberPage(this.props.numberPage) // send number page to store
    }
    render() {
        
    return (
        <React.Fragment>
            <li className={"page-item " +((this.props.active)?"active":"")}>
                <a className="page-link" href="#" onClick={this.nextPage}>{this.props.numberPage}</a>
            </li>
        </React.Fragment>
    );
}
}

export default ItemPagination;