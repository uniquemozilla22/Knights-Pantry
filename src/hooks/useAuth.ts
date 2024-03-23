import toast from "react-hot-toast";
import { PostLoginUser, PostLogoutUser } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { responseCheckForError } from "../utils/addons";

const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginUser = async (email: string, password: string) => {
    const response: AxiosResponse = await PostLoginUser(email, password);
    if (responseCheckForError(response)) {
      console.log("Error Occured");
      toast.error(response.data.message);
      setToken("");
      return;
    }
    setToken(response.data.token);
    navigate(`/admin`, { state: response.data });
  };

  
  const isLoggedIn = (): boolean => {
    if (token && token === "") return false;
    else return true;
  };

  const getUserLoggedInData = () => {
    if (state) {
      return state;
    }
    return null;
  };

  const logout = async () => {
    const response = await PostLogoutUser(token);
    if (!responseCheckForError(response)) {
      setToken("");
    } else {
      toast.error("There seems to be somthing wrong with the network");
    }
  };

  return { isLoggedIn, loginUser, getUserLoggedInData, logout };
};

export default useAuth;
