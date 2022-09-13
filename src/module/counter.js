const INCRESE = 'counter/INCRESE';
const DECRESE = 'counter/DECRESE';

export const increase = () => ({ type: INCRESE });
export const decrease = () => ({ type: DECRESE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCRESE:
      return {
        number: state.number + 1,
      };
    case DECRESE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
