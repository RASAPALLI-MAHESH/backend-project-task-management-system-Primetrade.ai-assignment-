import apiClient from '../api/axios';

const adminService = {
  async getUsers() {
    const response = await apiClient.get('/users/getUsers');
    return response.data?.users || [];
  },

  async getTasks() {
    const response = await apiClient.get('/tasks/getTasks');
    return response.data?.tasks || [];
  },

  async createTask(payload) {
    const response = await apiClient.post('/tasks/create', payload);
    return response.data?.task;
  },

  async updateTask(taskId, payload) {
    const response = await apiClient.put(`/tasks/update/${taskId}`, payload);
    return response.data?.task;
  },

  async deleteTask(taskId) {
    const response = await apiClient.delete(`/tasks/delete/${taskId}`);
    return response.data?.task;
  },
};

export default adminService;