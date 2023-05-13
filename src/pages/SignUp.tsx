import { AuthForm } from '../components/AuthForm'
import { SignUpForm } from '../components/AuthForm/SignUpForm'

export function SignUp() {
  return (
    <main className="mx-auto w-full  h-full max-w-screen-xl sm:flex sm:justify-center sm:items-center dark:bg-black">
      <AuthForm
        routeName="/"
        formDescription="Cadastre-se e começe a usar!"
        formTitle="CADASTRE-SE"
        className="flex flex-col h-50%"
        linkDescription={['Já possui uma conta?', 'Entre agora']}
      >
        <SignUpForm />
      </AuthForm>
    </main>
  )
}
