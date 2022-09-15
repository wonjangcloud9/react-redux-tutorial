import { createAction, handleActions } from 'redux-actions';

const INCRESE = 'counter/INCRESE';
const DECRESE = 'counter/DECRESE';

export const increase = createAction(INCRESE);
export const decrease = createAction(DECRESE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCRESE]: (state, action) => ({ number: state.number + 1 }),
    [DECRESE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
