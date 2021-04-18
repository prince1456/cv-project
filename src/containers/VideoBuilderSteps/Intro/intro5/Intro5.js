import classes from "./Intro5.modules.scss";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "../../../../components/EditableInput2/EditableInput";
import { useEffect, useRef, useState } from "react";
import React from "react";

let globalState = { nameFont: 60, posFont: 60 };

const Intro5 = ({
  currentScene,
  videoUploadHandler,
  changeHandler,
  data,
  bgUrl,
}) => {
  const [NamefontSize, setNameFontsize] = useState(globalState.nameFont);
  const [PosfontSize, setPosFontsize] = useState(globalState.posFont);
  const calculateFontSize = (value, type) => {
    if (type == "name") {
      const NameCharNumber = 15;
      if (value.length < 15) {
        setNameFontsize(60);
        globalState.nameFont = 60;
      } else if (value.length < 20) {
        setNameFontsize(49);
        globalState.nameFont = 49;
      } else if (value.length < 22) {
        setNameFontsize(44);
        globalState.nameFont = 44;
      } else if (value.length < 25) {
        setNameFontsize(40);
        globalState.nameFont = 40;
      } else {
        setNameFontsize(30);
        globalState.nameFont = 30;
      }
    }
    if (type == "position") {
      const NameCharNumber = 15;
      if (value.length < 15) {
        globalState.posFont = 60;
        setPosFontsize(60);
      } else if (value.length < 20) {
        globalState.posFont = 49;
        setPosFontsize(49);
      } else if (value.length < 22) {
        globalState.posFont = 44;
        setPosFontsize(44);
      } else if (value.length < 25) {
        globalState.posFont = 40;
        setPosFontsize(40);
      } else if (value.length < 30) {
        globalState.posFont = 35;
        setPosFontsize(35);
      } else {
        globalState.posFont = 35;
        setPosFontsize(35);
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
          right: "1%",
          top: "40%",
          width: "32%",
          textAlign: "center",
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
