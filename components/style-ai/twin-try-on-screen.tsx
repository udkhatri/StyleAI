"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigation } from "@/lib/navigation-context"
import {
  ChevronLeft,
  RotateCcw,
  Download,
  Share2,
  User,
  LayoutGrid,
} from "lucide-react"

export function TwinTryOnScreen() {
  const { navigate, selectedOutfit } = useNavigation()
  const [viewMode, setViewMode] = useState<"twin" | "flat">("twin")

  const outfit = selectedOutfit || {
    id: "1",
    name: "Safe Pick",
    occasion: "Office",
    items: [
      { id: "1", name: "Navy Blazer", category: "Outerwear", image: "https://picsum.photos/seed/blazer/200/250" },
      { id: "2", name: "White Oxford Shirt", category: "Tops", image: "https://picsum.photos/seed/oxford/200/250" },
      { id: "5", name: "Khaki Chinos", category: "Bottoms", image: "https://picsum.photos/seed/chinos/200/250" },
      { id: "7", name: "Brown Leather Boots", category: "Shoes", image: "https://picsum.photos/seed/boots/200/250" },
    ],
    image: "https://picsum.photos/seed/outfit1/300/400",
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={() => navigate("home")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="text-center">
          <h1 className="font-semibold text-foreground">{outfit.name}</h1>
          <Badge variant="secondary" className="mt-1 text-xs">
            {outfit.occasion}
          </Badge>
        </div>
        <div className="w-9" />
      </div>

      {/* Twin View */}
      <div className="flex-1 relative bg-gradient-to-b from-primary/5 to-background">
        {viewMode === "twin" ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-full max-w-[260px] aspect-[3/5]">
              <img
                src="https://picsum.photos/seed/twinrender/300/500"
                alt="AI Twin wearing outfit"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
              {outfit.items.map((item) => (
                <div
                  key={item.id}
                  className="aspect-square rounded-xl bg-card border border-border overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating Actions */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full shadow-md"
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full shadow-md"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="px-4 py-3 border-t border-border bg-card">
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "twin" | "flat")}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="twin" className="gap-2">
              <User className="w-4 h-4" />
              Twin View
            </TabsTrigger>
            <TabsTrigger value="flat" className="gap-2">
              <LayoutGrid className="w-4 h-4" />
              Flat Collage
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Items in Outfit */}
      <div className="px-4 py-3 border-t border-border bg-card">
        <p className="text-xs text-muted-foreground mb-2">Items in this outfit</p>
        <div className="flex gap-2 overflow-x-auto">
          {outfit.items.map((item) => (
            <div
              key={item.id}
              className="w-14 h-14 rounded-lg bg-muted overflow-hidden shrink-0 border border-border"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
