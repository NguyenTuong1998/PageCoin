import { isPlainObject } from "jquery";
import React, { Component } from "react";
import pc1 from "../../../Asset/Image/dashelements/affiliate-img.png"; 
import pc2 from "../../../Asset/Image/icon/level1.png";
import pc3 from "../../../Asset/Image/icon/level2.png";
import pc4 from "../../../Asset/Image/icon/level3.png";
import pc5 from "../../../Asset/Image/icon/level4.png";

class Program extends Component {
  render() {
    return (
      <div id="main-content" className=" ">
        <section className="wrapper main-wrapper row" style={{}}>
          
          <div className="clearfix" />
          <div className="col-lg-12">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">The best Affiliate System</h2>
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
                  <div className="col-lg-4">
                    <div className="text-center no-mt no-mb">
                      <div className="text-left">
                        <h4 className="bold"> Select type of Affilite Bouns</h4>
                        <h4>
                          <small>
                            By enablng this option you will recieve your
                            affilite bouns directly paid out in BTC
                          </small>
                        </h4>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-xs-1 no-pl no-pr">
                          <div
                            style={{ position: "relative", padding: "7px 0 0" }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-1"
                              className="skin-flat-red"
                              defaultChecked
                            />
                          </div>
                        </div>
                        <div
                          className="col-xs-11 no-pl"
                          style={{ position: "relative", padding: 0 }}
                        >
                          <h4 className="icheck-label text-left form-label">
                            <small>
                              <strong>HASHPOWER BOUNS</strong> Deactive / active
                            </small>
                          </h4>
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-xs-1 no-pl no-pr">
                          <div
                            style={{ position: "relative", padding: "7px 0 0" }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-2"
                              className="skin-flat-red"
                            />
                          </div>
                        </div>
                        <div
                          className="col-xs-11 no-pl"
                          style={{ position: "relative", padding: 0 }}
                        >
                          <h4 className="icheck-label text-left form-label">
                            <small>
                              <strong>HASHPOWER BOUNS</strong> Deactive / active
                            </small>
                          </h4>
                        </div>
                      </div>
                      <div className="col-xs-12 no-pl no-pr">
                        <div className="col-xs-1 no-pl no-pr">
                          <div
                            style={{ position: "relative", padding: "7px 0 0" }}
                          >
                            <input
                              tabIndex={3}
                              type="checkbox"
                              id="flat-checkbox-3"
                              className="skin-flat-red"
                            />
                          </div>
                        </div>
                        <div
                          className="col-xs-11 no-pl"
                          style={{ position: "relative", padding: 0 }}
                        >
                          <h4 className="icheck-label text-left no-mb form-label">
                            <small>
                              <strong>HASHPOWER BOUNS</strong> Deactive / active
                            </small>
                          </h4>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="text-left mt-20">
                        <h5 className="bold no-mb">
                          What is the Affilite Bouns payment system?
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <img
                      src={pc1}
                      alt
                      className="aff-img img-responsive"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
          <div className="col-lg-8">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">FAQ</h2>
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
                    {/* Bootstrap FAQ - START */}
                    <div
                      className="panel-group no-mb faq-panels"
                      id="accordion"
                    >
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                            >
                              How do I use my affiliate link ?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="accordion-toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                            >
                              How does the affiliate link work ?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="accordion-toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFive"
                            >
                              How bif are the reward ?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="accordion-toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseSix"
                            >
                              What do you mean by a "Affiliate Ranking System" ?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseSix"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="accordion-toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseEight"
                            >
                              What are the payment options?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseEight"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              className="accordion-toggle collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseNine"
                            >
                              How do I rank up? Can I move down in rank?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseNine"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium id voluptates,
                              accusamus aliquam, doloribus aperiam ullam tempora
                              nesciunt, architecto vitae molestias. Impedit
                              soluta nulla accusamus! Beatae accusamus eos,
                              inventore aspernatur Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* bs faq end */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Affilite Bouns Stage</h2>
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
                        <i className="fa fa-clock-o icon-sm" />
                        Next Bouns Stage
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
                      <span>5% increase</span>
                    </div>
                  </div>
                  <div
                    className="tile-progress bg-accent"
                    style={{ marginLeft: 15, marginRight: 15 }}
                  >
                    <div className="content">
                      <h4>
                        <i className="fa fa-flask icon-sm" /> This Stage
                        Complete
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
                  <div
                    className="tile-progress bg-accent no-mb"
                    style={{ marginLeft: 15, marginRight: 15 }}
                  >
                    <div className="content">
                      <h4>
                        <i className="fa fa-dollar icon-sm" /> Total Referral
                        Earning
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
                      <span>4,739 USD</span>
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
                <h2 className="title pull-left">Affilite Ranking System</h2>
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
                  <div className="col-lg-8">
                    <h4 className="bold no-mt">Your Affilite Rank</h4>
                    <h4 className="mb-10">
                      <small>
                        Gain free promotion upgrade with each ascending
                        affiliate rank, your rank is{" "}
                        <strong>(1) starter</strong> accumulated{" "}
                        <strong>55$ in sales!</strong> Your next rank will
                        unlock with 100$ in successful referrals.
                        <a href="#" className="color-primary">
                          here
                        </a>
                      </small>
                    </h4>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-3 col-md-6 mt-30">
                    <div className="reward-box">
                      <span className="rank-span center-block badge badge-lg badge-primary f-s-14">
                        <i className="fa fa-star complete color-white" />
                        Your Rank
                      </span>
                      <img
                        src={pc2}
                        className="center-block mt-20"
                        style={{ maxWidth: 120 }}
                        alt
                      />
                      <h4 className="bold text-center mt-20">2.5% bouns</h4>
                      <hr />
                      <p>
                        <small>
                          you will now gain <strong>2.5% </strong>bouns haspower
                          with every new sale
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-30">
                    <div className="reward-box">
                      <span className="rank-span center-block badge badge-lg f-s-14">
                        <i className="fa fa-mail-forward complete color-white" />
                        next Rank
                      </span>
                      <img
                        src={pc3}
                        className="next center-block mt-20"
                        alt
                      />
                      <h4 className="bold text-center mt-20">3.5% bouns</h4>
                      <hr />
                      <p>
                        <small>
                          you will now gain <strong>3.5% </strong>bouns haspower
                          with every new sale
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-30">
                    <div className="reward-box">
                      <img
                        src={pc4}
                        className="next center-block mt-20"
                        alt
                      />
                      <h4 className="bold text-center mt-20">4.5% bouns</h4>
                      <hr />
                      <p>
                        <small>
                          you will now gain <strong>5.5% </strong>bouns haspower
                          with every new sale
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-30">
                    <div className="reward-box">
                      <img
                        src={pc5}
                        className="next center-block mt-20"
                        alt
                      />
                      <h4 className="bold text-center mt-20">5.5% bouns</h4>
                      <hr />
                      <p>
                        <small>
                          you will now gain <strong>5.5% </strong>bouns haspower
                          with every new sale
                        </small>
                      </p>
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
                <h2 className="title pull-left">Top Affiliate Earners</h2>
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
                        Nighy Strotman
                        <span className="number">2,892,638 $</span>
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
                        Jack Nelison<span className="number">1,984,342 $</span>
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
                        Johan Charter<span className="number">1,745,070 $</span>
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
                        Mark Strotman<span className="number">1,200,000 $</span>
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
                        Nighy Strotman
                        <span className="number">1,000,000 $</span>
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
          <div className="col-lg-8">
            <section className="box has-border-left-3">
              <header className="panel_header">
                <h2 className="title pull-left">Affiliate Hits</h2>
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
                            <th>Affililate ID</th>
                            <th data-priority={1}>Register Time</th>
                            <th data-priority={2}>Referral Bouns</th>
                            <th data-priority={3}>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" />
                              .com/?r=126515
                            </th>
                            <td>17.24AM</td>
                            <td>10.56$</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" />
                              .com/?r=123675
                            </th>
                            <td>18.14AM</td>
                            <td>23.56$</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" />
                              .com/?r=786515
                            </th>
                            <td>20.25AM</td>
                            <td>10.56$</td>
                            <td>
                              <span className="status-pending">pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o cancelled" />
                              .com/?r=903eu9
                            </th>
                            <td>21.24AM</td>
                            <td>101.56$</td>
                            <td>
                              <span className="status-cancelled">
                                cancelled
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" />
                              .com/?r=0208r4
                            </th>
                            <td>21.50AM</td>
                            <td>10.56$</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o complete" />
                              .com/?r=628893
                            </th>
                            <td>21.59PM</td>
                            <td>293.56$</td>
                            <td>
                              <span className="status-complete">complete</span>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o cancelled" />
                              .com/?r=569839
                            </th>
                            <td>22.11PM</td>
                            <td>28.99$</td>
                            <td>
                              <span className="status-cancelled">
                                cancelled
                              </span>
                            </td>
                          </tr>
                          {/* Repeat */}
                          <tr>
                            <th>
                              <i className="fa fa-dot-circle-o pending" />
                              .com/?r=178848
                            </th>
                            <td>22.34PM</td>
                            <td>78.34$</td>
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
        </section>
      </div>
    );
  }
}

export default Program;
