import { Feed } from '../components/Feed'
import { HeaderTitle } from '../components/HeaderTitle'
import { Theme } from '../components/Theme'

export function Home() {
  return (
    <>
      <Theme>
        <header className="w-full p-2 bg-white ">
          <HeaderTitle>Pagina inicial</HeaderTitle>
        </header>

        <div className="flex flex-col w-full gap-4">
          <div className="p-4">modal</div>

          <div className="border-b border-solid border-slate-400"></div>

          <Feed />
        </div>
      </Theme>
    </>
  )
}
