import CredentialsProvider from "next-auth/providers/credentials";
import prismaClient from '../db'
import argon2 from 'argon2';

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "someone@something.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        console.log(email, password)

        const response = await prismaClient.user.findFirst({
          where: {
            email: email
          }
        })

        type StrictUser = {
          id: string;
          email: string;
          name: string;
        };

        if (!response || !response.id || !response.email || !response.firstname || !response.lastname) {
          throw new Error("Invalid user");
        }

        const strictUser: StrictUser = {
          id: response.id.toString(),
          email: response.email,
          name: response.firstname
        };


        const verifiedUser = await argon2.verify(response.password!, password!)

        if (!verifiedUser) return null

        return strictUser

      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if(session && session.user){
        session.user.id = token.sub;
      }
      return session
    }
  }
}