import {BsEmojiDizzy} from "react-icons/bs";
import {GiPaper} from "react-icons/gi";
import SpaceFill from "../components/SpaceFill";

const NotFound = () => {
  return (
    <>
      <SpaceFill></SpaceFill>
      <div className="flex">
        <SpaceFill></SpaceFill>
        <GiPaper className="not-found nf-left"></GiPaper>
        <BsEmojiDizzy className="not-found nf-middle"></BsEmojiDizzy>
        <GiPaper className="not-found nf-right"></GiPaper>
        <SpaceFill></SpaceFill>
      </div>
      <div className="flex">
        <SpaceFill></SpaceFill>
        <h1 className="text-6xl not-found-text">404 - Not Found</h1>
        <SpaceFill></SpaceFill>
      </div>
      <SpaceFill></SpaceFill>
    </>
  );
}

export default NotFound;
