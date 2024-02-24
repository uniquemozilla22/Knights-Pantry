import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import {
  HomeIcon,
  LoginIcon,
  MoonIcon,
  ReStartIcon,
  SunIcon,
} from "../../assets/Icon";
import { useTheme } from "../../hooks/useTheme";
import useStep from "../../hooks/useStep";

export const Navigation: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  const { active, restartStep } = useStep();
  const navigate = useNavigate();
  return (
    <div className="fixed flex flex-col gap-2 top-5 left-5">
      {theme === "winter" ? (
        <label htmlFor="theme" className=" btn cursor-pointer">
          <SunIcon size={24} />
        </label>
      ) : (
        <label htmlFor="theme" className=" btn cursor-pointer">
          <MoonIcon size={24} />
        </label>
      )}

      <input
        id="theme"
        type="checkbox"
        className="toggle hidden"
        onChange={changeTheme}
      />
      {location?.pathname !== "/" && (
        <Button title="Go to Home" link={false} onClick={() => navigate(".")}>
          <HomeIcon size={24} />
        </Button>
      )}
      {location?.pathname !== "/admin/login" && (
        <Button
          title="Admin Login"
          link={true}
          onClick={() => navigate("/admin/login")}
        >
          <LoginIcon size={24} />
        </Button>
      )}
      {active !== 0 && (
        <Button
          title="Continue to Steps"
          link={false}
          onClick={() => restartStep()}
        >
          <ReStartIcon size={24} />
        </Button>
      )}
    </div>
  );
};
