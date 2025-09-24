import apiService from './apiService';

const authService = {
  async login(email, password) {
    return apiService.post('/auth/login', { email, password });
  },

  async register(name, email, password) {
    return apiService.post('/entities/User', { name, email, password, role: 'Worker' });
  },

  async getProfile() {
    return apiService.get('/auth/me');
  },
};

export default authService;
