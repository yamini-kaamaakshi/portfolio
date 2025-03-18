"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("✅ Message sent successfully!");
                toast.success("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Try again.");
                toast.error("❌ Failed to send message. Try again.");
            }
        } catch {
            setStatus("❌ Error sending message. Please try later.");
            toast.error("❌ Error sending message. Please try later.");
        }
    };

    return (
        <main className="p-8 max-w-2xl mx-auto">
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="mt-10 text-3xl font-bold mb-4">Contact Me</h1>

            <p className="mb-4">Feel free to reach out via email or through the contact form below.</p>

            {status && <p className="mt-4 text-center text-green-600">{status}</p>}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-1"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
            {/* Contact Links Section */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Other Contact Methods</h2>

                <p>Email:
                    <a href="mailto:yaminikaamaakshi@example.com" className="text-blue-600 hover:underline ml-1">
                        yaminikaamaakshi@example.com
                    </a>
                </p>

                <p className="mt-2">Connect with me on:</p>
                <ul className="mt-2 space-y-2">
                    <li>
                        <Link href="https://www.linkedin.com/in/kaamaakshi-yamini-462b9b249/" target="_blank"
                              className="text-blue-600 hover:underline flex items-center">
                            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/yamini-kaamaakshi" target="_blank"
                              className="text-blue-600 hover:underline flex items-center">
                            <img src="/images/github.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link href="https://x.com/Yamini765" target="_blank"
                              className="text-blue-600 hover:underline flex items-center">
                            <img src="/images/x.svg" alt="Twitter" className="w-5 h-5 mr-2" />
                            Twitter
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
