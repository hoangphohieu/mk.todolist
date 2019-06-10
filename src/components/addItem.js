import React, { Component } from 'react';

class AddItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            isDone: false
        }
    }
    addItem = (payload) => {
        this.props.addItem(payload);
        this.props.getActivePageToDefault();
        this.setState({ name: "" });
    }
    changeInputValue = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (

            <React.Fragment>
                <div className="col-12">
                    <h1>Thêm</h1>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add new ..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            onChange={this.changeInputValue}
                            value={this.state.name} />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                id="button-addon2"
                                onClick={() => this.addItem(this.state)}>Add</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddItem;