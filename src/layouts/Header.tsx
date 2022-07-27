import React from 'react'

export default function Header() {
  return (
    <div className='bg-dark700 p-2 flex items-center justify-between w-full heightHeader'>
      <span className='border border-spacing-1 border-gray-200 bg-blue-600 rounded-2xl p-2 hover:bg-red-700 cursor-pointer'>mode:
        <span className='text-neutral-50 '> {process.env.NODE_ENV} </span>
      </span>
    </div>
  )
}
