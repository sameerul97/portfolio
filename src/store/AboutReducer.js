const AboutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ABOUT': {
      return {
        ...state,
        aboutData: action.payload,
        selectedInfo: action.payload.find((a) => a.filterName === 'mainSkills').info,
        aboutButtonFilters: action.payload.map((b) => {
          return { id: b.id, filterName: b.filterName, name: b.name }
        }),
      }
    }

    case 'mainSkills': {
      return {
        ...state,
        selectedInfo: state.aboutData.find((a) => a.filterName === action.type).info,
      }
    }

    case 'education': {
      return {
        ...state,
        selectedInfo: state.aboutData.find((a) => a.filterName === action.type).info,
      }
    }

    case 'experience': {
      return {
        ...state,
        selectedInfo: state.aboutData.find((a) => a.filterName === action.type).info,
      }
    }

    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    
    default:
      return state
  }
}

export default AboutReducer
