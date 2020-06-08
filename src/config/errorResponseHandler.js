import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function error(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500 || 404) {
        message = 'something went wrong';
      }
    } else {
      message = error.response.message;
    }

    console.log(message);

    toast(message);

    return Promise.reject(error);
  }
}

export default error;
