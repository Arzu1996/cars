import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
export default class Index extends Component {
    render() {
        return (
           <div className="container">
           <Header />
           <Content />    
           <Footer />
            </div>
        );
    }
}
