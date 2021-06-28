import React, { Component } from 'react';
import Header from "../../Components/BlogCompo/Header_Detail";
import Body from "../../Components/BlogCompo/Body_Detail";
import Footer from "../../Components/footer";
class BlogDetail extends Component {
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

export default BlogDetail;