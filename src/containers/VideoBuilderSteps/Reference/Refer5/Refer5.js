import classes from "./Refer5.module.css";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput2/EditableInput";
import { useState } from "react";

let globalState = { nameFont: 60, posFont: 60 };
const Refer5 = ({
  currentScene,
  changeHandler,
  videoUploadHandler,
  data,
  bgUrl,
}) => {
  const [NamefontSize, setNameFontsize] = useState(globalState.nameFont);
  const [PosfontSize, setPosFontsize] = useState(globalState.posFont);
  const calculateFontSize = (value, type) => {
    if (type == "name") {
      const NameCharNumber = 15;
      if (value.length < 12) {
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
    <div className={classes.Wrapper}>
      <img src={bgUrl} />
      <VideoContainer
        size={currentScene.videoContainer.size}
        position={currentScene.videoContainer.position}
        videoUpload={videoUploadHandler}
        initialFile={data.file}
      />
      <div className={classes.TitleWrapper5}>
        <label className={classes.StepTitle5}>Reference</label>
      </div>
      <div className={classes.TextBox5}>
        <div className={classes.TextBoxInner}>
          <EditableInput
            placeholder={data.name || "Name"}
            changed={(value) => changeHandler(value, "name")}
            inputType="InlineSecondaryTitle5"
            calculateFontSize={calculateFontSize}
            fontSize={NamefontSize}
            type="name"
            limit={30}
          />
          <br></br>
          <EditableInput
            placeholder={data.position || "Position"}
            changed={(value) => changeHandler(value, "position")}
            inputType="InlineSecondaryPosition5"
            calculateFontSize={calculateFontSize}
            fontSize={PosfontSize}
            type="position"
            limit={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Refer5;
