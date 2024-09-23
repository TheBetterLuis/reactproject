import {GiRock, GiPaper, GiScissors} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import {MdPerson} from "react-icons/md";
import {HiMiniTrophy} from "react-icons/hi2";
import ThemeToggle from "./Themetoggle";
import {TbLogout, TbLogin2} from "react-icons/tb";
import {isSomeoneLogged, isAdminLogged, parseActiveUser} from "../js/utils";
import SpaceFill from '../components/SpaceFill'
import {RiToolsFill} from "react-icons/ri";

const Navbar = () => {
  const currentUser = parseActiveUser();

  const handleLogOut = () => {
    localStorage.removeItem('activeUser');
  }

  return (
    <>
      <nav>
        <div className="logos">
          <NavLink to="/game">
            <GiRock className="hover-color nav-icon"></GiRock>
            <GiPaper className="hover-color nav-icon"></GiPaper>
            <GiScissors className="hover-color nav-icon"></GiScissors>
          </NavLink>
        </div>
        <SpaceFill></SpaceFill>
        {isSomeoneLogged() &&
          <div className="theBox">
            <NavLink to="/stats">
              <HiMiniTrophy className="nav-icon hover-color"></HiMiniTrophy>
            </NavLink>
          </div>
        }
        <SpaceFill></SpaceFill>
        <ul className="nav-items">
          <li>

            {isSomeoneLogged() &&
              <NavLink to={`/user/${currentUser.username}`}>
                <RiToolsFill className="nav-icon hover-color"></RiToolsFill>
              </NavLink>
            }
          </li>
          <li>

            {!isSomeoneLogged() &&
              <NavLink to="/login">
                <TbLogin2 className="nav-icon hover-color"></TbLogin2>
              </NavLink>
            }
            {isSomeoneLogged() &&
              <NavLink to="/login" onClick={handleLogOut}>
                <TbLogout className="nav-icon hover-color"></TbLogout>
              </NavLink>
            }
          </li>
          <li>
            <ThemeToggle></ThemeToggle>
          </li>
        </ul>
      </nav>
      <div className="user-name-nav mb-6">
        <h1>{currentUser.username}</h1>
      </div>
    </>
  );
};

export default Navbar;
