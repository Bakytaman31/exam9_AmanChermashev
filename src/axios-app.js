import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'https://contacts-book-53059.firebaseio.com/'
});

export default axiosApp