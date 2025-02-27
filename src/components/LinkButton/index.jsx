import { Link } from "react-router-dom";

export default function LinkButton({
  to,
  label,
  className,
  ...props
}) {
  return (
    <Link
      to={to}
      className={`btn m-4 rounded border border-megablue bg-megablue px-4 py-3 text-center text-white transition duration-300 hover:bg-white hover:text-megablue ${className}`}
      {...props}
    >
      {label}
    </Link>
  );
}
