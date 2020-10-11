import api from './config';

const Characters = {
  getCharacters: async ({ id }: { id?: number }) => {
    const params: { characterId?: number } = {};
    if (id) {
      params.characterId = id;
    }
    const response = await api.get(`/characters${params.characterId ? `/${params.characterId}` : ''}`);
    return response.data;
  },

  getCharacterReleases: async ({ id }: { id?: number }) => {
    const response = await api.get(`/characters/${id}/comics`, {
      params: {
        limit: 10,
        orderBy: '-onsaleDate',
      }
    });
    return response.data;
  },
};

export default Characters;
