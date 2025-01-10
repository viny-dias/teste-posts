const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getPosts() {
    const response = await fetch(`${API_BASE_URL}/posts?_limit=10`);
    if (!response.ok) throw new Error('Erro ao buscar posts');
    return response.json();
  },

  async createPost(data: { title: string; body: string }) {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error('Erro ao criar post');
    return response.json();
  },

  async updatePost(id: number, data: { title: string; body: string }) {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error('Erro ao atualizar post');
    return response.json();
  },

  async deletePost(id: number) {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar post');
    return response.json();
  },
};