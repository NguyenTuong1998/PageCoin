import React, { Component } from 'react';
import pc from "../../../Asset/Image/about_us_help.jpg";
class HelpYou extends Component {
    render() {
        return (
          <section id="f-help_you">
            <div className="f-help_you f-section">
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img src={pc} className="img-responsive" alt />
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>How We Can Help You</h3>
                    <ul>
                      <li>
                        <i class="fas fa-chart-line"></i>
                        <b>Financial planning</b> - I have related the substance
                        of several conversations I had with my master.
                      </li>
                      <li>
                        <i class="fas fa-dollar-sign"></i> <b>Dollar saving</b>{" "}
                        - They made signs for me to come down from the rock, and
                        go towards the shore.
                      </li>
                      <li>
                        <i class="far fa-handshake"></i> <b>Consultation</b>-
                        The sight of the tumblers restored Bob Sawyer to a
                        degree of equanimity which.
                      </li>
                      <li>
                        <i className="fa fa-lock" /> <b>Safe and Secure</b> - I
                        have related the substance of several conversations I
                        had with my master.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default HelpYou;