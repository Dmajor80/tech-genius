import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className='text-3xl text-red-500 text-center'>
        Oooooopssss, Page not found.{' '}
        <span>
          {' '}
          <Link className='text-black' to='/'>Please Go back</Link>{' '}
        </span>
      </h1>
    </div>
  )
}
