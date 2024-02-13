export const Button: React.FC<{
  children: any;
  title: string;
  hover?: boolean;
  link?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, title, hover = true, link = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn rounded-lg p-2 transition ease-in-out ${
        hover && "hover:btn-primary hover:text-secondary"
      } ${link && "btn-link"}`}
    >
      <div className="tooltip" data-tip={title}>
        {children}
      </div>
    </button>
  );
};
