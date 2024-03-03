import toast from "react-hot-toast";
import { PostLoginUser } from "../api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);

  const loginUser = async (email: string, password: string) => {
    const data: { status: number; message: string; token: string } =
      await PostLoginUser(email, password);

    if (data.status && data.status !== 200) {
      toast.error(data?.message);
    }

    console.log(setToken);
    setToken(data.token);
  };

  const isLoggedIn = (): boolean => {
    if (token === "") return false;
    else return true;
  };

  return { isLoggedIn, loginUser };
};

export default useAuth;
