import React, { Component } from "react";

class ContactAbout extends Component {
  render() {
    return (
      <div style={{background: "#fff"}}>
      <div className="container f-section f-contact_var">
        <div>
          <div className="resp-tabs-container hor_1">
            <div className="f-tab_single">
              <div className="clearfix row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 f-addr_full">
                  <div className="f-contact_in">
                    <h3>London</h3>
                    <ul className="clearfix">
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <p>
                          60 Guild Street
                          <br />
                          LONDON,
                          <br />
                          NW11 2QW
                        </p>
                      </li>
                      <li>
                        <i className="fas fa-id-card"></i>
                        <a href="tel:07864214476">(078) 6421 4476</a>
                        <br /> <a href="tel:07864214476">(078) 6421 4475</a>
                      </li>
                      <li>
                        <i class="fas fa-phone-volume"></i>
                        <a href="mexico:london@btc.com">london@btc.com</a>
                        <br />
                        <a href="mexico:london@btc.com">london@btc.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-addr_map">
                  <div className="f-contact_in">
                    <form action="#">
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="E-mail" />
                      <textarea placeholder="Message" defaultValue={""} />
                      <input
                        className="f-primary_but"
                        type="submit"
                        defaultValue="Send"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 f-addr_form">
                  <div className="f-contact_in">
                    <div
                      id="f-map_detail_01"
                      className="f-map_detail"
                      data-long="51.5074"
                      data-lati="0.1278"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9398920482267!2d0.04187070161240823!3d51.48258540582666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a857652f3d9f%3A0x6e5adebba50da22b!2zNjAgR3VpbGQgUmQsIExvbmRvbiwgVsawxqFuZyBRdeG7kWMgQW5o!5e0!3m2!1svi!2s!4v1621484877387!5m2!1svi!2s"
                        // width="600"
                        // height="450"
                        // style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ContactAbout;
