import { Button } from "../../UI/Button";
import { MoonIcon, SunIcon } from "../../assets/Icon";
import { useTheme } from "../../hooks/useTheme";

export const Navigation: React.FC = () => {
  const { theme, changeTheme } = useTheme();
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
    </div>
  );
};
