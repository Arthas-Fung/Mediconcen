import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://mediconcen.000webhostapp.com/',
    timeout: 2000,
    headers: {'content-type': 'application/json'}
});

export const Net = (api, params) => {
  return instance.get(api, params)
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
    throw error;
  });
}