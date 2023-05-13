import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { HeaderTitle } from '../HeaderTitle'
import logo from '../../assets/parrotLogo.svg'
import clsx from 'clsx'
import { Text } from '../Text'
import { Link } from 'react-router-dom'

interface AuthFormProps
  extends PropsWithChildren,
    FormHTMLAttributes<HTMLFormElement> {
  formTitle: string
  formDescription: string
  className?: string
  linkDescription: string[]
  routeName: string
}

export function AuthForm({
  children,
  formTitle,
  formDescription,
  className,
  linkDescription,
  routeName
}: AuthFormProps) {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center p-2 lg:flex-row lg:justify-between sm:max-w-4xl">
      <header className="max-w-2/4 mx-auto px-6 pt-6 pb-4 sm:text-center sm:flex sm:flex-col ">
        <div className="mx-auto  bg-black aspect-square rounded-full flex justify-center items-center  animate-rotate">
          <img
            src={logo}
            alt="Logo de papagaio do site sysmap Parrot"
            className="w-10/12 h-auto animate animate-jump object-cover rounded-full"
            width={128}
            height={128}
          />
        </div>
        <div className="overflow-hidden">
          <Text className="block mt-6 animate-scrolling_text" size="lg">
            {formDescription}
          </Text>
        </div>
      </header>
      <div className="mx-auto w-full flex flex-col items-center max-w-md px-6 mt-2">
        <HeaderTitle>{formTitle}</HeaderTitle>
        <form className={clsx('max-w-sm w-full flex flex-col mt-4', className)}>
          {children}
        </form>
        <footer className="mt-2">
          <Text size="sm" className="text-gray-400">
            {linkDescription[0]}{' '}
            <Link to={routeName} className="underline">
              {linkDescription.slice(1)}!
            </Link>
          </Text>
        </footer>
      </div>
    </section>
  )
}
