import ProductList from '@/components/admin/list/product.list'
import PageTitle from '@/components/admin/page-title'
import React from 'react'

const ProductsPage = () => {
    return (
        <main className='h-full'>
            <PageTitle
                title='All Products'
                linkText='Add New'
                link='/admin/products/create'
            />

            <ProductList />
        </main>
    )
}

export default ProductsPage