"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "@/lib/navigation-context"
import { outfits } from "@/lib/dummy-data"
import {
  Sparkles,
  Send,
  Cloud,
  Eye,
  Check,
  ChevronLeft,
} from "lucide-react"

export function AIStylistScreen() {
  const { navigate, setSelectedOutfit } = useNavigation()
  const [message, setMessage] = useState("")

  const handleSeeOnTwin = (outfit: typeof outfits[0]) => {
    setSelectedOutfit(outfit)
    navigate("twin-try-on")
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={() => navigate("home")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">AI Stylist</span>
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-muted rounded-2xl rounded-tl-sm p-3">
              <p className="text-sm text-foreground">
                Hi Uday! You have a networking event tomorrow evening at 5°C. Here are 3 outfit ideas:
              </p>
            </div>

            {/* Outfit Cards */}
            <div className="space-y-3">
              {outfits.map((outfit) => (
                <Card key={outfit.id} className="overflow-hidden">
                  <div className="flex">
                    <img
                      src={outfit.image}
                      alt={outfit.name}
                      className="w-24 h-28 object-cover"
                    />
                    <CardContent className="flex-1 p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm text-foreground">{outfit.name}</h4>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 text-xs gap-1 px-2"
                          onClick={() => handleSeeOnTwin(outfit)}
                        >
                          <Eye className="w-3 h-3" />
                          See on Twin
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-[10px] h-5">
                          {outfit.occasion}
                        </Badge>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Cloud className="w-3 h-3" />
                          {outfit.weather}
                        </div>
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {outfit.items.map((item) => item.name).join(" • ")}
                      </div>
                      <Button size="sm" className="w-full h-7 text-xs">
                        <Check className="w-3 h-3 mr-1" />
                        Wear This
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="px-4 py-3 border-t border-border bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="Ask your stylist anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button size="icon" className="shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
