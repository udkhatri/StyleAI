"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Screen =
  | "onboarding-welcome"
  | "onboarding-quiz"
  | "onboarding-twin-setup"
  | "onboarding-processing"
  | "home"
  | "wardrobe"
  | "wardrobe-add-capture"
  | "wardrobe-add-edit"
  | "wardrobe-add-confirm"
  | "outfit-builder"
  | "ai-stylist"
  | "twin-try-on"
  | "playground"
  | "planner"
  | "stats"
  | "social"
  | "profile"
  | "inspiration-board"

interface NavigationContextType {
  currentScreen: Screen
  navigate: (screen: Screen) => void
  selectedOutfit: OutfitData | null
  setSelectedOutfit: (outfit: OutfitData | null) => void
  hasCompletedOnboarding: boolean
  completeOnboarding: () => void
}

export interface OutfitData {
  id: string
  name: string
  occasion: string
  items: {
    id: string
    name: string
    category: string
    image: string
  }[]
  image: string
  weather?: string
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding-welcome")
  const [selectedOutfit, setSelectedOutfit] = useState<OutfitData | null>(null)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true)
    setCurrentScreen("home")
  }

  return (
    <NavigationContext.Provider
      value={{
        currentScreen,
        navigate,
        selectedOutfit,
        setSelectedOutfit,
        hasCompletedOnboarding,
        completeOnboarding,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}
