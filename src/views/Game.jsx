import {isAdminLogged, parseActiveUser, isSomeoneLogged} from "../js/utils";
import {GiRock, GiPaper, GiScissors} from "react-icons/gi";
import {users} from "../js/users";
import {rps} from "../js/rps";
import SpaceFill from "../components/SpaceFill";
import {AiOutlineRobot} from "react-icons/ai";
const Game = () => {
  const currentUsers = users;
  const player = parseActiveUser();
  let optionEnemy
  const rngPick = Math.trunc(Math.random() * (4 - 1) + 1);

  switch (rngPick) {
    case 1: optionEnemy = 'rock'; break;
    case 2: optionEnemy = 'paper'; break;
    case 3: optionEnemy = 'scissors'; break;
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="title">Choose your weapon!</div>
        <div className="grid-game">
          <SpaceFill></SpaceFill>
          <GiRock className="rock game-icon box-effect" onClick={() => {rps('rock', player, currentUsers)}}></GiRock>
          <GiPaper className="paper game-icon box-effect" onClick={() => {rps('paper', player, currentUsers)}}></GiPaper>
          <GiScissors className="scissors game-icon box-effect" onClick={() => {rps('scissors', player, currentUsers)}}></GiScissors>
        </div>
        <div className="versus">VS</div>
        <div className="cpu game-icon box-effect">
          <AiOutlineRobot className="robot-icon"></AiOutlineRobot>
        </div>
      </div>
    </>
  );
}

export default Game;
