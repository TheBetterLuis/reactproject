import {isAdminLogged} from "../js/utils";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {users} from "../js/users";

const Settings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLogged()) {
      navigate('/404')
    }

  });

  function handleClick(name) {

    const element = document.getElementById(`${name}`);
    element.classList.toggle('open');

  }

  return (
    <>
      {isAdminLogged() &&
        <div>the settings</div>
      }
      {users.map(user =>

        <div id={user.username} className="item" onClick={() => {

          handleClick(`${user.username}`)
        }}>
          <p className="number invisible">01</p>
          <p className="text">{`${user.username} / ${user.email}`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div className="hidden-box">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            </p>

            <ul>
              <li>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              </li>
              <li>
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                sanctus est
              </li>
              <li>
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              </li>
              <li>
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Settings;
