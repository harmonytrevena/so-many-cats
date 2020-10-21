import { ACTION_ACTIVITY, ACTION_CAT_NAME, ACTION_ADD_CAT } from "../actionTypes";

const initialState = {
    cats: {
        1001: {
            name: "Sunshine",
            activity: "playing",
        },
        1002: {
            name: "Raven",
            activity: "eating",
        },
    },
}

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CAT_NAME: {
            const { name } = action.payload;
            return name;
        }
        case ACTION_ACTIVITY: {
            const { id, activity } = action.payload;
            const name = state.cats[id].name;
            return {
                cats: {
                    ...state.cats,
                    [id]: { name, activity }
                }
            }
        }
        case ACTION_ADD_CAT: {
            const { name, activity } = action.payload;
            const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            return {
                cats: {
                    ...state.cats,
                    [id]: { name, activity}
                }
            }
        }
        default:
            return state;
    }
}

export default catReducer;
