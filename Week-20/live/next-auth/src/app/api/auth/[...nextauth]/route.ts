import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prismaClient from '../../../db'
import argon2 from 'argon2';
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
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
          firstname: string;
          lastname: string;
        };

        if (!response || !response.id || !response.email || !response.firstname || !response.lastname) {
          throw new Error("Invalid user");
        }

        const strictUser: StrictUser = {
          id: response.id.toString(),
          email: response.email,
          firstname: response.firstname,
          lastname: response.lastname,
        };


        const verifiedUser = await argon2.verify(response?.password!, password!)

        if (!verifiedUser) return null

        return strictUser

      }
    })
  ]
})

export { handler as GET, handler as POST }