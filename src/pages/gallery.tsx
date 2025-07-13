"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Calendar, MapPin, Users, BookOpen, Palette, Trophy, Building } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Photos", icon: <Camera className="h-4 w-4" /> },
    { id: "campus", name: "Campus", icon: <Building className="h-4 w-4" /> },
    { id: "classrooms", name: "Classrooms", icon: <BookOpen className="h-4 w-4" /> },
    { id: "events", name: "Events", icon: <Calendar className="h-4 w-4" /> },
    { id: "arts", name: "Arts", icon: <Palette className="h-4 w-4" /> },
    { id: "sports", name: "Sports", icon: <Trophy className="h-4 w-4" /> },
    { id: "students", name: "Student Life", icon: <Users className="h-4 w-4" /> },
  ]

  const photos = [
    // Campus
    {
      id: 1,
      title: "Main Campus Building",
      category: "campus",
      image: "/placeholder.svg?height=400&width=600&text=Main+Campus+Building",
      description: "Our beautiful main campus building houses administrative offices and elementary classrooms.",
      date: "2024-01-15",
      location: "Main Campus",
    },
    {
      id: 2,
      title: "Library & Learning Center",
      category: "campus",
      image: "/placeholder.svg?height=400&width=600&text=Library+Learning+Center",
      description: "State-of-the-art library with extensive digital and physical resources.",
      date: "2024-01-10",
      location: "Learning Center",
    },
    {
      id: 3,
      title: "Science Laboratory",
      category: "campus",
      image: "/placeholder.svg?height=400&width=600&text=Science+Laboratory",
      description: "Modern science labs equipped with the latest technology for hands-on learning.",
      date: "2024-01-08",
      location: "Science Wing",
    },

    // Classrooms
    {
      id: 4,
      title: "Elementary Classroom",
      category: "classrooms",
      image: "/placeholder.svg?height=400&width=600&text=Elementary+Classroom",
      description: "Bright and engaging elementary classroom designed for interactive learning.",
      date: "2024-01-12",
      location: "Elementary Wing",
    },
    {
      id: 5,
      title: "High School Chemistry Lab",
      category: "classrooms",
      image: "/placeholder.svg?height=400&width=600&text=Chemistry+Lab",
      description: "Advanced chemistry laboratory for high school students.",
      date: "2024-01-14",
      location: "Science Building",
    },
    {
      id: 6,
      title: "Computer Lab",
      category: "classrooms",
      image: "/placeholder.svg?height=400&width=600&text=Computer+Lab",
      description: "Technology center with latest computers and software for digital learning.",
      date: "2024-01-11",
      location: "Technology Center",
    },

    // Events
    {
      id: 7,
      title: "Spring Open House",
      category: "events",
      image: "/placeholder.svg?height=400&width=600&text=Spring+Open+House",
      description: "Families touring our campus during the annual Spring Open House event.",
      date: "2024-03-15",
      location: "Main Campus",
    },
    {
      id: 8,
      title: "Science Fair 2024",
      category: "events",
      image: "/placeholder.svg?height=400&width=600&text=Science+Fair+2024",
      description: "Students presenting their innovative science projects at the annual science fair.",
      date: "2024-03-22",
      location: "Gymnasium",
    },
    {
      id: 9,
      title: "Graduation Ceremony",
      category: "events",
      image: "/placeholder.svg?height=400&width=600&text=Graduation+Ceremony",
      description: "Celebrating our graduating class of 2024 at the commencement ceremony.",
      date: "2024-06-15",
      location: "Auditorium",
    },

    // Arts
    {
      id: 10,
      title: "Art Exhibition",
      category: "arts",
      image: "/placeholder.svg?height=400&width=600&text=Art+Exhibition",
      description: "Student artwork displayed in our annual art exhibition.",
      date: "2024-04-25",
      location: "Art Gallery",
    },
    {
      id: 11,
      title: "Spring Concert",
      category: "arts",
      image: "/placeholder.svg?height=400&width=600&text=Spring+Concert",
      description: "Our talented music students performing at the Spring Concert.",
      date: "2024-04-05",
      location: "Auditorium",
    },
    {
      id: 12,
      title: "Drama Performance",
      category: "arts",
      image: "/placeholder.svg?height=400&width=600&text=Drama+Performance",
      description: "Students showcasing their acting talents in our spring drama production.",
      date: "2024-05-10",
      location: "Theater",
    },

    // Sports
    {
      id: 13,
      title: "Basketball Championship",
      category: "sports",
      image: "/placeholder.svg?height=400&width=600&text=Basketball+Championship",
      description: "Our basketball team competing in the regional championship game.",
      date: "2024-04-18",
      location: "Gymnasium",
    },
    {
      id: 14,
      title: "Track and Field Day",
      category: "sports",
      image: "/placeholder.svg?height=400&width=600&text=Track+Field+Day",
      description: "Students participating in our annual track and field competition.",
      date: "2024-05-20",
      location: "Athletic Fields",
    },
    {
      id: 15,
      title: "Soccer Team Victory",
      category: "sports",
      image: "/placeholder.svg?height=400&width=600&text=Soccer+Team+Victory",
      description: "Celebrating our soccer team's victory in the district finals.",
      date: "2024-05-25",
      location: "Soccer Field",
    },

    // Student Life
    {
      id: 16,
      title: "Lunch Time Fun",
      category: "students",
      image: "/placeholder.svg?height=400&width=600&text=Lunch+Time+Fun",
      description: "Students enjoying their lunch break in our cafeteria.",
      date: "2024-02-14",
      location: "Cafeteria",
    },
    {
      id: 17,
      title: "Study Group Session",
      category: "students",
      image: "/placeholder.svg?height=400&width=600&text=Study+Group+Session",
      description: "Students collaborating in a study group session in the library.",
      date: "2024-03-01",
      location: "Library",
    },
    {
      id: 18,
      title: "Club Activities",
      category: "students",
      image: "/placeholder.svg?height=400&width=600&text=Club+Activities",
      description: "Various student clubs meeting and engaging in activities.",
      date: "2024-03-08",
      location: "Student Center",
    },
  ]

  const filterPhotos = (categoryId: string) => {
    if (categoryId === "all") return photos
    return photos.filter((photo) => photo.category === categoryId)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      campus: "bg-blue-100 text-blue-800",
      classrooms: "bg-green-100 text-green-800",
      events: "bg-purple-100 text-purple-800",
      arts: "bg-pink-100 text-pink-800",
      sports: "bg-orange-100 text-orange-800",
      students: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">School Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant school community through photos of our campus, classrooms, events, and student life.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1 text-xs sm:text-sm">
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filterPhotos(category.id).map((photo) => (
                  <Dialog key={photo.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow group">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img
                              src={photo.image || "/placeholder.svg"}
                              alt={photo.title}
                              width={400}
                              height={300}
                              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className={getCategoryColor(photo.category)}>
                                {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">{photo.title}</h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{photo.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(photo.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {photo.location}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                      <div className="space-y-4">
                        <img
                          src={photo.image || "/placeholder.svg"}
                          alt={photo.title}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg"
                        />
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold text-gray-900">{photo.title}</h2>
                            <Badge className={getCategoryColor(photo.category)}>
                              {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{photo.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(photo.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {photo.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Photo Submission Section */}
        <div className="mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg">
          <div className="text-center">
            <Camera className="h-12 w-12 mx-auto text-gray-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Photos</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have great photos from school events or activities? We'd love to feature them in our gallery! Submit your
              photos to be considered for inclusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Submit Photos</Button>
              <Button variant="outline" className="bg-transparent">
                Photo Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
