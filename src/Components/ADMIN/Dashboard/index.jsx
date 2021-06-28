import React, { Component } from "react";
import pc1 from "../../../Asset/Image/profile/profile.jpg";
import pc2 from "../../../Asset/Image/profile/profile-blog.jpg";
import pc4 from "../../../Asset/Image/profile/profile-crm.jpg";
import icon from "../../../Asset/Image/icon/wallet-o.png";
import { Chart } from "react-google-charts";
import "./main";
class Dashboards extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">Dashboard</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <section className="box nobox marginBottom0">
              <div className="content-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box has-gradient-to-right-bottom">
                      <div className="icon-after cc BTC-alt" />
                      <i className="pull-left cc fab fa-btc icon-md icon-white mt-10" />
                      {/* <i class="fab fa-btc"></i> */}
                      <div className="stats">
                        <h3 className="color-white mb-5">1.003747 BTC</h3>
                        <span>Wallet BTC balance</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after cc DASH-alt" />
                      <i className="pull-left cc fas fa-wallet icon-md icon-primary mt-10" />
                      {/* <i class="fas fa-wallet"></i> */}
                      <div className="stats">
                        <h3 className="mb-5">5.19034 DASH</h3>
                        <span>Wallet DASH balance</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after cc LTC-alt" />
                      <i className="pull-left cc fas fa-dollar-sign  icon-md icon-primary mt-10" />

                      <div className="stats">
                        <h3 className="mb-5">12.60349 LTC</h3>
                        <span>Unconfiremed balance</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </section>
          </div>
          <div className="clearfix" />
          {/* MAIN CONTENT AREA STARTS */}
          <div className="col-lg-12">
            <section className="box" style={{ overflow: "hidden" }}>
              <header className="panel_header">
                <h2 className="title pull-left">Balance Statistic</h2>
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
                    <Chart
                      width={"100%"}
                      height={"100%"}
                      chartType="ComboChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        [
                          "Month",
                          "Bolivia",
                          "Ecuador",
                          "Madagascar",
                          "Papua New Guinea",
                          "Rwanda",
                          "Average",
                        ],
                        ["2004/05", 165, 938, 522, 998, 450, 614.6],
                        ["2005/06", 135, 1120, 599, 1268, 288, 682],
                        ["2006/07", 157, 1167, 587, 807, 397, 623],
                        ["2007/08", 139, 1110, 615, 968, 215, 609.4],
                        ["2008/09", 136, 691, 629, 1026, 366, 569.6],
                      ]}
                      options={{
                        title: "Monthly Coin Production by Country",
                        // vAxis: { title: "Cups" },
                        // hAxis: { title: "Month" },
                        seriesType: "bars",
                        series: { 5: { type: "line" } },
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <div className="col-lg-4 display: none">
            <section className="box ">
              <header className="panel_header">
                <h2 className="title pull-left">Live crypto prices</h2>
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
                  <div className="col-xs-12 mt-5"></div>
                </div>
              </div>
            </section>
          </div> */}
          <div className="clearfix" />
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Transfer Coins</h2>
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
                        <label className="form-label">Amount</label>
                        <span className="desc">minimum value "0.001 BTC"</span>
                        <div className="input-group mb-10">
                          <span className="input-group-addon">$</span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                            placeholder="enter amount"
                          />
                          <div className="input-group-btn">
                            <button
                              type="button"
                              className="btn btn-red dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="true"
                            >
                              BTC <span className="caret" />
                            </button>
                            <ul className="dropdown-menu dropdown-red no-spacing">
                              <li>
                                <a href="#">LTC</a>
                              </li>
                              <li>
                                <a href="#">DASH</a>
                              </li>
                              <li>
                                <a href="#">Ripple</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <label className="form-label">wallet address</label>
                        <span className="desc" />
                        <div className="input-group">
                          <span className="input-group-addon">
                            <span className="arrow" />
                            <img src={icon} alt="icon" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="OxsD12F32xvW3deG5..."
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                          style={{ width: "100%" }}
                        >
                          {" "}
                          Transfer Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Recent Transaction</h2>
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
                    <div className="transaction-wraper">
                      <div className="transaction-info has-gradient-to-right-bottom">
                        <img
                          alt
                          src={pc1}
                          className="img-responsive img-circle"
                        />
                        <strong className="color-white">
                          1.23<span> LTC</span>
                        </strong>
                      </div>
                      <span className="transaction-opration">
                        <i className="fa fa-arrow-right cancelled" />
                      </span>
                      <div className="transaction-info">
                        <img
                          alt
                          src={pc2}
                          className="img-responsive img-circle"
                        />
                        <strong>
                          <span>OxsD1..</span>
                        </strong>
                      </div>
                      <hr />
                      <div className="transaction-info bg-gray">
                        <img
                          alt
                          src={pc1}
                          className="img-responsive img-circle"
                        />
                        <strong>
                          0.03<span> BTC</span>
                        </strong>
                      </div>
                      <span className="transaction-opration">
                        <i className="fa fa-arrow-left complete" />
                      </span>
                      <div className="transaction-info">
                        <img
                          alt
                          src={pc4}
                          className="img-responsive img-circle"
                        />
                        <strong>
                          <span>OxsD1..</span>
                        </strong>
                      </div>
                      <hr />
                      <div className="col-xs-12">
                        <a
                          href="#"
                          className="all-transaction text-center block"
                        >
                          <strong>
                            <i className="fa fa-plus" /> View all
                          </strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Wallet addresses</h2>
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
                          Bitcoin wallet address
                        </label>
                        <div className="input-group mb-10">
                          <span className="input-group-addon has-gradient-to-right-bottom">
                            <i className="cc fab fa-btc icon-white" />
                          </span>
                          <p className="form-control-static with-border">
                            OxsD12F32xvW3deG5...
                          </p>
                          <a
                            href="#"
                            className="input-group-addon"
                            data-color-class="primary"
                            data-animate=" animated fadeIn"
                            data-toggle="tooltip"
                            data-original-title="copy"
                            data-placement="top"
                          >
                            <i className="fa fa-copy text-dark" />
                          </a>
                        </div>
                        <label className="form-label">
                          Litecoin wallet address
                        </label>
                        <div className="input-group">
                          <span className="input-group-addon has-gradient-to-right-bottom">
                            <i className="cc fas fa-wallet icon-white" />
                          </span>
                          <p className="form-control-static with-border">
                            OxsD12F32xvW3deG5...
                          </p>
                          <a
                            href="#"
                            className="input-group-addon"
                            data-color-class="primary"
                            data-animate=" animated fadeIn"
                            data-toggle="tooltip"
                            data-original-title="copy"
                            data-placement="top"
                          >
                            <i className="fa fa-copy text-dark" />
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            View all
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-4">
            <section className="box ">
              <header className="panel_header">
                <h2 className="title pull-left">Safe deals</h2>
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
                    <Chart
                      textAlign="center"
                      width={"100%"}
                      height={"100%"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Work", 11],
                        ["Eat", 2],
                        ["Commute", 2],
                        ["Watch TV", 2],
                        ["Sleep", 7],
                      ]}
                      options={{}}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                  <div className="col-xs-12">
                    <div className="statistics-wraper">
                      <div className="statistics-info">
                        <h3 className="mb"> 5.6307173 BTC</h3>
                        <span>
                          <i className="fa fa-dot-circle-o active" /> 6 active
                          deals
                        </span>
                      </div>
                      <div className="statistics-info no-pb">
                        <h3 className="mb"> 16.453671 BTC</h3>
                        <span>
                          <i className="fa fa-dot-circle-o" /> 20 unconfirmed
                          deals
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-8">
            <section
              className="box"
              style={{ borderLeft: "3px solid #e77512" }}
            >
              <header className="panel_header">
                <h2 className="title pull-left">Recent trading activities</h2>
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
                        className="table table-small-font no-mb table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>Deal ID Number</th>
                            <th data-priority={1}>Trade Time</th>
                            <th data-priority={3}>Status</th>
                            <th data-priority={1}>Last Trade</th>
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
                            <td>
                              <i className="fa fa-plus complete normal" />
                              0.00113 BTC
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
                            <td>
                              <i className="fa fa-plus complete normal f-s-10" />
                              3.90244 LTC
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
                            <td>
                              <i className="fa fa-minus cancelled normal f-s-10" />
                              0.00121 LTC
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
                            <td>
                              <i className="fa fa-plus complete normal f-s-10" />
                              0.01231 BTC
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
                            <td>
                              <i className="fa fa-minus cancelled normal f-s-10" />
                              0.6673 DASH
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
                            <td>
                              <i className="fa fa-minus cancelled normal f-s-10" />
                              0.97231 BTC
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
                            <td>
                              <i className="fa fa-plus complete normal f-s-10" />
                              9.2323 LTC
                            </td>
                          </tr>
                          {/* Repeat */}
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" /> Deal
                              number 1788348
                            </th>
                            <td>22.34PM</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                            <td>
                              <i className="fa fa-minus cancelled normal f-s-10" />
                              1.3433 DASH
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" /> Deal
                              number 189915
                            </th>
                            <td>22.54PM</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                            <td>
                              <i className="fa fa-plus complete normal" />
                              12.343 LTC
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" /> Deal
                              number 179993
                            </th>
                            <td>23.05PM</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                            <td>
                              <i className="fa fa-plus complete normal f-s-10" />
                              0.23234 LTC
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o cancelled" />{" "}
                              Deal number 184563
                            </th>
                            <td>23.15PM</td>
                            <td>
                              <span className="status-cancelled">
                                cancelled
                              </span>
                            </td>
                            <td>
                              <i className="fa fa-minus cancelled normal f-s-10" />
                              1.4231 BTC
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" /> Deal
                              number 186564
                            </th>
                            <td>23.50PM</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                            <td>
                              <i className="fa fa-plus complete normal f-s-10" />
                              2.3430 DASH
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

export default Dashboards;
