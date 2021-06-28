import React, { Component } from "react";
import pc1 from "../../../Asset/Image/icon/sec-level1.png";
import pc2 from "../../../Asset/Image/icon/sec-level2.png";
import pc3 from "../../../Asset/Image/icon/sec-level3.png";
import pc4 from "../../../Asset/Image/icon/email-verification.png";
import pc5 from "../../../Asset/Image/icon/backup.png";
import pc6 from "../../../Asset/Image/icon/pass-hint.png";
class Security extends Component {
  render() {
    return (
      <div>
        <div id="main-content" className=" ">
          <section className="wrapper main-wrapper row" style={{}}>
            <div className="col-xs-12">
              <div className="page-title">
                <div className="pull-left">
                  {/* PAGE HEADING TAG - START */}
                  <h1 className="title">Security</h1>
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
                              <i className="fas fa-long-arrow-alt-down complete color-white" />
                              RECIEVE
                            </a>
                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i className="fas fa-long-arrow-alt-up complete color-white" />
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
                                <i className="cc fab fa-bitcoin color-primary" />
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
                  <h2 className="title pull-left">Security System</h2>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="tabs-wrapper">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a href="#home-1" data-toggle="tab">
                            <img
                              src={pc1}
                              className="tab-img-icon"
                              alt="icon"
                            />
                            <div className="tab-head">
                              <h4 className="bold mb-5">Level 1</h4>
                              <h4 className="no-mt">
                                <small>prevent losing access to you fund</small>
                              </h4>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#level-2" data-toggle="tab">
                            <img
                              src={pc2}
                              className="tab-img-icon"
                              alt="icon"
                            />
                            <div className="tab-head">
                              <h4 className="bold mb-5">Level 2</h4>
                              <h4 className="no-mt">
                                <small>
                                  prevent unauthorized access to wallet
                                </small>
                              </h4>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#level-3" data-toggle="tab">
                            <img
                              src={pc3}
                              className="tab-img-icon"
                              alt="icon"
                            />
                            <div className="tab-head">
                              <h4 className="bold mb-5">Level 3</h4>
                              <h4 className="no-mt">
                                <small>
                                  advanced security options of wallet{" "}
                                </small>
                              </h4>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade in active" id="home-1">
                          <ul className="list-unstyled">
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src={pc4}
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Email Verification
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <h5 className="bold no-mb">
                                    <i className="fa fa-check-circle-o complete f-s-14" />{" "}
                                    Verified
                                  </h5>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src={pc5}
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Backup Recovery Phase
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Backup Now
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src={pc6}
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Create Password Hint
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque .
                                    </small>
                                  </h4>
                                  <div className="form-group mb-10">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control bg-white"
                                        id="field-13"
                                        placeholder="password hint"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                  </div>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Save Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="level-2">
                          <ul className="list-unstyled">
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/email-verification.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Email Verification
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <h5 className="bold no-mb">
                                    <i className="fa fa-check-circle-o complete f-s-14" />{" "}
                                    Verified
                                  </h5>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/backup.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Backup Recovery Phase
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Backup Now
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/pass-hint.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Create Password Hint
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque .
                                    </small>
                                  </h4>
                                  <div className="form-group mb-10">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control bg-white"
                                        id="field-14"
                                        placeholder="password hint"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                  </div>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Save Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="level-3">
                          <ul className="list-unstyled">
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/email-verification.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Email Verification
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <h5 className="bold no-mb">
                                    <i className="fa fa-check-circle-o complete f-s-14" />{" "}
                                    Verified
                                  </h5>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/backup.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Backup Recovery Phase
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque dolorum facere et error, molestias
                                      laborum at animi culpa accusamus eius
                                      corrupti totam temporibus quasi in
                                      aliquam.
                                    </small>
                                  </h4>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Backup Now
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className>
                              <div className="security-option-wrapper">
                                <img
                                  src="../data/icons/pass-hint.png"
                                  className="tab-img-icon"
                                  alt="icon"
                                />
                                <div className="tab-head">
                                  <h4 className="bold mb-5">
                                    Create Password Hint
                                  </h4>
                                  <h4 className="no-mt">
                                    <small>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Deserunt nihil, maxime
                                      cumque .
                                    </small>
                                  </h4>
                                  <div className="form-group mb-10">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control bg-white"
                                        id="field-15"
                                        placeholder="password hint"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                  </div>
                                  <a
                                    href="buy-and-sell.html"
                                    className="btn btn-primary btn-corner right15"
                                  >
                                    <i className="fa fa-cloud-download complete color-white" />
                                    Save Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="clearfix" />
            {/* MAIN CONTENT AREA ENDS */}
          </section>
        </div>
        {/* END CONTENT */}
        <div className="page-chatapi hideit">
          <div className="search-bar">
            <input type="text" placeholder="Search" className="form-control" />
          </div>
          <div className="chat-wrapper">
            <h4 className="group-head">Favourites</h4>
            <ul className="contact-list">
              <li className="user-row " id="chat_user_1" data-user-id={1}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Joge Lucky</a>
                  </h4>
                  <span className="status available" data-status="available">
                    {" "}
                    Available
                  </span>
                </div>
                <div className="user-status available">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_2" data-user-id={2}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Folisise Chosiel</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_3" data-user-id={3}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-3.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Aron Gonzalez</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
            </ul>
            <h4 className="group-head">More Contacts</h4>
            <ul className="contact-list">
              <li className="user-row " id="chat_user_4" data-user-id={4}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-4.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Chris Fox</a>
                  </h4>
                  <span className="status offline" data-status="offline">
                    {" "}
                    Offline
                  </span>
                </div>
                <div className="user-status offline">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_5" data-user-id={5}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-5.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Mogen Polish</a>
                  </h4>
                  <span className="status offline" data-status="offline">
                    {" "}
                    Offline
                  </span>
                </div>
                <div className="user-status offline">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_6" data-user-id={6}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Smith Carter</a>
                  </h4>
                  <span className="status available" data-status="available">
                    {" "}
                    Available
                  </span>
                </div>
                <div className="user-status available">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_7" data-user-id={7}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Amilia Gozenal</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_8" data-user-id={8}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-3.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Tahir Jemyship</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_9" data-user-id={9}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-4.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Johanson Wright</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_10" data-user-id={10}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-5.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Loni Tindall</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_11" data-user-id={11}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Natcho Herlaey</a>
                  </h4>
                  <span className="status idle" data-status="idle">
                    {" "}
                    Idle
                  </span>
                </div>
                <div className="user-status idle">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_12" data-user-id={12}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Shakira Swedan</a>
                  </h4>
                  <span className="status idle" data-status="idle">
                    {" "}
                    Idle
                  </span>
                </div>
                <div className="user-status idle">
                  <i className="fa fa-circle" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="chatapi-windows "></div>
      </div>
    );
  }
}

export default Security;
