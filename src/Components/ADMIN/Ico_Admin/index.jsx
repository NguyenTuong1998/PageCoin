import React, { Component } from "react";
import { Chart } from "react-google-charts";
class IcoAdmin extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">ICO Distribution</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
              <div className="pull-right hidden-xs">
                <ol className="breadcrumb">
                  <li>
                    <a href="index-dashboard-2.html">
                      <i className="fa fa-home" />
                      Home
                    </a>
                  </li>
                  <li className="active">
                    <strong>ICO Admin Dashboard</strong>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <section className="box nobox marginBottom0">
              <div className="content-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after fa fa-user" />
                      <i className="pull-left fa fa-user icon-md icon-primary mt-10" />
                      <div className="stats">
                        <h3 className="mb-5">501,903,4</h3>
                        <span>Total Users Registered </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after fa fa-users" />
                      <i className="pull-left fa fa-users icon-md icon-primary mt-10" />
                      <div className="stats">
                        <h3 className="mb-5">126,034</h3>
                        <span>Unconfiremed Users</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after fa fa-shopping-cart" />
                      <i className="pull-left fa fa-shopping-cart icon-md icon-primary mt-10" />
                      <div className="stats">
                        <h3 className="mb-5">903,743,783 $</h3>
                        <span>Total Sales</span>
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
                <h2 className="title pull-left">Sales Statistic</h2>
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
                      height={"400px"}
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["x", "dogs", "cats"],
                        [0, 0, 0],
                        [1, 10, 5],
                        [2, 23, 15],
                        [3, 17, 9],
                        [4, 18, 10],
                        [5, 9, 5],
                        [6, 11, 3],
                        [7, 27, 19],
                      ]}
                      options={{
                        series: {
                          1: { curveType: "function" },
                        },
                      }}
                      rootProps={{ "data-testid": "5" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
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
                    className="tile-progress bg-accent mt-10"
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
          <div className="clearfix" />
          <div className="col-lg-12">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">ICO Distribution</h2>
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
                      width={"100%"}
                      height={"400px"}
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
                        pieHole: 0.4,
                      }}
                      rootProps={{ "data-testid": "3" }}
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
                <h2 className="title pull-left">Recent User Orders</h2>
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
          <div className="col-xs-12">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">
                  New Registered Users Statistics
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
                    <div className="wid-vectormap">
                      <div className="row">
                        <div className="col-xs-12 col-sm-9">
                          <Chart
                            width={"100%"}
                            height={"300px"}
                            chartType="GeoChart"
                            data={[
                              ["Country", "Popularity"],
                              ["Germany", 200],
                              ["United States", 300],
                              ["Brazil", 400],
                              ["Canada", 500],
                              ["France", 600],
                              ["RU", 700],
                            ]}
                            // Note: you will need to get a mapsApiKey for your project.
                            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                            mapsApiKey="YOUR_KEY_HERE"
                            rootProps={{ "data-testid": "1" }}
                          />
                        </div>
                        <div className="map_progress col-xs-12 col-sm-3">
                          <h4>Unique Visitors</h4>
                          <span className="text-muted">
                            <small>Last Week Rise by 62%</small>
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={62}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "62%" }}
                            />
                          </div>
                          <br />
                          <h4>Registrations</h4>
                          <span className="text-muted">
                            <small>Up by 57% last 7 days</small>
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={57}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "57%" }}
                            />
                          </div>
                          <br />
                          <h4>Direct Sales</h4>
                          <span className="text-muted">
                            <small>Last Month Rise by 22%</small>
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary"
                              role="progressbar"
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "22%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </section>
          </div>
          {/* MAIN CONTENT AREA ENDS */}
        </div>
      </section>
    );
  }
}

export default IcoAdmin;
