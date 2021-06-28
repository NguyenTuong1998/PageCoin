import React, { Component } from 'react';
import HeaderAbout from "../../Components/AboutCompo/HeaderAbout";
import TextAbout from "../../Components/AboutCompo/TextAbout";
import Counter from "../../Components/AboutCompo/Counter";
import HelpYou from "../../Components/AboutCompo/HelpYouAbout";
import Team from "../../Components/team_project";
import Skill from "../../Components/AboutCompo/SkillAbout";
import Write from "../../Components/ServicePage/write";
import Partners from "../../Components/partners";
import Footer from "../../Components/footer";

class About extends Component {
    render() {
        return (
            <>
                <HeaderAbout/>
                <TextAbout/>
                <Counter/>
                <HelpYou/>
                <Team/>
                <Skill/>
                <Write/>
                <Partners/>
                <Footer/>
            </>
        );
    }
}

export default About;