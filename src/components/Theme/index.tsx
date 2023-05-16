import { PropsWithChildren, useEffect, useState } from 'react'
import { NavigationPage } from '../NavigationPage'
import logo from '../../assets/parrotLogo.svg'
import { Text } from '../Text'

// interface ThemeProps {}
export function Theme({ children }: PropsWithChildren) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 768
  )

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 636)
    }

    window.addEventListener('resize', handleResize)

    // Limpar o evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex relative mx-auto sm:max-w-screen-lg w-full sm:gap-4 sm:px-4">
      <aside className="fixed bottom-0 z-10 w-full sm:relative sm:flex sm:w-full sm:max-w-[25%] sm:flex-col sm:px-2 sm:gap-8">
        {isSmallScreen ? null : (
          <div className="flex items-center bg-white rounded-xl py-4 sm:sticky sm:top-0">
            <img
              src={logo}
              alt="Imagem de papagaio sysmap"
              width={48}
              height={48}
            />
            <Text
              size="lg"
              className="font-bold text-[#81D8F7] tracking-[.4em]"
            >
              Parrot
            </Text>
          </div>
        )}
        <NavigationPage isSmallScreen={isSmallScreen} />
      </aside>
      <main className="flex w-full flex-col gap-4 sm:w-11/12">{children}</main>
    </div>
  )
}
