import React, { Component } from "react";
import t1 from "../../Asset/Image/t1.jpg";
import t2 from "../../Asset/Image/t2.jpg";
import t3 from "../../Asset/Image/t3.jpg";
import t4 from "../../Asset/Image/t4.jpg";

import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class TeamProject extends Component {
  render() {
    var setting = {
      dots: false,
      infinite: true,
      autoplay: true,
      nav: false,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "slider"
    };
    return (
      <div>
        <section id="f-project_team">
          <div className="f-section f-portfolio_content container">
            <div className="row">
              <div className="col-lg-12">
                <div className="f-section_head">
                  <h2>experts</h2>
                </div>
              </div>
              <div className="clearfix f-project_team">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="clearfix f-team_listing btc owl-carousel">
                    <Slide {...setting}>
                    <div className="owl-item">
                      <a href="teammate_page.html">
                        <div className=" f-team_single">
                          <img
                            alt
                            className="img-responsive"
                            src={t1}
                          />
                          <div className="f-team_intro">
                            <h4>Robert Suarez</h4>
                            <span>Bitcoin Consultant</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="teammate_page.html">
                        <div className="f-team_single">
                          <img
                            alt
                            className="img-responsive"
                            src={t2}
                          />
                          <div className="f-team_intro">
                            <h4>Kobe Pineda</h4>
                            <span>Bitcoin Consultant</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="teammate_page.html">
                        <div className="f-team_single">
                          <img
                            alt
                            className="img-responsive"
                            src={t3}
                          />
                          <div className="f-team_intro">
                            <h4>Erin Cummings</h4>
                            <span>Bitcoin Consultant</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="teammate_page.html">
                        <div className="f-team_single">
                          <img
                            alt
                            className="img-responsive"
                            src={t4}
                          />
                          <div className="f-team_intro">
                            <h4>Erin Cummings</h4>
                            <span>Bitcoin Consultant</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="teammate_page.html">
                        <div className="f-team_single">
                          <img
                            alt
                            className="img-responsive"
                            src={t3}
                          />
                          <div className="f-team_intro">
                            <h4>Erin Cummings</h4>
                            <span>Bitcoin Consultant</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ;
      </div>
    );
  }
}

export default TeamProject;
