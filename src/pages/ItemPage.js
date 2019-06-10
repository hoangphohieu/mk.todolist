import React, {Component} from 'react';
import ItemPageContainer from './../containers/ItemPageContainer';
import AddItemContainer from '../containers/addItemContainer';
import SearchItemContainer from '../containers/searchItemContainer';
import PaginationContainer from '../containers/paginationContainer';

class ItemPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* left table */}
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <ItemPageContainer/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <PaginationContainer/>
                            </div>
                        </div>
                    </div>

                    {/* right table */}
                    <div className="col-4">
                        <div className="row">
                            {/* thêm */}
                            <AddItemContainer/> {/* search */}
                            <SearchItemContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemPage;