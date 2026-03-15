"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "@/lib/navigation-context"
import { statsData } from "@/lib/dummy-data"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function StatsScreen() {
  const { navigate } = useNavigation()

  return (
    <div className="flex flex-col bg-background pb-4">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card">
        <Button variant="ghost" size="icon" onClick={() => navigate("planner")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-bold text-foreground">Your Wardrobe Insights</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="text-center">
            <CardContent className="p-3">
              <p className="text-2xl font-bold text-primary">{statsData.totalItems}</p>
              <p className="text-xs text-muted-foreground">Total Items</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <p className="text-2xl font-bold text-primary">{statsData.outfitsCreated}</p>
              <p className="text-xs text-muted-foreground">Outfits</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <p className="text-2xl font-bold text-primary">{statsData.avgWears}</p>
              <p className="text-xs text-muted-foreground">Avg. Wears</p>
            </CardContent>
          </Card>
        </div>

        {/* Most Worn */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Most Worn Items
              <TrendingUp className="w-4 h-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 overflow-x-auto -mx-4 px-4">
              {statsData.mostWorn.map((item) => (
                <div key={item.id} className="shrink-0 text-center">
                  <div className="w-16 h-20 rounded-lg overflow-hidden mb-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {item.wornCount}×
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Least Worn */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              Least Worn Items
              <Button variant="link" className="h-auto p-0 text-xs">
                Get outfit ideas
                <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 overflow-x-auto -mx-4 px-4">
              {statsData.leastWorn.map((item) => (
                <div key={item.id} className="shrink-0 text-center">
                  <div className="w-16 h-20 rounded-lg overflow-hidden mb-1 opacity-60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {item.wornCount}×
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Wear Activity Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Monthly Wear Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsData.monthlyWears}>
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis hide />
                  <Bar
                    dataKey="wears"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cost Per Wear */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Cost Per Wear</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {statsData.costPerWear.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <span className="text-sm text-foreground">{item.name}</span>
                <Badge
                  variant={
                    parseFloat(item.value.replace(/[^0-9.]/g, "")) < 10
                      ? "secondary"
                      : "outline"
                  }
                  className="font-mono"
                >
                  {item.value}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
