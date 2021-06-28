import React, { Component } from "react";

class Wallet extends Component {
  render() {
    return (
      <section id="main-content" className=" ">
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">My Wallet</h1>
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
                      <div className="stats">
                        <h3 className="mb-5">5.19034 DASH</h3>
                        <span>Wallet DASH balance</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="r4_counter db_box">
                      <div className="icon-after cc LTC-alt" />
                      <i className="pull-left cc fas fa-dollar-sign icon-md icon-primary mt-10" />
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
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Bitcoin wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fab fa-bitcoin color-primary" />
                        </div>
                        <strong className="mb-20">Bitcoin</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
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
                          <span className="desc">1 BTC</span>
                          <label className="form-label"> = 12.734 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">54,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">534,263 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              1.5238237 BTC
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              15,238,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
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
                <h2 className="title pull-left">Litecoin wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fab fa-viacoin color-primary" />
                        </div>
                        <strong className="mb-20">Litecoin</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
                          <div className="input-group mb-10">
                            <span className="input-group-addon has-gradient-to-right-bottom">
                              <i className="cc fas fa-coins icon-white" />
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
                          <span className="desc">1 LTC</span>
                          <label className="form-label"> = 273 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">79,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">534,263 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              1.5238237 LTC
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              20,275,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
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
                <h2 className="title pull-left">Ripple wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fas fa-coins color-primary" />
                        </div>
                        <strong className="mb-20">Ripple</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
                          <div className="input-group mb-10">
                            <span className="input-group-addon has-gradient-to-right-bottom">
                              <i className="cc fas fa-coins icon-white" />
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
                          <span className="desc">1 XRP</span>
                          <label className="form-label"> = 2.730 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">79,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">162,364 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              2,523.8237 XRP
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              275,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
                          </div>
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
                <h2 className="title pull-left">Dashcoin wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fas fa-hryvnia color-primary" />
                        </div>
                        <strong className="mb-20">Dashcoin</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
                          <div className="input-group mb-10">
                            <span className="input-group-addon has-gradient-to-right-bottom">
                              <i className="cc fas fa-hryvnia icon-white" />
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
                          <span className="desc">1 BTC</span>
                          <label className="form-label"> = 12.734 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">54,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">534,263 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              1.5238237 DASH
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              15,238,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
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
                <h2 className="title pull-left">Doge wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fab fa-edge color-primary" />
                        </div>
                        <strong className="mb-20">Dogecoin</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
                          <div className="input-group mb-10">
                            <span className="input-group-addon has-gradient-to-right-bottom">
                              <i className="cc fab fa-edge icon-white" />
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
                          <span className="desc">1 Doge</span>
                          <label className="form-label"> = 0.00273 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">265,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">534,263 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              145,238,237 BOGE
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              2,275,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
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
                <h2 className="title pull-left">Ethereum wallet</h2>
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
                      <div className="transfer-wraper">
                        <div className="crypto-icon">
                          <i className="cc fab fa-ethereum color-primary" />
                        </div>
                        <strong className="mb-20">Ethereum</strong>
                        <div className="form-group  no-mb">
                          <label className="form-label mt-10">
                            wallet address
                          </label>
                          <span className="desc" />
                          <div className="input-group mb-10">
                            <span className="input-group-addon has-gradient-to-right-bottom">
                              <i className="cc fab fa-ethereum icon-white" />
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
                          <span className="desc">1 ETC</span>
                          <label className="form-label"> = 930 USD</label>
                          <br />
                          <span className="desc">Total selling amount</span>
                          <label className="form-label">79,634 $</label>
                          <br />
                          <span className="desc">Total buying buy</span>
                          <label className="form-label">162,364 $</label>
                          <br />
                          <div className="mt-10 balance">
                            <strong className="form-label bold">
                              Balance :{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              2,523.8237 ETC
                            </span>
                          </div>
                          <div className="balance bg-white">
                            <strong className="form-label bold">
                              Balance in USD:{" "}
                            </strong>
                            <span className="desc color-primary f-s-14">
                              {" "}
                              275,237 USD
                            </span>
                          </div>
                          <div className="col-sm-6 no-pl">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Withdraw
                            </a>
                          </div>
                          <div className="col-sm-6 no-pr">
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                              style={{ width: "100%" }}
                            >
                              Deposit
                            </a>
                          </div>
                        </div>
                      </div>
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
                <h2 className="title pull-left">Add new wallet</h2>
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
                        style={{ padding: "48.5px 20px" }}
                      >
                        <div className>
                          <i
                            className="fas fa-plus has-gradient-to-right-bottom icon-sm icon-rounded inviewport visible "
                            style={{ width: 50, height: 50, lineHeight: 25, color: "#000" }}
                          />
                          <a href="#myModal" data-toggle="modal">
                            <h4 className="no-mb mt-30">Create new address</h4>
                          </a>
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
                              <h4 className="modal-title">Create New Wallet</h4>
                            </div>
                            <div className="modal-body text-left">
                              <form>
                                <div className="form-group">
                                  <label
                                    htmlFor="modalname1"
                                    className="form-label"
                                  >
                                    Coin Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="modalname1"
                                    placeholder="Enter crypto coin name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="form-label">
                                    Wallet address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="modalwallet1"
                                    placeholder="Enter wallet address"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor="modalfile3"
                                    className="form-label"
                                  >
                                    Upload your private key
                                  </label>
                                  <input type="file" id="modalfile3" />
                                  <span className="help-block">
                                    This is important for verification purposes.
                                  </span>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Add Address
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
          <div className="clearfix" />
          {/* MAIN CONTENT AREA ENDS */}
        </div>
      </section>
    );
  }
}

export default Wallet;
