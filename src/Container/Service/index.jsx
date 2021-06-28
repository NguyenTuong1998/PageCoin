import React, { Component } from 'react';
import HeaderService from '../../Components/ServicePage/headerService';
import ServicePage from "../../Components/ServicePage/Service";
import Office from "../../Components/ServicePage/Office";
import Write from "../../Components/ServicePage/write";
import Partners from "../../Components/partners";
import Footer from "../../Components/footer";
class Service extends Component {
    render() {
        return (
          <>
            <HeaderService />
            <ServicePage />
            <Office />
            <Write />
            <Partners />
            <Footer />
          </>
        );
    }
}

export default Service;