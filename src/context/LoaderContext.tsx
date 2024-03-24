import { createContext, useContext, useState } from "react";

export type LOADING_ACTIONS = "USER/LOGIN" | "STEPS/FETCH";

interface ILoaderContext {
  loading: string[];
  createLoading: (payload: LOADING_ACTIONS) => void;
  removeLoading: (payload: LOADING_ACTIONS) => void;
}

export const LoaderContext = createContext<ILoaderContext>({
  loading: [] as Array<LOADING_ACTIONS>,
  createLoading: () => {},
  removeLoading: () => {},
});

export const LoaderContextProvider = ({ children }) => {
  const [loading, setLoadingState] = useState<Array<LOADING_ACTIONS>>([]);

  const createLoading = (payload: LOADING_ACTIONS) => {
    const updatedLoading = loading;
    updatedLoading.push(payload);
    setLoadingState([...updatedLoading]);
  };

  const removeLoading = (payload: LOADING_ACTIONS) => {
    const updatedLoading = loading;
    const index = updatedLoading.findIndex((data) => data === payload);
    updatedLoading.splice(index, 1);
    setLoadingState([...updatedLoading]);
  };

  return (
    <LoaderContext.Provider value={{ loading, createLoading, removeLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
