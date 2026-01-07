import axios from "axios";
import { api } from "./axios";

export async function login(
  password: string
): Promise<{ authenticated: boolean; message: string }> {
  try {
    const response = await api.post("/auth/login", { password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data || { message: "Login failed" });
    else throw new Error(`Unexpected error: ${error}`);
  }
}

export async function verify(): Promise<{
  authenticated: boolean;
  message: string;
}> {
  try {
    const response = await api.get("/auth/verify", { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(`Invalid token: ${error}`);
  }
}

export async function logout(): Promise<{
  authenticated: boolean;
  message: string;
}> {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch {
    throw new Error("Unexpected error occured");
  }
}
