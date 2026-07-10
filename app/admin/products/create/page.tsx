import PageTitle from '@/components/admin/page-title'
import ProductForm from '@/components/forms/admin/product.form'
// import  BrandForm from '@/components/forms/admin/categories.form'
import React from 'react'

const CreateProductPage = () => {
    return (
        <main className='h-full'>
            <PageTitle

                title='Add new products'
                linkText='Go Back'
                link='/admin/product'

            
            />
            <ProductForm/>
        </main>
    )
}

export default CreateProductPage