import React, { Component } from "react";
import Header from "../../Components/ContactCompo/header";
import Body from "../../Components/ContactCompo/body";
import Footer from "../../Components/footer";
class ContactPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer/>
      </>
    );
  }
}

export default ContactPage;
