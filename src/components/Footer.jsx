import {FaRegCopyright} from "react-icons/fa";
import {GiRock, GiPaper, GiScissors} from "react-icons/gi";
import SpaceFill from "./SpaceFill";

const Footer = () => {

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }


  return (
    <>
      <footer>
        <div className="logos">
          <GiRock className="footer-icon"></GiRock>
          <GiPaper className=" footer-icon"></GiPaper>
          <GiScissors className=" footer-icon"></GiScissors>
        </div>
        <ul className="copyright-items ">
          <li>
            <FaRegCopyright className="footer-icon "></FaRegCopyright>
          </li>
          <li>
            <p>
              {getCurrentYear()} Rock, Paper, Scissors. All rights reserved.
            </p>
          </li>
        </ul>
        <SpaceFill></SpaceFill>
      </footer>
    </>
  );
};

export default Footer;
