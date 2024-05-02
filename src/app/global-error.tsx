'use client'
import { CustomButton } from '@/components'
import React from 'react'

export default function Error({
	error,
	reset}: {error: Error, reset: () => void}) {
  return (
	<div>
		<p className='title'>Oops!</p>
		<p className='default-text'>{error.message}</p>
		<CustomButton onClick={reset}>Reset</CustomButton>
	</div>
  )
}
