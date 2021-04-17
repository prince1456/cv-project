import classes from "./Intro5.modules.scss";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "../../../../components/EditableInput2/EditableInput";
import { useState } from "react";

const Intro5 = ({
  currentScene,
  videoUploadHandler,
  changeHandler,
  data,
  bgUrl,
}) => {
  const [NamefontSize, setNameFontsize] = useState(60);
  const [PosfontSize, setPosFontsize] = useState(60);

  const calculateFontSize = (value, type) => {
    if (type == "name") {
      const NameCharNumber = 15;
      if (value.length < 15) {
        setNameFontsize(60);
      } else if (value.length < 20) {
        setNameFontsize(49);
      } else if (value.length < 22) {
        setNameFontsize(44);
      } else if (value.length < 25) {
        setNameFontsize(40);
      } else {
        console.log("to much name");
      }
    }
    if (type == "position") {
      const NameCharNumber = 15;
      if (value.length < 15) {
        setPosFontsize(60);
      } else if (value.length < 20) {
        setPosFontsize(49);
      } else if (value.length < 22) {
        setPosFontsize(44);
      } else if (value.length < 25) {
        setPosFontsize(40);
      } else if (value.length < 30) {
        setPosFontsize(35);
      } else {
        console.log("to much name");
      }
    }
  };

  return (
    <div className={classes.Wrapper4}>
      <img src={bgUrl} />
      <VideoContainer
        size={currentScene.videoContainer.size}
        position={currentScene.videoContainer.position}
        videoUpload={videoUploadHandler}
        initialFile={data.file}
      />
      <div
        className={classes.TitleWrapper5}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "2%",
          top: "40%",
        
        }}
      >
        <EditableInput
          inputType="Title5"
          placeholder={data.name || "Your name here"}
          changed={(value) => changeHandler(value, "name")}
          calculateFontSize={calculateFontSize}
          fontSize={NamefontSize}
          type="name"
          limit={30}
        />
        <EditableInput
          inputType="SubTitle5"
          placeholder={data.title || "Your title here"}
          changed={(value) => changeHandler(value, "title")}
          calculateFontSize={calculateFontSize}
          fontSize={PosfontSize}
          type="position"
          limit={30}
        />
      </div>
    </div>
  );
};
export default Intro5;
