export const Button: React.FC<{
  children: any;
  title: string;
  hover?: boolean;
  link?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, title, className, hover = true, link = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn rounded-lg  transition ease-in-out tooltip tooltip-aut ${
        hover && "hover:btn-primary hover:text-secondary"
      } ${link && "btn-link"} ${className}`}
      data-tip={title}
    >
      {children}
    </button>
  );
};
