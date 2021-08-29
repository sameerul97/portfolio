import { ActionType } from "../action-types"
import { Work, WorkButtonFilters } from "../state"

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

type ProductPayload = {

    [ActionType.SET_WORK]: {
        work: Work[];
        filterButtons: WorkButtonFilters[];
    };

    [ActionType.all]: {
    };

    [ActionType.react]: {
    };

    [ActionType.vanilla]: {
    };

    [ActionType.webgl]: {
    };

    [ActionType.database]: {
    };

    [ActionType.node]: {
    };

    [ActionType.SET_ERROR]: {
        message: string;
    }
}

export type Actions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

