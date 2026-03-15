"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "@/lib/navigation-context"
import { outfits, upcomingEvents } from "@/lib/dummy-data"
import {
  Sun,
  Cloud,
  Check,
  X,
  CalendarPlus,
  Shirt,
  Sparkles,
  ChevronRight,
  Eye,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function HomeScreen() {
  const { navigate, setSelectedOutfit } = useNavigation()
  const [activeOutfitIndex, setActiveOutfitIndex] = useState(0)

  const handleSeeOnTwin = (outfit: typeof outfits[0]) => {
    setSelectedOutfit(outfit)
    navigate("twin-try-on")
  }

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Good morning, Uday</h1>
            <div className="flex items-center gap-2 mt-1">
              <Sun className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-muted-foreground">San Francisco • 5°C, Cloudy</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
            <img
              src="https://picsum.photos/seed/uday/100/100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Today's Outfit Suggestions */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-foreground mb-3">Today's Outfit Suggestions</h2>
        
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {outfits.map((outfit, index) => (
              <Card
                key={outfit.id}
                className={cn(
                  "w-48 shrink-0 cursor-pointer transition-all border-2",
                  activeOutfitIndex === index
                    ? "border-primary shadow-lg"
                    : "border-transparent"
                )}
                onClick={() => setActiveOutfitIndex(index)}
              >
                <div className="relative">
                  <img
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-card/90 text-foreground text-xs">
                    {outfit.name}
                  </Badge>
                </div>
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {outfit.occasion}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Cloud className="w-3 h-3" />
                      {outfit.weather}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full h-8 text-xs"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSeeOnTwin(outfit)
                    }}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    See on Twin
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accept/Reject buttons */}
        <div className="flex gap-3 mt-4">
          <Button variant="outline" className="flex-1 h-12">
            <X className="w-4 h-4 mr-2" />
            Reject
          </Button>
          <Button className="flex-1 h-12">
            <Check className="w-4 h-4 mr-2" />
            Accept
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="secondary"
            className="h-auto py-3 flex-col gap-1"
            onClick={() => navigate("planner")}
          >
            <CalendarPlus className="w-5 h-5" />
            <span className="text-xs">Plan Tomorrow</span>
          </Button>
          <Button
            variant="secondary"
            className="h-auto py-3 flex-col gap-1"
            onClick={() => navigate("wardrobe")}
          >
            <Shirt className="w-5 h-5" />
            <span className="text-xs">Open Wardrobe</span>
          </Button>
          <Button
            variant="secondary"
            className="h-auto py-3 flex-col gap-1"
            onClick={() => navigate("ai-stylist")}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xs">Surprise Me</span>
          </Button>
        </div>
      </div>

      {/* Upcoming Event */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-foreground mb-3">Upcoming Events</h2>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{upcomingEvents[0].name}</p>
                <p className="text-sm text-muted-foreground">{upcomingEvents[0].date}</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  {upcomingEvents[0].dressCode}
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="shrink-0"
                onClick={() => navigate("planner")}
              >
                Plan now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
