import RegisterForm from '@/components/forms/auth/register.forms'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
    return (
        <main className='h-full w-full flex justify-center items-center'>
            {/* page content */}
            <div className='min-w-100 min-h-90 border border-indigo-500 rounded-md shadow-sm shadow-indigo-200 px-4 py-6 flex flex-col gap-6'>
                {/* heading */}
                <div>
                    <h1 className='text-2xl font-semibold'>Sign up</h1>
                    <p className='text-lg font-normal'>Get started to order products</p>
                </div>

                {/*form */}
                <RegisterForm />


                <div className='text-center -mt-4'>
                    <p>Already have an account? <Link href={'/auth/login'} className='italic font-semibold text-indigo-500'>Sign In</Link></p>
                </div>
            </div>



        </main>
    )
}

export default RegisterPage