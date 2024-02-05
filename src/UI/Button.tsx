export const Button: React.FC<{
  children: any;
  title: string;
  hover?: boolean;
}> = ({ children, title, hover = true, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn btn-ghost rounded-lg p-2 transition ease-in-out ${
        hover && "hover:btn-primary hover:text-secondary"
      }`}
    >
      <div className="tooltip" data-tip={title}>
        {children}
      </div>
    </button>
  );
};
