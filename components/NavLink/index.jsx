'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NavLink = ({ path, classStyles, label }) => {
  const pathname = usePathname()
  const [pathTo, setPathTo] = useState('/')

  return (
    <Link href={path} legacyBehavior>
      <p className={pathname === path ? classStyles : 'text-white cursor-pointer font-semibold hover:text-blue-300 px-6 py-5 w-full'} onClick={() => setPathTo(path)}>
        {label}
      </p>
    </Link>
  )
}

export default NavLink
