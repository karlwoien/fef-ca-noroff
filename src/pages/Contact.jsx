import { useForm } from "react-hook-form";
import { useTitle } from "../Hooks/UseTitle";
import LinkButton from "../components/LinkButton";

export default function Contact() {
  useTitle("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {isSubmitted ? (
        <div className="text-center">
          <h1 className="text-5xl font-bold text-megablue">Thank You!</h1>
          <p className="my-4 text-lg">
            Your message has been sent successfully. <br />
            We&apos;ll get back to you as soon as possible.
          </p>
          <LinkButton to="/" label="Continue Shopping" />
        </div>
      ) : (
        <>
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-megablue">Contact us</h1>
            <p className="mt-4 text-lg">
              Have questions about our products or your purchase? <br />
              Reach out to us using the form below. We&apos;re here to help!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-4 rounded-lg border p-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                className="mt-1 w-full rounded border bg-transparent p-2 focus:ring focus:ring-megablue"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input
                {...register("subject", {
                  required: "Subject is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                className="mt-1 w-full rounded border bg-transparent p-2 focus:ring focus:ring-megablue"
                placeholder="Enter the subject"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                className="mt-1 w-full rounded border bg-transparent p-2 focus:ring focus:ring-megablue"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Body */}
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                {...register("body", {
                  required: "Message is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                rows="4"
                className="mt-1 w-full rounded border bg-transparent p-2 focus:ring focus:ring-megablue"
                placeholder="Write your message here"
              ></textarea>
              {errors.body && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.body.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full rounded border py-3 transition duration-300 ${
                isValid
                  ? "border-megablue bg-megablue text-white hover:bg-white hover:text-megablue"
                  : "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-500"
              }`}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
