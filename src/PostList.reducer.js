// ACTION-ÖK
export const SET_LIST = 'SET_LIST';

// REDUCER
const PostListReducer = (state, action) => {
  switch (action.type) {

    // Ha a SET_LIST actiont használjuk akkor a listát betölti:
    case SET_LIST:
      return action.list;

    // Ha valami ismeretlen action-t adunk át, akkor pedig a state-et betölti:
    default:
      return state;
  }
};

export default PostListReducer;
