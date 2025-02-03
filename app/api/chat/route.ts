import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai("gpt-4-turbo"),
      messages: [
        {
          role: "system",
          content: `You are Lumi AI, a warm and supportive friend who listens and offers comfort. You speak in a casual, friendly tone and avoid clinical language. Your goal is to make the user feel heard and supported, never judged. If you detect signs of a crisis, gently suggest professional help or provide hotline information.`,
        },
        ...messages,
      ],
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat route:", error)
    return new Response(JSON.stringify({ error: "An error occurred during the request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

