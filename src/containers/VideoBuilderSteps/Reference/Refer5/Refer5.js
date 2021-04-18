import classes from "./Refer5.module.css";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput/EditableInput";

const Refer5 = ({
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
        <label className={classes.StepTitle5}>Reference</label>
      </div>
      <div className={classes.TextBox5}>
        <div className={classes.TextBoxInner}>
          <EditableInput
            placeholder={data.name || "Name"}
            changed={(value) => changeHandler(value, "name")}
            inputType="InlineSecondaryTitle5"
          />
          <br></br>
          <EditableInput
            placeholder={data.position || "Position"}
            changed={(value) => changeHandler(value, "position")}
            inputType="InlineSecondaryPosition5"
          />
        </div>
      </div>
    </div>
  );
};

export default Refer5;
