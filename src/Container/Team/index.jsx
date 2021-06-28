import React, { Component } from 'react';
import Header from "../../Components/TeamPage/Header";
import People from "../../Components/TeamPage/People";
import Count from "../../Components/TeamPage/Couter";
import Mission from "../../Components/TeamPage/Mission";
import Write from "../../Components/ServicePage/write";
import Footer from "../../Components/footer";
class TeamPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <People/>
                <Count/>
                <Mission/>
                <Write/>
                <Footer/>
            </div>
        );
    }
}

export default TeamPage;