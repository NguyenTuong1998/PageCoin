import ContactPage from "../Container/Contact";
import Homepage from "../Container/Homepage";
import Service from "../Container/Service";
import Ico from "../Container/Ico";
import About from "../Container/About"
import Blog from "../Container/Blog"
import Blog_List from "../Container/Blog_List";
import Blog_Full from "../Container/Blog_Full";
import BlogDetail from "../Container/Blog_Detail";
import ServiceDetail from "../Container/Service_Detail";
import TeamPage from "../Container/Team";
import Partner from "../Container/Partner";
import Dashboard from "../Container/Admin/Dashboard"
import Wallet_page from "../Container/Admin/My_wallet";
import Security_Page from "../Container/Admin/Security";
import BuyPage from "../Container/Admin/BuyPage";
import ProgramPage from "../Container/Admin/ProgramPage";
import ViewTrack from "../Container/Admin/ViewTrack";
import IcoUserPage from "../Container/Admin/IcoUserPage";
import IcoAdminPage from "../Container/Admin/IcoAdminPage";
import PagementPage from "../Container/Admin/PaymentPage";
import SettingPage from "../Container/Admin/SettingPage";
const routeHome = [
  {
    exact: true,
    path: "/",
    Component: Homepage,
  },
  {
    exact: false,
    path: "/service",
    Component: Service,
  },
  {
    exact: false,
    path: "/contact",
    Component: ContactPage,
  },
  {
    exact: false,
    path: "/ico",
    Component: Ico,
  },
  {
    exact: false,
    path: "/about",
    Component: About,
  },
  {
    exact: false,
    path: "/blog",
    Component: Blog,
  },
  {
    exact: false,
    path: "/side_blog",
    Component: Blog_List,
  },
  {
    exact: false,
    path: "/blog_full",
    Component: Blog_Full,
  },
  {
    exact: false,
    path: "/blog_detail",
    Component: BlogDetail,
  },
  {
    exact: false,
    path: "/service_detail",
    Component: ServiceDetail,
  },
  {
    exact: false,
    path: "/team",
    Component: TeamPage,
  },
  {
    exact: false,
    path: "/partner",
    Component: Partner,
  },
];

const routeAdmin = [
  {
    exact: true,
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    exact: false,
    path: "/wallet",
    Component: Wallet_page,
  },
  {
    exact: false,
    path: "/security",
    Component: Security_Page,
  },
  {
    exact: false,
    path: "/buy",
    Component: BuyPage,
  },
  {
    exact: false,
    path: "/program",
    Component: ProgramPage,
  },
  {
    exact: false,
    path: "/viewTrack",
    Component: ViewTrack,
  },
  {
    exact: false,
    path: "/icoUser",
    Component: IcoUserPage,
  },
  {
    exact: false,
    path: "/icoAdmin",
    Component: IcoAdminPage,
  },
  {
    exact: false,
    path: "/payment",
    Component: PagementPage,
  },
  {
    exact: false,
    path: "/setting",
    Component: SettingPage,
  },
];
export { routeHome, routeAdmin };
