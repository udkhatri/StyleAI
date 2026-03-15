"use client"

import { Home, Shirt, Sparkles, Calendar, Users } from "lucide-react"
import { useNavigation, Screen } from "@/lib/navigation-context"
import { cn } from "@/lib/utils"

const navItems: { icon: typeof Home; label: string; screen: Screen }[] = [
  { icon: Home, label: "Home", screen: "home" },
  { icon: Shirt, label: "Wardrobe", screen: "wardrobe" },
  { icon: Sparkles, label: "Playground", screen: "playground" },
  { icon: Calendar, label: "Planner", screen: "planner" },
  { icon: Users, label: "Social", screen: "social" },
]

export function BottomNav() {
  const { currentScreen, navigate } = useNavigation()

  const isActive = (screen: Screen) => {
    if (screen === "home") return currentScreen === "home" || currentScreen === "ai-stylist" || currentScreen === "twin-try-on"
    if (screen === "wardrobe") return currentScreen.startsWith("wardrobe") || currentScreen === "outfit-builder"
    if (screen === "social") return currentScreen === "social" || currentScreen === "profile" || currentScreen === "inspiration-board"
    return currentScreen === screen
  }

  return (
    <nav className="sticky bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center justify-around px-2 shrink-0">
      {navItems.map((item) => (
        <button
          key={item.screen}
          onClick={() => navigate(item.screen)}
          className={cn(
            "flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-xl transition-colors",
            isActive(item.screen)
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <item.icon className="h-5 w-5" />
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
