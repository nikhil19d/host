'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login(){
  const session = useSession()
  return(
    !session.data?.user ? <button onClick={()=>signIn()}>signIn</button> :
                          <button onClick={()=>signOut()}>signOut {session.data.user.name}</button>
  )
}
