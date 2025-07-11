import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "Spring Open House",
      date: "2024-03-15",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus",
      category: "admissions",
      description: "Join us for a comprehensive tour of our facilities and meet our faculty and staff.",
      featured: true,
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2024-03-22",
      time: "6:00 PM - 8:00 PM",
      location: "Gymnasium",
      category: "academic",
      description: "Students showcase their innovative science projects and research findings.",
      featured: false,
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences",
      date: "2024-03-25",
      time: "3:00 PM - 7:00 PM",
      location: "Individual Classrooms",
      category: "academic",
      description: "Schedule individual meetings with your child's teachers to discuss progress.",
      featured: false,
    },
    {
      id: 4,
      title: "Spring Concert",
      date: "2024-04-05",
      time: "7:00 PM",
      location: "Auditorium",
      category: "arts",
      description: "Our music students perform a variety of classical and contemporary pieces.",
      featured: true,
    },
    {
      id: 5,
      title: "Career Day",
      date: "2024-04-12",
      time: "9:00 AM - 3:00 PM",
      location: "Multiple Locations",
      category: "academic",
      description: "Local professionals share insights about various career paths with our students.",
      featured: false,
    },
    {
      id: 6,
      title: "Spring Sports Championship",
      date: "2024-04-18",
      time: "4:00 PM - 8:00 PM",
      location: "Athletic Fields",
      category: "athletics",
      description: "Cheer on our teams as they compete in the regional championship games.",
      featured: false,
    },
    {
      id: 7,
      title: "Art Exhibition Opening",
      date: "2024-04-25",
      time: "6:00 PM - 8:00 PM",
      location: "Art Gallery",
      category: "arts",
      description: "Celebrate our students' artistic achievements at our annual art exhibition.",
      featured: true,
    },
    {
      id: 8,
      title: "Board Meeting",
      date: "2024-05-02",
      time: "7:00 PM",
      location: "Conference Room A",
      category: "administrative",
      description: "Monthly school board meeting - open to the public.",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Events" },
    { value: "academic", label: "Academic" },
    { value: "arts", label: "Arts & Culture" },
    { value: "athletics", label: "Athletics" },
    { value: "admissions", label: "Admissions" },
    { value: "administrative", label: "Administrative" },
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
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm">
                        Add to Calendar
                      </Button>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendar Integration Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Updated</h3>
          <p className="text-blue-800 mb-4">
            Never miss an important school event! Subscribe to our calendar or follow us on social media for the latest
            updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent">
              Subscribe to Calendar
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent">
              Email Notifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
