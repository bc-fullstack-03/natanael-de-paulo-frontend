import { ProfileProps } from "../models/Post";

export type LoginUserProps = {
  email: string;
  password: string;
}


export type SignUpUserProps = {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
  }
}

