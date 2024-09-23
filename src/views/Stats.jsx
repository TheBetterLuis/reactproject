import {GiRock, GiPaper, GiScissors, GiSly, GiShakingHands} from "react-icons/gi";
import {PiSmileySadLight} from "react-icons/pi";
import {parseActiveUser} from "../js/utils";
import {users} from "../js/users";

const Stats = () => {
  const currentUsers = users;
  const currentUser = parseActiveUser();
  const foundUser = currentUsers.find(user => user.username === currentUser.username);

  return (
    <>
      <div className="grid-stats">
        <GiSly className="win-icon "></GiSly>
        <div className="rock-stats ">{`Total Wins ${foundUser.stats.total.wins}`}</div>
        <GiShakingHands className="win-icon "></GiShakingHands>
        <div className="rock-stats ">{`Total Draws ${foundUser.stats.total.draws}`}</div>
        <PiSmileySadLight className="win-icon "></PiSmileySadLight>
        <div className="rock-stats ">{`Total Losses ${foundUser.stats.total.losses}`}</div>
        <GiRock className="stats-icon "></GiRock>
        <div className="rock-stats ">{`Rock Wins ${foundUser.stats.wins.rock}`}</div>
        <GiPaper className="stats-icon "></GiPaper>
        <div className="paper-stats ">{`Paper Wins ${foundUser.stats.wins.paper}`}</div>
        <GiScissors className="stats-icon "></GiScissors>
        <div className="scissors-stats ">{`Scissors Wins ${foundUser.stats.wins.scissors}`}</div>
      </div>
    </>
  );
}

export default Stats;

