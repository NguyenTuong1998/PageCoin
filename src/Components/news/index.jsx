import React, { Component } from "react";
import new1 from "../../Asset/Image/offer_01_01.jpg";
import new2 from "../../Asset/Image/offer_02.jpg";
import new3 from "../../Asset/Image/offer_01_03.jpg";
class News extends Component {
  render() {
    return (
      <section id="f-news">
        <div className="f-section f-services f-news">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="f-section_head">
                  <h2>news</h2>
                </div>
              </div>
              <div className="f-special_offer">
                <div className="f-offer_list">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <img
                          alt
                          className="img-responsive"
                          src={new1}
                        />
                        <div className="f-offer_text">
                          <h4>Planning</h4>
                          <p>
                            Thus much I thought proper to tell you in relation
                            to yourself, and to the trust I reposed in you.
                          </p>
                          <a
                            className="f-primary_but"
                            href="services_details.html"
                          >
                            READ MORE
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <img
                          alt
                          className="img-responsive"
                          src={new2}
                        />
                        <div className="f-offer_text">
                          <h4>Organization</h4>
                          <p>
                            I have often beheld two of those sages almost
                            sinking under the weight of their packs,
                          </p>
                          <a
                            className="f-primary_but"
                            href="services_details.html"
                          >
                            READ MORE
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <img
                          alt
                          className="img-responsive"
                          src={new3}
                        />
                        <div className="f-offer_text">
                          <h4>Consultation</h4>
                          <p>
                            This sounded nonsense to Alice, so she said nothing,
                            but set off at once toward the Red Queen.
                          </p>
                          <a
                            className="f-primary_but"
                            href="services_details.html"
                          >
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
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

export default News;
