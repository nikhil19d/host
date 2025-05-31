import { Prisma } from "@/lib/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(params){
      if(!params.user.email) return false
      try {
        await Prisma.user.create({
          data:{
            name: params.user.name,
            image: params.user.image,
            email: params.user.email
          }
        })
      } catch (error) {
        console.log(error)
      }
      return true
    }
  }
})

export { handler as GET, handler as POST }
