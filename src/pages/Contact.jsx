import React, { useState } from 'react';
import { useTitle } from '../Hooks/UseTitle';
import LinkButton from '../components/LinkButton';

export default function Contact() {
    useTitle("Contact");

    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Validering av et enkelt felt
    const validateField = (name, value) => {
        let error = '';

        if (name === 'fullName' && value.trim().length < 3) {
            error = 'Full name must be at least 3 characters.';
        } else if (name === 'subject' && value.trim().length < 3) {
            error = 'Subject must be at least 3 characters.';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Please enter a valid email address.';
        } else if (name === 'body' && value.trim().length < 3) {
            error = 'Message must be at least 3 characters.';
        }

        return error;
    };

    // Full validering av skjemaet
    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Valider feltet mens det skrives
        const fieldError = validateField(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldError }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Full validering av hele skjemaet
        const formErrors = validateForm();
        setErrors(formErrors);

        // Hvis det er feil, ikke fortsett
        if (Object.keys(formErrors).length > 0) {
            return;
        }

        // Hvis ingen feil, vis suksessside
        console.log('Form Data:', formData);
        setSubmitted(true);
    };

    return (
        <div className="py-10 flex flex-col items-center justify-center px-4">
            {/* Hvis meldingen er sendt */}
            {submitted ? (
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-megablue">Thank You!</h1>
                    <p className="text-lg my-4">
                        Your message has been sent successfully. <br />
                        We'll get back to you as soon as possible.
                    </p>
                    <LinkButton 
                        to="/"
                        label="Continue Shopping"
                    />
                </div>
            ) : (
                <>
                    {/* Intro Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-megablue">Contact us</h1>
                        <p className="text-lg mt-4">
                            Have questions about our products or your purchase? <br />
                            Reach out to us using the form below. We're here to help!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg p-6 rounded-lg border space-y-4"
                    >
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                            )}
                        </div>
                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter the subject"
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                            )}
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        {/* Body */}
                        <div>
                            <label htmlFor="body" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="body"
                                name="body"
                                value={formData.body}
                                onChange={handleChange}
                                rows="4"
                                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-megablue bg-transparent"
                                placeholder="Write your message here"
                            ></textarea>
                            {errors.body && (
                                <p className="text-red-500 text-sm mt-1">{errors.body}</p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-megablue text-white text-center py-3  rounded hover:bg-white hover:text-megablue  border border-megablue transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};