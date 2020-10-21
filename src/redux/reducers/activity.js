import { ACTION_ACTIVITY } from '../actionTypes';

const initialState = {
    activity: "napping",
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ACTIVITY: {
            const { activity } = action.payload;
            return {
                ...state,
                activity
            }
        }
        default:
            return state;
    }
};

export default activityReducer;