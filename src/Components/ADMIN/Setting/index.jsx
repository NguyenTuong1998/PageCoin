import React, { Component } from "react";
import pc1 from "../../../Asset/Image/icon/default-avatar.png";
class Setting extends Component {
  render() {
    return (
      <div id="main-content" className=" ">
        <section className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">Settings</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <section className="box over-h">
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="col-lg-6">
                      <div className="left-col">
                        <h2 className="mt-20">
                          <small>Be Your Own Bank</small>
                        </h2>
                        <div className="col-xs-12 no-pl mt-10">
                          <a
                            href="buy-and-sell.html"
                            className="btn btn-primary btn-corner right15"
                          >
                            <i className="fas fa-arrow-down complete color-white" />
                            RECIEVE
                          </a>
                          <a
                            href="buy-and-sell.html"
                            className="btn btn-primary btn-corner right15"
                          >
                            <i className="fas fa-arrow-up complete color-white" />
                            SEND
                          </a>
                          <a href="#" className="btn btn-primary btn-corner">
                            <i className="fa fa-copy" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-col">
                        <h3 className="mt-20">
                          <small>RUB 172198012830</small>
                        </h3>
                        <div className="col-sm-6 no-pr">
                          <div className="btc-balance">
                            <h3 className>
                              <i className="cc fab fa-btc color-primary" />
                              1.95039 BTC
                            </h3>
                          </div>
                        </div>
                        <div className="col-sm-6 no-pl">
                          <div className="btc-balance">
                            <h3 className>
                              <i className="cc fab fa-ethereum color-primary" />
                              30.1421 BTC
                            </h3>
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
                <h2 className="title pull-left">General Settings</h2>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="form-container">
                    <form id="icon_validate" action="#">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="col-lg-6 no-pl">
                            <div className="form-group">
                              <label className="form-label">Name</label>
                              <span className="desc">
                                e.g. "If it is not you, Please let us know"
                              </span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield1"
                                  defaultValue="Smith Wright"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pr">
                            <div className="form-group">
                              <label className="form-label">Email</label>
                              <span className="desc">
                                e.g. "some@example.com"
                              </span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pl">
                            <div className="form-group">
                              <label className="form-label">Password </label>
                              <span className="desc">e.g. "lorem123"</span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield3"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pr">
                            <div className="form-group">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <span className="desc">e.g. "lorem123"</span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield4"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pull-left">
                            <h4>
                              <i className="fa fa-info-circle color-primary complete f-s-14" />
                              <small>
                                Note that password must be at lest 7 characters
                                long and maxmuinm 15 character
                              </small>
                            </h4>
                          </div>
                          <div className="pull-right">
                            <button
                              type="submit"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i className="fa fa-check" /> Update
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-corner"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-12">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Personal Information</h2>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="form-container">
                    <form action="#">
                      <div className="row">
                        <div className="col-xs-12 mb-20">
                          <div className="col-sm-12 avatar-img ">
                            <div className="avatar-img-wrapper">
                              <img
                                src={pc1}
                                style={{ maxWidth: 100 }}
                                alt
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="formfield10"
                              >
                                Upload File
                              </label>
                              <span className="desc">
                                "JPG, GIF or PNG Max size of 800K"
                              </span>
                              <div className="controls">
                                <input
                                  type="file"
                                  className
                                  id="formfield10"
                                  name="formfield10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="col-lg-6 no-pl">
                            <div className="form-group">
                              <label className="form-label">Real Name</label>
                              <span className="desc">
                                "enter the name in your ID"
                              </span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield1"
                                  defaultValue="Smith Wright"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pr">
                            <div className="form-group">
                              <label className="form-label">Location</label>
                              <span className="desc">
                                "enter location in your ID"
                              </span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pl">
                            <div className="form-group">
                              <label className="form-label">Password </label>
                              <span className="desc">e.g. "lorem123"</span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield3"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 no-pr">
                            <div className="form-group">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <span className="desc">e.g. "lorem123"</span>
                              <div className="controls">
                                <i className />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="formfield4"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pull-left">
                            <h4>
                              <i className="fa fa-info-circle color-primary complete f-s-14" />
                              <small>
                                Note that All the information must be right not
                                just adummy text
                              </small>
                            </h4>
                          </div>
                          <div className="pull-right">
                            <button
                              type="submit"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i className="fa fa-check" /> Update
                            </button>
                            <button
                              type="button"
                              className="btn btn-default btn-corner"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* MAIN CONTENT AREA ENDS */}
        </section>
      </div>
    );
  }
}

export default Setting;
