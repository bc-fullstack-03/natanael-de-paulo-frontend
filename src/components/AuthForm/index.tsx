import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { HeaderTitle } from '../HeaderTitle'
import logo from '../../assets/parrotLogo.svg'
import { Button } from '../Button'
import clsx from 'clsx'
import { Text } from '../Text'
import { Link } from 'react-router-dom'

interface AuthFormProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {
  formTitle: string
  className?: string
  submitFormButtonText: string
  linkDescription: string[]
}

export function AuthForm({
  children,
  formTitle,
  className,
  submitFormButtonText,
  linkDescription
}: AuthFormProps) {
  return (
    <section className="flex flex-col w-full items-center justify-center p-2 sm:gap-32 sm:flex-row">
      <header className="p-6 sm:max-w-2/4 sm:text-center">
        <div className="rounded-full bg-black aspect-square flex justify-center items-center sm:w-60 sm:m-auto animate-rotate">
          <img
            src={logo}
            alt="Logo de papagaio do site sysmap Parrot"
            className="w-full h-4/5 animate animate-jump"
          />
        </div>

        <HeaderTitle className="mt-6">{formTitle}</HeaderTitle>
      </header>
      <div className="w-full flex flex-col items-center sm:max-w-md px-6 pt-4">
        <form
          className={clsx(
            'max-w-sm w-full flex flex-col gap-2 sm:flex animate-form',
            className
          )}
        >
          {children}
          <Button
            type="submit"
            className="w-56 mt-4 max-w-full p-3 mx-auto bg-[#81D8F7] rounded hover:brightness-75"
          >
            {submitFormButtonText}
          </Button>
        </form>

        <footer className="mt-2">
          <Text size="sm" className="text-gray-400">
            {linkDescription[0]}{' '}
            <Link to="" className="underline">
              {linkDescription.slice(1)}!
            </Link>
          </Text>
        </footer>
      </div>
    </section>
  )
}

{
  /* <footer className="mt-2">
          <Text size="sm" className="text-gray-400">
            {linkDescription[0]}{' '}
            <Link to={routeName} className="underline">
              {linkDescription.slice(1)}!
            </Link>
          </Text>
        </footer> */
}
