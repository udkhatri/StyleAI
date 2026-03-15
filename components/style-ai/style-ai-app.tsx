"use client"

import { useNavigation } from "@/lib/navigation-context"
import { BottomNav } from "./bottom-nav"
import {
  OnboardingWelcome,
  OnboardingQuiz,
  OnboardingTwinSetup,
  OnboardingProcessing,
} from "./onboarding"
import { HomeScreen } from "./home-screen"
import { WardrobeScreen } from "./wardrobe-screen"
import { AddItemCapture, AddItemEdit, AddItemConfirm } from "./add-item-flow"
import { OutfitBuilderScreen } from "./outfit-builder-screen"
import { AIStylistScreen } from "./ai-stylist-screen"
import { TwinTryOnScreen } from "./twin-try-on-screen"
import { PlaygroundScreen } from "./playground-screen"
import { PlannerScreen } from "./planner-screen"
import { StatsScreen } from "./stats-screen"
import { SocialScreen } from "./social-screen"
import { ProfileScreen } from "./profile-screen"
import { InspirationBoardScreen } from "./inspiration-board-screen"

const onboardingScreens = [
  "onboarding-welcome",
  "onboarding-quiz",
  "onboarding-twin-setup",
  "onboarding-processing",
]

export function StyleAIApp() {
  const { currentScreen, hasCompletedOnboarding } = useNavigation()

  const isOnboarding = onboardingScreens.includes(currentScreen)
  const showBottomNav = hasCompletedOnboarding && !isOnboarding

  const renderScreen = () => {
    switch (currentScreen) {
      case "onboarding-welcome":
        return <OnboardingWelcome />
      case "onboarding-quiz":
        return <OnboardingQuiz />
      case "onboarding-twin-setup":
        return <OnboardingTwinSetup />
      case "onboarding-processing":
        return <OnboardingProcessing />
      case "home":
        return <HomeScreen />
      case "wardrobe":
        return <WardrobeScreen />
      case "wardrobe-add-capture":
        return <AddItemCapture />
      case "wardrobe-add-edit":
        return <AddItemEdit />
      case "wardrobe-add-confirm":
        return <AddItemConfirm />
      case "outfit-builder":
        return <OutfitBuilderScreen />
      case "ai-stylist":
        return <AIStylistScreen />
      case "twin-try-on":
        return <TwinTryOnScreen />
      case "playground":
        return <PlaygroundScreen />
      case "planner":
        return <PlannerScreen />
      case "stats":
        return <StatsScreen />
      case "social":
        return <SocialScreen />
      case "profile":
        return <ProfileScreen />
      case "inspiration-board":
        return <InspirationBoardScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <main className="flex-1 overflow-y-auto">
        {renderScreen()}
      </main>
      {showBottomNav && <BottomNav />}
    </div>
  )
}
