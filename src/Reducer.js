const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        allposts: action.payload,
        posts: action.payload.find((a) => a.filterName === 'mainSkills').info,
        button: action.payload.map(({ filterName }) => filterName),
      }

    case 'mainSkills': {
      return {
        ...state,
        posts: state.allposts.find((a) => a.filterName === action.type).info,
      }
    }

    case 'education': {
      return {
        ...state,
        posts: state.allposts.find((a) => a.filterName === action.type).info,
      }
    }

    case 'experience': {
      return {
        ...state,
        posts: state.allposts.find((a) => a.filterName === action.type).info,
      }
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
