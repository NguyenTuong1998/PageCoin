import React, { Component } from "react";
import pc from "../../../Asset/Image/our_mission.jpg";
class Mission extends Component {
  render() {
    return (
      <section id="f-mission">
        <div className="f-mission">
          <div className="container f-section">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                <div className="f-welcome_text">
                  <h3>Our Mission</h3>
                  <p>
                    And in the exercise - of that dignity, wherein he was very
                    dexterous, would make use of no other vizard than a long
                    prayer. In two days they brought me ten sheets of paper
                    filled up on every side. They swore to me that they had
                    ransacked whatever could be found in the characters of
                    Socrates In two days they brought me ten sheets of paper
                    filled up on every side.
                  </p>
                  <br />{" "}
                  <a href="#" className="f-primary_but">
                    All Projects
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                <img
                  src={pc}
                  alt
                  className="img-responsive pull-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mission;
