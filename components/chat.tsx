"use client";
import { useChat } from "@ai-sdk/react";
import styles from "./chat.module.css";
const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();
  return (
    <div className={styles.container}>
      <h2>Using Vercel openai</h2>
      {messages.map((message, index) => (
        <div key={index} className={styles.chat}>
          {message.role == "user" ? "User: " : "Robot: "}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="chat">Plz type ur prompt?...</label>
        <input type="text" value={input} onChange={handleInputChange} />
        <br />
        <button type="submit" id="chat">
          Click Me!!
        </button>
      </form>
      {status == "submitted" && <h1>Loading.....</h1>}
    </div>
  );
};
export default Chat;
