export const Button = ({ className = "", icon, label, ...props }) => {
  return (
    <button className={`btn btn-active btn-primary ${className}`} {...props}>
      {label}
      {icon}
    </button>
  );
};


