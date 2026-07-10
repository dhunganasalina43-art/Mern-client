'use client'

import Image from 'next/image'
import AdminListCard from '../list-card'
import Table from '../table'
import { createColumnHelper } from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import ActionButtons from '@/components/common/ui/action-button'
import toast from 'react-hot-toast'
import { getAllProducts } from '@/api/product.api'

const ProductList = () => {

    const { isLoading, data, error } = useQuery({
        queryKey: ['get-all-products'],
        queryFn: getAllProducts,
    })

    console.log(isLoading, data, error)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columnHelper = createColumnHelper<any>()

    const columns = [

        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: (info) => (
                <strong>
                    <i>{info.getValue()}</i>
                </strong>
            ),
            header: () => <span className='text-lg'>Product</span>,
        }),

        columnHelper.accessor((row) => row.image, {
            id: 'image',
            cell: (info) => (
                <div className='h-16 max-w-20 mx-auto'>
                    <Image
                        src={info.getValue().path}
                        alt={info.row.original.name}
                        width={100}
                        height={100}
                        className='object-contain h-full w-full'
                    />
                </div>
            ),
            header: () => <span>Image</span>,
        }),

        columnHelper.accessor((row) => row.brand?.name, {
            id: 'brand',
            cell: (info) => <span>{info.getValue()}</span>,
            header: () => <span>Brand</span>,
        }),

        columnHelper.accessor((row) => row.category?.name, {
            id: 'category',
            cell: (info) => <span>{info.getValue()}</span>,
            header: () => <span>Category</span>,
        }),

        columnHelper.accessor((row) => row.price, {
            id: 'price',
            cell: (info) => (
                <strong>Rs. {info.getValue()}</strong>
            ),
            header: () => <span>Price</span>,
        }),

        columnHelper.accessor((row) => row.stock, {
            id: 'stock',
            cell: (info) => (
                <strong>{info.getValue()}</strong>
            ),
            header: () => <span>Stock</span>,
        }),

        columnHelper.accessor((row) => row.createdAt, {
            id: 'createdAt',
            cell: (info) => (
                <b>
                    {new Date(info.getValue()).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </b>
            ),
            header: () => <span>Created At</span>,
        }),

        columnHelper.accessor((row) => row.updatedAt, {
            id: 'updatedAt',
            cell: (info) => (
                <b>
                    {new Date(info.getValue()).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </b>
            ),
            header: () => <span>Updated At</span>,
        }),

        columnHelper.accessor((row) => row, {
            id: 'actions',
            cell: (info) => (
                <ActionButtons
                    editLink={`/admin/products/edit/${info.row.original._id}`}
                    onDelete={() => {
                        toast.success('Product deleted')
                    }}
                />
            ),
            header: () => <span>Actions</span>,
        }),

    ]

    return (
        <AdminListCard>

            <h4 className='text-[18px] font-semibold text-gray-600'>
                Product List
            </h4>

            <div className='mt-6'>
                <Table
                    data={data?.data?.data ?? []}
                    columns={columns}
                />
            </div>

        </AdminListCard>
    )
}

export default ProductList