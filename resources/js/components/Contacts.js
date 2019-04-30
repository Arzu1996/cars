import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './ContactsContent';
export default class Contacts extends Component {
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