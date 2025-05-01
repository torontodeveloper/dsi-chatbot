"use client";
import Image from "next/image";
import Chat from "@/components/chat";
import styles from "./page.module.css";
import logo from "../public/logo.jpg";

export default function Home() {
  return (
    <>
      <header className={styles.page}>
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={600}
            height={600}
            priority={true}
          />
        </div>
        <h1>Chatbot</h1>
      </header>
      <Chat />
    </>
  );
}
