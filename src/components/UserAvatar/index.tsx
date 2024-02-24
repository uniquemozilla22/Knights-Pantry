interface IUserAvatarProps {
  settingDirection?: "top" | "bottom" | "left" | "right";
  username: string;
}

const UserAvatar: React.FC<IUserAvatarProps> = ({
  settingDirection = "bottom",
  username,
}) => {
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
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
};

export default UserAvatar;
