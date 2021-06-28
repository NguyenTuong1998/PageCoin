import React, { Component } from "react";
import logo from "../../Asset/Image/logo_zurich.png";
import banner from "../../Asset/Image/banner_404.jpg";
import err from "../../Asset/Image/404.png";
import {Link} from 'react-router-dom'
class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="f-header">
          <div className="f-banner_title">
            <img src={banner} className="img-responsive" alt />
            <div className="f-inner_title container">
              <div className="row">
                <Link to="">
                  <img className="error_page_logo" src={logo} alt />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section id="f-404_content">
          <div className="f-404_content">
            <div className="container">
              <div className="row clearfix text-center">
                <img src={err} className="img-responsive error_logo" alt />
                <h3>PAGE NOT FOUND!</h3>
                <p>
                  <b>Sorry, this page does not exist</b>
                  The link you clicked might be corrupted, or the page may{" "}
                  <br />
                  have been removed.
                </p>
                <Link to="/" className="f-primary_but">
                  Go back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="f-footer_sec">
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <p>Copyright BTC © 2018. All right reserved</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-right">
                  <ul className="f-social">
                    <li>
                      <a href="#" className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus-g" />
                    </li>
                    <li>
                      <a href="#" className="fab fa-pinterest" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default PageNotFound;
