import { AxiosResponse } from "axios";

export const responseCheckForError = (response: AxiosResponse) =>
  response.status.toString()[0] === "4";
