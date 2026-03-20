import axios from "axios";

const API_URL = "http://localhost:3001/accounts";

export const getAccounts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const updateAccount = async (id, data) => {
  const res = await axios.patch(`${API_URL}/${id}`, data);
  return res.data;
};

export const getAccountById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};