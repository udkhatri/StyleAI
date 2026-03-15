"use client"

import { NavigationProvider } from "@/lib/navigation-context"
import { StyleAIApp } from "@/components/style-ai/style-ai-app"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen">
        <NavigationProvider>
          <StyleAIApp />
        </NavigationProvider>
      </div>
    </div>
  )
}
