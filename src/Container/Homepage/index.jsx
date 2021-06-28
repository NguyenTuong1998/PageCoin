import React, { Component } from "react";
import HeaderTop from "../../Components/headerTop";
import HeaderBody from "../../Components/headerBody";
import About from "../../Components/about";
import Service from "../../Components/service";
import Price from "../../Components/price";
import TeamProject from "../../Components/team_project";
import News from "../../Components/news";
import Footer from "../../Components/footer";
import Partners from "../../Components/partners";
import BackToTop from "../../Components/backToTop";

class HomePage extends Component {
  render() {
    return (
      <>
        <HeaderTop />
        <HeaderBody />
        <About />
        <Service />
        <Price />
        <TeamProject />
        <Partners/>
        <News/>
        <Footer/>  
         
      </>
    );
  }
}

export default HomePage;
