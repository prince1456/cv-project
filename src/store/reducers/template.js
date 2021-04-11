import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  selectedTemplate: null,
  templates: [
    {
      id: 1,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/1. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/1. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/1.svg',
      sceneBackgrounds: [
        {
          id: 'intro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/1.svg',
          videoContainer: {
            size: '58%',
            position: { top: '31%' }
          }
        },
        {
          id: 'presentYourself',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/2.svg'
        },
        {
          id: 'experience',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/3.svg'
        },
        {
          id: 'reference',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/4.svg'
        },
        {
          id: 'whyMe',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/5.svg'
        },
        {
          id: 'outro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/6.svg'
        },
        {
          id: 'custom',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/1-cvvideo/svg/7.svg'
        }
      ]
    },
    {
      id: 2,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/2-cvvideo/2. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/2. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/2.svg'
    },
    {
      id: 3,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/3-cvvideo/3. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/3. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/3.svg'
    },
    {
      id: 4,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/4. CV- Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/4. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/4.svg',
      sceneBackgrounds: [
        {
          id: 'intro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/1.svg',
          videoContainer: {
            size: '60%',
            position: { top: '30%' }
          }
        },
        {
          id: 'presentYourself',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/2.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        },
        {
          id: 'experience',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/3.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%', left: 0 }
          }
        },
        {
          id: 'reference',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/4.svg',
          videoContainer: {
            size: '65%',
            position: { top: '27%', left: '4%' }
          }
        },
        {
          id: 'whyMe',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/5.svg',
          videoContainer: {
            size: '52%',
            position: { top: '27%' }
          }
        },
        {
          id: 'outro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/6.svg',
          videoContainer: {
            size: '42%',
            position: { top: '36.1%', left: '5.9%' }
          }
        },
        {
          id: 'custom',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/4-cvvideo/svg/7.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        }
      ]
    },
    {
      id: 5,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/5-cvvideo/5. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/5. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/5.svg'
    },
    {
      id: 6,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/6-cvvideo/6. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/6. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/6.svg'
    },
    {
      id: 7,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/7. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/7. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/7.svg',
      sceneBackgrounds: [
        {
          id: 'intro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/1.svg',
          videoContainer: {
            size: '100%',
            position: { top: 0, left: 0 }
          }
        },
        {
          id: 'presentYourself',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/2.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        },
        {
          id: 'experience',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/3.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%', left: 0 }
          }
        },
        {
          id: 'reference',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/4.svg',
          videoContainer: {
            size: '65%',
            position: { top: '27%', left: '4%' }
          }
        },
        {
          id: 'whyMe',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/5.svg',
          videoContainer: {
            size: '52%',
            position: { top: '27%' }
          }
        },
        {
          id: 'outro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/6.svg',
          videoContainer: {
            size: '42%',
            position: { top: '36.1%', left: '5.9%' }
          }
        },
        {
          id: 'custom',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/7-cvvideo/svg/7.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        }
      ]
    },
    {
      id: 8,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/8. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/8. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/8.svg',
      sceneBackgrounds: [
        {
          id: 'intro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/1.svg',
          videoContainer: {
            size: '73%',
            position: { top: '13%', left: 0 }
          }
        },
        {
          id: 'presentYourself',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/2.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        },
        {
          id: 'experience',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/3.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%', left: 0 }
          }
        },
        {
          id: 'reference',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/4.svg',
          videoContainer: {
            size: '65%',
            position: { top: '27%', left: '4%' }
          }
        },
        {
          id: 'whyMe',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/5.svg',
          videoContainer: {
            size: '52%',
            position: { top: '27%' }
          }
        },
        {
          id: 'outro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/6.svg',
          videoContainer: {
            size: '42%',
            position: { top: '36.1%', left: '5.9%' }
          }
        },
        {
          id: 'custom',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/8-cvvideo/svg/7.svg',
          videoContainer: {
            size: '81%',
            position: { top: '19%' }
          }
        }
      ]
    },
    {
      id: 9,
      videoSrc: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/9. CV-Video.mp4',
      thumbnail: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/9. CHOOSE TEMPLATE.png',
      sceneBackgroundSmall: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/template-images/9.svg',
      sceneBackgrounds: [
        {
          id: 'intro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/1.svg',
          videoContainer: {
            size: '59.4%',
            position: { top: '20.4%', left: '5.5%' }
          }
        },
        {
          id: 'presentYourself',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/2.svg',
          videoContainer: {
            size: '69%',
            position: { top: '16%', right: 0 }
          }
        },
        {
          id: 'experience',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/3.svg',
          videoContainer: {
            size: '64%',
            position: { top: '18%', left: 0 }
          }
        },
        {
          id: 'reference',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/4.svg',
          videoContainer: {
            size: '100%',
            position: { top: '0', left: '0' }
          }
        },
        {
          id: 'whyMe',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/5.svg',
          videoContainer: {
            size: '100%',
            position: { top: 0 }
          }
        },
        {
          id: 'outro',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/6.svg',
          videoContainer: {
            size: '44%',
            position: { top: '29%', left: '5.5%' }
          }
        },
        {
          id: 'custom',
          url: 'https://q270xp2833h17mswdslynm.azureedge.net/templatefiles/9-cvvideo/svg/7.svg',
          videoContainer: {
            size: '100%',
            position: { top: 0 }
          }
        }
      ]
    }
  ]
}

const setTemplate = (state, action) => {
  return updateObject(state, { selectedTemplate: action.payload })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEMPLATE: return setTemplate(state, action);
    default: return state;
  }
};

export default reducer;