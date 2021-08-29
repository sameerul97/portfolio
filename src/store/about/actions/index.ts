import { ActionType } from "../action-types"
import { About } from "../state"
interface SetAbout {
    type: ActionType.SET_ABOUT;
    payload: About[];
}

interface SetError {
    type: ActionType.SET_ERROR;
    payload: string;
}

interface SetMainSkills {
    type: ActionType.mainSkills | string;
    payload?: any;
}

interface SetEducation {
    type: ActionType.education | string;
    payload?: any;
}

interface SetExperience {
    type: ActionType.experience | string;
    payload?: any;
}

export type Action = SetAbout | SetError | SetMainSkills | SetEducation |
    SetExperience;