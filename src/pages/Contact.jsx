import { useForm } from 'react-hook-form';
import { useTitle } from '../Hooks/UseTitle';
import LinkButton from '../components/LinkButton';

export default function Contact() {
    useTitle("Contact");

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitted, isValid }
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="py-10 flex flex-col items-center justify-center px-4">
            {isSubmitted ? (
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-megablue">Thank You!</h1>
                    <p className="text-lg my-4">
                        Your message has been sent successfully. <br />
                        We'll get back to you as soon as possible.
                    </p>
                    <LinkButton to="/" label="Continue Shopping" />
                </div>
            ) : (
                <>
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-megablue">Contact us</h1>
                        <p className="text-lg mt-4">
                            Have questions about our products or your purchase? <br />
                            Reach out to us using the form below. We're here to help!
                        </p>
                    </div>

                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="w-full max-w-lg p-6 rounded-lg border space-y-4"
                    >
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                {...register("fullName", { required: "Full name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                        </div>
                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium">Subject</label>
                            <input
                                {...register("subject", { required: "Subject is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter the subject"
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
                                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        {/* Body */}
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                {...register("body", { required: "Message is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                                rows="4"
                                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Write your message here"
                            ></textarea>
                            {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-full py-3 rounded border transition duration-300 ${isValid ? "bg-megablue text-white hover:bg-white hover:text-megablue border-megablue" : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                            }`}
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};