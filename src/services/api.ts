const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getPosts() {
    const response = await fetch(`${API_BASE_URL}/posts?_limit=10`);
    if (!response.ok) throw new Error('Erro ao buscar posts');
    return response.json();
  },
};