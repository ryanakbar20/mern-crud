import { FETCH_PAGE } from '../types';

const initState = {};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
