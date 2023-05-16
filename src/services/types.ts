export type PostProps = {
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

export type LoginUserProps = {
  email: string;
  password: string;
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

export type UserProps = {
  _id: string;
  email: string;
  password: string;
  profile: ProfileProps;
}

export type SignUpUserProps = {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
  }
}

