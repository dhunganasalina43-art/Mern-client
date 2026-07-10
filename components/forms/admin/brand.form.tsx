'use client'

import AdminListCard from '@/components/admin/list-card'
import Button from '@/components/common/ui/button'
import ImageInput from '@/components/common/ui/image-input'
import Input from '@/components/common/ui/input'
import { brandSchema, TBrandInput } from '@/schema/brand.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

const BrandForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: '',
            logo: undefined
        },
        resolver: yupResolver(brandSchema)
    })

    const onSubmit = (data: TBrandInput) => {
        console.log(data)
    }


    return (
        <AdminListCard>
            <div>
                <h4 className='text-[18px] font-semibold text-black/80 my-4'>Brand Form</h4>
                <form onSubmit={handleSubmit(onSubmit)} className=' max-w-120 mx-auto flex gap-4 flex-col border border-gray-200 px-4 py-8 rounded-md '>
                    <Input
                        label='Name'
                        name={'name'}
                        id={'name'}
                        type='text'
                        error={errors?.name?.message}
                        placeholder='Caliber'
                        register={register}
                        required
                    />

                    {/* image input */}
                    <ImageInput
                        label='Logo'
                        id='brand_logo'
                        required
                    />
                    <Input
                        label='Description'
                        name={'description'}
                        id={'description'}
                        multiline={true}
                        error={errors?.description?.message}

                        type='text'
                        placeholder='Describe your brand [at least 25 characters]'
                        register={register}
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

export default BrandForm