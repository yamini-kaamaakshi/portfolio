"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
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
                setFormData({ name: "", email: "", subject: "", message: "" });
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
        <motion.main
            className="p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Toaster position="top-right" reverseOrder={false} />

            <motion.h1
                className="mt-10 text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h1>

            <motion.p
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Feel free to reach out via email or through the contact form below.
            </motion.p>

            {status && <motion.p
                className="mt-4 text-center text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {status}
            </motion.p>}

            <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
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
                    <label className="block font-medium">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
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
                <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>

            {/* Social Media Links Animation */}
            <motion.div
                className="mt-6 p-4 bg-gray-100 rounded-lg shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <h2 className="text-lg font-semibold mb-2">Other Ways to Connect</h2>
                <div className="flex justify-center space-x-4 mt-2">
                    <motion.a
                        href="https://www.linkedin.com/in/kaamaakshi-yamini-462b9b249/"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src="/images/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                    </motion.a>
                    <motion.a
                        href="https://github.com/yamini-kaamaakshi"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
                    </motion.a>
                    <motion.a
                        href="https://x.com/Yamini765"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src="/images/x.svg" alt="Twitter" className="w-8 h-8" />
                    </motion.a>
                </div>
            </motion.div>
        </motion.main>
    );
}
