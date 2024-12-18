import React from 'react'
import styles from "./cardList.module.css"
import Pagination from "@/components/pagination/Pagination"
import Image from 'next/image'
import Card from "@/components/card/Card";

const Navbar = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Recent Posts</h1>
     <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
     </div>
      <Pagination/>
    </div>
  )
}

export default Navbar
