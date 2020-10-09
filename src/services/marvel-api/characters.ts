import api from './config';

const Characters = {
  getCharacters: async () => {
    const response = await api.get('/characters');
    return response.data;
  },
};

export default Characters;
