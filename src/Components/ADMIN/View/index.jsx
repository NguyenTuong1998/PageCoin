import React, { Component } from "react";
import pc1 from "../../../Asset/Image/icon/wallet-o.png";
import pc2 from "../../../Asset/Image/profile/profile-blog.jpg"
import pc3 from "../../../Asset/Image/profile/profile.jpg";
import pc4 from "../../../Asset/Image/profile/profile-crm.jpg";
class View extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>        
          <div className="clearfix" />
          {/* MAIN CONTENT AREA STARTS */}
          <div className="col-lg-12">
            <section className="box nobox ">
              <div className="content-body">
                <h2 style={{ display: "none" }}>trading</h2>
                <div className="row">
                  <div className="col-xs-12"></div>
                  <div className="clearfix" />
                  <div className="col-md-5 col-sm-12 col-xs-12">                   
                  </div>
                  
                </div>
                {/* End .row */}
                <div className="row">
                  <div className="col-lg-7">
                    <section
                      className="box has-border-left-3"
                      style={{
                        padding: "0 20px 30px 20px",
                        marginTop: 0,
                        boxShadow: "0 1px 3px rgba(33,33,33,.2)",
                        WebkitBoxShadow: "0 1px 3px rgba(33,33,33,.2)",
                      }}
                    >
                      <header className="panel_header">
                        <h2 className="title pull-left">
                          Recent trading activities
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
                                      <i className="fa fa-dot-circle-o complete" />{" "}
                                      Deal number 126515
                                    </th>
                                    <td>17.24AM</td>
                                    <td>
                                      <span className="status-complete">
                                        complete
                                      </span>
                                    </td>
                                    <td>
                                      <i className="fa fa-plus complete normal" />
                                      0.00113 BTC
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>
                                      <i className="fa fa-dot-circle-o pending" />{" "}
                                      Deal number 123675
                                    </th>
                                    <td>18.14AM</td>
                                    <td>
                                      <span className="status-pending">
                                        pending
                                      </span>
                                    </td>
                                    <td>
                                      <i className="fa fa-plus complete normal f-s-10" />
                                      3.90244 LTC
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>
                                      <i className="fa fa-dot-circle-o pending" />{" "}
                                      Deal number 126515
                                    </th>
                                    <td>20.25AM</td>
                                    <td>
                                      <span className="status-pending">
                                        pending
                                      </span>
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
                                      <i className="fa fa-dot-circle-o complete" />{" "}
                                      Deal number 136563
                                    </th>
                                    <td>21.50AM</td>
                                    <td>
                                      <span className="status-complete">
                                        complete
                                      </span>
                                    </td>
                                    <td>
                                      <i className="fa fa-minus cancelled normal f-s-10" />
                                      0.6673 DASH
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>
                                      <i className="fa fa-dot-circle-o complete" />{" "}
                                      Deal number 177384
                                    </th>
                                    <td>21.59PM</td>
                                    <td>
                                      <span className="status-complete">
                                        complete
                                      </span>
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
                                      <i className="fa fa-dot-circle-o pending" />{" "}
                                      Deal number 1788348
                                    </th>
                                    <td>22.34PM</td>
                                    <td>
                                      <span className="status-pending">
                                        pending
                                      </span>
                                    </td>
                                    <td>
                                      <i className="fa fa-minus cancelled normal f-s-10" />
                                      1.3433 DASH
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>
                                      <i className="fa fa-dot-circle-o complete" />{" "}
                                      Deal number 189915
                                    </th>
                                    <td>22.54PM</td>
                                    <td>
                                      <span className="status-complete">
                                        complete
                                      </span>
                                    </td>
                                    <td>
                                      <i className="fa fa-plus complete normal" />
                                      12.343 LTC
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>
                                      <i className="fa fa-dot-circle-o complete" />{" "}
                                      Deal number 179993
                                    </th>
                                    <td>23.05PM</td>
                                    <td>
                                      <span className="status-complete">
                                        complete
                                      </span>
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
                                      <i className="fa fa-dot-circle-o pending" />{" "}
                                      Deal number 186564
                                    </th>
                                    <td>23.50PM</td>
                                    <td>
                                      <span className="status-pending">
                                        pending
                                      </span>
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
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <section
                          className="box has-border-left-3"
                          style={{
                            padding: "0 20px 30px 20px",
                            marginTop: 0,
                            boxShadow: "0 1px 3px rgba(33,33,33,.2)",
                            WebkitBoxShadow: "0 1px 3px rgba(33,33,33,.2)",
                          }}
                        >
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
                                    <span className="desc">
                                      minimum value "0.001 BTC"
                                    </span>
                                    <div className="input-group mb-10">
                                      <span className="input-group-addon">
                                        $
                                      </span>
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
                                    <label className="form-label">
                                      wallet address
                                    </label>
                                    <span className="desc" />
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <span className="arrow" />
                                        <img
                                          src={pc1}
                                          alt="icon"
                                        />
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
                      <div className="col-xs-12">
                        <section
                          className="box has-border-left-3 mt-15"
                          style={{
                            padding: "0 20px 30px 20px",
                            marginTop: 0,
                            boxShadow: "0 1px 3px rgba(33,33,33,.2)",
                            WebkitBoxShadow: "0 1px 3px rgba(33,33,33,.2)",
                          }}
                        >
                          <header className="panel_header">
                            <h2 className="title pull-left">
                              Recent Transaction
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
                                <div className="transaction-wraper">
                                  <div className="transaction-info has-gradient-to-right-bottom">
                                    <img
                                      alt
                                      src={pc3}
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
                                      <span>OxsD1W3d..</span>
                                    </strong>
                                  </div>
                                  <hr />
                                  <div className="transaction-info bg-gray">
                                    <img
                                      alt
                                      src={pc3}
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
                                      <span>W3dFeGD1..</span>
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

export default View;
