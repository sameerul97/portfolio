import { ActionType } from "../action-types/index"
import { Actions } from "../actions"
import type { InitialStateType, Work, WorkButtonFilters } from '../state'

function WorkReducer(state: InitialStateType, action: Actions) {
    switch (action.type) {
        case ActionType.SET_WORK: {
            return {
                ...state,
                workData: action.payload.work,
                selectedInfo: action.payload.work,
                workFilterButtons: action.payload.filterButtons.map((b: WorkButtonFilters) => {
                    return { id: b.id, filterName: b.filterName, name: b.filterName }
                }),
            }
        }

        case ActionType.all:
            return {
                ...state,
                selectedInfo: state.workData,
            }

        case ActionType.react:
            return {
                ...state,
                selectedInfo: state.workData.filter((i) => i.filterName === action.type),
            }

        case ActionType.vanilla:
            return {
                ...state,
                selectedInfo: state.workData.filter((i) => i.filterName === action.type),
            }

        case ActionType.webgl:
            return {
                ...state,
                selectedInfo: state.workData.filter((i) => i.filterName === action.type),
            }

        case ActionType.database:
            return {
                ...state,
                selectedInfo: state.workData.filter((i) => i.filterName === action.type),
            }

        case ActionType.node:
            return {
                ...state,
                selectedInfo: state.workData.filter((i) => i.filterName === action.type),
            }

        case ActionType.SET_ERROR: {
            return {
                ...state,
                error: action.payload.message,
            }
        }

        default:
            return state;
    }
}

export default WorkReducer

