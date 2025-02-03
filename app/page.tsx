import Chat from "@/components/Chat"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
        <Chat />
      </div>
    </div>
  )
}

