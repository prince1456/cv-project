import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./PresentYourselfStep.module.scss";
import * as actions from "../../../store/actions/index";
import Aux from "../../../hoc/_Aux/_Aux";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";
import Preset5 from "./Present5/Present5";
const PresentYourselfStep = (props) => {
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

  const videoUploadHandler = (file) => {
    dispatch(actions.addStepData({ id: props.id, value: file, key: "file" }));
  };

  return (
    <Aux>
      {selectedTemplate.id === 5 ? (
        <Preset5
          currentScene={currentScene}
          videoUploadHandler={videoUploadHandler}
          data={data}
          bgUrl={
            selectedTemplate.sceneBackgrounds.find((s) =>
              props.id.includes(s.id)
            ).url
          }
          selectedTemplate={selectedTemplate}
        />
      ) : (
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
            <label className={classes.StepTitle}>Who am I</label>
          </div>
        </div>
      )}
    </Aux>
  );
};

export default PresentYourselfStep;
