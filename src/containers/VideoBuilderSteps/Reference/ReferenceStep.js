import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./ReferenceStep.module.scss";
import * as actions from "../../../store/actions/index";
import Aux from "../../../hoc/_Aux/_Aux";
import EditableInput from "../../../components/EditableInput/EditableInput";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";
import Refer5 from "./Refer5/Refer5";

const ReferenceStep = (props) => {
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
          <label className={classes.StepTitle}>Reference</label>
        </div>
        <div className={classes.TextBox}>
          <div className={classes.TextBoxInner}>
            <EditableInput
              placeholder={data.name || "Name"}
              changed={(value) => changeHandler(value, "name")}
              inputType="InlinePrimaryTitle"
            />
            <EditableInput
              placeholder={data.position || "Position"}
              changed={(value) => changeHandler(value, "position")}
              inputType="InlineSecondaryTitle"
            />
          </div>
        </div>
      </div>
    );
  }
  if (selectedTemplate.id === 5) {
    content = (
      <Refer5
        currentScene={currentScene}
        videoUploadHandler={videoUploadHandler}
        changeHandler={changeHandler}
        data={data}
        bgUrl={
          selectedTemplate.sceneBackgrounds.find((s) => props.id.includes(s.id))
            .url
        }
        limitation={selectedTemplate.sceneBackgrounds[3].inputLimit}
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
        <div className={classes.Box9}>
          <div className={classes.BoxInner9}>
            <p className={classes.ReferenceTitle9}>Reference</p>
            <div className={classes.BorderBottom9}></div>
            <div className={classes.ReferenceText9}>
              <EditableInput
                placeholder={data.name || "Name"}
                changed={(value) => changeHandler(value, "name")}
                inputType="InlinePrimaryTitle9"
              />
              <EditableInput
                placeholder={data.position || "Position"}
                changed={(value) => changeHandler(value, "position")}
                inputType="InlineSecondaryTitle9"
              />
              <EditableInput
                placeholder={data.company || "Company"}
                changed={(value) => changeHandler(value, "company")}
                inputType="InlineSecondaryTitle9"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Aux>{content}</Aux>;
};

export default ReferenceStep;
