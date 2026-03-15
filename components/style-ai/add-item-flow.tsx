"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigation } from "@/lib/navigation-context"
import {
  Camera,
  Image,
  Link,
  ChevronLeft,
  Check,
  Pencil,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function AddItemCapture() {
  const { navigate } = useNavigation()
  const [activeTab, setActiveTab] = useState("camera")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <Button variant="ghost" size="icon" onClick={() => navigate("wardrobe")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold text-foreground">Add Item</h1>
        <div className="w-9" />
      </div>

      {/* Camera View */}
      <div className="flex-1 relative bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-72 border-2 border-dashed border-primary rounded-xl flex flex-col items-center justify-center gap-3 bg-black/5">
            <Camera className="w-12 h-12 text-muted-foreground" />
            <p className="text-sm text-muted-foreground text-center px-4">
              Position item within frame for automatic background removal
            </p>
          </div>
        </div>

        {/* Capture Button */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <button
            className="w-16 h-16 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center"
            onClick={() => navigate("wardrobe-add-edit")}
          >
            <div className="w-12 h-12 rounded-full bg-primary" />
          </button>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="px-4 py-4 bg-card border-t border-border">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="camera" className="gap-1.5">
              <Camera className="w-4 h-4" />
              Camera
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-1.5">
              <Image className="w-4 h-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="web" className="gap-1.5">
              <Link className="w-4 h-4" />
              Clip from Web
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

export function AddItemEdit() {
  const { navigate } = useNavigation()
  const [tags, setTags] = useState({
    category: "Tops",
    subcategory: "T-Shirt",
    color: "Navy Blue",
    season: "All Season",
    occasion: "Casual",
    status: "Active",
    location: "Closet",
    price: "",
    brand: "",
  })

  const tagFields = [
    { key: "category", label: "Category", value: tags.category },
    { key: "subcategory", label: "Subcategory", value: tags.subcategory },
    { key: "color", label: "Color", value: tags.color },
    { key: "season", label: "Season", value: tags.season },
    { key: "occasion", label: "Occasion", value: tags.occasion },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("wardrobe-add-capture")}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold text-foreground">Edit & Tag</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
        {/* Item Preview */}
        <div className="flex gap-4">
          <div className="w-28 h-36 rounded-xl bg-muted overflow-hidden shrink-0">
            <img
              src="https://picsum.photos/seed/newitem/200/250"
              alt="New item"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-sm text-muted-foreground">AI-Generated Tags</p>
            <div className="flex flex-wrap gap-2">
              {tagFields.map((field) => (
                <Badge
                  key={field.key}
                  variant="secondary"
                  className="gap-1 pr-1.5 cursor-pointer hover:bg-secondary/80"
                >
                  {field.value}
                  <Pencil className="w-3 h-3 text-muted-foreground" />
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Editable Fields */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Status</label>
              <div className="flex gap-2">
                <Badge
                  variant={tags.status === "Active" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setTags({ ...tags, status: "Active" })}
                >
                  Active
                </Badge>
                <Badge
                  variant={tags.status === "Laundry" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setTags({ ...tags, status: "Laundry" })}
                >
                  Laundry
                </Badge>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Location</label>
              <div className="flex gap-2">
                <Badge
                  variant={tags.location === "Closet" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setTags({ ...tags, location: "Closet" })}
                >
                  Closet
                </Badge>
                <Badge
                  variant={tags.location === "Storage" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setTags({ ...tags, location: "Storage" })}
                >
                  Storage
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Brand</label>
            <Input
              placeholder="e.g., Uniqlo"
              value={tags.brand}
              onChange={(e) => setTags({ ...tags, brand: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Price</label>
            <Input
              placeholder="e.g., $45"
              value={tags.price}
              onChange={(e) => setTags({ ...tags, price: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button className="w-full h-12" onClick={() => navigate("wardrobe-add-confirm")}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export function AddItemConfirm() {
  const { navigate } = useNavigation()

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("wardrobe-add-edit")}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold text-foreground">Confirm</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-24">
        {/* Item Preview Card */}
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="aspect-[3/4] bg-muted">
            <img
              src="https://picsum.photos/seed/newitem/300/400"
              alt="New item"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Summary Tags */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Item Details</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Tops</Badge>
            <Badge variant="secondary">T-Shirt</Badge>
            <Badge variant="secondary">Navy Blue</Badge>
            <Badge variant="secondary">All Season</Badge>
            <Badge variant="secondary">Casual</Badge>
            <Badge variant="outline">Active</Badge>
            <Badge variant="outline">Closet</Badge>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button className="w-full h-12" onClick={() => navigate("wardrobe")}>
          <Check className="w-4 h-4 mr-2" />
          Save to Wardrobe
        </Button>
      </div>
    </div>
  )
}
