import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'
import { LuAsterisk } from 'react-icons/lu'
import { IoClose } from "react-icons/io5";
interface IProps {
    multiple?: boolean,
    required?: boolean,
    label: string
    id: string
}

const ImageInput = ({ multiple = false, label, required = false, id }: IProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputRef = useRef<any>(null)
    const [preview, setPreview] = useState<string | null>(null)  // useMemo()


    const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }


      const file = e.target.files?.[0];
            if (!file) return;
            setPreview(URL.createObjectURL(file));

    }


    return (
        <div className='flex flex-col gap-3'>
            <div className={'flex'}>
                <label htmlFor={id} className="text-[14px] font-semibold ">{label}</label>
                {required && <LuAsterisk className='text-indigo-700' />}
            </div>
            <div onClick={() => { inputRef?.current?.click() }} className='z-1 flex flex-col justify-between bg-gray-100 cursor-pointer border border-dashed border-indigo-200 h-45 rounded-md py-3 px-2 '>
                <div>
                    <input
                        ref={inputRef}
                        onChange={onChange}
                        id={id}
                        type='file'
                        className='hidden cursor-pointer'
                        multiple={multiple}
                        accept='image/*'
                    />
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-[16px] text-black/80'>Click to upload image</p>
                        <small className='text-gray-600'>Only single file allowed</small>
                    </div>
                </div>
                {preview && <div className='h-20 z-10'>
                    <div className='h-20 w-20 rounded-sm relative group'>

                        <Image
                            src={preview}
                            alt='preview'
                            width={100}
                            height={100}
                            className='h-full w-full overflow-clip  rounded-sm'

                        />
                        {/* remove image button */}
                        <button className='hidden group-hover:block absolute top-1 right-1 text-red-500 cursor-pointer '>
                            <IoClose size={20} />
                        </button>
                    </div>
                </div>}
            </div>


        </div>
    )
}

export default ImageInput