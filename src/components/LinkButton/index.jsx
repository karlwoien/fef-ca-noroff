import { Link } from "react-router-dom";

export default function LinkButton({ to, label, className, icon: Icon, ...props }) {
    return (
        <Link
            to={to}
            className={`btn bg-megablue text-white text-center m-4 py-3 px-4 rounded hover:bg-white hover:text-megablue  border border-megablue transition duration-300 ${className}`}
            {...props}
        >
            {label}
        </Link>
    );
}