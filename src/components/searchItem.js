import React, {Component} from 'react';

class SearchItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: null
        }
    }
    getName = (e) => {
        this.setState({name: e.target.value})
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
                            onClick={() => this.props.searchItem(this.state.name)}>Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchItem;