import classes from "./intro4.modules.scss";
import VideoContainer from "../../../../components/VideoContainer/VideoContainer";
import EditableInput from "../../../../components/EditableInput/EditableInput";

const Intro5 = ({
  currentScene,
  videoUploadHandler,
  changeHandler,
  data,
  bgUrl,
}) => {
  return (
    <div className={classes.Wrapper4}>
      <img src={bgUrl} />
      <VideoContainer
        size={currentScene.videoContainer.size}
        position={currentScene.videoContainer.position}
        videoUpload={videoUploadHandler}
        initialFile={data.file}
      />
      <div className={classes.TitleWrapper5}>
        <EditableInput
          inputType="Title5"
          placeholder={data.name || "Your name here"}
          changed={(value) => changeHandler(value, "name")}
        />
        <EditableInput
          inputType="SubTitle5"
          placeholder={data.title || "Your title here"}
          changed={(value) => changeHandler(value, "title")}
        />
      </div>
    </div>
  );
};
export default Intro5;
