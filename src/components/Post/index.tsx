import { Text } from '../Text'
import { AiOutlineComment, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import img from '../../assets/1655240397925.jpg'

export function Post() {
  return (
    <>
      <div className="bg-white rounded border-slate-400 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-[50%] w-9 h-9 bg-teal-200  overflow-hidden">
            <AiOutlineUser size={24} className="text-slate-50" />
          </div>
          <Text className="font-extrabold"> Natanael</Text>
          <div className="text-xs">data de postagem</div>
        </div>
        <Text asChild={true}>
          <h2 className="ml-4 my-2 font-extrabold">titulo do post</h2>
        </Text>
        <Text asChild={true} size="sm" className="text-slate-300">
          <p className="ml-4 my-2 break-words whitespace-pre-wrap">
            descrição do pst
          </p>
        </Text>

        <div className="w-full h-[30em] ">
          <img
            src={img}
            alt="imagem"
            className="w-full h-full flex rounded object-scale-down"
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
