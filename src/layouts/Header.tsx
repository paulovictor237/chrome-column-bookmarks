import React from 'react'

export default function Header() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world [ <span className='text-red-600'>{process.env.NODE_ENV}</span> ] !
      </h1>
    </div>
  )
}
