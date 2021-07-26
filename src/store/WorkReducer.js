function WorkReducer(state, action) {
  switch (action.type) {
    case 'SET_WORK': {
      return {
        ...state,
        workData: action.payload.work,
        selectedInfo: action.payload.work,
        workFilterButtons: action.payload.filterButtons.map((b) => {
          return { id: b.id, filterName: b.filterName, name: b.filterName }
        }),
      }
    }

    case 'all':
      return {
        ...state,
        selectedInfo: state.workData,
      }

    case 'react':
      return {
        ...state,
        selectedInfo: state.workData.filter((i) => i.filterName === action.type),
      }

    case 'vanilla':
      return {
        ...state,
        selectedInfo: state.workData.filter((i) => i.filterName === action.type),
      }

    case 'webgl':
      return {
        ...state,
        selectedInfo: state.workData.filter((i) => i.filterName === action.type),
      }

    case 'database':
      return {
        ...state,
        selectedInfo: state.workData.filter((i) => i.filterName === action.type),
      }

    case 'node':
      return {
        ...state,
        selectedInfo: state.workData.filter((i) => i.filterName === 'node'),
      }

    default:
      throw new Error()
  }
}
export default WorkReducer
