"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "@/lib/navigation-context"
import { boardItems } from "@/lib/dummy-data"
import { ChevronLeft, Pencil, Share2 } from "lucide-react"

export function InspirationBoardScreen() {
  const { navigate } = useNavigation()

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={() => navigate("profile")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="font-semibold text-foreground">Winter Work Looks</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 py-4">
        <div className="columns-2 gap-3 space-y-3">
          {boardItems.map((item, index) => {
            // Vary heights for masonry effect
            const heights = ["h-48", "h-56", "h-64", "h-52", "h-60", "h-44"]
            const heightClass = heights[index % heights.length]

            return (
              <div
                key={item.id}
                className={`break-inside-avoid rounded-xl overflow-hidden border border-border bg-card mb-3`}
              >
                <div className={`${heightClass} relative`}>
                  <img
                    src={item.image}
                    alt="Inspiration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {item.creator}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-[10px] cursor-pointer hover:bg-muted"
                    onClick={() => navigate("outfit-builder")}
                  >
                    Style it
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
