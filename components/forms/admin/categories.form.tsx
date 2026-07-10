'use client'

import AdminListCard from '@/components/admin/list-card'
import Button from '@/components/common/ui/button'
import ImageInput from '@/components/common/ui/image-input' 
import Input from '@/components/common/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

const CategoryForm = () => {
    const { register } = useForm({
        defaultValues: {
            name: '',
            description: '',
            image: null
        }
    })

    return (
        <AdminListCard>
            <div>
                <h4 className='text-[18px] font-semibold text-black/80 my-4'>
                    Category Form
                </h4>

                <form className='max-w-120 mx-auto flex flex-col gap-4 border border-gray-200 px-4 py-8 rounded-md'>

                    {/* Category Name */}
                    <Input
                        label='Category Name'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Electronics'
                        register={register}
                        required
                    />
					{/* Description */}
                    <Input
                        label='Description'
                        name='description'
                        id='description'
                        multiline
                        type='text'
                        placeholder='Describe your category (at least 25 characters)'
                        register={register}
                    />

                    {/* Category Image */}
                    <ImageInput
                        label='Category Image'
                        id='category_image'
                        required
                    />

                    

                    <div>
                        <Button
                            label='Submit'
                            type='submit'
                        />
                    </div>

                </form>
            </div>
        </AdminListCard>
    )
}

export default CategoryForm