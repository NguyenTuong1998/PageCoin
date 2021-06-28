import React, { Component } from 'react';
import HeaderBlog from "../../Components/BlogCompo/HeaderSide";
import Body from "../../Components/BlogCompo/Body_ListSide";
import Footer from "../../Components/footer";
class BlogList extends Component {
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

export default BlogList;