import React, { useState } from 'react';

export const VideoBuilderContext = React.createContext({
  steps: [],
  selectedTemplate: {},
  setSelectedTemplate: (template) => { }
})

export default props => {
  const [template, setTemplate] = useState()
  const [builderSteps, setBuilderSteps] = useState(
    [
      {
        id: 1,
        title: 'Choose template',
        complete: false
      },
      {
        id: 2,
        title: 'Intro',
        complete: false
      }
    ]
  )

  const setSelectedTemplate = template => {
    setTemplate(template)
  }

  return (
    <VideoBuilderContext.Provider
      value={{ selectedTemplate: template, setSelectedTemplate, steps: builderSteps }}
    >
      {props.children}
    </VideoBuilderContext.Provider>
  );
};
