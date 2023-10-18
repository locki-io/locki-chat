import { UseChatHelpers } from 'ai/react'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Locki AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an chatbot app for 3D creators powered by Open AI.
        </p>
      </div>
    </div>
  )
}
