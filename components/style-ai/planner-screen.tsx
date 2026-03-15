"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "@/lib/navigation-context"
import { calendarOutfits, upcomingEvents } from "@/lib/dummy-data"
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
  Sun,
  Cloud,
  Camera,
  ChartBar,
} from "lucide-react"
import { cn } from "@/lib/utils"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export function PlannerScreen() {
  const { navigate } = useNavigation()
  const [currentMonth] = useState(new Date(2026, 2, 1)) // March 2026
  const [selectedDate, setSelectedDate] = useState<string | null>("2026-03-15")

  const today = "2026-03-15"

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth)

  const formatDateKey = (day: number) => {
    const month = String(currentMonth.getMonth() + 1).padStart(2, "0")
    return `${currentMonth.getFullYear()}-${month}-${String(day).padStart(2, "0")}`
  }

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const weekDates = [9, 10, 11, 12, 13, 14, 15] // Week of March 9-15

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <h1 className="text-xl font-bold text-foreground">Planner</h1>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={() => navigate("stats")}
        >
          <ChartBar className="w-4 h-4" />
          Stats
        </Button>
      </div>

      {/* Calendar Header */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="font-semibold text-foreground">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs text-muted-foreground py-1">
              {day.slice(0, 1)}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dateKey = formatDateKey(day)
            const hasOutfit = calendarOutfits[dateKey]
            const isToday = dateKey === today
            const isSelected = dateKey === selectedDate

            return (
              <button
                key={day}
                className={cn(
                  "aspect-square rounded-lg flex flex-col items-center justify-center text-xs transition-colors relative",
                  isToday && "bg-primary text-primary-foreground",
                  isSelected && !isToday && "bg-primary/10 border-2 border-primary",
                  !isToday && !isSelected && "hover:bg-muted"
                )}
                onClick={() => setSelectedDate(dateKey)}
              >
                <span>{day}</span>
                {hasOutfit && (
                  <div className="absolute -bottom-0.5 w-4 h-4 rounded-full overflow-hidden border border-card">
                    <img
                      src={hasOutfit.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* This Week */}
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">This Week</h3>
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4">
          {weekDays.map((day, index) => {
            const dateKey = formatDateKey(weekDates[index])
            const outfit = calendarOutfits[dateKey]
            const isToday = dateKey === today

            return (
              <div
                key={day}
                className={cn(
                  "w-16 shrink-0 rounded-xl border p-2 text-center",
                  isToday ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <p className="text-xs text-muted-foreground">{day}</p>
                <p className={cn("text-sm font-medium", isToday && "text-primary")}>
                  {weekDates[index]}
                </p>
                {outfit ? (
                  <div className="w-10 h-10 mx-auto mt-2 rounded-lg overflow-hidden">
                    <img
                      src={outfit.image}
                      alt={outfit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-10 h-10 mx-auto mt-2 rounded-lg border border-dashed border-muted-foreground/30"
                  >
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Day Detail */}
      {selectedDate && (
        <div className="px-4 py-3">
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {selectedDate === today ? "Today" : `March ${selectedDate.split("-")[2]}`}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Cloud className="w-4 h-4" />
                    5°C, Cloudy
                  </div>
                </div>
                {calendarOutfits[selectedDate] ? (
                  <Badge variant="secondary" className="gap-1">
                    <Check className="w-3 h-3" />
                    Outfit planned
                  </Badge>
                ) : (
                  <Button size="sm" variant="outline" className="gap-1">
                    <Plus className="w-3 h-3" />
                    Plan outfit
                  </Button>
                )}
              </div>
              {calendarOutfits[selectedDate] && (
                <div className="flex items-center gap-3">
                  <div className="w-16 h-20 rounded-lg overflow-hidden">
                    <img
                      src={calendarOutfits[selectedDate].image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{calendarOutfits[selectedDate].name}</p>
                    <Button size="sm" variant="link" className="h-auto p-0 text-xs">
                      <Camera className="w-3 h-3 mr-1" />
                      Add OOTD selfie
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">Upcoming Events</h3>
        <div className="space-y-2">
          {upcomingEvents.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm text-foreground">{event.name}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {event.dressCode}
                  </Badge>
                </div>
                {event.planned ? (
                  <Badge className="gap-1 bg-green-500/10 text-green-600 border-green-500/20">
                    <Check className="w-3 h-3" />
                    Planned
                  </Badge>
                ) : (
                  <Button size="sm" variant="outline">
                    Plan outfit
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
