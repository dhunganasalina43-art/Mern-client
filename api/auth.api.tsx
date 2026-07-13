/* eslint-disable @typescript-eslint/no-explicit-any */
import { TLoginInput, TRegisterInput } from "@/types/auth.types";
import api from ".";

// login
export const login = async (data: TLoginInput) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// login
export const register = async (data: TRegisterInput) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

//get profile

export const getProfile = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};