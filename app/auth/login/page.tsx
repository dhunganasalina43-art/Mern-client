import LoginFrom from "@/components/forms/auth/login.form";
import { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//     title: "Click & Cart | sign in",
//     description: "e-commerce sign in page",
// };

const LoginPage = () => {
    return (
        <main className="h-full w-full flex justify-center items-center  border">
            {/* page content */}
            <div className="min-h-80 min-w-80 border border-indigo-500 p-4 py-6 rounded-md shadow-sm shadow-indigo-300 flex flex-col gap-6">
                {/* form heading */}
                <div className="flex flex-col gap-0">
                    <h1 className="text-[18px] font-semibold tracking-wider leading-5.5">
                        Welcome Back,
                    </h1>
                    <p className="text-sm tracking-wider font-normal">
                        Login to access your account.
                    </p>
                </div>
                {/* form */}
                <LoginFrom />

                <div className='text-center -mt-4'>
                    <p>Don&apos;t have an account? <Link href={'/auth/register'} className='italic text-indigo-500'>Sign Up</Link></p>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;