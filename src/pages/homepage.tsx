import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, BookOpen, Award, Bell } from "lucide-react"
import { Link } from "react-router-dom"
import { HeroCarousel } from "@/components/hero-carousel"


export default function HomePage() {
  const newsItems = [
    {
      id: 1,
      title: "Admit Card Distribution for Upcoming Exams",
      date: "2025-08-01",
      excerpt: "Students are required to collect their admit cards from the school office before the examination dates. Please ensure you have your admit card to be eligible for entry.",
      category: "Examination",
    },
{
  id: 2,
  title: "Upcoming Speech Competition Announcement",
  date: "2025-08-15",
  excerpt:
    "Students are invited to participate in the upcoming speech competition. Register your name at the office and prepare to showcase your speaking skills on stage.",
  category: "Co-Curricular",
},

  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "2025-09-05",
    excerpt: "Parent-Teacher conferences will be held on September 5th. Parents are requested to attend and discuss their child's progress with the teachers.",
    category: "Events",
  }

  ]

  const programs = [
    {
      title: "STEM Excellence",
      description: "Advanced science, technology, engineering, and mathematics curriculum",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Arts & Culture",
      description: "Comprehensive arts education including music, theater, and visual arts",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Athletics",
      description: "Competitive sports programs fostering teamwork and physical fitness",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* News & Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Latest News & Announcements</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Stay updated with the latest happenings at our school
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Key Programs</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the exceptional educational opportunities that set New Standard Academy apart
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {program.icon}
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-lg sm:text-xl text-blue-100">Find what you need quickly</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-white">Events Calendar</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/events">View Events</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-white">Student Portal</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/login">Login</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-white">Admissions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/admissions">Apply</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader className="text-center">
                <Bell className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-white">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="secondary" size="sm">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
