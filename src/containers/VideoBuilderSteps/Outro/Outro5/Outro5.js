import classes from "./Outro5.module.css";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput/EditableInput";

const Outro5 = ({
  currentScene,
  changeHandler,
  videoUploadHandler,
  data,
  bgUrl,
}) => {
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
        <label className={classes.StepTitl5}>
          <EditableInput
            placeholder={
              data.sceneTitle || "Thank you for watching my CV-VIDEO"
            }
            changed={(value) => changeHandler(value, "sceneTitle")}
            inputType="TitleOutro5"
          />
        </label>
      </div>
      <div className={classes.TextBox5}>
        <div className={classes.TextBoxInner5}>
          <EditableInput
            placeholder={
              data.freeText || "I look forward contributing to your corporation"
            }
            changed={(value) => changeHandler(value, "freeText")}
            inputType="FreeText"
          />
        </div>
      </div>
    </div>
  );
};

export default Outro5;
