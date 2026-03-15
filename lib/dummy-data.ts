export const wardrobeItems = [
  { id: "1", name: "Navy Blazer", category: "Outerwear", color: "Navy", image: "https://picsum.photos/seed/navy-blazer/200/250", wornCount: 12, status: "active", favorite: true },
  { id: "2", name: "White Oxford Shirt", category: "Tops", color: "White", image: "https://picsum.photos/seed/white-oxford-shirt/200/250", wornCount: 8, status: "active", favorite: false },
  { id: "3", name: "Grey Wool Sweater", category: "Tops", color: "Grey", image: "https://picsum.photos/seed/grey-wool-sweater/200/250", wornCount: 6, status: "active", favorite: true },
  { id: "4", name: "Black Slim Jeans", category: "Bottoms", color: "Black", image: "https://picsum.photos/seed/black-slim-jeans/200/250", wornCount: 15, status: "active", favorite: false },
  { id: "5", name: "Khaki Chinos", category: "Bottoms", color: "Khaki", image: "https://picsum.photos/seed/khaki-chinos/200/250", wornCount: 10, status: "active", favorite: false },
  { id: "6", name: "White Sneakers", category: "Shoes", color: "White", image: "https://picsum.photos/seed/white-sneakers/200/250", wornCount: 20, status: "active", favorite: true },
  { id: "7", name: "Brown Leather Boots", category: "Shoes", color: "Brown", image: "https://picsum.photos/seed/brown-leather-boots/200/250", wornCount: 7, status: "active", favorite: false },
  { id: "8", name: "Denim Jacket", category: "Outerwear", color: "Blue", image: "https://picsum.photos/seed/denim-jacket/200/250", wornCount: 4, status: "laundry", favorite: false },
  { id: "9", name: "Striped T-Shirt", category: "Tops", color: "Navy/White", image: "https://picsum.photos/seed/striped-tshirt/200/250", wornCount: 9, status: "active", favorite: false },
  { id: "10", name: "Wool Scarf", category: "Accessories", color: "Burgundy", image: "https://picsum.photos/seed/burgundy-wool-scarf/200/250", wornCount: 3, status: "active", favorite: false },
  { id: "11", name: "Leather Belt", category: "Accessories", color: "Black", image: "https://picsum.photos/seed/black-leather-belt/200/250", wornCount: 18, status: "active", favorite: false },
  { id: "12", name: "Cashmere Cardigan", category: "Tops", color: "Camel", image: "https://picsum.photos/seed/camel-cashmere-cardigan/200/250", wornCount: 5, status: "active", favorite: true },
]

export const outfits = [
  {
    id: "1",
    name: "Safe Pick",
    occasion: "Office",
    weather: "5°C, Cloudy",
    image: "https://picsum.photos/seed/office-outfit-blazer-chinos/300/400",
    items: [
      { id: "1", name: "Navy Blazer", category: "Outerwear", image: "https://picsum.photos/seed/navy-blazer/200/250" },
      { id: "2", name: "White Oxford Shirt", category: "Tops", image: "https://picsum.photos/seed/white-oxford-shirt/200/250" },
      { id: "5", name: "Khaki Chinos", category: "Bottoms", image: "https://picsum.photos/seed/khaki-chinos/200/250" },
      { id: "7", name: "Brown Leather Boots", category: "Shoes", image: "https://picsum.photos/seed/brown-leather-boots/200/250" },
    ],
  },
  {
    id: "2",
    name: "Statement Look",
    occasion: "Casual Friday",
    weather: "5°C, Cloudy",
    image: "https://picsum.photos/seed/casual-friday-denim-jeans/300/400",
    items: [
      { id: "8", name: "Denim Jacket", category: "Outerwear", image: "https://picsum.photos/seed/denim-jacket/200/250" },
      { id: "9", name: "Striped T-Shirt", category: "Tops", image: "https://picsum.photos/seed/striped-tshirt/200/250" },
      { id: "4", name: "Black Slim Jeans", category: "Bottoms", image: "https://picsum.photos/seed/black-slim-jeans/200/250" },
      { id: "6", name: "White Sneakers", category: "Shoes", image: "https://picsum.photos/seed/white-sneakers/200/250" },
    ],
  },
  {
    id: "3",
    name: "Experiment",
    occasion: "Weekend",
    weather: "5°C, Cloudy",
    image: "https://picsum.photos/seed/weekend-sweater-jeans/300/400",
    items: [
      { id: "3", name: "Grey Wool Sweater", category: "Tops", image: "https://picsum.photos/seed/grey-wool-sweater/200/250" },
      { id: "12", name: "Cashmere Cardigan", category: "Tops", image: "https://picsum.photos/seed/camel-cashmere-cardigan/200/250" },
      { id: "4", name: "Black Slim Jeans", category: "Bottoms", image: "https://picsum.photos/seed/black-slim-jeans/200/250" },
      { id: "6", name: "White Sneakers", category: "Shoes", image: "https://picsum.photos/seed/white-sneakers/200/250" },
    ],
  },
]

