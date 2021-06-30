import React, { Component } from "react";
import pc from "../../../Asset/signup.png";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
class Register extends Component {
  check = Yup.object().shape({
    username: Yup.string().required("Required").min(5, "Too Short!"),
    password: Yup.string().required("Required").min(5, "Too Short!"),
    email: Yup.string().required("Required").email("Invalid email"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Invalid phone"),
  });

  handSubmit = (user) => {
    console.log(user);
  };

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
                <img src={pc} alt="login-icon" style={{ maxWidth: 64 }} />
                <div className="login-header">
                  <h4 className="bold color-white">Signup Now!</h4>
                  <h4>
                    <small>Please enter your data to register.</small>
                  </h4>
                </div>
              </div>
              <div className="box login">
                <div className="content-body" style={{ paddingTop: 30 }}>
                  <Formik
                    onSubmit={this.handSubmit}
                    initialValues={{
                      username: "",
                      password: "",
                      email: "",
                      phone: "",
                    }}
                    validationSchema={this.check}
                    render={(envent) => (
                      <Form>
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="col-lg-6 no-pl">
                              <div className="form-group">
                                <label className="form-label">User name</label>
                                <div className="controls">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="enter username"
                                    onChange={envent.handleChange}
                                  />
                                  <ErrorMessage name="username">
                                    {(msg) => (
                                      <div className="text text-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
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
                                    name="email"
                                    placeholder="enter email"
                                    onChange={envent.handleChange}
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
                                    name="password"
                                    placeholder="enter password"
                                    onChange={envent.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 no-pr">
                              <div className="form-group">
                                <label className="form-label">Phone</label>
                                <div className="controls">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="enter phone"
                                    onChange={envent.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pull-left">
                              <Link
                                className="btn btn-primary mt-10 btn-corner right-15"
                                type="submit"
                                onSubmit={this.handSubmit}
                              >
                                Sign up
                              </Link>
                              <Link
                                to="login"
                                className="btn mt-10 ml-5 btn-corner signup"
                              >
                                Login
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  />
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
