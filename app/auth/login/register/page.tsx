import RegisterForm from "@/components/forms/auth/register.forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOM | Sign Up",
  description: "E-commerce registration page",
};

const RegisterPage = () => {
  return (
    <main className="h-full w-full flex items-center justify-center">
      {/* Page Content */}
      <div className="min-h-80 min-w-80 rounded-md border border-indigo-500 p-4 py-6 shadow-sm shadow-indigo-300 flex flex-col gap-6">
        
        {/* Form Heading */}
        <div className="flex flex-col">
          <h1 className="text-[18px] font-semibold tracking-wider leading-6">
            Create Account
          </h1>
          <p className="text-sm font-normal tracking-wider">
            Register to create your new account.
          </p>
        </div>

        {/* Form */}
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;