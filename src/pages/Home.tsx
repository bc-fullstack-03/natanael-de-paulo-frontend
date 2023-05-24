import { Feed } from '../components/Feed'
import { HeaderTitle } from '../components/HeaderTitle'
import { Theme } from '../components/Theme'

export function Home() {
  return (
    <>
      <Theme>
        <header className="w-full h-auto p-3.5 rounded-b-md bg-white">
          <HeaderTitle>Pagina inicial</HeaderTitle>
        </header>

        <Feed />
      </Theme>
    </>
  )
}
