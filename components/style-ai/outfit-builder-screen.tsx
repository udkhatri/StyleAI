"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useNavigation } from "@/lib/navigation-context"
import { wardrobeItems } from "@/lib/dummy-data"
import {
  ChevronLeft,
  Shuffle,
  Sparkles,
  Save,
  ChevronUp,
  Eye,
  Lock,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Tops", "Bottoms", "Shoes", "Outerwear"]

export function OutfitBuilderScreen() {
  const { navigate, setSelectedOutfit } = useNavigation()
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({
    Tops: "2",
    Bottoms: "4",
    Shoes: "6",
    Outerwear: "1",
  })
  const [visibility, setVisibility] = useState<"private" | "public">("private")
  const [activeCategory, setActiveCategory] = useState("Tops")

  const getItemById = (id: string) => wardrobeItems.find((item) => item.id === id)

  const handleSeeOnTwin = () => {
    const items = Object.values(selectedItems)
      .map(getItemById)
      .filter(Boolean)
      .map((item) => ({
        id: item!.id,
        name: item!.name,
        category: item!.category,
        image: item!.image,
      }))

    setSelectedOutfit({
      id: "builder",
      name: "Custom Outfit",
      occasion: "Casual",
      items,
      image: items[0]?.image || "",
    })
    navigate("twin-try-on")
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={() => navigate("wardrobe")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Shuffle className="w-3 h-3" />
            Pin & Shuffle
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Sparkles className="w-3 h-3" />
            AI Complete
          </Button>
        </div>
        <Button size="sm" className="h-8 gap-1">
          <Save className="w-3 h-3" />
          Save
        </Button>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 bg-muted/30 relative p-4">
        <div className="absolute inset-4 bg-card rounded-2xl border border-border shadow-sm flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 p-4">
            {Object.entries(selectedItems).map(([category, itemId]) => {
              const item = getItemById(itemId)
              if (!item) return null
              return (
                <div
                  key={category}
                  className="relative group"
                >
                  <div className="w-28 h-32 rounded-xl overflow-hidden border-2 border-border bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
                    <span className="text-[8px] text-primary-foreground">↔</span>
                  </div>
                  <p className="text-[10px] text-center mt-1 text-muted-foreground truncate">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* See on Twin Button */}
        <Button
          className="absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 shadow-lg"
          onClick={handleSeeOnTwin}
        >
          <Eye className="w-4 h-4" />
          See on Twin
        </Button>
      </div>

      {/* Category Selector */}
      <div className="px-4 py-2 border-t border-border bg-card">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className="shrink-0"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Item Selector */}
      <div className="px-4 py-3 border-t border-border bg-card">
        <div className="flex gap-2 overflow-x-auto">
          {wardrobeItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <button
                key={item.id}
                className={cn(
                  "w-16 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-colors",
                  selectedItems[activeCategory] === item.id
                    ? "border-primary"
                    : "border-transparent"
                )}
                onClick={() =>
                  setSelectedItems((prev) => ({ ...prev, [activeCategory]: item.id }))
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
        </div>
      </div>

      {/* Bottom Sheet Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <div className="px-4 py-2 border-t border-border bg-card flex items-center justify-center cursor-pointer hover:bg-muted transition-colors">
            <ChevronUp className="w-4 h-4 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">More options</span>
          </div>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[60vh]">
          <SheetHeader>
            <SheetTitle>Outfit Settings</SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Occasion</label>
              <div className="flex flex-wrap gap-2">
                {["Office", "Casual", "Date Night", "Weekend", "Formal"].map((occ) => (
                  <Badge key={occ} variant="outline" className="cursor-pointer hover:bg-muted">
                    {occ}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Mood</label>
              <div className="flex flex-wrap gap-2">
                {["Confident", "Relaxed", "Professional", "Creative", "Playful"].map((mood) => (
                  <Badge key={mood} variant="outline" className="cursor-pointer hover:bg-muted">
                    {mood}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Season</label>
              <div className="flex flex-wrap gap-2">
                {["Spring", "Summer", "Fall", "Winter", "All Season"].map((season) => (
                  <Badge key={season} variant="outline" className="cursor-pointer hover:bg-muted">
                    {season}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Visibility</label>
              <div className="flex gap-2">
                <Button
                  variant={visibility === "private" ? "default" : "outline"}
                  size="sm"
                  className="gap-2"
                  onClick={() => setVisibility("private")}
                >
                  <Lock className="w-4 h-4" />
                  Private
                </Button>
                <Button
                  variant={visibility === "public" ? "default" : "outline"}
                  size="sm"
                  className="gap-2"
                  onClick={() => setVisibility("public")}
                >
                  <Globe className="w-4 h-4" />
                  Public
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