export const socialPosts = [
  {
    id: "1",
    user: { name: "Sarah Chen", handle: "@sarahstyles", avatar: "https://picsum.photos/seed/avatar-sarah-chen/100/100", followsYou: true },
    image: "https://picsum.photos/seed/brunch-floral-dress-cardigan/400/500",
    isAITwin: false,
    occasion: "Brunch",
    weather: "12°C, Sunny",
    items: ["Floral Midi Dress", "White Cardigan", "Espadrilles"],
    likes: 234,
    comments: 18,
  },
  {
    id: "2",
    user: { name: "Marcus Wei", handle: "@marcusfashion", avatar: "https://picsum.photos/seed/avatar-marcus-wei/100/100", followsYou: false },
    image: "https://picsum.photos/seed/date-night-turtleneck-camel-coat/400/500",
    isAITwin: true,
    occasion: "Date Night",
    weather: "8°C, Clear",
    items: ["Black Turtleneck", "Camel Coat", "Dark Jeans"],
    likes: 189,
    comments: 24,
  },
  {
    id: "3",
    user: { name: "Emma Johnson", handle: "@emmaj", avatar: "https://picsum.photos/seed/avatar-emma-johnson/100/100", followsYou: true },
    image: "https://picsum.photos/seed/office-blazer-blouse-trousers/400/500",
    isAITwin: false,
    occasion: "Office",
    weather: "6°C, Overcast",
    items: ["Navy Blazer", "White Blouse", "Grey Trousers"],
    likes: 312,
    comments: 42,
  },
]

export const storyUsers = [
  { id: "1", name: "You", avatar: "https://picsum.photos/seed/avatar-you/100/100", hasStory: false, isYou: true },
  { id: "2", name: "Sarah", avatar: "https://picsum.photos/seed/avatar-sarah/100/100", hasStory: true, isYou: false },
  { id: "3", name: "Marcus", avatar: "https://picsum.photos/seed/avatar-marcus/100/100", hasStory: true, isYou: false },
  { id: "4", name: "Emma", avatar: "https://picsum.photos/seed/avatar-emma/100/100", hasStory: true, isYou: false },
  { id: "5", name: "James", avatar: "https://picsum.photos/seed/avatar-james/100/100", hasStory: true, isYou: false },
  { id: "6", name: "Olivia", avatar: "https://picsum.photos/seed/avatar-olivia/100/100", hasStory: false, isYou: false },
]

export const calendarOutfits: Record<string, { image: string; name: string }> = {
  "2026-03-02": { image: "https://picsum.photos/seed/office-look-blazer/50/50", name: "Office Look" },
  "2026-03-05": { image: "https://picsum.photos/seed/casual-friday-denim/50/50", name: "Casual Friday" },
  "2026-03-08": { image: "https://picsum.photos/seed/weekend-brunch-dress/50/50", name: "Weekend Brunch" },
  "2026-03-10": { image: "https://picsum.photos/seed/team-meeting-formal/50/50", name: "Team Meeting" },
  "2026-03-12": { image: "https://picsum.photos/seed/client-dinner-elegant/50/50", name: "Client Dinner" },
}

