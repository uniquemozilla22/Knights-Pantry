import { MailIcon } from "../../assets/Icon";

export const Navigation: React.FC = () => {
  return (
    <div className="fixed flex flex-col gap-2 top-5 left-5">
      <button className="btn btn-primary btn-neutral">
        <MailIcon size={42} />
      </button>
      <div>
        <MailIcon size={42} />
      </div>
    </div>
  );
};
