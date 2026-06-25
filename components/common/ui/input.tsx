
import React from 'react'
import { UseFormRegister } from 'react-hook-form';
import { LuAsterisk } from "react-icons/lu";


interface IProps {
    label: string;
    id: string;
    type: 'text' | 'email' | 'password' | 'number';
    placeholder: string,
    name: string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement,HTMLInputElement>) => void
    register:UseFormRegister<any>
    required?:boolean
    error?:string
    multiline?: boolean
}


const Input = ({ id, multiline= false,  label, placeholder, type, name, register, required=false, error}: IProps) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className={'flex'}>
                <label htmlFor={id} className="text-[14px] font-semibold ">
                    {label}
                </label>
                {required && <LuAsterisk className='text-indigo-700' />}
            </div>
            {multiline?
            <textarea 
            {...register(name)}
            
                id={id}
                placeholder={placeholder}
                className={`w-full border-[1.5px] border-indigo-300 px-2 py-2.5 rounded-sm ${error ? 'border-red-500 focus:outline-red-500': 'border-indigo-300 focus:outline-indigo-700'}`}
         
         />   
           : <input
            {...register(name)}
           
                id={id}
                className={'text-black min-h-60 tracking-widest font-normal w-full border-[1.5px] px-2 py-2.5 rounded-sm ${error?'} 'border-red-500 focus:outline-red-500':'border-indigo-300 focus:outline-indigo-700'}`}
                type={type}
                placeholder={placeholder}
                // name={name}
            />}
           <p className='h-1 text-blue-500 text-xs -mt-0.5 '>(errors)</p>
        </div>
        
            )
            
        }
export default Input