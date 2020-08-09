import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
? 'http://192.168.2.102:3333'
: 'https://nlw-proffy-api-rest.herokuapp.com/';

const api = axios.create({
  baseURL,
});

export default api;
