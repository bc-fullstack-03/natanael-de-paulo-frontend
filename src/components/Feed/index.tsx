import { PostProps } from '../../models/Post'
import { Post } from '../Post'

interface IFeedProps {
  posts: PostProps[]
  user: string
  handleLike: (post_id: string) => Promise<void>
}

export function Feed({ posts, handleLike }: IFeedProps) {
  return (
    <>
      {posts &&
        posts.map(post => (
          <Post post={post} handleLike={handleLike} key={post._id} />
        ))}
    </>
  )
}
