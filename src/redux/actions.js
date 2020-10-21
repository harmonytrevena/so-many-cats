import { ACTION_ACTIVITY, ACTION_CAT_NAME, ACTION_ADD_CAT } from './actionTypes';

export const setActivity = ({id, activity}) => ({
    type: ACTION_ACTIVITY,
    payload: {
        id,
        activity
    }
});

export const setName = name => ({
    type: ACTION_CAT_NAME,
    payload: {
        name
    }
});

export const addCat = ({ name, activity }) => ({
    type: ACTION_ADD_CAT,
    payload: {
        name,
        activity
    }
});