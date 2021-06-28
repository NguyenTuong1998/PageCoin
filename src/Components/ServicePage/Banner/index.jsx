import React, { Component } from 'react';
import banner from "../../../Asset/Image/banner_service.jpg"; 
import {Link} from 'react-router-dom'
class BannerService extends Component {
    render() {
        return (
          <div className="f-banner_title">
            <img
              src={banner}
              className="img-responsive"
              alt
            />
            <div className="f-inner_title container">
              <div className="row">
                <ul className="f-breadcrumbs">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>Services</span>
                  </li>
                </ul>
                <h1>Services</h1>
              </div>
            </div>
          </div>
        );
    }
}

export default BannerService;