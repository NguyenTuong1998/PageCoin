import React, { Component } from "react";
import pc1 from "../../../Asset/Image/icon/sell-icon-lg.png";
import pc2 from "../../../Asset/Image/icon/sell-icon-so.png";
import pc3 from "../../../Asset/Image/icon/sell-icon-sw.png";
import pc4 from "../../../Asset/Image/icon/buy-icon-lg.png";
import pc5 from "../../../Asset/Image/icon/buy-icon-so.png";
import pc6 from "../../../Asset/Image/icon/buy-icon-sw.png";
import pc7 from "../../../Asset/Image/icon/exchange-icon-lg.png";
import pc8 from "../../../Asset/Image/icon/exchange-icon-so.png";
import pc9 from "../../../Asset/Image/icon/exchange-icon-sw.png";
import pc10 from "../../../Asset/Image/icon/wallet-o.png";
import pc11 from "../../../Asset/Image/icon/exchange-arrows.png";

class Buy extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">Buy &amp; Sell</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-lg-12">
            <section className="box nobox marginBottom0">
              <div className="content-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc1} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-20">
                        <img src={pc2} className="ico-icon-o" alt />
                        <img src={pc3} className="ico-icon-w" alt />
                      </i>
                      <div
                        className="stats"
                        style={{
                          padding: "0 20px",
                          borderLeft: "1px solid #eeebeb",
                        }}
                      >
                        <h3 className="mb-5">Selling</h3>
                        <span>Confiremed Tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc4} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-20">
                        <img src={pc5} className="ico-icon-o" alt />
                        <img src={pc6} className="ico-icon-w" alt />
                      </i>
                      <div
                        className="stats"
                        style={{
                          padding: "0 20px",
                          borderLeft: "1px solid #eeebeb",
                        }}
                      >
                        <h3 className="mb-5">Buying</h3>
                        <span>Confiremed Tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc7} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-20">
                        <img src={pc8} className="ico-icon-o" alt />
                        <img src={pc9} className="ico-icon-w" alt />
                      </i>
                      <div
                        className="stats"
                        style={{
                          padding: "0 20px",
                          borderLeft: "1px solid #eeebeb",
                        }}
                      >
                        <h3 className="mb-5">Exchange</h3>
                        <span>Pending Tokens</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </section>
          </div>
          <div className="col-lg-6">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Buy Cryptocurrency</h2>
                <div className="actions panel_actions pull-right">
                  <a className="box_toggle fa fa-chevron-down" />
                  <a
                    className="box_setting fa fa-cog"
                    data-toggle="modal"
                    href="#section-settings"
                  />
                  <a className="box_close fa fa-times" />
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="transfer-wraper">
                      <div className="form-group no-mb">
                        <label className="form-label">
                          Select the cryptocurrency
                        </label>
                        <span className="desc">minimum value "0.001 BTC"</span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">$</span>
                          <div
                            className="input-group-btn"
                            style={{ width: "100%" }}
                          >
                            <button
                              type="button"
                              className="btn btn-red dropdown-toggle"
                              style={{ width: "100%", textAlign: "left" }}
                              data-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i className="cc fab fa-btc mr-5" />
                              Bitcoin{" "}
                              <span
                                className="caret"
                                style={{
                                  position: "absolute",
                                  right: 10,
                                  top: 14,
                                }}
                              />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-red no-spacing"
                              style={{ width: "100%" }}
                            >
                              <li>
                                <a href="#">
                                  <i className="cc fas fa-university mr-5" />
                                  Zcash
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc DASH mr-5" />
                                  Dashcoin
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc NEO mr-5" />
                                  Neo
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc LTC mr-5" />
                                  Litcoin
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc XRP mr-5" />
                                  Ripple
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <label className="form-label">
                          Choose payment method
                        </label>
                        <span className="desc">minimum value "0.001 BTC"</span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">
                            <i className="fas fa-university" />
                          </span>
                          <div
                            className="input-group-btn"
                            style={{ width: "100%" }}
                          >
                            <button
                              type="button"
                              className="btn btn-red dropdown-toggle"
                              style={{ width: "100%", textAlign: "left" }}
                              data-toggle="dropdown"
                              aria-expanded="true"
                            >
                              Bank of the galaxy{" "}
                              <span
                                className="caret"
                                style={{
                                  position: "absolute",
                                  right: 10,
                                  top: 14,
                                }}
                              />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-red no-spacing"
                              style={{ width: "100%" }}
                            >
                              <li>
                                <a href="#">Bank of the galaxy</a>
                              </li>
                              <li>
                                <a href="#">Bank of the galaxy</a>
                              </li>
                              <li>
                                <a href="#">Bank of the galaxy</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <label className="form-label">wallet address</label>
                        <span className="desc" />
                        <div className="input-group mb-10">
                          <span className="input-group-addon">
                            <span className="arrow" />
                            <img src={pc10} alt="icon" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="OxsD12F32xvW3deG5..."
                          />
                        </div>
                        <label className="form-label">Exchange operation</label>
                        <span className="desc">
                          you can cancel this exchange easily
                        </span>
                        <div className="col-lg-5 no-pl">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Exchange amount"
                              aria-describedby="basic-addon2"
                            />
                            <span
                              className="input-group-addon"
                              id="basic-addon1"
                            >
                              USD
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="exchange-img-wrapper">
                            <img
                              src={pc11}
                              className="mt-5 center-block"
                              style={{ width: 25 }}
                              alt
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 no-pr">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Equivalent amount"
                              aria-describedby="basic-addon2"
                            />
                            <span
                              className="input-group-addon"
                              id="basic-addon2"
                            >
                              BTC
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                          style={{ width: "100%" }}
                        >
                          Buy Cryptocurrency
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-1 hidden-md mt-15">
            <div className="arrow-container text-center">
              <i className="fa fa-arrow-right mt-100 pt-30" />
              <i className="fa fa-arrow-right mt-100" />
              <i className="fa fa-arrow-right mt-100 mb-100" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="col-xs-12 mt-20">
              <h4 className="mb text-center bold">
                YOU ARE BUYING THE FOLLOWING
              </h4>
            </div>
            <div className="clearfix" />
            <section className="box has-border-left-3">
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12 mt-20 mb-30">
                    <h2 className="mb text-center bold"> 5.6307173 BTC</h2>
                    <small
                      className="text-center f-s-14"
                      style={{ display: "block", fontWeight: 600 }}
                    >
                      @12,347 per BTC
                    </small>
                  </div>
                  <div className="clearfix" />
                  <div className="deal-wrapper">
                    <ul className="dropdown-menu-list list-unstyled no-mb">
                      <li>
                        <div className="notice-icon">
                          <i className="fa fa-institution" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>BANK OF THE GALAXY</strong>
                            <span className="time small">Payment method</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="notice-icon">
                          <i className="fa fa-credit-card" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>BANK OF THE GALAXY</strong>
                            <span className="time small">Payment method</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="notice-icon">
                          <i className="fa fa-check" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>BANK OF THE GALAXY</strong>
                            <span className="time small">Payment method</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-6">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Sell Cryptocurrency</h2>
                <div className="actions panel_actions pull-right">
                  <a className="box_toggle fa fa-chevron-down" />
                  <a
                    className="box_setting fa fa-cog"
                    data-toggle="modal"
                    href="#section-settings"
                  />
                  <a className="box_close fa fa-times" />
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="transfer-wraper">
                      <div className="form-group no-mb">
                        <label className="form-label">
                          Select crypto balance
                        </label>
                        <span className="desc">minimum value "0.001 BTC"</span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">$</span>
                          <div
                            className="input-group-btn"
                            style={{ width: "100%" }}
                          >
                            <button
                              type="button"
                              className="btn btn-red dropdown-toggle"
                              style={{ width: "100%", textAlign: "left" }}
                              data-toggle="dropdown"
                              aria-expanded="true"
                            >
                              <i className="cc fab fa-btc mr-5" />
                              Bitcoin{" "}
                              <span
                                className="caret"
                                style={{
                                  position: "absolute",
                                  right: 10,
                                  top: 14,
                                }}
                              />
                            </button>
                            <ul
                              className="dropdown-menu dropdown-red no-spacing"
                              style={{ width: "100%" }}
                            >
                              <li>
                                <a href="#">
                                  <i className="cc ZEC-alt mr-5" />
                                  Zcash
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc DASH mr-5" />
                                  Dashcoin
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc NEO mr-5" />
                                  Neo
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc LTC mr-5" />
                                  Litcoin
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="cc XRP mr-5" />
                                  Ripple
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <label className="form-label">crypto amount</label>
                        <span className="desc">Amonut to be sold</span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">
                            <span className="arrow" />
                            <img src={pc10} alt="icon" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="min amount 0.001 BTC"
                          />
                        </div>
                        <label className="form-label">Account password</label>
                        <span className="desc">
                          enter password to complete transaction
                        </span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">
                            <i className="fa fa-lock" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="enter account password"
                          />
                        </div>
                        <label className="form-label">Exchange operation</label>
                        <span className="desc">
                          you can cancel this exchange easily
                        </span>
                        <div className="col-lg-5 no-pl">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Exchange amount"
                              aria-describedby="basic-addon2"
                            />
                            <span
                              className="input-group-addon"
                              id="basic-addon3"
                            >
                              USD
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="exchange-img-wrapper">
                            <img
                              src={pc11}
                              className="mt-5 center-block"
                              style={{ width: 25 }}
                              alt
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 no-pr">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Equivalent amount"
                              aria-describedby="basic-addon2"
                            />
                            <span
                              className="input-group-addon"
                              id="basic-addon4"
                            >
                              BTC
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                          style={{ width: "100%" }}
                        >
                          Place selling order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">
                  Recent Buying &amp; selling Orders
                </h2>
                <div className="actions panel_actions pull-right">
                  <a className="box_toggle fa fa-chevron-down" />
                  <a
                    className="box_setting fa fa-cog"
                    data-toggle="modal"
                    href="#section-settings"
                  />
                  <a className="box_close fa fa-times" />
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div
                      className="table-responsive"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table table-small-font mb-10 table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>Deal ID Number</th>
                            <th data-priority={1}>Trade Time</th>
                            <th data-priority={3}>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" /> Deal
                              number 126515
                            </th>
                            <td>17.24AM</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" /> Deal
                              number 123675
                            </th>
                            <td>18.14AM</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" /> Deal
                              number 126515
                            </th>
                            <td>20.25AM</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o cancelled" />{" "}
                              Deal number 159034
                            </th>
                            <td>21.24AM</td>
                            <td>
                              <span className="status-cancelled">
                                cancelled
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" /> Deal
                              number 136563
                            </th>
                            <td>21.50AM</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" /> Deal
                              number 177384
                            </th>
                            <td>21.59PM</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o cancelled" />{" "}
                              Deal number 173434
                            </th>
                            <td>22.11PM</td>
                            <td>
                              <span className="status-cancelled">
                                cancelled
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          {/* MAIN CONTENT AREA ENDS */}
        </div>
      </section>
    );
  }
}

export default Buy;
