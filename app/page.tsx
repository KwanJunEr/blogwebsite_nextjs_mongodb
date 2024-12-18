import Image from "next/image";
import "./globals.css"
import Link from "next/link";
import Featured from "@/components/featured/Featured"
import CategoryList from "@/components/categoryList/CategoryList"
import CardList from "@/components/cardlist/CardList"
import Menu from "@/components/Menu/Menu"
import styles from "./homepage.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
