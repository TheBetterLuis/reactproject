import {GiRock, GiPaper, GiScissors, GiSly, GiShakingHands, GiCrestedHelmet} from "react-icons/gi";
import {IoIosSad} from "react-icons/io";
import {parseActiveUser, isSomeoneLogged} from "../js/utils";
import {users} from "../js/users";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Stats = () => {
  const currentUsers = users;
  const currentUser = parseActiveUser();
  const foundUser = currentUsers.find(user => user.username === currentUser.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSomeoneLogged()) {
      navigate('/404')
    }
  });



  return (
    <>
      {isSomeoneLogged() &&
        <div className="grid-stats">
          <GiSly className="win-icon "></GiSly>
          <div className="rock-stats ">{`Total Wins ${foundUser.stats.total.wins}`}</div>
          <GiShakingHands className="win-icon "></GiShakingHands>
          <div className="rock-stats ">{`Total Draws ${foundUser.stats.total.draws}`}</div>
          <IoIosSad className="win-icon "></IoIosSad>
          <div className="rock-stats ">{`Total Losses ${foundUser.stats.total.losses}`}</div>
          <GiCrestedHelmet className="win-icon "></GiCrestedHelmet>
          <div className="rock-stats ">{`Total Matches ${foundUser.stats.total.matches}`}</div>         <GiRock className="stats-icon "></GiRock>
          <div className="rock-stats ">{`Rock Wins ${foundUser.stats.wins.rock}`}</div>
          <GiPaper className="stats-icon "></GiPaper>
          <div className="paper-stats ">{`Paper Wins ${foundUser.stats.wins.paper}`}</div>
          <GiScissors className="stats-icon "></GiScissors>
          <div className="scissors-stats ">{`Scissors Wins ${foundUser.stats.wins.scissors}`}</div>
        </div>
      }
    </>
  );
}

export default Stats;

