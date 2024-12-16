import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import LinkButton from "../components/LinkButton";
import { useTitle } from "../hooks/UseTitle";

export default function Error () {
    useTitle("Page Not Found");
    
    return (
        <div className="py-10 flex flex-col items-center justify-center px-4">
            <FiAlertCircle size={100} className="text-red-500 mb-6" />
            <h1 className="text-5xl font-bold text-megablue mb-4">Page Not Found</h1>
            <p className="text-lg text-center mb-4">
                The page you’re looking for doesn’t seem to exist. It might have been moved or deleted.
                <br />
                You can continue shopping or go back to the home page to find what you’re looking for.
            </p>
            <LinkButton 
                to="/"
                label="Continue Shopping"
            />
        </div>
    );
};