export const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export function request(query: string, method = {}) {
  return fetch(query, method)
    .then(response => response.json());
}

export const getUsers = (query=`${API_URL}/users?page=1&count=5`) => request(query);

export const getPositions = () => request(`${API_URL}/positions`);

export const getToken = () => request(`${API_URL}/token`);

export const addUser = (formData: FormData, token: string) => (
  request('/comments', {
    method: 'POST',
    headers: {
      'Token': token,
    },
    body: formData,
  })
);

// export const getUserById = (userId: number): Promise<User> => request(`/users/${userId}`);

// export const deleteTodoById = (todoId: number): Promise<number> => request(`todos/${todoId}`, { method: 'DELETE' });
