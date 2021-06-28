import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <section id="f-about_text">
        <div className="f-section f-about_text">
          <div className="container">
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="f-section_head">
                  <h2>global financial company</h2>
                </div>
                <h3>Who We Are</h3>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p>
                  {" "}
                  <strong>I have related</strong> - the substance of several
                  conversations I had with my master during the greatest part of
                  the time I had the honour to be in his service; but have,
                  indeed, for brevity sake, omitted much more than is here set
                  down. For me to come down from the rock, and go towards the
                  shore, which I accordingly did; and the flying island being
                  raised to a convenient height, the verge. Several
                  conversations to be in his service.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p>
                  At first, for some time, I was not able to answer him one
                  word; but as he had taken me in his arms I held fast by him,
                  or I should have fallen to the ground. I confess this side of
                  the country was much pleasanter than mine; but yet I had not
                  the least inclination to remove, for as I was fixed in my
                  habitation it became natural to me, and I seemed all the while
                  I was here to be as it were upon a journey, and from home.
                </p>
              </div>
            </div>
            <div className="clearfix text-center f-mt">
              {" "}
              <a href="#" className="f-primary_but">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Text;
