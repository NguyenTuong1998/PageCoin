import React, { Component } from "react";
import p1 from "../../Asset/Image/partner_01.png";
import p2 from "../../Asset/Image/partner_02.png";
import p3 from "../../Asset/Image/partner_03.png";
import p4 from "../../Asset/Image/partner_04.png";
import p5 from "../../Asset/Image/partner_05.png";
import p6 from "../../Asset/Image/partner_06.png";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Partners extends Component {
  render() {
    var setting = {
      dots: false,
      
      infinite: true,
      autoplay: true,
      nav: false,
      speed: 3000,
      slidesToShow: 5,
      slidesToScroll: 4,
      className: "container ml-10"
    };
    return (
      <section id="f-partners">
        <div className="f-section f-partners">
          <div className="container">
            <div className="row clearfix">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="f-section_head">
                  <h2>OUr Partners</h2>
                </div>
              </div>
            </div>
            <div className="f-partner_logos ">
              {/* <div id="f-partner_logos" className="owl-carousel"> */}
              <Slide {...setting}>
                <div id="f-partner_logos">
                  <img src={p1} className="img-responsive" alt />
                </div>
                <div id="f-partner_logos">
                  <img src={p2} className="img-responsive" alt />
                </div>
                <div id="f-partner_logos">
                  <img src={p3} className="img-responsive" alt />
                </div>
                <div id="f-partner_logos">
                  <img src={p4} className="img-responsive" alt />
                </div>
                <div id="f-partner_logos">
                  <img src={p5} className="img-responsive" alt />
                </div>
                <div id="f-partner_logos">
                  <img src={p6} className="img-responsive" alt />
                </div>
                {/* <img src={p2} className="img-responsive" alt />
                <img src={p3} className="img-responsive" alt />
                <img src={p4} className="img-responsive" alt />
                <img src={p5} className="img-responsive" alt />
                <img src={p6} className="img-responsive" alt /> */}
              </Slide>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
