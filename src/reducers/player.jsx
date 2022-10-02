export const SELECT = 'PLAYER/SELECT';

export const selectVideo = (selectedVideo) => ({ type: SELECT, selectedVideo });

const initialState = {
  selectedVideo: null,
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selectedVideo: action.selectedVideo,
      };

    default:
      return state;
  }
};

export default player;
