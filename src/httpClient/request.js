import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const Net = async (api, params) => {
  return await instance.post(api, params)
  .then(function (response) {
    console.log(response);
    // return response;
  })
  .catch(function (error) {
    console.log(error);
    throw error;
  });
}