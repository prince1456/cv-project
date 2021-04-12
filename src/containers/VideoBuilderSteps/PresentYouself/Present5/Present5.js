import classes from "./PresentYourselfStep.module.scss";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";

const Preset5 = ({ currentScene, videoUploadHandler, data, bgUrl }) => {
  return (
    <div className={classes.Wrapper}>
      <img src={bgUrl} />
      <VideoContainer
        size={currentScene.videoContainer.size}
        position={currentScene.videoContainer.position}
        videoUpload={videoUploadHandler}
        initialFile={data.file}
      />
      <div className={classes.TitleWrapper}>
        <label className={classes.StepTitle}>Who am I</label>
      </div>
    </div>
  );
};

export default Preset5;
