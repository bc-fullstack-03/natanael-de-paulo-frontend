import * as Dialog from '@radix-ui/react-dialog'
import { Feed } from '../components/Feed'
import { HeaderTitle } from '../components/HeaderTitle'
import { Theme } from '../components/Theme'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { CreatePostBtn } from '../components/CreatePostBtn'
import { CreatePostDialog } from '../components/CreatePostDialog'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { AuthHeader } from '../services/AuthHeader'
import { PostProps } from '../models/Post'

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const token = localStorage.getItem('token')
  const user = 'Handle'
  const authHeader = AuthHeader()

  useEffect(() => {
    refreshListPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refreshListPost = async () => {
    const listPost: PostProps[] = await api
      .get('/feed', {
        params: {
          page: 0
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data)

    setPosts(listPost)
  }

  const handleLike = async (post_id: string) => {
    try {
      await api.post(`/posts/${post_id}/like`, null, authHeader)
      refreshListPost()
    } catch (error) {
      console.error(error)
    }
  }

  const [open, setOpen] = useState(false)
  const closeDialog = () => {
    setOpen(!open)
  }

  return (
    <>
      <Theme>
        <header className="w-full h-auto p-3.5 rounded-b-md bg-white">
          <HeaderTitle>Pagina inicial</HeaderTitle>
        </header>

        <div className="flex w-full px-4 sm:px-0 mt-6 ">
          <div className="flex w-full items-center bg-white rounded-md border border-slate-200 gap-4 p-2 pl-4 sm:justify-center">
            <div className="flex items-center my-2">
              <MdOutlinePersonOutline size={24} className="text-black" />
            </div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <CreatePostBtn user={user} />
              <CreatePostDialog
                closeDialog={closeDialog}
                user={user}
                setOpen={setOpen}
                open={open}
                refreshListPost={refreshListPost}
              />
            </Dialog.Root>
          </div>
        </div>

        <div className="border-b border-solid border-slate-400"></div>

        <Feed posts={posts} user={user} handleLike={handleLike} />
      </Theme>
    </>
  )
}
