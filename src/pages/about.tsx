import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, BookOpen } from "lucide-react"

export default function AboutPage() {
  const staff = [
    {
      name: " Late Sri Ram Nath Roy",
      position: "Founder",
      department: "Administration",
      bio: "Sri Ram Nath Roy, a visionary educationist and philanthropist, is the founder of New Standard Academy, dedicated to nurturing future-ready, value-driven students.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Uday Roy",
      position: "Director",
      department: "Administration",
      bio: "Uday Roy, a visionary director, is a visionary educator and transformational leader, is committed to shaping future-ready minds through excellence in education and values-based leadership.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of education and character development.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "We foster honesty, respect, and ethical behavior in our school community.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We build strong relationships and collaborative partnerships with families and staff.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace new teaching methods and technologies to enhance learning experiences.",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About New Standard Academy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission, vision, and the dedicated team that makes our school community exceptional.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional educational opportunities that empower students to achieve academic excellence,
                develop strong character, and become responsible global citizens who contribute positively to their
                communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as a leading educational institution that inspires lifelong learning, fosters
                innovation, and prepares students to excel in an ever-changing world through personalized education and
                strong community partnerships.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* School History */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our History</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                New Standard Academy began with a vision to create an educational environment that combines academic rigor with character development. Our founder, <b>Sri Ram Nath Roy</b>, recognized the need for a school that would prepare students not just for tests, but for life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years, we have grown from a small community school to a recognized institution of excellence,
                serving hundreds of students and families. Our commitment to innovation in education has led to the
                development of cutting-edge STEM programs, comprehensive arts education, and strong community
                partnerships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, New Standard Academy continues to evolve, embracing new technologies and teaching methodologies
                while maintaining our core commitment to developing well-rounded, confident, and capable young people
                ready to make their mark on the world.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Staff Profiles */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600">Dedicated professionals committed to student success</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{member.position}</CardDescription>
                  <Badge variant="secondary">{member.department}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
