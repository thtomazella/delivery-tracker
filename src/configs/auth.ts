import { env } from "@/env"

interface AuthConfig {
  jwt: {
    secret: string;
    expiresIn: number;
  };
}

export const authConfig: AuthConfig ={
  jwt:{
    secret: env.JWT_SECRET,
    expiresIn: env.EXPIRES_IN,
  }
}