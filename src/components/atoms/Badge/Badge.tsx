import Link from 'next/link'
import { ReactElement } from 'react'

export interface IBadgeProps {
  children: ReactElement | string
  size?: 'sm' | 'md' | 'lg'
}

const Badge = ({ children, size = 'md' }: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-2  text-xs',
    md: 'px-2 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
  }
  return (
    <Link href='/'>
      <a
        className={`transition-all flex items-center justify-center duration-300 bg-gray-200 rounded-full hover:bg-gray-300 ${sizeCls[size]}`}
      >
        {children}
      </a>
    </Link>
  )
}

export default Badge