export const upcomingEvents = [
  { id: "1", name: "Team Dinner", date: "Tomorrow, 7PM", dressCode: "Smart Casual", planned: false },
  { id: "2", name: "Client Meeting", date: "Wed, 10AM", dressCode: "Business Formal", planned: true },
  { id: "3", name: "Weekend Getaway", date: "Sat-Sun", dressCode: "Casual", planned: false },
]

export const inspirationBoards = [
  { id: "1", name: "Winter Work Looks", image: "https://picsum.photos/seed/winter-work-blazer-professional/200/200", itemCount: 24 },
  { id: "2", name: "Date Night", image: "https://picsum.photos/seed/date-night-elegant-outfit/200/200", itemCount: 18 },
  { id: "3", name: "Vacation Inspo", image: "https://picsum.photos/seed/vacation-casual-beach-outfit/200/200", itemCount: 32 },
  { id: "4", name: "Minimalist Capsule", image: "https://picsum.photos/seed/minimalist-capsule-basics/200/200", itemCount: 15 },
]

export const boardItems = [
  { id: "1", image: "https://picsum.photos/seed/fashion-inspiration-outfit-1/200/300", creator: "@sarahstyles" },
  { id: "2", image: "https://picsum.photos/seed/fashion-inspiration-outfit-2/200/250", creator: "@marcusfashion" },
  { id: "3", image: "https://picsum.photos/seed/fashion-inspiration-outfit-3/200/280", creator: "@emmaj" },
  { id: "4", image: "https://picsum.photos/seed/fashion-inspiration-outfit-4/200/320", creator: "@you" },
  { id: "5", image: "https://picsum.photos/seed/fashion-inspiration-outfit-5/200/260", creator: "@fashionista" },
  { id: "6", image: "https://picsum.photos/seed/fashion-inspiration-outfit-6/200/290", creator: "@styleguru" },
]

export const statsData = {
  totalItems: 128,
  outfitsCreated: 47,
  avgWears: 3.2,
  mostWorn: [
    { id: "6", name: "White Sneakers", image: "https://picsum.photos/seed/white-sneakers/200/250", wornCount: 20 },
    { id: "11", name: "Leather Belt", image: "https://picsum.photos/seed/black-leather-belt/200/250", wornCount: 18 },
    { id: "4", name: "Black Slim Jeans", image: "https://picsum.photos/seed/black-slim-jeans/200/250", wornCount: 15 },
  ],
  leastWorn: [
    { id: "10", name: "Wool Scarf", image: "https://picsum.photos/seed/burgundy-wool-scarf/200/250", wornCount: 3 },
    { id: "8", name: "Denim Jacket", image: "https://picsum.photos/seed/denim-jacket/200/250", wornCount: 4 },
    { id: "12", name: "Cashmere Cardigan", image: "https://picsum.photos/seed/camel-cashmere-cardigan/200/250", wornCount: 5 },
  ],
  monthlyWears: [
    { month: "Jan", wears: 45 },
    { month: "Feb", wears: 52 },
    { month: "Mar", wears: 38 },
    { month: "Apr", wears: 61 },
    { month: "May", wears: 55 },
    { month: "Jun", wears: 48 },
    { month: "Jul", wears: 42 },
    { month: "Aug", wears: 50 },
    { month: "Sep", wears: 58 },
    { month: "Oct", wears: 65 },
    { month: "Nov", wears: 70 },
    { month: "Dec", wears: 62 },
  ],
  costPerWear: [
    { name: "Grey Blazer", value: "$3.20/wear" },
    { name: "White Sneakers", value: "$4.50/wear" },
    { name: "Black Jeans", value: "$2.80/wear" },
    { name: "Cashmere Cardigan", value: "$18.00/wear" },
    { name: "Wool Scarf", value: "$25.00/wear" },
  ],
}
