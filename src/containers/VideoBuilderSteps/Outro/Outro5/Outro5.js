import classes from "./Outro5.module.scss";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput/EditableInput";

const Outro5 = ({
  currentScene,
  changeHandler,
  videoUploadHandler,
  data,
  bgUrl,
  limitation,
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
        <EditableInput
          placeholder={data.sceneTitle || "Thanks for your attention"}
          changed={(value) => changeHandler(value, "sceneTitle")}
          inputType="TitleOutro5"
          limit={limitation.limit1}
        />
      </div>
      <div className={classes.TextBox5}>
        <div className={classes.TextBoxInner5}>
          <EditableInput
            placeholder={
              data.freeText ||
              "I would be happy to contribute to your organization"
            }
            changed={(value) => changeHandler(value, "freeText")}
            inputType="FreeText"
            limit={limitation.limit2}
          />
        </div>
      </div>
    </div>
  );
};

export default Outro5;
