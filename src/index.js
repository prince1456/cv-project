import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import templateReducer from './store/reducers/template'
import introFormReducer from './store/reducers/introForm'
import experienceFormReducer from './store/reducers/experienceForm'
import sceneReducer from './store/reducers/scene'
import videoBuilderReducer from './store/reducers/videoBuilder'
import stepDataReducer from './store/reducers/stepData'
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  template: templateReducer,
  introForm: introFormReducer,
  scene: sceneReducer,
  videoBuilder: videoBuilderReducer,
  experienceForm: experienceFormReducer,
  stepData: stepDataReducer
});

const store = createStore(rootReducer, composeEnhancers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
