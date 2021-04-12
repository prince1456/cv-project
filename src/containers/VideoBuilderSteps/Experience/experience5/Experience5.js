import React from "react";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import classes from "./Experience5.module.scss";

const Experience5 = ({
  addMoreHandler,
  currentScene,
  videoUploadHandler,
  data,
  experiences,
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
      <div className={classes.title}>Experiences</div>
      <div className={classes.ExperienceBox5}>{experiences}</div>
      <button
        disabled={data.experiences && data.experiences.length === 4}
        style={{
          width: "40%",
          textAlign: "center",
          bottom: "5%",
          position: "absolute",
          fontSize: "22px",
        }}
        onClick={addMoreHandler}
      >
        Add experience
      </button>
    </div>
  );
};
export default Experience5;
