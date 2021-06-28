import "./App.css";
import HomePage from "./Container/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome, routeAdmin } from "./router/index";
import LayoutHome from "../src/Container/index";
import LayOutAdmin from "../src/Container/Admin/index";
import pageNotFound from "../src/Container/Error";
import Login from "./Container/Admin/Login";
import Register from "./Container/Admin/Register";
function App() {
  const showLayOutHome = (router) => {
    if (router && router.length > 0) {
      return router.map((item, index) => {
        return (
          <LayoutHome
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };
  const showLayOutAdmin = (router) => {
    if (router && router.length > 0) {
      return router.map((item, index) => {
        return (
          <LayOutAdmin
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showLayOutHome(routeHome)}
        {showLayOutAdmin(routeAdmin)}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={pageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
