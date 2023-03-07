import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64023428f61d96ac4865f91d.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
