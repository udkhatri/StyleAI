"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "@/lib/navigation-context"
import { outfits } from "@/lib/dummy-data"
import {
  Heart,
  Shuffle,
  Share2,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function PlaygroundScreen() {
  const { setSelectedOutfit, navigate } = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [useWardrobe, setUseWardrobe] = useState(true)
  const [liked, setLiked] = useState<string[]>([])

  const currentOutfit = outfits[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % outfits.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + outfits.length) % outfits.length)
  }

  const handleLike = () => {
    if (liked.includes(currentOutfit.id)) {
      setLiked((prev) => prev.filter((id) => id !== currentOutfit.id))
    } else {
      setLiked((prev) => [...prev, currentOutfit.id])
    }
  }

  const handleShuffle = () => {
    let newIndex = Math.floor(Math.random() * outfits.length)
    while (newIndex === currentIndex && outfits.length > 1) {
      newIndex = Math.floor(Math.random() * outfits.length)
    }
    setCurrentIndex(newIndex)
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-background">
      {/* Header Toggle */}
      <div className="px-4 py-3 flex justify-center">
        <div className="inline-flex bg-muted rounded-full p-1">
          <button
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              useWardrobe ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            )}
            onClick={() => setUseWardrobe(true)}
          >
            Using your wardrobe
          </button>
          <button
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              !useWardrobe ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            )}
            onClick={() => setUseWardrobe(false)}
          >
            Exploring new looks
          </button>
        </div>
      </div>

      {/* Main Twin Display */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[300px] aspect-[3/4]">
            <img
              src={`https://picsum.photos/seed/playground${currentIndex}/400/533`}
              alt="AI Twin"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
              <h3 className="text-white font-semibold text-lg">{currentOutfit.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-white/20 text-white border-0 text-xs">
                  {currentOutfit.occasion}
                </Badge>
              </div>
            </div>

            {/* Swipe Indicators */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {outfits.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-4 py-4 border-t border-border bg-card">
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            className={cn(
              "flex-col gap-1 h-auto py-2",
              liked.includes(currentOutfit.id) && "text-red-500"
            )}
            onClick={handleLike}
          >
            <Heart
              className={cn(
                "w-6 h-6",
                liked.includes(currentOutfit.id) && "fill-current"
              )}
            />
            <span className="text-xs">Save</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-col gap-1 h-auto py-2"
            onClick={handleShuffle}
          >
            <Shuffle className="w-6 h-6" />
            <span className="text-xs">Shuffle</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto py-2">
            <Share2 className="w-6 h-6" />
            <span className="text-xs">Share</span>
          </Button>
          <Button variant="ghost" className="flex-col gap-1 h-auto py-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs">Shop Similar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
