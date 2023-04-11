import Link from 'next/link'
import React from 'react'

type Props = {}

export function Breadcrumb({ }: Props) {
  return (
    <div className='flex flex-row justify-start gap-3 py-3'>
      <Link href="/" className='font-medium text-green-700' >Home</Link>
      <span className='text-gray-500'>/</span>
      <Link href="/" className='font-medium text-green-700' >product</Link>
    </div>
  )
}