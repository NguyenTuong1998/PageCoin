import React, { Component } from "react";
import pc from "../../../Asset/signup.png";
import {Link} from 'react-router-dom';
class Register extends Component {
  render() {
    return (
      <div className="login_page">
        <div className="container-fluid">
          <div className="login-wrapper row">
            <div
              id="login"
              className="login loginpage col-lg-offset-2 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-8"
            >
              <div className="login-form-header">
                <img
                  src={pc}
                  alt="login-icon"
                  style={{ maxWidth: 64 }}
                />
                <div className="login-header">
                  <h4 className="bold color-white">Signup Now!</h4>
                  <h4>
                    <small>Please enter your data to register.</small>
                  </h4>
                </div>
              </div>
              <div className="box login">
                <div className="content-body" style={{ paddingTop: 30 }}>
                  <form
                    id="msg_validate"
                    action="#"
                    noValidate="novalidate"
                    className="no-mb no-mt"
                  >
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="col-lg-6 no-pl">
                          <div className="form-group">
                            <label className="form-label">User name</label>
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                name="formfield2"
                                placeholder="enter username"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 no-pr">
                          <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                name="formfield1"
                                placeholder="enter email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 no-pl">
                          <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="controls">
                              <input
                                type="password"
                                className="form-control"
                                name="formfield2"
                                placeholder="enter password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 no-pr">
                          <div className="form-group">
                            <label className="form-label">
                              Repeat Password
                            </label>
                            <div className="controls">
                              <input
                                type="password"
                                className="form-control"
                                name="formfield1"
                                placeholder="repeat password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="pull-left">
                          <a
                            href="index-dashboard-2.html"
                            className="btn btn-primary mt-10 btn-corner right-15"
                          >
                            Sign up
                          </a>
                          <Link
                            to="login"
                            className="btn mt-10 ml-5 btn-corner signup"
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <p id="nav">
                <a
                  className="pull-left"
                  href="#"
                  title="Password Lost and Found"
                >
                  Forgot password?
                </a>
                <Link className="pull-right" to="login" title="Sign Up">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
