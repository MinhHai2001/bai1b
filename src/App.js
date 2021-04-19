
import Header from './Camera/Header/header';
import Content from './Camera/Content/ShowCard/Content';
import Footer from './Camera/Footer/footer';
import './App.css';
import React, { Component } from 'react';
import {render} from '@testing-library/react'

class App extends Component {

    render() {
        return (
            <div id="container">
                <Header />
                {/*content*/}
                <Content />
                {/*footer content*/}
                <Footer />
            </div>
        );
    }
}

export default App;
