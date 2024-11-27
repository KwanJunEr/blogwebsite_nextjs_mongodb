import React from 'react'
import styles from "@/components/authLinks/authLinks.module.css"
import Link from 'next/link'
const AuthLinks = () => {

    //temporrary
    const status = "notauthenticated"
  return (
   <>
   {status === "notauthenticated" ? (
    <Link href = "/login">Login</Link>
   ) : (
    <>
    <Link href = "/write">Write</Link>
    <span className={styles.link}>Logout</span>
    </>
   )}
    
   </>
  )
}

export default AuthLinks
