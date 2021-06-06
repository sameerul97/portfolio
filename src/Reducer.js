const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        allposts: action.payload,
        posts: action.payload,
      }

    case 'react':
      return {
        ...state,
        posts: state.allposts.filter((post) => post.type === action.payload),
      }
    case 'database':
      return {
        ...state,
        posts: state.allposts.filter((post) => post.type === action.payload),
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
