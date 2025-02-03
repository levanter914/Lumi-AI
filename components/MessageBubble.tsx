import { cn } from "@/lib/utils"

interface MessageBubbleProps {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("mb-4 flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
          isUser
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        )}
      >
        {message.content}
      </div>
    </div>
  )
}

