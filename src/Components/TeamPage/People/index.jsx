import React, { Component } from "react";
import pc from "../../../Asset/Image/t5.jpg";
import pc1 from "../../../Asset/Image/t4.jpg";
import pc2 from "../../../Asset/Image/t3.jpg";
import pc3 from "../../../Asset/Image/t2.jpg";
class People extends Component {
  render() {
    return (
      <section id="f-team_list">
  <div className="f-section f-portfolio_content f_teamlist_main container">
    <div className="row">
      <div className="clearfix f-project_team">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="clearfix f-team_listing">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className=" f-team_single">
                  <img alt className="img-responsive" src={pc} />
                  <div className="f-team_intro">
                    <h4>Robert Suarez</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc1} />
                  <div className="f-team_intro">
                    <h4>Kobe Pineda</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc2} />
                  <div className="f-team_intro">
                    <h4>Erin Cummings</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc3} />
                  <div className="f-team_intro">
                    <h4>Erin Cummings</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc2} />
                  <div className="f-team_intro">
                    <h4>Erin Cummings</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className=" f-team_single">
                  <img alt className="img-responsive" src={pc3} />
                  <div className="f-team_intro">
                    <h4>Robert Suarez</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc1} />
                  <div className="f-team_intro">
                    <h4>Kobe Pineda</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <a href="teammate_page.html">
                <div className="f-team_single">
                  <img alt className="img-responsive" src={pc2} />
                  <div className="f-team_intro">
                    <h4>Erin Cummings</h4>
                    <span>Bitcoin Consultant</span> 
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
  }
}

export default People;
