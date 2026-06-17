import React from 'react'

const LoginFrom = () => {
    return (
        <div className='w-full '>
            <form className='flex flex-col gap-4 w-full'>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor='email' className='text-[14px] font-medium '>
                        Email
                    </label>
                    <input
                        id='email'
                        className='w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm '
                        type='text' placeholder='johndoe@gmail.com' />

                </div>

                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor='password' className='text-[14px] font-medium '>
                        Password
                    </label>
                    <input
                        id='password'
                        className='w-full border-[1.5px] border-indigo-500 px-2 py-2 rounded-sm '
                        type='password' placeholder='password'
                    />
                </div>

                {/*button */}
                <button
                    className='w-full bg-linear-to-r from-indigo-400 to-indigo-600 py-2.5 rounded-sm cursor-pointer text-white font-bold mt-3 '
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginFrom