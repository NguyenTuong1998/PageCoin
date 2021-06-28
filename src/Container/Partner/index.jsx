import React, { Component } from 'react';
import Header from "../../Components/Partner/Header";
import Body from "../../Components/Partner/body";
import Write from "../../Components/ServicePage/write";
import Footer from "../../Components/footer";
class Partner extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Write/>
                <Footer/>
            </div>
        );
    }
}

export default Partner;