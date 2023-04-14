import Link from 'next/link'
import React from 'react'

type Props = {
  listPathName?: { name?: string, href?: string }[]
}

export function Breadcrumb({ listPathName }: Props) {
  return (
    <div className='flex flex-row justify-start gap-3 py-3'>
      <Link href="/" className='font-medium text-green-700' >Home</Link>
      {
        listPathName?.length && (
          <>
            {
              listPathName?.map((pathName, index) => (
                <>

                  <span className='text-gray-500'>/</span>
                  <Link href={pathName?.href ?? "/"} className='font-medium text-green-700' >{pathName?.name}</Link>
                </>
              ))
            }
          </>
        )
      }
    </div>
  )
}