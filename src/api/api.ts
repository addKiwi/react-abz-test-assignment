export const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5';

// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5') .then(function(response) { return response.json(); }) .then(function(data) { console.log(data); if(data.success) {   } else {  } }) 

export function request(query: string, method = {}) {
    return fetch(query, method)
      .then(response => response.json());
  }

export const getUsers = (query=API_URL) => request(query);

// export const getUserById = (userId: number): Promise<User> => request(`/users/${userId}`);

// export const deleteTodoById = (todoId: number): Promise<number> => request(`todos/${todoId}`, { method: 'DELETE' });
