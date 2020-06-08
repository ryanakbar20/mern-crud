import { CHECKOUT_BOOKING } from '../types';

const initState = null;

export default function (state = initState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;

    default:
      return state;
  }
}
