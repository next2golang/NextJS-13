import React from 'react'
import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <>
        <nav className='bg-slate-600 p-4 flex flex-col justify-between md:flex-row sticky top-0 drop-shadow-xl'>
            <h1 className='font-bold text-3xl text-white grid place-content-center mb-2 md:mb-0'>
                <Link href="/">WikiRocket!</Link>
            </h1>
            <Search />
        </nav>
    </>
  )
}
