import React, { Component } from "react";
import pc1 from "../../../Asset/Image/icon/-ico-lg.png";
import pc2 from "../../../Asset/Image/icon/-ico-so.png";
import pc3 from "../../../Asset/Image/icon/-ico-sw.png";
import pc5 from "../../../Asset/Image/icon/wallet-o.png";
import pc4 from "../../../Asset/Image/icon/affailites.png";
import { Chart } from "react-google-charts";
class IcoUser extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-lg-12">
            <section className="box nobox marginBottom0">
              <div className="content-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc1} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-10">
                        <img src={pc2} className="ico-icon-o" alt />
                        <img src={pc3} className="ico-icon-w" alt />
                      </i>
                      <div className="stats">
                        <h3 className="mb-5">5,019,034</h3>
                        <span>Total ICO Purchased </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc1} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-10">
                        <img src={pc2} className="ico-icon-o" alt />
                        <img src={pc3} className="ico-icon-w" alt />
                      </i>
                      <div className="stats">
                        <h3 className="mb-5">126,034</h3>
                        <span>Confiremed Tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after">
                        <img src={pc1} alt />
                      </div>
                      <i className="pull-left ico-icon icon-md icon-primary mt-10">
                        <img src={pc2} className="ico-icon-o" alt />
                        <img src={pc3} className="ico-icon-w" alt />
                      </i>
                      <div className="stats">
                        <h3 className="mb-5">903,743</h3>
                        <span>Pending Tokens</span>
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
          <div className="col-lg-8">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Your Sales Statistics</h2>
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
                        title: "Monthly Coffee Production by Country",
                        vAxis: { title: "Cups" },
                        hAxis: { title: "Month" },
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
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Buy more Tokens</h2>
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
                            <img src={pc5} alt="icon" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="OxsD12F32xvW3deG5..."
                          />
                        </div>
                        <a
                          href="buy-and-sell.html"
                          className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                          style={{ width: "100%" }}
                        >
                          Buy More Tokens
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">ICO Stage Progress</h2>
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
                  <div
                    className="tile-progress bg-accent"
                    style={{ marginLeft: 15, marginRight: 15 }}
                  >
                    <div className="content">
                      <h4>
                        <i className="fa fa-clock-o icon-sm" /> Time to Next
                        Stage
                      </h4>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-primary"
                          role="progressbar"
                          aria-valuenow={62}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "56%" }}
                        />
                      </div>
                      <span>65% increase</span>
                    </div>
                  </div>
                  <div
                    className="tile-progress bg-accent no-mb"
                    style={{ marginLeft: 15, marginRight: 15 }}
                  >
                    <div className="content">
                      <h4>
                        <i className="fa fa-flask icon-sm" /> Stage ICO Complete
                      </h4>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-primary"
                          role="progressbar"
                          aria-valuenow={62}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "79%" }}
                        />
                      </div>
                      <span>79% complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Upcoming ICO Stage</h2>
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
                    <div className="price-pack no-mt no-mb">
                      <div className="head bg-accent">
                        <h3>ICO Stage 3</h3>
                      </div>
                      <ul
                        className="item-list list-unstyled"
                        style={{ padding: "20px 15px 10px" }}
                      >
                        <li>
                          Starting Price: <strong> 0.30 $</strong>
                        </li>
                        <li>
                          Starting Date <strong> 15-3-2018</strong>
                        </li>
                        <li>
                          Ending Date <strong> 1-4-2018</strong>
                        </li>
                        <li>
                          Tokens Amount<strong> 1,000,0000</strong>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg has-gradient-to-right-bottom"
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Affalite Program</h2>
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
                    <div className="text-center no-mt no-mb">
                      <div className="img-affa-wrapper">
                        <img
                          src={pc4}
                          className="img-responsive center-block"
                          alt
                        />
                      </div>
                      <a
                        href="affailite-program.html"
                        className="btn btn-primary btn-lg has-gradient-to-right-bottom"
                      >
                        Become Affailiate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-12">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">ICO Distribution Stage</h2>
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
                  <div className="col-lg-6 col-md-12 col-xs-12 mt-20">
                    <div id="container" />
                    <Chart
                      width={"500px"}
                      height={"300px"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Round 1", 11],
                        ["Round 2", 2],
                        ["Round 3", 2],
                        ["Round 4", 2],
                        ["Round 5", 7],
                      ]}
                      options={{
                        title: "My Daily Activities",
                        // Just add this option
                        is3D: true,
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-xs-12 progress-div">
                    {/* Blue */}
                    <h6 className="angle-round">
                      Token Pre-Sale{" "}
                      <span style={{ marginLeft: 78, color: "#ccc" }}>
                        17-03-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls">
                      <div
                        className="progress-bar background-one"
                        style={{ width: "9.27% !important" }}
                      >
                        0.7 $
                      </div>
                    </div>
                    {/* Green */}
                    <h6 className="angle-round">
                      Round 1{" "}
                      <span style={{ marginLeft: 126, color: "#ccc" }}>
                        30-03-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls">
                      <div
                        className="progress-bar background-two"
                        style={{
                          backgroundColor: "#cf3546 !important",
                          width: "10.54% !important",
                        }}
                      >
                        0.9 $
                      </div>
                    </div>
                    {/* Turquoise */}
                    <h6 className="angle-round">
                      Round 2{" "}
                      <span style={{ marginLeft: 126, color: "#ccc" }}>
                        04-04-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls">
                      <div
                        className="progress-bar background-three"
                        style={{
                          backgroundColor: "#be7e19 !important",
                          width: "11.81% !important",
                        }}
                      >
                        0.95 $
                      </div>
                    </div>
                    {/* Orange */}
                    <h6 className="angle-round">
                      Round 3{" "}
                      <span style={{ marginLeft: 126, color: "#ccc" }}>
                        09-04-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls">
                      <div
                        className="progress-bar"
                        style={{
                          backgroundColor: "#009d8c !important",
                          width: "12.08% !important",
                        }}
                      >
                        1.05 $
                      </div>
                    </div>
                    {/* Red */}
                    <h6 className="angle-round">
                      Round 4{" "}
                      <span style={{ marginLeft: 126, color: "#ccc" }}>
                        14-04-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls">
                      <div
                        className="progress-bar"
                        style={{
                          backgroundColor: "#a620a2 !important",
                          width: "13.35% !important",
                        }}
                      >
                        1.10 $
                      </div>
                    </div>
                    {/* Red */}
                    <h6 className="angle-round">
                      Round 5{" "}
                      <span style={{ marginLeft: 126, color: "#ccc" }}>
                        19-04-2018
                      </span>
                      <span className="number">1,000,000 </span>
                    </h6>
                    <div className="progress progress-cls no-mb">
                      <div
                        className="progress-bar"
                        style={{
                          backgroundColor: "#a62045 !important",
                          width: "14.62% !important",
                        }}
                      >
                        1.20 $
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-6">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Top ICO Traders</h2>
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
                    <div className="trader-buy golden">
                      <h6 className="angle-round">
                        Nighy Strotman<span className="number">2,892,638 </span>
                      </h6>
                      <div className="progress progress-cls">
                        <div
                          className="progress-bar has-gradient-to-right-bottom"
                          style={{ width: "79.27% !important" }}
                        >
                          760.565 $
                        </div>
                      </div>
                    </div>
                    <div className="trader-buy golden">
                      <h6 className="angle-round">
                        Jack Nelison<span className="number">1,984,342 </span>
                      </h6>
                      <div className="progress progress-cls">
                        <div
                          className="progress-bar has-gradient-to-right-bottom"
                          style={{ width: "75.27% !important" }}
                        >
                          623.583 $
                        </div>
                      </div>
                    </div>
                    <div className="trader-buy golden">
                      <h6 className="angle-round">
                        Johan Charter<span className="number">1,745,070 </span>
                      </h6>
                      <div className="progress progress-cls">
                        <div
                          className="progress-bar has-gradient-to-right-bottom"
                          style={{ width: "69.27% !important" }}
                        >
                          500.739 $
                        </div>
                      </div>
                    </div>
                    <div className="trader-buy silver">
                      <h6 className="angle-round">
                        Mark Strotman<span className="number">1,200,000 </span>
                      </h6>
                      <div className="progress progress-cls">
                        <div
                          className="progress-bar has-gradient-to-right-bottom"
                          style={{ width: "65.27% !important" }}
                        >
                          360.739 $
                        </div>
                      </div>
                    </div>
                    <div className="trader-buy silver">
                      <h6 className="angle-round">
                        Nighy Strotman<span className="number">1,000,000 </span>
                      </h6>
                      <div className="progress progress-cls">
                        <div
                          className="progress-bar has-gradient-to-right-bottom"
                          style={{ width: "61.27% !important" }}
                        >
                          245.739 $
                        </div>
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
                <h2 className="title pull-left">Total Orders</h2>
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

export default IcoUser;
