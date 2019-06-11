import React, {Component} from 'react';

class SearchItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: null
        }
    }

    getName = (e) => { 
        this.setState({name: e.target.value});
    }
    searchItem =()=>{
        this.props.getValueSearch(this.state.name); // dua value len reducer
        this.props.getListItem({activePage:1,valueSearch:this.state.name}) // get len api
        this.props.getAllItems({valueSearch:this.state.name}); // get all item để tính số page search
        this.props.getActivePageToDefault();// chuyển active page về 1
    }
    render() {
        return (
            <div className="col-12">
                <h1>Tìm kiếm</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm ..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={this.getName}/>
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            id="button-addon2"
                            onClick={this.searchItem }>Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchItem;