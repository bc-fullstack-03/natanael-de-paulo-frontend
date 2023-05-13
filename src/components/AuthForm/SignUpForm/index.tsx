import { useState, useEffect } from 'react'
import { MobileComponent } from './MobileComponent'
import { DesktopComponent } from './DesktopComponent'

export function SignUpForm() {
  const [step, setStep] = useState(1)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 768
  )

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    // Limpar o evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextStep = () => {
    setStep(step + 1)
  }

  const returnStep = () => {
    setStep(step - 1)
  }

  return (
    <>
      {isSmallScreen ? (
        <MobileComponent
          step={step}
          nextStep={nextStep}
          returnStep={returnStep}
        />
      ) : (
        <DesktopComponent />
      )}
    </>
  )
}
