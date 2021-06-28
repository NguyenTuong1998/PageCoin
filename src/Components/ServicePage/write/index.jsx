import React, { Component } from "react";

class Write extends Component {
  render() {
    return (
      <section id="f-write_us">
        <div className="f-write_us">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
                <h3>
                  Are you interested in cooperation?
                  <strong>write to us!</strong>
                </h3>
                <p>
                  if you think it's just you're looking for. Please contact us
                  and show us your skills.
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 item text-right">               
                <a
                  href="http://www.veepixel.com/tf/html/btc/contact_page.html"
                  className="f-secondary_but"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Write;
