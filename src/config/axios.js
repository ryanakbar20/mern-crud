import axios from 'axios';
import errorResponseHandler from './errorResponseHandler';

const baseUrl = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

baseUrl.interceptors.response.use((response) => response, errorResponseHandler);

export default baseUrl;
