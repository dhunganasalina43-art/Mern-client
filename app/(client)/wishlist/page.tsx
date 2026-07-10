'useClient'
import withAuth from '@/hoc/withAuth.hoc'
import {Role} from '@/types/enum.types'
import React from 'react'

const WishlistPage = () => {
    return (
        <main className='h-full'>Wishlist Page</main>
    )
}
const Page = withAuth(WishlistPage,[Role.USER])
export default Page