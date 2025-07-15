import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Download, Calendar, FileText, Users } from "lucide-react";

export default function AdmissionsPage() {
  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description:
        "Complete and submit the online application form with required documents.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: 2,
      title: "Document Review",
      description:
        "Our admissions team reviews your application and supporting materials.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      step: 3,
      title: "Schedule Interview",
      description:
        "Attend a personal interview with student and family members.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: 4,
      title: "Enrollment Decision",
      description:
        "Receive admission decision and complete enrollment process.",
      icon: <Calendar className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "What is the application deadline?",
      answer:
        "Applications are accepted on a rolling basis throughout the year. However, we recommend applying by 30 March for the following school year to ensure the best chance of acceptance.",
    },
    {
      question: "What documents are required for application?",
      answer:
        "Required documents include: completed application form, previous school transfer certificate, standardized test scores (if applicable), UIDAI(Aadhar Card), birth certificate, two recent passport-sized photographs, Parent's Aadhar Card, Family Photo with students.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "Our average student-to-teacher ratio is 30:1, ensuring personalized attention and support for each student's academic and personal growth.",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community of learners and discover the New Standard Academy
            difference. We welcome students who are ready to embrace academic
            excellence and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc81Wl9VQSqtnDdSXOQL2wVgafvJWUzMvP2VTWEqJOyG5ueeg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Application
              </a>
            </Button>
          </div>
        </div>

        {/* Application Process */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-gray-600">
              Follow these simple steps to apply to New Standard Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step) => (
              <Card
                key={step.step}
                className="text-center hover:shadow-lg transition-shadow"
              >
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
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
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
                    <Badge>1 January</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Priority Deadline</span>
                    <Badge variant="secondary">30 March</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>New Academic Session Starts</span>
                    <Badge variant="outline">1 April</Badge>
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
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/12zkMjOoXy1TSGJtFHdEPT_2dH8E-UUk_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Application Form (PDF)
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1rVG1tmF0YUpfWbdiJ7ZwLl8LopMHscK5/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apaar Id
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Student Details Form
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common admissions questions
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
