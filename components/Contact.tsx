"use client";
import React, { useState } from "react";
import { archivo_black } from "@/app/fonts";
import { roboto_cond } from "@/app/fonts";
import { Button } from "./ui/button";
import axios from "axios";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState<string | null>(null); // Store alert message here
    const [error, setError] = useState<string | null>(null);

    // Email validation function using regex
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setShowAlert(null); // Reset alert message

        // Validation for empty fields
        if (!email || !message) {
            setError("Please fill in both email and message.");
            setTimeout(() => setError(null), 3000); // Fade out after 3 seconds
            return;
        }

        // Email format validation
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            setTimeout(() => setError(null), 3000); // Fade out after 3 seconds
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await axios.post("/api/contact", { email, message });
            if (res.status === 200) {
                setShowAlert("Message sent successfully!");
                setEmail("");
                setMessage("");
                setError(null);

                // Remove success alert after 3 seconds
                setTimeout(() => setShowAlert(null), 3000);
            } else {
                setError("Failed to send the message. Please try again.");
                setTimeout(() => setError(null), 3000); // Fade out error after 3 seconds
            }
        } catch (error) {
            console.log(error);
            setError("Error occurred while sending the message. Please try again.");
            setTimeout(() => setError(null), 3000); // Fade out error after 3 seconds
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="w-full" id="contact">
                {/* Alert Message */}
                {showAlert && (
                    <div className="fixed z-50 top-20 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-500 ease-in-out">
                        {showAlert}
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="fixed z-50 top-20 right-5 bg-red-500 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-500 ease-in-out">
                        {error}
                    </div>
                )}

                <div className="flex justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className} pt-20`}>Contact Me</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="bg-green-5 w-28 h-1 rounded-md"></div>
                </div>
                <p className={`mt-10 ${roboto_cond.className} text-grey text-2xl text-center `}>
                    Contact me through this form
                </p>

                <div className="w-full flex justify-center mt-10 px-5 sm:px-0">
                    <div className="sm:w-2/3 w-full h-fit bg-grey-20 rounded-lg">
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="flex justify-center mt-10">
                                    <input
                                        id="email"
                                        className={`block sm:w-2/3 w-full mx-5 sm:mx-0 rounded-md h-16 bg-grey pl-5 focus:outline-none focus:bg-white ${roboto_cond.className} text-lg text-grey-20`}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your Email"
                                    />
                                </div>
                                <div className="flex justify-center mt-5 mb-10">
                                    <textarea
                                        className={`sm:w-2/3  w-full mx-5 sm:mx-0 h-56 rounded-md bg-grey pl-5 pt-5 focus:outline-none focus:bg-white ${roboto_cond.className} text-lg text-grey-20`}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter your message"
                                    />
                                </div>
                                <div className="flex justify-center mb-5">
                                    <Button
                                        type="submit"
                                        className={`bg-teal ${roboto_cond.className} text-lg text-black hover:fill-white hover:text-white flex items-center`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <svg
                                                className="animate-spin mr-2 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2">
                                                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                            </svg>
                                        )}
                                        {isSubmitting ? "Sending..." : "Submit"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
