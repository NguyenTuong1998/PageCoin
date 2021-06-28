import React, { Component } from "react";
import pc from "../../../Asset/Image/services_details_01.jpg";
import pc1 from "../../../Asset/Image/b-gettouch.jpg";
class BodyDetail extends Component {
  render() {
    return (
      <div id="f-service_detail">
        <div className="f-section f-service_detail">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right">
                <article>
                  <h3>Overview</h3>
                  <p>
                    {" "}
                    <strong>I have related</strong> - the substance of several
                    conversations I had with my master during the greatest part
                    of the time I had the honour to be in his service; but have,
                    indeed, for brevity sake, omitted much more than is here set
                    down.
                  </p>
                  <p>
                    {" "}
                    <strong>They made signs</strong> - for me to come down from
                    the rock, and go towards the shore, which I accordingly did;
                    and the flying island being raised to a convenient height,
                    the verge. Thus much I thought proper to tell you in
                    relation to yourself, and to the trust I reposed in you.
                    However, many of the most learned and wise adhere to the new
                    scheme of expressing themselves by things; which has only
                    this.
                  </p>
                </article>
                <article>
                  <h3>How Can We Help</h3>
                  <p>
                    <img
                      src={pc}
                      className="img-responsive pull-left"
                      alt
                    />
                    At length one of them called out in a clear, polite, smooth
                    dialect, not unlike in sound to the Italian: and{" "}
                    <u>therefore I returned</u> an answer in that language,
                    hoping at least that the cadence might be more agreeable to
                    his ears. But it must be observed, that this island cannot
                    move beyond the extent of the dominions below, nor can it
                    rise above the height of four miles. For which the systems
                    concerning the stone) assign the following reason: that the
                    magnetic virtue does not extend.
                  </p>
                  <p>
                    systems concerning the stone) assign the following reason:
                    that the magnetic virtue does not extend beyond the distance
                    of four miles, and that the mineral, which acts upon the
                    stone in the bowels of the earth, and in the sea about six
                    leagues distant from the shore, is not diffused through the
                    whole globe.
                  </p>
                </article>
                <article>
                  <h3>Contact Us</h3>
                  <p>
                    She clutched the matron by the arm, and forcing her into a
                    chair by the bedside, was about to speak, when looking
                    round, she caught sight of the two old women bending forward
                    in the attitude of eager listeners.
                  </p>{" "}
                  <a href="#">GET IN TOUCH</a>
                  <br />
                  <br />
                  <br />
                  <img
                    src={pc1}
                    className="img-responsive"
                    alt
                  />
                </article>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 f-service_sidebar">
                <div className="f-side_single">
                  <h5>All Services</h5>
                  <ul>
                    <li>
                      <a href="#">Financial Planning</a>
                    </li>
                    <li>
                      <a href="#">Dollar Saving</a>
                    </li>
                    <li>
                      <a href="#">Investment Project</a>
                    </li>
                    <li>
                      <a href="#">Organiztion</a>
                    </li>
                    <li>
                      <a href="#">Consultation</a>
                    </li>
                    <li>
                      <a href="#">Debt &amp; Borrowing</a>
                    </li>
                  </ul>
                </div>
                <div className="f-side_single">
                  <h5>Download items</h5>
                  <p>
                    To these in the morning I sent the captain, who was to enter
                    into a parley with them; in a word, to try them thought.
                  </p>{" "}
                  <a href="#" className="f-link_but">
                    <i className="fa fa-download" /> Download.PDF
                  </a>{" "}
                  <a href="#" className="f-link_but">
                    <i className="fa fa-download" /> Download.DOC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyDetail;
