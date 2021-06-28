import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="f-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="f-single_foot">
                  <div className="f-section_head">
                    <h2>links</h2>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link  to="/">About</Link>
                      </li>
                      <li>
                        <Link  to="/service">Services</Link>
                      </li>
                      <li>
                        <Link  to="/">Team</Link>
                      </li>
                      <li>
                        <Link  to="/">Blog</Link>
                      </li>
                      <li>
                        <Link  to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                <div className="f-single_foot">
                  <div className="f-section_head">
                    <h2>Twitter</h2>
                  </div>
                  <div className="f-tweet">
                    {" "}
                    <span className="f-date">MAR 2018, 11</span>
                    <p>
                      {" "}
                      <strong>btc</strong> @Someone_else
                      <br />
                      "For good, too; though, in conseq uence"{" "}
                      <a href="#">#Business</a> <a href="#">#Finance</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                <div className="f-single_foot">
                  <div className="f-section_head">
                    <h2>Follow us</h2>
                  </div>
                  <ul className="f-social">
                    <li>
                      <a className="fab fa-facebook-f" href="#" />
                    </li>
                    <li>
                      <a className="fab fa-twitter" href="#" />
                    </li>
                    <li>
                      <a className="fab fa-google-plus-g" href="#" />
                    </li>
                    <li>
                      <a className="fab fa-pinterest" href="#" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="f-single_foot">
                  <div className="f-section_head">
                    <h2>subscribe us</h2>
                    <span>Want to get updates on Bitcoin?</span>
                  </div>
                </div>
                <form action="#">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your E-mail"
                  />
                  <input type="submit" value="Send Us" />
                  <small>
                    Sign up for our email newsletter. Once a month, no spam,
                    ever.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="f-footer_strip">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 pull-right f-footer_nav">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="team_page.html">Team</a>
                    </li>
                    <li>
                      <a href="blog_grid_sidebar.html">Blog</a>
                    </li>
                    <li>
                      <a href="http://www.veepixel.com/tf/html/btc/contact_page.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <p>Copyright BTC © 2018. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
