import React, { Component } from "react";
import pro from "../../../Asset/Image/profile/avatar-1.png";
import pro1 from "../../../Asset/Image/profile/profile.jpg";
class HeaderAdmin extends Component {
  render() {
    return (
      <div className="page-topbar ">
        <div className="logo-area"></div>
        <div className="quick-area">
          <div className="pull-left">
            <ul className="info-menu left-links list-inline list-unstyled">
              <li className="sidebar-toggle-wrap">
                <a href="#" data-toggle="sidebar" className="sidebar_toggle">
                  <i className="fa fa-bars" />
                </a>
              </li>
              <li className="message-toggle-wrapper dropdown">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="dropdown"
                  className="dropdown-toggle toggle"
                >
                  <i class="fa fa-envelope"></i>
                  <span className="badge badge-accent">7</span>
                </a>
                <ul
                  id="demo"
                  className="dropdown-menu messages animated fadeIn collapse"
                >
                  <li className="list">
                    <ul className="dropdown-menu list-unstyled ps-scrollbar">
                      <li className="unread status-available">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src={pro}
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Clarine Vassar</strong>
                              <span className="time small">- 15 mins ago</span>
                              <span className="profile-status available pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-away">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-2.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Brooks Latshaw</strong>
                              <span className="time small">- 45 mins ago</span>
                              <span className="profile-status away pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-busy">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-3.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Clementina Brodeur</strong>
                              <span className="time small">- 1 hour ago</span>
                              <span className="profile-status busy pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-offline">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-4.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Carri Busey</strong>
                              <span className="time small">- 5 hours ago</span>
                              <span className="profile-status offline pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-offline">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-5.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Melissa Dock</strong>
                              <span className="time small">- Yesterday</span>
                              <span className="profile-status offline pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-available">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-1.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Verdell Rea</strong>
                              <span className="time small">- 14th Mar</span>
                              <span className="profile-status available pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-busy">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-2.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Linette Lheureux</strong>
                              <span className="time small">- 16th Mar</span>
                              <span className="profile-status busy pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" status-away">
                        <a href="javascript:;">
                          <div className="user-img">
                            <img
                              src="../data/profile/avatar-3.png"
                              alt="user-image"
                              className="img-circle img-inline"
                            />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Araceli Boatright</strong>
                              <span className="time small">- 16th Mar</span>
                              <span className="profile-status away pull-right" />
                            </span>
                            <span className="desc small">
                              Lorem ipsum dolor sit elit fugiat molest.
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="external">
                    <a href="javascript:;">
                      <span>Read All Messages</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="notify-toggle-wrapper">
                <a href="#" data-toggle="dropdown" className="toggle">
                  <i className="fa fa-bell" />
                  <span className="badge badge-accent">3</span>
                </a>
                <ul className="dropdown-menu notifications animated fadeIn">
                  <li className="total">
                    <span className="small">
                      You have <strong>3</strong> new notifications.
                      <a href="javascript:;" className="pull-right">
                        Mark all as Read
                      </a>
                    </span>
                  </li>
                  <li className="list">
                    <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                      <li className="unread available">
                        {/* available: success, warning, info, error */}
                        <a href="javascript:;">
                          <div className="notice-icon">
                            <i className="fa fa-check" />
                          </div>
                          <div>
                            <span className="name">
                              <strong>
                                Successful transaction of 0.01 BTC
                              </strong>
                              <span className="time small">15 mins ago</span>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="unread away">
                        {/* available: success, warning, info, error */}
                        <a href="javascript:;">
                          <div className="notice-icon">
                            <i className="fa fa-clock-o" />
                          </div>
                          <div>
                            <span className="name">
                              <strong>4 of Pending Transactions!</strong>
                              <span className="time small">45 mins ago</span>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" busy">
                        {/* available: success, warning, info, error */}
                        <a href="javascript:;">
                          <div className="notice-icon">
                            <i className="fa fa-times" />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Cancelled Order of 200 ICO</strong>
                              <span className="time small">1 hour ago</span>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className=" available">
                        {/* available: success, warning, info, error */}
                        <a href="javascript:;">
                          <div className="notice-icon">
                            <i className="fa fa-check" />
                          </div>
                          <div>
                            <span className="name">
                              <strong>Great Speed Notify of 1.34 LTC</strong>
                              <span className="time small">14th Mar</span>
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="external">
                    <a href="javascript:;">
                      <span>Read All Notifications</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="hidden-sm hidden-xs searchform">
                <form action="#" method="post">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control animated fadeIn"
                      placeholder="Search & Enter"
                    />
                  </div>
                  <input type="submit" defaultValue />
                </form>
              </li>
            </ul>
          </div>
          <div className="pull-right">
            <ul className="info-menu right-links list-inline list-unstyled">
              <li className="profile">
                <a href="#" data-toggle="dropdown" className="toggle">
                  <img
                    src={pro1}
                    alt="user-image"
                    className="img-circle img-inline"
                  />
                  <span>
                    Smith Wright <i className="fa fa-angle-down" />
                  </span>
                </a>
                <ul className="dropdown-menu profile animated fadeIn">
                  <li>
                    <a href="account-confirmation.html">
                      <i className="fa fa-wrench" /> Settings
                    </a>
                  </li>
                  <li>
                    <a href="ui-profile.html">
                      <i className="fa fa-user" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="ui-support.html">
                      <i className="fa fa-info" /> Help
                    </a>
                  </li>
                  <li className="last">
                    <a href="ui-login.html">
                      <i className="fa fa-lock" /> Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="chat-toggle-wrapper">
                <a href="#" data-toggle="chatbar" className="toggle_chat">
                  <i className="fa fa-comments" />
                  <span className="badge badge-accent">9</span>
                  <i className="fa fa-times" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderAdmin;
