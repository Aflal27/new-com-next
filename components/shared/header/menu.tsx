import React from 'react'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button flex items-center gap-2'>
          <UserIcon className='h-6 w-6' />
          <span className='font-bold'>Sign in</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  )
}
