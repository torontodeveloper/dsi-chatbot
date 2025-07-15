"use client";
import Image from "next/image";
import Chat from "@/components/chat";
import styles from "./page.module.css";
import logo from "../public/logo.jpg";
import ModelDisplay from "../components/model";
import { CORE_MODELS, EXAMPLES } from "@/data";
import TabButton from "@/components/TabButton";
import useApiServices from "@/components/rest-api/api-services";
import { ChangeEvent, useState } from "react";
import ConversationAgent from "@/components/conversation-agent";

type BotModelProps = {
  prompt: string;
};
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
      <div>
        <ul className={styles.modelDisplay}>
          {CORE_MODELS.map((model, index) => (
            <TabButton key={index}>
              <ModelDisplay {...model} />
            </TabButton>
          ))}
        </ul>
      </div>

      {/* <section>
        <ul className={styles.modelDisplay}>
          {CORE_MODELS.map((model) => (
            <ModelDisplay {...model} />
          ))}
        </ul>
      </section> */}
      <div className={styles.botContainer}>
        <ConversationAgent />
        {/* <Chat /> */}
      </div>
    </>
  );
}
