import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
	<div className='flex flex-col justify-center items-center text-md gap-y-2'>
		<p className='default-text'>Сторінку не знайдено</p>
		<Link href = '/' className='text-_2C36F2 default-text text-md'>Перейти на головну сторінку</Link>
	</div>
  )
}
