'use client'

import React from 'react'
import CategoryCard from './category-card'
import { TCategory } from '@/types/category.types'
import { getAllCategories } from '@/api/category.api'
import { useQuery } from '@tanstack/react-query'
import { MdOutlineCloudOff } from 'react-icons/md'

const categoryData: TCategory = {
    _id: '1',
    name: 'Category Name',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus cumque perspiciatis reprehenderit tempore eos.',
    image: {
        _id: '1',
        public_id: '1',
        path: '/hero.jpg',
    },
}

const CategoryList = () => {
    const { isLoading, data, error } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-all-categories'],
    })

    console.log(isLoading, data, error)

    // const categories = Array.from({ length: 12 }, (_, i) => i + 1)
    // console.log(categories)

    return (
        <div className='h-full'>
            {!isLoading && data?.data?.data &&data?.data?.data.length > 0 && (<div className='grid grid-cols-5 gap-4'>
                <MdOutlineCloudOff className='text-indigo-500' size={38}/>
                <p className='text-gray-700 font-medium text-lg'> Categories not found</p>
                        {data.data.data.map((category: TCategory) => (
                            <CategoryCard
                                category={category}
                                key={category._id}
                            />
                        ))}
                    </div>
                )}


            {/* {categories.map((category) => (
                <CategoryCard category={categoryData} key={category} />
            ))} */}

            {isLoading && (
                <div className='grid grid-cols-5 gap-4'>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CategorySkeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    )
}

const CategorySkeleton = () => {
    return (
        <div className='animate-pulse h-20 w-full bg-gray-200 p-1 rounded'>
            <div className='grid grid-cols-12 gap-2'>
                <div className='h-18 aspect-square bg-gray-300 rounded col-span-4' />

                <div className='col-span-8 flex flex-col justify-center gap-3'>
                    <div className='h-5 bg-gray-300 rounded' />
                    <div className='h-8 bg-gray-300 rounded' />
                </div>
            </div>
        </div>
    )
}

export default CategoryList