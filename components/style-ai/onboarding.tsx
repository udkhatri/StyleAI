"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { useNavigation } from "@/lib/navigation-context"
import { Camera, Check, Heart, X, ChevronRight, Sparkles, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const styleQuizImages = [
  { id: 1, image: "https://picsum.photos/seed/style1/150/200", style: "Minimalist" },
  { id: 2, image: "https://picsum.photos/seed/style2/150/200", style: "Classic" },
  { id: 3, image: "https://picsum.photos/seed/style3/150/200", style: "Streetwear" },
  { id: 4, image: "https://picsum.photos/seed/style4/150/200", style: "Bohemian" },
  { id: 5, image: "https://picsum.photos/seed/style5/150/200", style: "Preppy" },
  { id: 6, image: "https://picsum.photos/seed/style6/150/200", style: "Athleisure" },
]

export function OnboardingWelcome() {
  const { navigate } = useNavigation()

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="flex-1" />
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">StyleAI</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your AI-powered wardrobe, reimagined
          </p>
        </div>
      </div>
      <div className="flex-1" />
      <div className="w-full space-y-3">
        <Button
          className="w-full h-12 text-base font-semibold"
          onClick={() => navigate("onboarding-quiz")}
        >
          Sign Up
        </Button>
        <Button
          variant="outline"
          className="w-full h-12 text-base font-semibold"
          onClick={() => navigate("onboarding-quiz")}
        >
          Log In
        </Button>
      </div>
    </div>
  )
}

export function OnboardingQuiz() {
  const { navigate } = useNavigation()
  const [liked, setLiked] = useState<number[]>([])
  const [disliked, setDisliked] = useState<number[]>([])

  const handleLike = (id: number) => {
    setLiked((prev) => [...prev, id])
    setDisliked((prev) => prev.filter((i) => i !== id))
  }

  const handleDislike = (id: number) => {
    setDisliked((prev) => [...prev, id])
    setLiked((prev) => prev.filter((i) => i !== id))
  }

  return (
    <div className="flex flex-col min-h-screen px-6 py-6 bg-background">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Step 1 of 3</span>
          <span className="text-sm text-muted-foreground">Style Quiz</span>
        </div>
        <Progress value={33} className="h-2" />
        <h2 className="text-xl font-bold text-foreground">What's your style?</h2>
        <p className="text-muted-foreground text-sm">Tap to like or dislike these looks</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {styleQuizImages.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative rounded-xl overflow-hidden border-2 transition-all",
                liked.includes(item.id)
                  ? "border-green-500"
                  : disliked.includes(item.id)
                  ? "border-red-400"
                  : "border-transparent"
              )}
            >
              <img
                src={item.image}
                alt={item.style}
                className="w-full h-36 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <span className="text-white text-sm font-medium">{item.style}</span>
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                <button
                  onClick={() => handleLike(item.id)}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    liked.includes(item.id)
                      ? "bg-green-500 text-white"
                      : "bg-white/80 text-muted-foreground hover:bg-green-100"
                  )}
                >
                  <Heart className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDislike(item.id)}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    disliked.includes(item.id)
                      ? "bg-red-400 text-white"
                      : "bg-white/80 text-muted-foreground hover:bg-red-100"
                  )}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="w-full h-12 mt-6"
        onClick={() => navigate("onboarding-twin-setup")}
        disabled={liked.length + disliked.length < 3}
      >
        Continue
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

export function OnboardingTwinSetup() {
  const { navigate } = useNavigation()
  const [height, setHeight] = useState("")
  const [age, setAge] = useState("")

  return (
    <div className="flex flex-col min-h-screen px-6 py-6 bg-background">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Step 2 of 3</span>
          <span className="text-sm text-muted-foreground">AI Twin Setup</span>
        </div>
        <Progress value={66} className="h-2" />
        <h2 className="text-xl font-bold text-foreground">Create Your AI Twin</h2>
        <p className="text-muted-foreground text-sm">
          Take photos to create your digital replica
        </p>
      </div>

      <div className="flex-1 space-y-4">
        <div className="bg-muted rounded-xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">3 Selfies Required</p>
              <p className="text-xs text-muted-foreground">Front, Left, Right angles</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">2 Full-Body Photos</p>
              <p className="text-xs text-muted-foreground">Standing, neutral pose</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[3/4] bg-muted rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-8 border-2 border-dashed border-primary/40 rounded-xl" />
          <div className="text-center space-y-2">
            <Camera className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Tap to take photo</p>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">{i}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Height</label>
            <Input
              placeholder="175 cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Age</label>
            <Input
              placeholder="28"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Button
        className="w-full h-12 mt-6"
        onClick={() => navigate("onboarding-processing")}
      >
        Create My AI Twin
        <Sparkles className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

export function OnboardingProcessing() {
  const { completeOnboarding } = useNavigation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500)
    const timer2 = setTimeout(() => setStep(2), 3000)
    const timer3 = setTimeout(() => setStep(3), 4500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const steps = [
    { label: "Analyzing photos", complete: step >= 1 },
    { label: "Generating Twin", complete: step >= 2 },
    { label: "Ready!", complete: step >= 3 },
  ]

  return (
    <div className="flex flex-col min-h-screen px-6 py-6 bg-background">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Step 3 of 3</span>
          <span className="text-sm text-muted-foreground">Processing</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-2">
          <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
          <h2 className="text-xl font-bold text-foreground">Building your AI Twin...</h2>
        </div>

        <div className="w-full space-y-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-colors",
                s.complete ? "bg-primary/10" : "bg-muted"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center",
                  s.complete ? "bg-primary text-primary-foreground" : "bg-muted-foreground/20"
                )}
              >
                {s.complete ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-xs">{i + 1}</span>
                )}
              </div>
              <span className={cn("font-medium", s.complete && "text-primary")}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {step >= 3 && (
          <div className="space-y-4 w-full">
            <p className="text-sm text-muted-foreground text-center">Preview of your AI Twin</p>
            <div className="flex gap-3 justify-center">
              <div className="w-28 h-40 rounded-xl bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src="https://picsum.photos/seed/twin1/150/200"
                  alt="Twin preview 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-28 h-40 rounded-xl bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src="https://picsum.photos/seed/twin2/150/200"
                  alt="Twin preview 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Button
        className="w-full h-12"
        onClick={completeOnboarding}
        disabled={step < 3}
      >
        Get Started
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}
