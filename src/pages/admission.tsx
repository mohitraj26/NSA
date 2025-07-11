import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Download, Calendar, DollarSign, FileText, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function AdmissionsPage() {
  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete and submit the online application form with required documents.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our admissions team reviews your application and supporting materials.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      step: 3,
      title: "Schedule Interview",
      description: "Attend a personal interview with student and family members.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: 4,
      title: "Enrollment Decision",
      description: "Receive admission decision and complete enrollment process.",
      icon: <Calendar className="h-6 w-6" />,
    },
  ]

  const tuitionFees = [
    { grade: "Kindergarten - 2nd Grade", tuition: "$8,500", fees: "$500" },
    { grade: "3rd - 5th Grade", tuition: "$9,200", fees: "$600" },
    { grade: "6th - 8th Grade", tuition: "$10,100", fees: "$700" },
    { grade: "9th - 12th Grade", tuition: "$11,500", fees: "$800" },
  ]

  const faqs = [
    {
      question: "What is the application deadline?",
      answer:
        "Applications are accepted on a rolling basis throughout the year. However, we recommend applying by March 1st for the following school year to ensure the best chance of acceptance and financial aid consideration.",
    },
    {
      question: "What documents are required for application?",
      answer:
        "Required documents include: completed application form, previous school transcripts, standardized test scores (if applicable), two teacher recommendations, student essay, and immunization records.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer need-based financial aid to qualifying families. Financial aid applications must be submitted by April 15th. We also offer merit-based scholarships for exceptional students.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "Our average student-to-teacher ratio is 12:1, ensuring personalized attention and support for each student's academic and personal growth.",
    },
    {
      question: "Can we schedule a campus tour?",
      answer:
        "We encourage prospective families to visit our campus. Tours are available Monday through Friday at 10 AM and 2 PM. Please call our admissions office to schedule your visit.",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community of learners and discover the New Standard Academy difference. We welcome students who are
            ready to embrace academic excellence and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/apply">Start Application</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Schedule Tour</Link>
            </Button>
          </div>
        </div>

        {/* Application Process */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600">Follow these simple steps to apply to New Standard Academy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step) => (
              <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {step.icon}
                  </div>
                  <Badge variant="outline" className="mx-auto mb-2">
                    Step {step.step}
                  </Badge>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tuition & Fees */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tuition & Fees</h2>
            <p className="text-gray-600">Transparent pricing for quality education</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                2024-2025 Academic Year
              </CardTitle>
              <CardDescription>
                Tuition includes all core academic subjects, technology access, and most extracurricular activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Grade Level</th>
                      <th className="text-right py-2">Annual Tuition</th>
                      <th className="text-right py-2">Activity Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionFees.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{item.grade}</td>
                        <td className="text-right py-3 font-medium">{item.tuition}</td>
                        <td className="text-right py-3">{item.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Financial Aid Available:</strong> We offer need-based financial assistance and merit
                  scholarships. Contact our admissions office to learn more about financial aid opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Application Opens</span>
                    <Badge>October 1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Priority Deadline</span>
                    <Badge variant="secondary">March 1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Financial Aid Deadline</span>
                    <Badge variant="secondary">April 15</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enrollment Deposit Due</span>
                    <Badge variant="outline">May 1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link to="/forms/application.pdf">Application Form (PDF)</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link to="/forms/financial-aid.pdf">Financial Aid Application</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link to="/forms/health-records.pdf">Health Records Form</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link to="/forms/recommendation.pdf">Teacher Recommendation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common admissions questions</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
