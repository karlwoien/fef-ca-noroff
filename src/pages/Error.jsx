import { FiAlertCircle } from "react-icons/fi";
import LinkButton from "../components/LinkButton";
import { useTitle } from "../Hooks/UseTitle";

export default function Error() {
  useTitle("Page Not Found");

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <FiAlertCircle size={100} className="mb-6 text-red-500" />
      <h1 className="mb-4 text-5xl font-bold text-megablue">Page Not Found</h1>
      <p className="mb-4 text-center text-lg">
        The page you’re looking for doesn’t seem to exist. It might have been
        moved or deleted.
        <br />
        You can continue shopping or go back to the home page to find what
        you’re looking for.
      </p>
      <LinkButton to="/" label="Continue Shopping" />
    </div>
  );
}
