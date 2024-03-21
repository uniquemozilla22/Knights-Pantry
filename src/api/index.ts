import { IStepTitle } from "../type";
import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = "http://localhost:8080/v1/";

const fetchBase = {
  mode: "cors" as RequestMode,
  headers: {
    "Content-Type": "application/json",
  },
};
const fakeData = {
  steps: [
    {
      id: 2,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 3,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            "  access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 4,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 5,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
  ],
};

export const getStep = async (id: string) => {
  let data;
  try {
    const response = await fetch("http://localhost:3000/steps?id=" + id);

    if (response.status === 200) {
      data = await response.json();
    } else {
      data = fakeData.steps.filter((step) => step.id === parseInt(id));
    }
  } catch (error) {
    data = fakeData.steps.filter((step) => step.id === parseInt(id));
  }

  return { data: data[0] };
};

export const getSteps = async () => {
  let data;
  try {
    const response = await axios("http://localhost:3000/steps");
    if (response.status === 200) {
      data = await response.json();
    } else {
      data = fakeData;
    }
  } catch {
    data = fakeData;
  }

  return data;
};

export const getStepTitle: () => Promise<IStepTitle[]> = async () => {
  // try {
  // const response = await fetch("http://localhost:3000/steps");
  // if (response.status === 200) {
  // data = await response.json();
  // } else {
  const data = fakeData.steps.map((step) => ({
    title: step.title,
    id: step.id,
  }));
  // }
  // } catch {
  // data = fakeData;
  // }

  return data;
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

export const PostLogoutUser = async (token: string) => {
  try {
    const response = await axios(`${baseURL}auth/logout`, {
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
