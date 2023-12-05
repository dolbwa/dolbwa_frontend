'use client'

import React, { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  routerUrl?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, routerUrl, ...props }) => {
  const router = useRouter()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event)
    }

    if (routerUrl) {
      router.push(routerUrl)
    }
  }

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

export default Button
