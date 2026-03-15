"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigation } from "@/lib/navigation-context"
import { wardrobeItems } from "@/lib/dummy-data"
import { Search, SlidersHorizontal, Plus, Heart, WashingMachine, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Tops", "Bottoms", "Shoes", "Outerwear", "Accessories"]
const filters = ["Favorites", "Least Worn", "Season: Winter", "Status: Active"]

export function WardrobeScreen() {
  const { navigate } = useNavigation()
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = wardrobeItems.filter((item) => {
    if (activeCategory !== "All" && item.category !== activeCategory) return false
    if (activeFilters.includes("Favorites") && !item.favorite) return false
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    )
  }

  return (
    <div className="flex flex-col bg-background pb-4 relative">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 space-y-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">My Wardrobe</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-10"
          />
        </div>

        {/* Category Chips */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2" style={{ width: "max-content" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="h-8 rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Secondary Filters */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2" style={{ width: "max-content" }}>
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilters.includes(filter) ? "default" : "secondary"}
                className="cursor-pointer h-7 px-3"
                onClick={() => toggleFilter(filter)}
              >
                {filter === "Favorites" && <Star className="w-3 h-3 mr-1" />}
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Item Grid */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => navigate("outfit-builder")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute top-1.5 right-1.5 flex flex-col gap-1">
                {item.favorite && (
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white fill-white" />
                  </div>
                )}
                {item.status === "laundry" && (
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <WashingMachine className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2 pt-8">
                <p className="text-white text-xs font-medium truncate">{item.name}</p>
                <Badge
                  variant="secondary"
                  className="mt-1 text-[10px] h-5 bg-white/20 text-white border-0"
                >
                  Worn {item.wornCount}×
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <Button
        size="icon"
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full shadow-lg z-50"
        style={{ maxWidth: 'calc(390px - 2rem)', right: 'calc(50% - 195px + 1rem)' }}
        onClick={() => navigate("wardrobe-add-capture")}
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  )
}
