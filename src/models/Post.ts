export interface PostProps{
  _id: string;
  title: string;
  description: string;
  profile: ProfileProps;
  image: boolean;
  imagePath: string;
  comments: [ProfileProps];
  likes: [ProfileProps];
  createdAt: string;
  updatedAt: string;
}


export type ProfileProps = {
  _id: string;
  name: string;
  user: string;
  following: [ProfileProps];
  followers: [ProfileProps];
  image: boolean;
  imageUrl: string;
}