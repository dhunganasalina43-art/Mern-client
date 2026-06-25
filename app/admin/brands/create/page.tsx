import PageTitle from '@/components/admin/page-title'
// @/components/forms/admin/brand.form'
import React from 'react'
import { BrandForm } from './../../../../components/forms/auth/admin/brand.form';

const CreateBrandPage = () => {
    return (
        <main className='h-full'>
            <PageTitle

                title='Add new brand'
                linkText='Go Back'
                link='/admin/brands'

            
            />
            <BrandForm/>
        </main>
    )
}

export default CreateBrandPage