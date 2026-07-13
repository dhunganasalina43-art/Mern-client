'use client'
import withAuth from '@/hoc/withAuth.hoc'
import { Role } from '@/types/enum.types'
import React from 'react'

const CartPage = () => {
    return (
        <main className='h-full'>Cart Page</main>
    )
}

const Page = withAuth(CartPage, [Role.USER])
export default Page