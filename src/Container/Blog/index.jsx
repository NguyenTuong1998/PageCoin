import React, { Component } from 'react';
import HeaderBlog from "../../Components/BlogCompo/Header";
import Body from "../../Components/BlogCompo/Body";
import Footer from "../../Components/footer";
class Blog extends Component {
    render() {
        return (
            <>
                <HeaderBlog/>
                <Body/>
                <Footer/>
            </>
        );
    }
}

export default Blog;