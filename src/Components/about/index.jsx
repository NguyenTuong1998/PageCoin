import React, { Component,render } from "react";
import desktop from "../../Asset/Image/desktop.png";
import CountUp from "react-countup";
// import  './text';
class About extends Component {
  render() {
    return (
      <section id="f-about_text">
        <div className="f-section f-about_text">
          <div className="container justify-content-evenly">
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="f-section_head">
                  {/* <span>WElcome</span> */}
                  <h2>Buy and Sell Bitcoin</h2>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-7">
                <h4>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Perspiciatis
                </h4>
                <p>
                  <strong>I have related</strong> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quam earum, provident ad, porro
                  aperiam dolore, blanditiis, nihil pariatur eius adipisci
                  consequuntur officiis. Excepturi, nostrum? Id incidunt
                  nesciunt officia hic distinctio nihil pariatur.
                </p>
                <div className="clearfix text-left f-mt">
                  <a
                    className="f-primary_but"
                    href="http://www.veepixel.com/tf/html/btc/contact_page.html"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-5">
                <div className="desktop_img">
                  <img
                    alt="Buy and Sell Bitcoin"
                    className="img-responsive text-right"
                    src={desktop}
                  />
                </div>
              </div>
            </div>
            <div class="clearfix row f-counter">
              <div class="f-single_count">
                {" "}
                <span class="f-count_title">Support Countries</span>
                <span class="f-count_number" data-to="950" data-speed="1500">
                  <CountUp start={0} end={950} duration={3} />
                </span>
              </div>
              <div class="f-single_count">
                {" "}
                <span class="f-count_title">Operators</span>
                <span class="f-count_number" data-to="1650" data-speed="1500">
                  <CountUp start={0} end={1650} duration={4} />
                </span>
              </div>
              <div class="f-single_count">
                {" "}
                <span class="f-count_title">BitCoin ATMs</span>
                <span class="f-count_number" data-to="1650" data-speed="1500">
                  <CountUp start={0} end={1650} duration={5} />
                </span>
              </div>
              <div class="f-single_count">
                {" "}
                <span class="f-count_title">Producers</span>
                <span class="f-count_number" data-to="2500" data-speed="1500">
                  <CountUp start={0} end={2500} duration={4} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
