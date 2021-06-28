import React, { Component } from "react";
import english from "../../Asset/Image/flag-e.png";
import indo from "../../Asset/Image/flag-it.png";
class HeaderTop extends Component {
  render() {
    var minu;
    let time = new Date();
    let phut = time.getMinutes();
    if (phut <= 9) {
      minu = "0" + phut;
    } else {
      minu = phut;
    }
    return (
      <div className="header_topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-10 ">
              <div className="ht_left">
                <div className="clock">
                  <ul>
                    <li>UTC</li>
                    <li id="hours">{time.getHours()}</li>
                    <li id="point">:</li>
                    <li id="min">{minu}</li>
                    <li id="point-2">:</li>
                    <li id="sec">{time.getSeconds()}</li>
                  </ul>
                </div>
                <div className="ht_rate">
                  <p>
                    UTC BTC/USD: <span>$14,240</span> BTC/EUR:{" "}
                    <span>€12,248</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-2">
              <div className="ht_right clearfix">
                <div className="pull-right f-address_switcher dropdown">
                  <div className="f-selected_add">
                    <span>
                      <img
                        className="img-responsive dropdown-toggle"
                        alt="Eng flag"
                        src={english}
                        data-toggle="dropdown"
                      />
                      <span>English</span>
                    </span>
                  </div>
                  <ul
                    className="f-dropdown dropdown-menu"
                    style={{ display: "none" }}
                  >
                    <li data-value="f-address_01">
                      <img
                        alt="Eng flag"
                        className="img-responsive"
                        src={english}
                      />
                      English
                    </li>
                    <li data-value="f-address_02">
                      <img
                        alt="Idn flag"
                        className="img-responsive"
                        src={indo}
                      />
                      Indonesia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
