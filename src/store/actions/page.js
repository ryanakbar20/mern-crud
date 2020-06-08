import { FETCH_PAGE } from '../types';
import axios from 'axios';

export const fetchPage = (url, page) => (dispatch) => {
  axios.get(url).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
