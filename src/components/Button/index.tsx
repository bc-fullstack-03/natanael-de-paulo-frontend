import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  asChild?: boolean
  className?: string
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={clsx('w-full', className)} {...props}>
      {children}
    </Comp>
  )
}
