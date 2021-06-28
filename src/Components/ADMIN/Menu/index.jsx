import React, { Component } from "react";
// import "./main";
import icon1 from "../../../Asset/Image/icon/coins.png"
import icon2 from "../../../Asset/Image/icon/wallet-o.png"
import { NavLink } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <div className="page-container row-fluid container-fluid">
        {/* SIDEBAR - START */}
        <div className="page-sidebar fixedscroll">
          {/* MAIN MENU - START */}
          <div className="page-sidebar-wrapper" id="main-menu-wrapper">
            <ul className="wraplist">
              <li className="menusection">Main</li>
              <li className="open">
                <NavLink activeClassName="active" to="/dashboard">
                  <i className="fa fa-th-large" />
                  <span className="title ">Dashboard</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="viewTrack">
                  <i className="fa fa-bullseye" />
                  <span className="title ">Trading View</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="icoAdmin">
                  <i className="fa fa-sitemap" />
                  <span className="title">ICO Distribution Admin</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="icoUser">
                  <i className="fa fa-user" />
                  <span className="title">ICO Distribution User</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="buy">
                  <i className="img">
                    <img src={icon1} style={{ width: 16 }} alt />
                  </i>
                  <span className="title">Buy &amp; Sell Crypto</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="payment">
                  <i className="fa fa-credit-card" />
                  <span className="title">Payment Gateways</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="program">
                  <i className="fa fa-crosshairs" />
                  <span className="title">Affailiate Program</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="/wallet">
                  <i className="img">
                    <img src={icon2} style={{ width: 16 }} alt />
                  </i>
                  <span className="title">My Wallet</span>
                </NavLink>
              </li>
              <li className>
                <NavLink activeClassName="active" to="security">
                  <i className="fa fa-lock" />
                  <span className="title">Security</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink activeClassName="active" to="setting">
                  <i class="fas fa-cogs"></i>
                  <span
                    className="title dropdown-toggle "
                    aria-haspopup="true"
                    aria-expanded="true"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                  >
                    Settings
                  </span>
                  <i className="hihi fa fa-angle-down"></i>
                  {/* <span className="arrow " /> */}
                </NavLink>
                <ul
                  className="sub-menu dropdown-menu "
                  aria-labelledby="dropdownMenu1"
                >
                  <li>
                    <a className href="settings.html">
                      General Settings
                    </a>
                  </li>
                  <li>
                    <a className href="account-confirmation.html">
                      Account Confirmation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="acc">
                <a href="javascript:;">
                  <i className="fa fa-lock" />
                  <span className="title">Access Pages</span>
                  <i className="hihi fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="ui-login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className href="ui-register.html">
                      Registration
                    </a>
                  </li>
                  <li>
                    <a className href="ui-404.html">
                      404
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-question-circle" />
                  <span className="title">Support</span>
                  <i className="hihi fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="ui-faq.html">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className href="ui-support.html">
                      Help center
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-columns" />
                  <span className="title">Layouts</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="layout-default.html">
                      Default Layout
                    </a>
                  </li>
                  <li>
                    <a className href="layout-collapsed.html">
                      Collapsed Menu
                    </a>
                  </li>
                  <li>
                    <a className href="layout-chat.html">
                      Chat Open
                    </a>
                  </li>
                  <li>
                    <a className href="layout-boxed.html">
                      Boxed Layout
                    </a>
                  </li>
                  <li>
                    <a className href="layout-boxed-collapsed.html">
                      Boxed Collapsed Menu
                    </a>
                  </li>
                  <li>
                    <a className href="layout-boxed-chat.html">
                      Boxed Chat Open
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menusection">Applications</li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-envelope" />
                  <span className="title">Mailbox</span>
                  <span className="arrow " />
                  <span className="label label-accent">4</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="mail-inbox.html">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a className href="mail-compose.html">
                      Compose
                    </a>
                  </li>
                  <li>
                    <a className href="mail-view.html">
                      View
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-comments" />
                  <span className="title">Chat API</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="chat-api.html">
                      Chat API
                    </a>
                  </li>
                  <li>
                    <a className href="chat-windows.html">
                      Chat Windows
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menusection">Data Visualization</li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-bar-chart" />
                  <span className="title">Echarts</span>
                  <span className="arrow " />
                  <span className="label label-accent">HOT</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="charts-echart-line.html">
                      Line &amp; Area Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-echart-bar.html">
                      Bar &amp; Stacked Charts
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-area-chart" />
                  <span className="title">Morris Charts</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="charts-morris-line.html">
                      Line Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-morris-bar.html">
                      Bar &amp; Stacked Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-morris-area.html">
                      Area Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-morris-pie.html">
                      Pie Charts
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-line-chart" />
                  <span className="title">Charts JS</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="charts-chartjs-line.html">
                      Line Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-chartjs-bar.html">
                      Bar Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-chartjs-pie-donut.html">
                      Pie &amp; Donut
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-bar-chart" />
                  <span className="title">Flot Charts</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="charts-flot-area.html">
                      Area Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-flot-line.html">
                      Line Charts
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-line-chart" />
                  <span className="title">Sparkline Charts</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="charts-sparkline-line.html">
                      Line &amp; Area Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-sparkline-bar.html">
                      Bar Charts
                    </a>
                  </li>
                  <li>
                    <a className href="charts-sparkline-composite.html">
                      Composite Charts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menusection">User Interface</li>
              <li className>
                <a href="javascript:;">
                  {" "}
                  <i className="fa fa-folder-open" />{" "}
                  <span className="title">Ui Elements</span>{" "}
                  <span className="arrow " />{" "}
                </a>
                <ul className="sub-menu">
                  <li className>
                    <a href="javascript:;">
                      <span className="title">Timeline</span>{" "}
                      <span className="arrow " />{" "}
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className href="ui-timeline-centered.html">
                          Centered timeline
                        </a>
                      </li>
                      <li>
                        <a className href="ui-timeline-left.html">
                          Left Aligned timeline
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className>
                    <a href="javascript:;">
                      <span className="title">Pricing Tables</span>{" "}
                      <span className="arrow " />{" "}
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className href="ui-pricing-expanded.html">
                          Expanded
                        </a>
                      </li>
                      <li>
                        <a className href="ui-pricing-narrow.html">
                          Narrow
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className>
                    <a href="javascript:;">
                      <span className="title">Icon Sets</span>{" "}
                      <span className="arrow " />{" "}
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className href="ui-icons.html">
                          Icon Styles
                        </a>
                      </li>
                      <li>
                        <a className href="ui-fontawesome.html">
                          Font Awesome
                        </a>
                      </li>
                      <li>
                        <a className href="ui-glyphicons.html">
                          Glyph Icons
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span className="title">Form Elements</span>{" "}
                      <span className="arrow " />{" "}
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className href="form-elements.html">
                          Field Elements
                        </a>
                      </li>
                      <li>
                        <a className href="form-elements-premade.html">
                          Pre Made Forms
                        </a>
                      </li>
                      <li>
                        <a className href="form-elements-icheck.html">
                          Checkbox &amp; Radio
                        </a>
                      </li>
                      <li>
                        <a className href="form-elements-grid.html">
                          Form Grid
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="form-wizard.html">
                      {" "}
                      <span className="title">Form Wizard</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="form-validation.html">
                      {" "}
                      <span className="title">Form Validations</span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-puzzle-piece" />
                  <span className="title">Components</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="ui-tabs.html">
                      Tabs
                    </a>
                  </li>
                  <li>
                    <a className href="ui-accordion.html">
                      Accordions
                    </a>
                  </li>
                  <li>
                    <a className href="ui-progress.html">
                      Progress Bars
                    </a>
                  </li>
                  <li>
                    <a className href="ui-buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a className href="ui-modals.html">
                      Modals
                    </a>
                  </li>
                  <li>
                    <a className href="ui-alerts.html">
                      Alerts
                    </a>
                  </li>
                  <li>
                    <a className href="ui-notifications.html">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a className href="ui-tooltips.html">
                      Tooltips
                    </a>
                  </li>
                  <li>
                    <a className href="ui-popovers.html">
                      Popovers
                    </a>
                  </li>
                  <li>
                    <a className href="ui-navbars.html">
                      Navbars
                    </a>
                  </li>
                  <li>
                    <a className href="ui-dropdowns.html">
                      Dropdowns
                    </a>
                  </li>
                  <li>
                    <a className href="ui-breadcrumbs.html">
                      Breadcrumbs
                    </a>
                  </li>
                  <li>
                    <a className href="ui-pagination.html">
                      Pagination
                    </a>
                  </li>
                  <li>
                    <a className href="ui-labels-badges.html">
                      Labels &amp; Badges
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="javascript:;">
                  <i className="fa fa-th-large" />
                  <span className="title">Appearance</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a className href="ui-typography.html">
                      Typography
                    </a>
                  </li>
                  <li>
                    <a className href="ui-grids.html">
                      Grids
                    </a>
                  </li>
                  <li>
                    <a className href="ui-panels.html">
                      Draggable Panels
                    </a>
                  </li>
                  <li>
                    <a className href="ui-group-list.html">
                      Group Listing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* MAIN MENU - END */}
        </div>
      </div>
    );
    
  }

}

export default Menu;
