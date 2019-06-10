import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>trang chủ</h1>
                <a href="/items"> chuyển sang trang items</a>
            </div>
        );
    }
}

export default HomePage;