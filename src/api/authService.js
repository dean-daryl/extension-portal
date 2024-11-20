import apiClient from "./apiClient.js";


export const login = async (credentials)=> {
  try {
    const response = await apiClient.post<LoginResponse>("auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (credentials) => {
    try {
      const response = await apiClient.post('user/create', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  };