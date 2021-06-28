import React, { Component } from "react";
import CountUp from "react-countup";
class Couter extends Component {
  render() {
    return (
      <div id="f-counter">
        <div className="f-counter_outer f-counter_outer_blank">
          <div className="container">
            <div className="row clearfix f-counter">
              <div className="f-single_count">
                {/* <img
                  src="../../../../www.veepixel.com/tf/html/btc/assets/images/counter_icon_01.html"
                  alt
                />{" "} */}
                <span className="f-count_title">happy clients</span>
                <span
                  className="f-count_number"
                  data-to={3750}
                  data-speed={1500}
                >
                  <CountUp start={0} end={3750} duration={2} />
                </span>
              </div>
              <div className="f-single_count">
                {/* <img
                  src="../../../../www.veepixel.com/tf/html/btc/assets/images/counter_icon_02.html"
                  alt
                />{" "} */}
                <span className="f-count_title">Finished projects</span>
                <span
                  className="f-count_number"
                  data-to={975}
                  data-speed={1500}
                >
                  <CountUp start={0} end={975} duration={3} />
                </span>
              </div>
              <div className="f-single_count">
                {/* <img
                  src="../../../../www.veepixel.com/tf/html/btc/assets/images/counter_icon_03.html"
                  alt
                />{" "} */}
                <span className="f-count_title">Awards project's</span>
                <span
                  className="f-count_number"
                  data-to={233}
                  data-speed={1500}
                >
                  <CountUp start={0} end={233} duration={2} />
                </span>
              </div>
              <div className="f-single_count">
                {/* <img
                  src="../../../../www.veepixel.com/tf/html/btc/assets/images/counter_icon_04.html"
                  alt
                />{" "} */}
                <span className="f-count_title">dollar saved</span>
                <span
                  className="f-count_number"
                  data-to={12000}
                  data-speed={1500}
                >
                  <CountUp start={0} end={12000} duration={2} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Couter;
