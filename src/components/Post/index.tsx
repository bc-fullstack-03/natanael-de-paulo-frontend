import { Text } from '../Text'
import { AiOutlineComment, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import img from '../../assets/1655240397925.jpg'

export function Post() {
  return (
    <>
      <div className="flex flex-col bg-white rounded-md border-slate-400 p-4 sm:max-w-lg sm:mx-auto sm:w-full">
        <div className="flex items-center gap-3">
          <div className="rounded-[50%] p-2 bg-teal-200  overflow-hidden">
            <AiOutlineUser size={24} className="text-slate-50" />
          </div>
          <Text className="font-extrabold"> Natanael</Text>
          <div className="text-xs">data de postagem</div>
        </div>
        <div className="mt-4">
          <Text asChild={true}>
            <h2 className="px-4 py-2 font-extrabold">titulo do post</h2>
          </Text>
          <Text asChild={true} size="sm" className="text-slate-300">
            <p className="px-4 py-2 break-words whitespace-pre-wrap">
              descrição do pst
            </p>
          </Text>
        </div>

        <div className="h-auto mx-auto my-4">
          <img
            src={img}
            alt="imagem"
            className=" flex rounded "
            width={216}
            height={325}
          />
        </div>

        <div className="flex gap-4 mt-3 ml-3 items-center">
          <div className="flex gap-2 items-center">
            <AiOutlineComment
              size={24}
              className="hover:bg-sky-400 rounded-full p-1"
            />
            <Text size="sm"> comments </Text>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineHeart
              size={24}
              className="hover:bg-sky-400 rounded-full p-1"
              // onClick={() => handleLike(post._id)}
            />
            <Text size="sm"> likes</Text>
          </div>
        </div>
      </div>
    </>
  )
}
