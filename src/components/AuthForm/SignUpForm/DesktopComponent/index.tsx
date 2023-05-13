import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePersonOutline
} from 'react-icons/md'
import { WrapperInput } from '../../../WrapperInput'
import { Btn } from '../../../Btn'

export function DesktopComponent() {
  return (
    <div className="flex flex-col gap-4">
      <WrapperInput
        icon={MdOutlinePersonOutline}
        htmlFor="name"
        id="name"
        placeholder="Digite sua nome"
      />

      <WrapperInput
        icon={MdOutlineEmail}
        htmlFor="email"
        id="email"
        placeholder="Digite seu email"
      />

      <WrapperInput
        icon={MdOutlineLock}
        htmlFor="password"
        id="password"
        placeholder="Digite sua senha"
      />

      <Btn
        type="submit"
        className="w-56 mt-2 py-2.5 mx-auto bg-[#81D8F7] rounded-3xl hover:brightness-75"
      >
        Cadastrar
      </Btn>
    </div>
  )
}
