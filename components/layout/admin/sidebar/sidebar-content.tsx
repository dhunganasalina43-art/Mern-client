'use client'
import Link from 'next/link'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { usePathname } from 'next/navigation';



const links = [
    {
        link: '/admin',
        label: 'Dashboard',
        icon: <LuLayoutDashboard size={26} className='' />
    },
    {
        link: '/admin/brands',
        label: 'Brands',
        icon: <LuLayoutDashboard size={26} />
    },
    {
        link: '/admin/categories',
        label: 'Categories',
        icon: <LuLayoutDashboard size={26} />
    },
    {
        link: '/admin/products',
        label: 'Products',
        icon: <LuLayoutDashboard size={26} />
    },
    {
        link: '/admin/users',
        label: 'Users',
        icon: <FaUsers size={26} />
    },
    {
        link: '/admin/orders',
        label: 'Orders',
        icon: <LuLayoutDashboard size={26} />
    }

]

const SidebarLinks = () => {
    const pathname = usePathname()
    return (
        <div className=' h-full w-full flex flex-col gap-1 px-1 mt-4 '>
            {
                links.map((link) => {
                    const isActive = pathname === link.link
                    return <Link
                        className={`flex items-center gap-2 border-[1.5px]  text-gray-700 border-indigo-400 px-2 py-3 rounded-sm hover:bg-indigo-400 hover:text-white transition-all duration-300 ${isActive ? 'bg-indigo-500 text-white' : ""}`}
                        href={link.link}
                        key={link.link}
                    >
                        {link.icon}
                        <p className='font-semibold text-[18px]'>{link.label}</p>
                    </Link>
                })
            }

        </div>
    )
}

export default SidebarLinks