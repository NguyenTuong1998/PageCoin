import React, { Component } from "react";
import pc1 from "../../../Asset/Image/blog_img.jpg";
import pc2 from "../../../Asset/Image/blog_content.jpg";
import pc3 from "../../../Asset/Image/avatar_01.jpg";
import pc5 from "../../../Asset/Image/avatar_02.jpg";
import pc4 from "../../../Asset/Image/avatar_03.jpg";
import pc6 from "../../../Asset/Image/blog_full_05.jpg";
import pc7 from "../../../Asset/Image/blog_full_07.jpg";

class BodyDetail extends Component {
  render() {
    return (
      <>
        <section id="f-blog_content">
          <div className="f-section f-blog_content">
            <div className="container">
              <div className="row">
                <header id="f-blog_head">
                  <div className="f-blog_head f-blog_container clearfix">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      {" "}
                      <span className="f-blog_date">Apr 2018, 11</span>
                      <span className="f-by_user">
                        by <a href="#">Chase Larkins</a>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-blog_cat text-right">
                      {" "}
                      <a href="#">Category</a>
                      <a href="#">Financial Projects</a>
                    </div>
                  </div>
                </header>
                <div className="f-blog_feature">
                  <img src={pc1} className="img-responsive" alt />
                </div>
                <div className="f-blog_container">
                  <p>
                    Out of the recesses of a dark closet, into which this
                    aperture gave admittance, he brought a large pasty, baked in
                    a pewter platter of unusual dimensions. This mighty dish he
                    placed before his guest, who, using his poniard to cut it
                    open, lost no time in making himself acquainted with its
                    contents.
                  </p>
                  <p>
                    {" "}
                    <b>Alice wondered</b> - a little at this, but she was too
                    much in awe of the Queen to disbelieve it. 'I'll try it when
                    I go home,' she thought to herself, 'the next time I'm a
                    little late for dinner.
                  </p>
                  <div className="f-quote">
                    <p>
                      <i>
                        <strong>He was</strong> - justified by the event; for
                        the footpath soon after appeared a little wider and more
                        worn, and the tinkle of a small bell gave the knight to
                        understand that he was in the vicinity of some.
                      </i>
                    </p>{" "}
                    <strong>William Blomfield</strong>
                  </div>
                  <h3>With what mingled joy</h3>
                  <p>
                    <img src={pc2} className="img-responsive pull-left" alt />
                    At length one of them called out in a clear, polite, smooth
                    dialect, not unlike in sound to the Italian: and{" "}
                    <a href="#">
                      <u>therefore I returned</u>
                    </a>{" "}
                    an answer in that language, hoping at least that the cadence
                    might be more agreeable to his ears. But it must be
                    observed, that this island cannot move beyond the extent of
                    the dominions below, nor can it rise above the height of
                    four miles. For which the astronomers (who have written
                    large systems concerning the stone) assign the following
                    reason: that the magnetic virtue does not extend beyond the
                    distance of four miles, and that the mineral, which acts
                    upon the stone in the bowels of the earth, and in the sea
                    about six leagues distant from the shore, is not diffused
                    through the whole globe, but terminated with the limits of
                    the king's dominions; and it was easy, from the great advan
                    systems concerning the stone) assign the following reason:
                    that the magnetic virtue does not extend beyond the distance
                    of four miles, and that the mineral, which acts upon the
                    stone in the bowels of the earth, and in the sea about six
                    leagues distant from the shore, is not diffused through the
                    whole globe.
                  </p>
                </div>
                <footer id="f-blog_foot">
                  <div className="f-blog_foot f-blog_container clearfix">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-blog_foot_tag">
                        {" "}
                        <strong>Tags:</strong>
                        <div className="f-blog_tags">
                          {" "}
                          <a href="#">finance</a> <a href="#">business</a>
                          <a href="#">people</a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-blog_share text-right">
                        <ul>
                          <li>
                            <a href="#" className="fab fa-facebook-f" />
                          </li>
                          <li>
                            <a href="#" className="fab fa-twitter" />
                          </li>
                          <li>
                            <a href="#" className="fab fa-pinterest" />
                          </li>
                          <li>
                            <a href="#" className="fa fa-rss" />
                          </li>
                          <li>
                            <a href="#" className="fa fa-heart" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </footer>
                <section id="f-comment">
                  <div className="f-blog_container clearfix">
                    <div className="f-comment">
                      <h3>3 Comments</h3>
                      <ul>
                        <li>
                          <img src={pc3} alt className="img-responsive" />
                          <header className="clearfix">
                            {" "}
                            <a href="#" className="f-username">
                              <b>Victoria Gilson</b>
                            </a>
                            <span className="f-comment_date">
                              Mar 2018 15, 14:30
                            </span>
                            <span className="f-comment_like">
                              <i className="fa fa-heart" /> 24
                            </span>
                          </header>
                          <p>
                            To these in the morning I sent the captain, who was
                            to enter into a parley with them; in a word, to try
                            them, surprise the ship.
                          </p>{" "}
                          <a href="#">Reply</a>
                          <ul>
                            <li>
                              <img src={pc5} alt className="img-responsive" />
                              <header className="clearfix">
                                {" "}
                                <a href="#" className="f-username">
                                  <b>Elijah Kendal</b>
                                </a>
                                <span className="f-comment_date">
                                  Mar 2018 21, 12:30
                                </span>
                                <span className="f-comment_like">
                                  <i className="fa fa-heart" /> 67
                                </span>
                              </header>
                              <p>
                                The sight of the tumblers restored Bob Sawyer to
                                a degree of equanimity which he had since his
                                interview with his landlady.
                              </p>{" "}
                              <a href="#">Reply</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <img src={pc4} alt className="img-responsive" />
                          <header className="clearfix">
                            {" "}
                            <a href="#" className="f-username">
                              <b>Cody Donovan</b>
                            </a>
                            <span className="f-comment_date">
                              Apr 2018 04, 11:30
                            </span>
                            <span className="f-comment_like">
                              <i className="fa fa-heart" /> 24
                            </span>
                          </header>
                          <p>
                            I have related the substance of several
                            conversations I had with my master during the
                            greatest part of the time I had the honour to be in
                            his service.
                          </p>{" "}
                          <a href="#">Reply</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section id="f-comment_form">
          <div className="f-comment_form">
            <div className="f-blog_container clearfix">
              <h3>Leave A Comment</h3>
              <form action="#">
                <div className="row clearfix">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                  <div className="f-comment_submit text-center">
                    <input type="submit" Value="Add Comment" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section id="f-blog_nav">
          <div className="f-blog_nav">
            <div className="container">
              <div className="row clearfix">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="f-blog_nav_block f-prev_nav">
                    <img src={pc3} className="img-reponsive" alt />{" "}
                    <i class="fas fa-arrow-left">
                      <a href="#"></a>
                    </i>
                    <div>
                      <h4>
                        <a href="#">Previous POst</a>
                      </h4>
                      <div className="f-post_nav_info clearfix">
                        {" "}
                        <span className="pull-left">
                          <strong>Finance and Advice</strong>
                        </span>
                        <span className="pull-right">
                          <a href="#">Victoria Gilson</a>
                        </span>
                      </div>
                      <p>
                        To these in the morning I sent the captain, who to try
                        them, surprise the ship
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="f-blog_nav_block f-next_nav">
                    <img src={pc4} className="img-reponsive" alt />{" "}
                    <i class="fas fa-arrow-right">
                      <a href="#"></a>
                    </i>
                    <div>
                      <h4>
                        <a href="#">Next POst</a>
                      </h4>
                      <div className="f-post_nav_info clearfix">
                        {" "}
                        <span className="pull-right">
                          <strong>Dollar Saving</strong>
                        </span>
                        <span className="pull-left">
                          <a href="#">Oliver Nelson</a>
                        </span>
                      </div>
                      <p>They made signs for me to come down from the rock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="f-related_blog">
          <div className="f-section f-related_blog">
            <div className="container">
              <div className="row">
                <div className="f-blog_w_sidebar">
                  <div className="f-blog_full clearfix">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-blog_single">
                      <div className="f-blog_intro">
                        {" "}
                        <span className="f-blog_date">DEC 2018, 05</span>
                        <a className="f-blog_title" href="blog_details.html">
                          The Dismal Man Readily
                        </a>
                        <div className="f-blog_tags">
                          {" "}
                          <a href="#">finance</a> <a href="#">business</a>
                          <a href="#">people</a>
                        </div>
                      </div>
                      <img alt className="img-responsive" src={pc6} />
                      <p>
                        he sight of the tumblers restored Bob Sawyer to a degree
                        of equanimity which he had not possessed since his
                        interview with his landlady...
                      </p>{" "}
                      <a href="#">read more</a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-blog_single">
                      <div className="f-blog_intro">
                        {" "}
                        <span className="f-blog_date">NOV 2018, 26</span>
                        <a className="f-blog_title" href="blog_details.html">
                          After Appeared
                        </a>
                        <div className="f-blog_tags">
                          {" "}
                          <a href="#">finance</a> <a href="#">business</a>
                          <a href="#">people</a>
                        </div>
                      </div>
                      <img alt className="img-responsive" src={pc7} />
                      <p>
                        In all revolutions of government, he would make his
                        court for the office of hangman-general, and in the
                        exercise of that dignity, wherein he was...
                      </p>{" "}
                      <a href="#">read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BodyDetail;
