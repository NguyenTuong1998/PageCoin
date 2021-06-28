import React, { Component } from "react";
import off1 from "../../../Asset/Image/offer_01.jpg"
import off2 from "../../../Asset/Image/offer_02.jpg"
import off3 from "../../../Asset/Image/offer_03.jpg"
class Office extends Component {
  render() {
    return (
      <section id="f-special_offer">
        <div className="f-special_offer">
          <div className="f-banner_title">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="f-section_head">
                    <h2>Special offers</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-section f-offer_list" >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src={off1}
                    className="img-responsive"
                    alt
                  />
                  <div className="f-offer_text">
                    <h4>
                      {/* <img
                        src="../../../../www.veepixel.com/tf/html/btc/assets/images/service_06.html"
                        alt
                      /> */}
                      Planning
                    </h4>
                    <p>
                      Thus much I thought proper to tell you in relation to
                      yourself, and to the trust I reposed in you.
                    </p>
                    <a href="#">LEARN MORE</a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src={off2}
                    className="img-responsive"
                    alt
                  />
                  <div className="f-offer_text">
                    <h4>
                      {/* <img
                        src="../../../../www.veepixel.com/tf/html/btc/assets/images/service_07.html"
                        alt
                      /> */}
                      Organization
                    </h4>
                    <p>
                      I have often beheld two of those sages almost sinking
                      under the weight of their packs,
                    </p>
                    <a href="#">LEARN MORE</a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src={off3}
                    className="img-responsive"
                    alt
                  />
                  <div className="f-offer_text">
                    <h4>
                      {/* <img
                        src="../../../../www.veepixel.com/tf/html/btc/assets/images/service_08.html"
                        alt
                      /> */}
                      Consultation
                    </h4>
                    <p>
                      This sounded nonsense to Alice, so she said nothing, but
                      set off at once toward the Red Queen.
                    </p>
                    <a href="#">LEARN MORE</a>
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

export default Office;
