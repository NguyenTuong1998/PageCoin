import React, { Component } from "react";
import CountUp from "react-countup";
class Counter extends Component {
  render() {
    return (
      <div id="f-counter">
        <div className="f-counter_outer">
          <div className="container">
            <div className="row clearfix f-counter">
              <div className="f-single_count">
                <span className="f-count_title">Support Countries</span>
                <span
                  className="f-count_number"
                  data-to={950}
                  data-speed={1500}
                >
                  <CountUp start={0} end={950} duration={3} />
                </span>
              </div>
              <div className="f-single_count">
                <span className="f-count_title">Operators</span>
                <span
                  className="f-count_number"
                  data-to={1650}
                  data-speed={1500}
                >
                  <CountUp start={0} end={1650} duration={3} />
                </span>
              </div>
              <div className="f-single_count">
                <span className="f-count_title">BitCoin ATMs</span>
                <span
                  className="f-count_number"
                  data-to={1650}
                  data-speed={1500}
                >
                  <CountUp start={0} end={1650} duration={3} />
                </span>
              </div>
              <div className="f-single_count">
                <span className="f-count_title">Producers</span>
                <span
                  className="f-count_number"
                  data-to={2500}
                  data-speed={1500}
                >
                  <CountUp start={0} end={2500} duration={3} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
