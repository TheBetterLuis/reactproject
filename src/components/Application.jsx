import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Game from "../views/Game";
import Stats from "../views/Stats";
import User from "../views/User";
import Settings from "../views/Settings";
import Register from "../views/Register";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SpaceFill from "./SpaceFill";

import "../css/index.css"
import "../css/general.css"
import "../css/queries.css"
import "../css/accordion.css"

const Application = () => {
  const location = useLocation();
  const noNavbarFooter = ["/login", "/contact"];
  const showNavbarFooter = !noNavbarFooter.includes(location.pathname);
  return (
    <div className="bg-[#dddcdc] dark:bg-[#333] text-[#333] dark:text-[#dddcdc] flex flex-col h-screen overflow-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Game></Game>}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
        <Route path="/stats" element={<Stats></Stats>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/user/:usernameoremail" element={<User></User>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>

        <Route path="/*" element={
          <NotFound></NotFound>
        }></Route>
      </Routes>
      <SpaceFill></SpaceFill>
      <Footer></Footer>
    </div>
  );
};

export default Application;
