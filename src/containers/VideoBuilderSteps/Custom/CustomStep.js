import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./CustomStep.module.scss";
import * as actions from "../../../store/actions/index";
import Aux from "../../../hoc/_Aux/_Aux";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";
import EditableInput from "../../../components/EditableInput/EditableInput";
import Custom5 from "./Custom5/Custom5";

const CustomStep = (props) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.stepData[props.id] || {};
  });

  const currentScene = useSelector((state) => {
    return state.template.selectedTemplate.sceneBackgrounds.find((s) =>
      props.id.includes(s.id)
    );
  });

  const selectedTemplate = useSelector((state) => {
    return state.template.selectedTemplate;
  });

  const onInitStep = useCallback(
    () => dispatch(actions.updateCurrentStep({ id: props.id, complete: true })),
    [dispatch]
  );

  useEffect(() => {
    onInitStep();
  }, [onInitStep]);

  const changeHandler = (value, key) => {
    dispatch(actions.addStepData({ id: props.id, value, key }));
  };

  const videoUploadHandler = (file) => {
    dispatch(actions.addStepData({ id: props.id, value: file, key: "file" }));
  };

  let content = <div className={classes.Wrapper}></div>;

  if (selectedTemplate.id === 4) {
    content = (
      <div className={classes.Wrapper}>
        <img
          src={
            selectedTemplate.sceneBackgrounds.find((s) =>
              props.id.includes(s.id)
            ).url
          }
        />
        <VideoContainer
          size={currentScene.videoContainer.size}
          position={currentScene.videoContainer.position}
          videoUpload={videoUploadHandler}
          initialFile={data.file}
        />
        <div className={classes.TitleWrapper}>
          <label className={classes.StepTitle}>
            <EditableInput
              placeholder={data.sceneTitle || "Custom"}
              changed={(value) => changeHandler(value, "sceneTitle")}
              inputType="Title"
            />
          </label>
        </div>
      </div>
    );
  } else if (selectedTemplate.id === 5) {
    content = (
      <div className={classes.Wrapper}>
        <img
          src={
            selectedTemplate.sceneBackgrounds.find((s) =>
              props.id.includes(s.id)
            ).url
          }
        />
        <VideoContainer
          size={currentScene.videoContainer.size}
          position={currentScene.videoContainer.position}
          videoUpload={videoUploadHandler}
          initialFile={data.file}
        />
        <div className={classes.TitleWrapper5}>
          <label className={classes.StepTitle5}>
            <EditableInput
              placeholder={data.sceneTitle || "Custom"}
              changed={(value) => changeHandler(value, "sceneTitle")}
              inputType="Title"
            />
          </label>
        </div>
      </div>
    );
  } else if (selectedTemplate.id === 9) {
  }
  if (selectedTemplate.id === 5) {
    content = (
      <Custom5
        currentScene={currentScene}
        videoUploadHandler={videoUploadHandler}
        changeHandler={changeHandler}
        data={data}
        bgUrl={
          selectedTemplate.sceneBackgrounds.find((s) => props.id.includes(s.id))
            .url
        }
      />
    );
  } else if (selectedTemplate.id === 9) {
    content = (
      <div className={classes.Wrapper}>
        <VideoContainer
          size={currentScene.videoContainer.size}
          position={currentScene.videoContainer.position}
          videoUpload={videoUploadHandler}
          initialFile={data.file}
        />
        <div className={classes.BottomBox9}>
          <div className={classes.BottomBoxInner9}>
            <div className={classes.BottomBoxTitleWrapper9}>
              <div className={classes.BottomBoxTitle9}>
                <EditableInput
                  placeholder={data.sceneTitle || "Custom"}
                  changed={(value) => changeHandler(value, "sceneTitle")}
                  inputType="Title9"
                />
              </div>
              <div className={classes.BorderBottom9}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Aux>{content}</Aux>;
};

export default CustomStep;
