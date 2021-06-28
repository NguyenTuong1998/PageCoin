import React, { Component } from "react";
import pc1 from "../../../Asset/ImageAdmin/payment-gateways/paypal.png";
import pc2 from "../../../Asset/ImageAdmin/payment-gateways/perfect-money.png";
import pc3 from "../../../Asset/ImageAdmin/payment-gateways/blockchain.png";
import pc4 from "../../../Asset/ImageAdmin/payment-gateways/stripe.jpg";
import pc5 from "../../../Asset/ImageAdmin/payment-gateways/skrill.jpg";
import pc6 from "../../../Asset/ImageAdmin/payment-gateways/coingate.jpg";
import pc7 from "../../../Asset/ImageAdmin/payment-gateways/coinpayment.jpg";
import pc8 from "../../../Asset/ImageAdmin/payment-gateways/block-io.jpg";
class Payment extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">Available Gateways</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">PayPal</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc1}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-1"
                              className="skin-flat-red"
                              Checked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        role="dialog"
                        tabIndex={-1}
                        id="myModal"
                        className="modal fade"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                aria-hidden="true"
                                data-dismiss="modal"
                                className="close"
                                type="button"
                              >
                                ×
                              </button>
                              <h4 className="modal-title">Edit Payment Info</h4>
                            </div>
                            <div className="modal-body text-left">
                              <form>
                                <div className="col-sm-4 mb-20 no-pl">
                                  <img
                                    src="../data/payment-gateways/paypal.png"
                                    alt="logo"
                                  />
                                </div>
                                <div className="clearfix" />
                                <div className="form-group">
                                  <label
                                    htmlFor="modalfile3"
                                    className="form-label"
                                  >
                                    Upload new logo
                                  </label>
                                  <input type="file" id="modalfile3" />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor="modalname1"
                                    className="form-label"
                                  >
                                    Name of Gateway
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="modalname1"
                                    defaultValue="PayPal"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">
                                    PAYPAL BUSINESS EMAIL
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="modalwallet1"
                                    defaultValue="youremail-address@yahoo.com"
                                  />
                                </div>
                                <label className="form-label">
                                  Payment Stutas
                                </label>
                                <select className="form-control mb-20">
                                  <option>Active</option>
                                  <option>Deactive</option>
                                </select>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Update
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
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
                <h2 className="title pull-left">Perfect Money</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc2}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-2"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
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
                <h2 className="title pull-left">Blockchain</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc3}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-3"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
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
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">stripe</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc4}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-4"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
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
                <h2 className="title pull-left">Skrill</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc5}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-5"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
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
                <h2 className="title pull-left">Coingate</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc6}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-6"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
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
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Coin Payment</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc7}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-7"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
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
                <h2 className="title pull-left">Block.io</h2>
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
                      <div
                        className="img-affa-wrapper no-mb"
                        style={{ padding: 20 }}
                      >
                        <div className>
                          <img
                            src={pc8}
                            alt="payment-gateway"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-sm-6 no-pl">
                          <a
                            href="#myModal"
                            data-toggle="modal"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Edit
                          </a>
                        </div>
                        <div className="col-sm-1 no-pl no-pr">
                          <div
                            style={{
                              position: "relative",
                              padding: "29px 0 0",
                            }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-8"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-sm-5 no-pr"
                          style={{ position: "relative", padding: "21px 0 0" }}
                        >
                          <h4 className="icheck-label form-label">
                            <small>Deactive / active</small>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* MAIN CONTENT AREA ENDS */}
        </div>
      </section>
    );
  }
}

export default Payment;
