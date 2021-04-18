import classes from "./WhyMe5.module.css";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput/EditableInput";

const WhyMe5 = ({
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
        <label className={classes.StepTitle}>WHY ME</label>
      </div>
      <div className={classes.TextBox5}>
        <div className={classes.TextBoxInner5}>
          <EditableInput
            placeholder={data.trait1 || "Disciplined"}
            changed={(value) => changeHandler(value, "trait1")}
            inputType="InlinePrimaryTitle5Oranged"
          />
          <EditableInput
            placeholder={data.trait2 || "Structured"}
            changed={(value) => changeHandler(value, "trait2")}
            inputType="InlinePrimaryTitle5Oranged"
          />
          <EditableInput
            placeholder={data.trait3 || "Always smiling"}
            changed={(value) => changeHandler(value, "trait3")}
            inputType="InlinePrimaryTitle5Oranged"
          />
          <EditableInput
            placeholder={data.trait4 || "Good overview"}
            changed={(value) => changeHandler(value, "trait4")}
            inputType="InlinePrimaryTitle5Oranged"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMe5;
