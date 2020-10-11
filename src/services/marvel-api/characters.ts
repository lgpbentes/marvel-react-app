import api from './config';

const Characters = {
  getCharacters: async ({ id, query }: { id?: number, query?: string }) => {
    const params: { characterId?: number, name?: string } = {};
    if (id) {
      params.characterId = id;
    }

    if (query) {
      params.name = query;
    }

    const response = await api.get(`/characters${params.characterId ? `/${params.characterId}` : ''}`, { params });
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
