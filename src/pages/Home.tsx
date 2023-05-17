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

        <div className="flex flex-col w-full gap-8 px-5 sm:px-0">
          <div className="p-4">modal</div>

          <div className="border-b border-solid border-slate-400"></div>

          <Feed />
        </div>
      </Theme>
    </>
  )
}
