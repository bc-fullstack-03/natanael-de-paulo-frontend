import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { PropsWithChildren } from 'react'

interface HeaderProps {
  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function HeaderTitle({
  children,
  size = 'md',
  className,
  asChild
}: PropsWithChildren<HeaderProps>) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
