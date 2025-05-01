import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const client = openai;
  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system: "You are helpful assistant",
    messages,
  });
  return result.toDataStreamResponse();
}
