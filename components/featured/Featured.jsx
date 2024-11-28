import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src = "/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam impedit magnam facilis, ducimus eveniet, numquam, tempora nesciunt adipisci eum sint ex voluptates nam aut modi veritatis? Iure doloremque deleniti nemo.
          </p>
          <button className={styles.button}> <span className="font-bold">Read More</span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
