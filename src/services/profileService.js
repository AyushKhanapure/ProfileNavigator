import axios from "axios";

const API_URL = "http://localhost:3000"; // Use the local json-server URL

export const getProfiles = async () => {
  const response = await axios.get(`${API_URL}/profiles`);
  return response.data;
};

export const addProfile = async (profile) => {
  const response = await axios.post(`${API_URL}/profiles`, profile);
  return response.data;
};

export const editProfile = async (id, profile) => {
  const response = await axios.put(`${API_URL}/profiles/${id}`, profile);
  return response.data;
};

export const deleteProfile = async (id) => {
  const response = await axios.delete(`${API_URL}/profiles/${id}`);
  return response.data;
};
