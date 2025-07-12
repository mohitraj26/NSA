import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "Speech Competition",
      date: "2025-08-15",
      time: "6:30 AM - 11:00 AM",
      location: "Main Campus",
      category: "literary",
      description: "A platform for students to showcase their public speaking skills and express ideas on diverse topics.",
      featured: true,
    },
    {
      id: 2,
      title: "Annual Function",
      date: "2026-01-24",
      time: "6:00 PM - 8:00 PM",
      location: "Main Campus",
      category: "cultural",
      description: "The school’s grand cultural celebration featuring performances, awards, and a showcase of student talent.",
      featured: false,
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences",
      date: "2025-09-05",
      time: "10:00 AM - 1:00 PM",
      location: "Main Campus",
      category: "academic",
      description: "Schedule individual meetings with your child's teachers to discuss progress.",
      featured: false,
    },
    {
      id: 4,
      title: "Rangoli Competition",
      date: "2025-10-14",
      time: "10:00 AM",
      location: "Main Campus",
      category: "arts",
      description: "A creative contest where students design colorful floor art to celebrate culture and tradition.",
      featured: true,
    },
    {
      id: 5,
      title: "Children's Day",
      date: "2025-11-14",
      time: "8:00 AM - 2:00 PM",
      location: "Main Campus",
      category: "School Celebrations",
      description: "A joyful celebration honoring childhood with fun activities, performances, and games for students.",
      featured: false,
    },
    {
      id: 6,
      title: "Republic Day",
      date: "2026-01-26",
      time: "8:00 AM - 11:00 AM",
      location: "Main Campus",
      category: "National Festivals",
      description: "A patriotic event celebrating the adoption of the Indian Constitution through flag hoisting and cultural programs.",
      featured: false,
    },
    {
      id: 7,
      title: "Independence Day",
      date: "2025-08-15",
      time: "7:00 AM - 11:00 AM",
      location: "Main Campus",
      category: "National Festivals",
      description: "A patriotic celebration marking India's freedom, observed with flag hoisting, speeches, and cultural performances.",
      featured: false,
    },
    {
      id: 8,
      title: "Sarswati Puja",
      date: "2026-01-23",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus",
      category: "cultural",
      description: "A traditional observance where students worship the goddess of knowledge and seek blessings for academic success.",
      featured: true,
    },
  ]

  const categories = [
    { value: "all", label: "All Events" },
    { value: "academic", label: "Academic" },
    { value: "arts", label: "Arts & Culture" },
    { value: "cultural", label: "Cultural" },
    { value: "literary", label: "Literary" },
    { value: "National Festivals", label: "National Festivals" },
  ]

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: "bg-blue-100 text-blue-800",
      arts: "bg-purple-100 text-purple-800",
      athletics: "bg-green-100 text-green-800",
      admissions: "bg-orange-100 text-orange-800",
      administrative: "bg-gray-100 text-gray-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our school community through upcoming events, activities, and important dates.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by category:</span>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents
              .filter((event) => event.featured)
              .map((event) => (
                <Card key={event.id} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All Events */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === "all"
              ? "All Events"
              : `${categories.find((c) => c.value === selectedCategory)?.label} Events`}
          </h2>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                        {event.featured && <Badge variant="secondary">Featured</Badge>}
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
