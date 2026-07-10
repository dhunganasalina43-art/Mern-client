/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";

//* get all
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* get by id
export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* create
export const createProduct = async (data: FormData) => {
  try {
    const response = await api.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* update
export const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: FormData;
}) => {
  try {
    const response = await api.put(`/products/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//* delete
export const deleteProduct = async (id: string) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};