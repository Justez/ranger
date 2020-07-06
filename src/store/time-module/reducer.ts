import { handleActions } from 'redux-actions';

import { actions } from '.';
import type { DefaultState } from './types'

export const defaultState: DefaultState = {
    times: ['14:30', '09:23'],
    ranges: ['13:30-15:00', '15:15-16:00'],
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.addTime.toString()]: (state, { payload }) =>
        ({ ...state, times: [...state.times, payload] }),
    [actions.addRange.toString()]: (state, { payload }) =>
        ({ ...state, ranges: [...state.ranges, payload] }),
    [actions.removeTime.toString()]: (state, { payload }) =>
        ({
            ...state,
            times: state.times.filter(time => time !== payload)
        }),
    [actions.removeRange.toString()]: (state, { payload }) =>
        ({
            ...state,
            ranges: state.ranges.filter(range => range !== payload)
        }),
},
    defaultState,
);

export default reducer;