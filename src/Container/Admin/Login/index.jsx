import React, { Component } from "react";
import pc from "../../../Asset/Image/icon/padlock.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { fetchLogin } from "./module/actions";
import { useDispatch } from "react-redux";
function Login(props) {

  const dispatch = useDispatch();
  const handleSubmit = (user) => {
    console.log(user);
    dispatch(fetchLogin(user, props.history));
  };

  return (
    <div className="login_page">
      <div className="container-fluid">
        <div className="login-wrapper row">
          <div
            id="login"
            className="login loginpage col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-4"
          >
            <div className="login-form-header">
              <img src={pc} alt="login-icon" style={{ maxWidth: 64 }} />
              <div className="login-header">
                <h4 className="bold color-white">Login Now!</h4>
                <h4>
                  <small>Please enter your credentials to login.</small>
                </h4>
              </div>
            </div>
            <div className="box login">
              <div className="content-body" style={{ paddingTop: 30 }}>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  // validationSchema={check}
                  render={(envent) => (
                    <Form
                      id="msg_validate"
                      action="#"
                      noValidate="novalidate"
                      className="no-mb no-mt"
                    >
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="controls">
                              <Field
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="email"
                                onChange={envent.handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="controls">
                              <Field
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="password"
                                onChange={envent.handleChange}
                              />
                            </div>
                          </div>
                          <div className="pull-left">
                            <button className="btn btn-primary mt-10 btn-corner right-15">
                              Log in
                            </button>
                            <Link
                              to="register"
                              className="btn mt-10 ml-5 btn-corner signup"
                            >
                              Sign up
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
              <a className="pull-left" href="#" title="Password Lost and Found">
                Forgot password?
              </a>
              <Link className="pull-right" to="register" title="Sign Up">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
