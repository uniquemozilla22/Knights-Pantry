import { LoginIcon, MoonIcon, SunIcon } from "../../assets/Icon";
import useAuth from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

interface IUserAvatarProps {
  settingDirection?: "top" | "bottom" | "left" | "right";
  username: string;
}

const UserAvatar: React.FC<IUserAvatarProps> = ({
  settingDirection = "bottom",
  username,
}) => {
  const { theme, changeTheme } = useTheme();
  const { logout } = useAuth();
  return (
    <details className={`dropdown dropdown-${settingDirection} w-full`}>
      <summary className="m-1 btn w-full avatar">
        <div className="bg-neutral text-neutral-content rounded-full p-1">
          <span className="text">{username[0].toLowerCase()}</span>
        </div>
        <p>{username}</p>
      </summary>
      <ul className="w-full p-2 shadow menu menu-vertical dropdown-content z-[1] bg-base-100 rounded-box">
        <li>
          {theme === "winter" ? (
            <label htmlFor="theme" className=" cursor-pointer">
              <SunIcon size={24} /> Light Mode
            </label>
          ) : (
            <label htmlFor="theme" className=" cursor-pointer">
              <MoonIcon size={24} /> Dark Mode
            </label>
          )}
          <input
            id="theme"
            type="checkbox"
            className="toggle hidden"
            onChange={changeTheme}
          />
        </li>
        <li>
          <p onClick={logout}>
            <LoginIcon size={24} />
            Logout
          </p>
        </li>
      </ul>
    </details>
  );
};

export default UserAvatar;
