/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";

//* get all
export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* get by id
export const getCategoryById = async (id: string) => {
  try {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* create
export const createCategory = async (data: FormData) => {
  try {
    const response = await api.post("/categories", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* update
export const updateCategory = async (
  id: string,
  data: FormData
) => {
  try {
    const response = await api.put(`/categories/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* delete
export const deleteCategory = async (id: string) => {
  try {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};