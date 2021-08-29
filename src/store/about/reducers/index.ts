import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import type { InitialStateType, About } from '../state'

const AboutReducer = (state: InitialStateType, action: Action): InitialStateType => {
    switch (action.type) {
        case ActionType.SET_ABOUT: {

            return {
                ...state,
                aboutData: action.payload,
                selectedInfo: action.payload.find((a: About) => a.filterName === 'mainSkills').info,
                aboutButtonFilters: action.payload.map((b: About) => {
                    return { id: b.id, filterName: b.filterName, name: b.name }
                }),
            }
        }

        case ActionType.mainSkills: {
            return {
                ...state,
                selectedInfo: state.aboutData.find((a: About) => a.filterName === action.type)!.info,
            }
        }

        case ActionType.education: {
            return {
                ...state,
                selectedInfo: state.aboutData.find((a: About) => a.filterName === action.type)!.info,
            }
        }

        case ActionType.experience: {
            return {
                ...state,
                selectedInfo: state.aboutData.find((a: About) => a.filterName === action.type)!.info,
            }
        }

        case ActionType.SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }

        default:
            return state;

    }
}

export default AboutReducer
