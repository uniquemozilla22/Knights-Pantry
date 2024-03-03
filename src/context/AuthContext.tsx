import { createContext, useEffect, useState } from "react";
import config from "../utils/config";

interface IAuthContext {
  token: string;
  setToken: (s: string) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem(config.tokenName) || ""
  );

  const persistToken = (token: string = "") => {
    localStorage.setItem(config.tokenName, token);
    setToken(token);
  };

  const defaultValue: IAuthContext = {
    token,
    setToken: persistToken,
  };

  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};
