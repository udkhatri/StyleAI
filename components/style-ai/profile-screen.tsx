"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useNavigation } from "@/lib/navigation-context"
import { inspirationBoards } from "@/lib/dummy-data"
import {
  ChevronLeft,
  Settings,
  Grid3X3,
  FolderOpen,
  Star,
} from "lucide-react"

const profilePosts = [
  "https://picsum.photos/seed/prof1/200/200",
  "https://picsum.photos/seed/prof2/200/200",
  "https://picsum.photos/seed/prof3/200/200",
  "https://picsum.photos/seed/prof4/200/200",
  "https://picsum.photos/seed/prof5/200/200",
  "https://picsum.photos/seed/prof6/200/200",
  "https://picsum.photos/seed/prof7/200/200",
  "https://picsum.photos/seed/prof8/200/200",
  "https://picsum.photos/seed/prof9/200/200",
]

export function ProfileScreen() {
  const { navigate } = useNavigation()
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={() => navigate("social")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="font-semibold text-foreground">@sarahstyles</span>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Cover & Avatar */}
      <div className="relative">
        <div className="h-28 bg-gradient-to-r from-primary/30 to-primary/10" />
        <div className="absolute -bottom-12 left-4">
          <div className="w-24 h-24 rounded-full border-4 border-card overflow-hidden">
            <img
              src="https://picsum.photos/seed/sarah/200/200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-14 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Sarah Chen</h1>
            <p className="text-sm text-muted-foreground">@sarahstyles</p>
          </div>
          <Button size="sm">Follow</Button>
        </div>
        <p className="text-sm text-foreground mt-2">
          Fashion enthusiast | Minimalist style lover | San Francisco
        </p>
        <div className="flex items-center gap-4 mt-3">
          <div className="text-center">
            <span className="font-bold text-foreground">2.4K</span>
            <span className="text-xs text-muted-foreground ml-1">followers</span>
          </div>
          <div className="text-center">
            <span className="font-bold text-foreground">486</span>
            <span className="text-xs text-muted-foreground ml-1">following</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-center gap-2 mt-4 py-2 bg-muted rounded-lg">
          <Badge variant="secondary" className="text-xs">
            128 items
          </Badge>
          <span className="text-muted-foreground">·</span>
          <Badge variant="secondary" className="text-xs">
            47 outfits
          </Badge>
          <span className="text-muted-foreground">·</span>
          <Badge variant="secondary" className="text-xs">
            320 posts
          </Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid grid-cols-3 mx-4">
          <TabsTrigger value="posts" className="gap-1">
            <Grid3X3 className="w-4 h-4" />
            Posts
          </TabsTrigger>
          <TabsTrigger value="boards" className="gap-1">
            <FolderOpen className="w-4 h-4" />
            Boards
          </TabsTrigger>
          <TabsTrigger value="highlights" className="gap-1">
            <Star className="w-4 h-4" />
            Highlights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="px-4 py-4">
          <div className="grid grid-cols-3 gap-1">
            {profilePosts.map((post, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={post}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="boards" className="px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {inspirationBoards.map((board) => (
              <div
                key={board.id}
                className="rounded-xl overflow-hidden border border-border cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => navigate("inspiration-board")}
              >
                <div className="aspect-square">
                  <img
                    src={board.image}
                    alt={board.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <p className="font-medium text-sm text-foreground truncate">
                    {board.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {board.itemCount} items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="highlights" className="px-4 py-4">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Star className="w-12 h-12 text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">No highlights yet</p>
            <p className="text-xs text-muted-foreground mt-1">
              Save your best looks to show here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
