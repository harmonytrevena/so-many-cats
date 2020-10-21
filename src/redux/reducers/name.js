import { ACTION_CAT_NAME } from '../actionTypes';

const initialState = "Sunshine";

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CAT_NAME: {
            const { name } = action.payload;
            return name;
        }
        default:
            return state;
    }
}

export default nameReducer;