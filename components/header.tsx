"use client"
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const Header = () => {
  const pathname = usePathname();
  const baseName = pathname.split('/')[1];
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <nav style={{boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'}} className='p-3 relative rounded-2xl flex flex-row justify-between items-center bg-[#1A1A1A]'>
      <div>
        <Image src={'/chefTeeLogo.png'} width={55} height={44} alt={'chef tee logo'} />
      </div>
      <div className='flex flex-row justify-center items-center gap-6'>
        {
          routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={clsx('text-[#808080] text-lg',
                {
                  'text-[#FFFFFF] font-bold': route.path.replace('/', '') === baseName,
                  'hover:text-[#FFFFFF]': route.path !== '/',
                  'transition-colors duration-300 ease-in-out': true,
                }
              )}
            >
              {route.name}
            </Link>
          ))
        }
      </div>
      <div></div>
    </nav>
  )
}

export default Header;