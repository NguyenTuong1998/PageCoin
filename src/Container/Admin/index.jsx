import React from "react";
import { Route } from "react-router-dom";
import HeaderAdmin from "../../Components/ADMIN/header";
import Menu from "../../Components/ADMIN/Menu";

function LayHomeAdmin(props) {
  return (
    <>
      <HeaderAdmin />
      <Menu />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayHomeAdmin>
          <Component {...propsComponent} />
        </LayHomeAdmin>
      )}
    />
  );
}
