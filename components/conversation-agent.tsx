"use client";
import { ChangeEvent, useEffect, useState } from "react";
import useApiServices from "./rest-api/api-services";
import axios from "axios";
import styles from "./conversation-age.module.css";

const ConversationAgent = () => {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  const { apiResponse, loading, errorState } = useApiServices<BotModelProps>({
    prompt,
  });
  function handlePrompt(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  function handleSubmit(event: ChangeEvent<HTMLInputElement>) {
    event?.preventDefault();
    console.log("prompt is", prompt);
    setPrompt(text);
  }
  async function getFastAPI() {
    const resp = await axios.get("http://localhost:8000/gpt/{msg}");
    return resp?.data;
  }
  useEffect(() => {
    getFastAPI().then((resp) => console.log("FastAPI response is ***", resp));
  }, []);
  function handleClear() {}
  return (
    <div className={styles.container}>
      <h2>Using FastApi Library</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter ur Prompt plz</label>
        <input type="text" value={text} onChange={handlePrompt} />
        {<p>{apiResponse?.msg}</p>}
        <div className={styles.btnGroup}>
          <button type="submit">Click Me!!</button>
          <button type="button" onClick={handleClear}>
            Clear Me!!
          </button>
        </div>
      </form>
    </div>
  );
};
export default ConversationAgent;
