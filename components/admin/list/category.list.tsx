'use client'
import Image from 'next/image'
import AdminListCard from '../list-card'
import Table from '../table'
import { createColumnHelper } from '@tanstack/react-table'
import { CiTrash } from "react-icons/ci";
import { MdEditDocument } from "react-icons/md";
import { getAllCategories } from '@/api/category.api'
import { useQuery } from '@tanstack/react-query'
import ActionButtons from '@/components/common/ui/action-button'
import toast from 'react-hot-toast'
const CategoryList = () => {

    const { isLoading, data, error } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-all-categories'],
    })

    console.log(isLoading, data, error)



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columnHelper = createColumnHelper<any>()

    const columns = [
        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: (info) => <strong><i>{info.getValue()}</i></strong>,
            header: () => <span className='text-lg'>Name</span>,
        }),
        columnHelper.accessor((row) => row.image, {
            id: 'image',
            cell: (info) => {
                console.log(info.row.original.name)
                return (
                    <div className='h-16 max-w-20 mx-auto'>
                        <Image
                            src={info.getValue().path}
                            alt={`${info.row.original.name}-logo`}
                            height={100}
                            width={100}
                            className='object-contain h-full w-full'
                        />
                    </div>
                )
            },
            header: () => <span>Image</span>,
        }),
        columnHelper.accessor((row) => row.description, {
            id: 'description',
            cell: (info) => <div className='max-w-80 mx-auto text-start text-ellipsis line-clamp-3 text-wrap '><i>{info.getValue()}</i></div>,
            header: () => <span >Description</span>,
        }),
        columnHelper.accessor((row) => row.createdAt, {
            id: 'createdAt',
            cell: (info) => <b>{new Date(info.getValue()).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,

            })}</b>,
            header: () => <span>Created At</span>,
        }),
        columnHelper.accessor((row) => row.updatedAt, {
            id: 'updatedAt',
            cell: (info) => <b>{new Date(info.getValue()).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true

            })}</b>,
            header: () => <span>Updated At</span>,
        }),

        columnHelper.accessor((row) => row, {
            id: '_',
            cell: (info) => <ActionButtons
                editLink={`/admin/categories/edit/${info.row.original._id}`}
                onDelete={() => { toast.success('category deleted') }}
            />,
            header: () => <span>Actions</span>,
        }),

    ]
    return (

        <AdminListCard>
            <h4 className='text-[18px] font-semibold text-gray-600'>Category List</h4>

            {/* table */}
            <div className='mt-6'>

                <Table
                    data={data?.data?.data ?? []}
                    columns={columns}
                />
            </div>
        </AdminListCard>
    )
}

export default CategoryList