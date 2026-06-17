import React from "react";

const RegisterForm = () => {
    return (
        <div className="w-full">
            <form className="w-full flex flex-col gap-4">
                {/* Full Name */}
                {/* <div className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] font-medium"
                    >
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        className="w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm"
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}
                {/* <div className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="email"
                        className="text-[14px] font-medium"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="password"
                        className="text-[14px] font-medium"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        className="w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>

                {/* Confirm Password */}
                <div className="w-full flex flex-col gap-1">
                    <label
                        htmlFor="confirmPassword"
                        className="text-[14px] font-medium"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        className="w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-indigo-400 to-indigo-600 py-2.5 rounded-sm cursor-pointer text-white font-bold mt-3"
                > */} *
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;