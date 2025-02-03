"use client"

import { useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesEndRef]) //Fixed useEffect dependency

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    try {
      await handleSubmit(e)
    } catch (error) {
      console.error("Error in chat submission:", error)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#f2f2f7] p-4 flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-2">
          L
        </div>
        <h2 className="text-xl font-semibold text-black">Lumi AI</h2>
      </div>
      <ScrollArea className="flex-grow p-4 bg-white">
        {messages.map((m) => (
          <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                m.role === "user" ? "bg-[#007aff] text-white" : "bg-[#e5e5ea] text-black"
              } shadow-sm`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-[#e5e5ea] text-black shadow-sm">
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
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>
      <div className="p-4 bg-white border-t border-[#d1d1d6]">
        <form onSubmit={onSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Message Lumi..."
            className="flex-grow rounded-full border-[#d1d1d6]"
          />
          <Button type="submit" disabled={isLoading} className="rounded-full bg-[#007aff] text-white hover:bg-blue-600">
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  )
}

