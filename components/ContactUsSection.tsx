"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

type FormDataType = {
    name: string;
    email: string;
    companyName: string;
    projectDetails: string;
};

type ErrorType = {
    name?: string;
    email?: string;
    companyName?: string;
    projectDetails?: string;
};

export default function ContactUsSection() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        companyName: "",
        projectDetails: "",
    });

    const [errors, setErrors] = useState<ErrorType>({});
    const [loading, setLoading] = useState(false);

    // Handle Input Change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    // Validation
    const validate = () => {
        let newErrors: ErrorType = {};   // ✅ FIXED

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }

        if (!formData.projectDetails.trim()) {
            newErrors.projectDetails = "Project details are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Submit Handler
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const handleSubmit = async () => {
        if (!validate()) {
            toast.error("Please fill Required Fields");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch(`${API_URL}/contactUs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            let data;
            try {
                data = await res.json();
            } catch {
                throw new Error("Invalid server response");
            }

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // ✅ SUCCESS TOAST
            toast.success(data.message || "Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                companyName: "",
                projectDetails: "",
            });

        } catch (err) {
            // ❌ ERROR TOAST
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <section
            id="contact-us"
            className="py-12"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="mb-10">
                    <h3 className="text-[32px] font-bold">Contact Us</h3>
                    <p className="text-gray-500 text-[32px] dark:text-gray-300 mt-2">
                        Fill out the contact form below and share <br />
                        your project ideas with us.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 items-start">

                    {/* Left Inputs */}
                    <div className="flex-1 w-full h-[272px] flex flex-col justify-between">
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Company Name</label>
                            {/* Company */}
                            <input
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Company"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                            {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full mt-8 md:mt-0 flex justify-center">
                        <img
                            src="/File_img/source/contactus.jpg"
                            alt="Contact"
                            className="w-[662px] max-w-full h-[272px] object-cover rounded-[12px]"
                        />
                    </div>

                </div>

                {/* About Project - FULL WIDTH */}
                <div className="mt-6 w-full">
                    <label className="block text-xs text-[#C7C7C7] uppercase mb-2">About Project</label>
                    {/* Project */}
                    <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Project Details"
                        className="w-full h-[120px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 resize-none"
                    />
                    {errors.projectDetails && <p className="text-red-500">{errors.projectDetails}</p>}

                </div>

                {/* Button */}
                <div className="py-6 md:py-8">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-orange-500 text-white px-6 py-2 mt-4"
                    >
                        {loading ? "Sending..." : "Send Now"}
                    </button>

                </div>
            </div>
        </section>
    );
}