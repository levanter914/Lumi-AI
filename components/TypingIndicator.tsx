import { cn } from "@/lib/utils"

interface TypingIndicatorProps {}

export function TypingIndicator({}: TypingIndicatorProps) {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

