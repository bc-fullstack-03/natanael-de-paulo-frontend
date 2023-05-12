import { AuthForm } from '../components/AuthForm'
import { Input } from '../components/Input'
import { Text } from '../components/Text'
import { MdOutlineEmail } from 'react-icons/md'
import { MdOutlineLock } from 'react-icons/md'

export function SignIn() {
  return (
    <main className="mx-auto w-full  h-full max-w-screen-xl sm:flex sm:justify-center sm:items-center dark:bg-black">
      <AuthForm
        formTitle="Faça login e começe a usar!"
        className="flex flex-col h-50%"
        submitFormButtonText="Entrar"
        linkDescription={['Não possui conta?', 'Crie uma agora']}
      >
        <label htmlFor="email" className="flex flex-col">
          <Text size="lg">Endereço de email</Text>
          <div className="flex items-center w-full gap-2 bg-[#202024] p-2 rounded mt-1">
            <MdOutlineEmail size={24} className="text-white" />
            <Input
              type="email"
              className="flex bg-transparent outline-none w-full h-8  placeholder:text-white text-white"
              placeholder="Digite seu email"
              id="email"
            />
          </div>
        </label>

        <label htmlFor="password" className="flex flex-col">
          <Text size="lg">Senha</Text>
          <div className="flex items-center w-full gap-2 bg-[#202024] p-2 rounded mt-1">
            <MdOutlineLock size={24} className="text-white" />
            <Input
              type="password"
              className="flex bg-transparent outline-none w-full h-8  placeholder:text-white text-white"
              placeholder="Digite sua senha"
              id="password"
            />
          </div>
        </label>
      </AuthForm>
    </main>
  )
}
