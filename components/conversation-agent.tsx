"use client";
import { ChangeEvent, useEffect, useState } from "react";
import useApiServices from "./rest-api/api-services";
import axios from "axios";

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
    const resp = await axios.get("http://localhost:8000/books/book_one");
    return resp?.data;
  }
  useEffect(() => {
    getFastAPI().then((resp) => console.log("FastAPI response is ***", resp));
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Enter ur Prompt plz</label>
      <input type="text" value={text} onChange={handlePrompt} />
      {<li>{apiResponse?.msg}</li>}
      <button type="submit">Click Me!!</button>
    </form>
  );
};
export default ConversationAgent;
