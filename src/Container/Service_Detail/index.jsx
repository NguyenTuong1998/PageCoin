import React, { Component } from 'react';
import Header from "../../Components/ServicePage/headerDetail";
import Footer from "../../Components/footer";
import Partners from '../../Components/partners';
import Write from '../../Components/ServicePage/write';
import BodyDetail from '../../Components/ServicePage/BodyDetail';
class ServiceDetail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BodyDetail/>
                <Write/>
                <Partners/>
                <Footer/>
            </div>
        );
    }
}

export default ServiceDetail;