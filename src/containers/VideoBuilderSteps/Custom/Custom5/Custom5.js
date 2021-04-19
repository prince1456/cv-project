import classes from "./Custom5.module.css";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "src/components/EditableInput/EditableInput";

const Custom5 = ({
  currentScene,
  changeHandler,
  videoUploadHandler,
  data,
  bgUrl,
  limitation
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
          placeholder={data.sceneTitle || "Custom"}
          changed={(value) => changeHandler(value, "sceneTitle")}
          inputType="TitleCumtom5"
          limit={limitation}
        />
      </div>
    </div>
  );
};

export default Custom5;
