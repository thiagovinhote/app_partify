import { create } from 'apisauce';

const api = create({
  baseURL: 'https://apipartify.herokuapp.com',
});

api.setHeader(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNTNmN2FlN2VlYWJkZTMxZTEyZGMyNyIsImlhdCI6MTUxNTU5NTEyNSwiZXhwIjoxNTE1NjgxNTI1fQ.Yf9SpQHFuRvZjdQH4yM1LEVR_n4BCV_5oMhqORfONK8',
);

export default api;
