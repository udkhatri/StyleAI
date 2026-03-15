"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "@/lib/navigation-context"
import { socialPosts, storyUsers } from "@/lib/dummy-data"
import {
  Bell,
  MessageCircle,
  Heart,
  MessageSquare,
  Bookmark,
  Sparkles,
  Cloud,
  Plus,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function SocialScreen() {
  const { navigate } = useNavigation()
  const [likedPosts, setLikedPosts] = useState<string[]>([])
  const [savedPosts, setSavedPosts] = useState<string[]>([])

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    )
  }

  const toggleSave = (postId: string) => {
    setSavedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    )
  }

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">StyleAI</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Stories */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex gap-3 overflow-x-auto -mx-4 px-4">
          {storyUsers.map((user) => (
            <div key={user.id} className="flex flex-col items-center gap-1 shrink-0">
              <div
                className={cn(
                  "w-16 h-16 rounded-full p-0.5",
                  user.hasStory
                    ? "bg-gradient-to-br from-primary to-primary/60"
                    : user.isYou
                    ? "bg-muted"
                    : "bg-border"
                )}
              >
                <div className="w-full h-full rounded-full bg-card p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                    {user.isYou && (
                      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-card">
                        <Plus className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground truncate w-16 text-center">
                {user.isYou ? "Your story" : user.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="px-4 py-4 space-y-4">
        {socialPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            {/* Post Header */}
            <div className="flex items-center gap-3 p-3">
              <div
                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
                onClick={() => navigate("profile")}
              >
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className="font-semibold text-sm text-foreground cursor-pointer"
                    onClick={() => navigate("profile")}
                  >
                    {post.user.handle}
                  </span>
                  {post.user.followsYou && (
                    <Badge variant="secondary" className="text-[10px] h-5">
                      Follows you
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Post Image */}
            <div className="relative aspect-[4/5]">
              <img
                src={post.image}
                alt="Outfit post"
                className="w-full h-full object-cover"
              />
              {post.isAITwin && (
                <Badge className="absolute top-3 right-3 gap-1 bg-card/90 text-foreground">
                  <Sparkles className="w-3 h-3" />
                  AI Twin Look
                </Badge>
              )}
            </div>

            {/* Post Content */}
            <CardContent className="p-3 space-y-3">
              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {post.occasion}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Cloud className="w-3 h-3" />
                  {post.weather}
                </div>
              </div>

              {/* Item Tags */}
              <div className="flex flex-wrap gap-1">
                {post.items.map((item, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-[10px] cursor-pointer hover:bg-muted"
                  >
                    {item}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <button
                    className="flex items-center gap-1"
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart
                      className={cn(
                        "w-5 h-5 transition-colors",
                        likedPosts.includes(post.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      )}
                    />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button onClick={() => toggleSave(post.id)}>
                    <Bookmark
                      className={cn(
                        "w-5 h-5 transition-colors",
                        savedPosts.includes(post.id)
                          ? "fill-primary text-primary"
                          : "text-foreground"
                      )}
                    />
                  </button>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8"
                  onClick={() => navigate("outfit-builder")}
                >
                  Style in my wardrobe
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
