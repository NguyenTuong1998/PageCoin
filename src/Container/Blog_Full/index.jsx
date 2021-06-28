import React, { Component } from 'react';
import Header from "../../Components/BlogCompo/Header_Full"
import Body from "../../Components/BlogCompo/BodyFull"
import Footer from "../../Components/footer"
class Blog_Full extends Component {
    render() {
        return (
            <>
                <Header/>
                <Body/>
                <Footer/>
            </>
        );
    }
}

export default Blog_Full;