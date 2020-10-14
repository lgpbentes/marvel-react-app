import api from './config';

const Characters = {
  getCharacters: async ({ id, query, offset = 0 }: { id?: number, query?: string, offset?: number }) => {
    const params: { characterId?: number, name?: string, offset: number, limit: number } = { offset, limit: 20 };
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
