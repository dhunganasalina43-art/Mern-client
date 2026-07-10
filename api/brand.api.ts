/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";

//* get all
export const getAllBrands = async () => {
  try {
    const response = await api.get("/brands");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* get by id
export const getBrandById = async (id: string) => {
  try {
    const response = await api.get(`/brands/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* create
export const createBrand = async (data: FormData) => {
  try {
    const response = await api.post("/brands", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* update
export const updateBrand = async (
  id: string,
  data: FormData
) => {
  try {
    const response = await api.put(`/brands/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* delete
export const deleteBrand = async (id: string) => {
  try {
    const response = await api.delete(`/brands/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};