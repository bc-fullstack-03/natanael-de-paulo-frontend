import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'

interface NavigationProps {
  isSmallScreen: boolean
}

export function NavigationPage({ isSmallScreen }: NavigationProps) {
  return (
    <>
      <nav className="bg-white sm:rounded-xl sm:p-4 sm:sticky sm:top-28">
        {isSmallScreen ? <NavMobile /> : <NavDesktop />}
      </nav>
    </>
  )
}
