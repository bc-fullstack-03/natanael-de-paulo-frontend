import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input(props: InputProps) {
  return <input className={props.className} {...props} />
}
