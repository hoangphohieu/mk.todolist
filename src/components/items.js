import React, { Component } from 'react';



class Items extends Component {

    render() {
        let {page,items}=this.props;
        
        let listData = [];
        if (items) {
            listData = items.map((item, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>
                                <button
                                    className={"btn " + (
                                        (item.isDone)
                                            ? "btn-primary "
                                            : "btn-danger "
                                    ) + "mr-1"} onClick={() => this.props.doIsDone({id:item.id,page:page})}>V</button>
                                <button
                                    type="button"
                                    className="btn btn-danger ml-1"
                                    onClick={() => this.props.deleteItem({id:item.id,page:page})}>X</button>
                            </td>
                        </tr>
                    )
                })
        }
        return (
            <React.Fragment>
                <h1>Danh sách</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData}
                    </tbody>
                </table>
                
            </React.Fragment>
        );

    }
}

export default Items;