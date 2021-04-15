import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./WhyMeStep.module.scss";
import * as actions from "../../../store/actions/index";
import Aux from "../../../hoc/_Aux/_Aux";
import EditableInput from "../../../components/EditableInput/EditableInput";
import VideoContainer from "../../../components/VideoContainer/VideoContainer";

const WhyMeStep = (props) => {
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
            Why should you consider me
          </label>
        </div>
        <div className={classes.TextBox}>
          <div className={classes.TextBoxInner}>
            <EditableInput
              placeholder={data.trait1 || "Disciplined"}
              changed={(value) => changeHandler(value, "trait1")}
              inputType="InlinePrimaryTitle"
            />
            <EditableInput
              placeholder={data.trait2 || "Structured"}
              changed={(value) => changeHandler(value, "trait2")}
              inputType="InlinePrimaryTitle"
            />
            <EditableInput
              placeholder={data.trait3 || "Always smiling"}
              changed={(value) => changeHandler(value, "trait3")}
              inputType="InlinePrimaryTitle"
            />
            <EditableInput
              placeholder={data.trait4 || "Good overview"}
              changed={(value) => changeHandler(value, "trait4")}
              inputType="InlinePrimaryTitle"
            />
          </div>
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
          <label className={classes.StepTitle}>WHY ME</label>
        </div>
        <div className={classes.TextBox5}>
          <div className={classes.TextBoxInner5}>
            <EditableInput
              placeholder={data.trait1 || "Disciplined"}
              changed={(value) => changeHandler(value, "trait1")}
              inputType="InlinePrimaryTitle"
            />
            <br></br>
            <EditableInput 
              placeholder={data.trait2 || "Structured"}
              changed={(value) => changeHandler(value, "trait2")}
              inputType="InlinePrimaryTitle"
            />
            <br></br>
            <EditableInput
              placeholder={data.trait3 || "Always smiling"}
              changed={(value) => changeHandler(value, "trait3")}
              inputType="InlinePrimaryTitle"
            />
            <br></br>
            <EditableInput
              placeholder={data.trait4 || "Good overview"}
              changed={(value) => changeHandler(value, "trait4")}
              inputType="InlinePrimaryTitle"
            />
          </div>
        </div>
      </div>
    );
  } else if (selectedTemplate.id === 9) {
    content = (
      <div className={classes.Wrapper}>
        {/* <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url} /> */}
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
                <p className={classes.WhyMeTitle9}>Why me</p>
              </div>
              <div className={classes.BorderBottom9}></div>
            </div>
            <div className={classes.BottomBoxTraitsWrapper9}>
              <div className={classes.BottomBoxTraitsInner9}>
                <EditableInput
                  placeholder={data.trait1 || "Disciplined"}
                  changed={(value) => changeHandler(value, "trait1")}
                  inputType="Trait9"
                />
                <EditableInput
                  placeholder={data.trait2 || "Structured"}
                  changed={(value) => changeHandler(value, "trait2")}
                  inputType="Trait9"
                />
                <EditableInput
                  placeholder={data.trait3 || "Always smiling"}
                  changed={(value) => changeHandler(value, "trait3")}
                  inputType="Trait9"
                />
                <EditableInput
                  placeholder={data.trait4 || "Good overview"}
                  changed={(value) => changeHandler(value, "trait4")}
                  inputType="Trait9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Aux>{content}</Aux>;
};

export default WhyMeStep;
