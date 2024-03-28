import { IStepTitle } from "../type";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../utils/config";

const baseURL = config.apiLink || "http://localhost:8080/v1/";

const fetchBase = {
  mode: "cors" as RequestMode,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem(config.tokenName),
  },
};

export const getStep = async (step: string) => {};

export const getSteps = async () => {
  const response = await axios(`${baseURL}steps`);
  return response.data;
};

export const PostLoginUser: (
  email: string,
  password: string
) => Promise<AxiosResponse> = async (email, password) => {
  try {
    const response = await axios(`${baseURL}auth/login`, {
      ...fetchBase,
      method: "POST",
      data: JSON.stringify({
        email,
        password,
      }),
    });
    const data = response;
    return data;
  } catch (error: any) {
    console.log(error.response);
    return { ...error.response };
  }
};

export const PostLogoutUser = async () => {
  try {
    const response = await axios(`${baseURL}auth/logout`, {
      ...fetchBase,
      method: "POST",
    });
    const data = response;
    return data;
  } catch (error: any) {
    console.log(error.response);
    return { ...error.response };
  }
};
