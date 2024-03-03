import toast from "react-hot-toast";
import { PostLoginUser } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginUser = async (email: string, password: string) => {
    const data: any = await PostLoginUser(email, password);

    console.log(data, "data");
    if (data.code === 400) {
      toast.error(data?.message);
      return;
    }
    setToken(data.token);
    navigate(`/admin`, { state: data });
  };

  const isLoggedIn = (): boolean => {
    if (token === "") return false;
    else return true;
  };

  const getUserLoggedInData = () => {
    if (state) {
      return state;
    }
    return null;
  };

  return { isLoggedIn, loginUser, getUserLoggedInData };
};

export default useAuth;
