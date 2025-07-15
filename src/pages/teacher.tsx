import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Users } from "lucide-react";

export default function TeacherPortalPage() {
  const [selectedCategory, setSelectedCategory] = useState("essential");

  const documentCategories = [
    {
      id: "essential",
      name: "Essential Documents",
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  const teacherDocuments = {
    essential: [
      {
        id: 1,
        title: "Teacher Document Submission Form",
        description:
          "All teachers are required to submit this form along with the necessary supporting documents to the administration office before the deadline.",
        fileType: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1tu6Ms4j7hMIGc4DfY19aMXIfJ4jbRmbR/view",
        priority: "high",
        required: true,
      },
      {
        id: 2,
        title: "Teacher Details and Verification Document",
        description:
          "Teachers must fill out this details form and attach all required verification documents such as ID proof, address proof, qualification certificates, and recent passport-size photographs. Submission is mandatory for annual records and verification.",
        fileType: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1rb268mqqegxMzLxfGs9TdJ4fdVqUV5-O/view",
        priority: "high",
        required: true,
      },
    ],
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };
    return (
      colors[priority as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getFileTypeIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-600" />;
      case "docx":
        return <FileText className="h-5 w-5 text-blue-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Teacher Portal
              </h1>
              <p className="text-lg text-gray-600">
                Access your essential documents and resources
              </p>
            </div>
          </div>
        </div>

        {/* Document Categories */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            {documentCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-1 text-xs sm:text-sm"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {documentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="space-y-4">
                {teacherDocuments[
                  category.id as keyof typeof teacherDocuments
                ]?.map((document) => (
                  <Card
                    key={document.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start space-x-4">
                            <div className="mt-1">
                              {getFileTypeIcon(document.fileType)}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {document.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  <Badge
                                    className={getPriorityColor(
                                      document.priority
                                    )}
                                  >
                                    {document.priority.charAt(0).toUpperCase() +
                                      document.priority.slice(1)}{" "}
                                    Priority
                                  </Badge>
                                  {document.required && (
                                    <Badge
                                      variant="outline"
                                      className="border-red-300 text-red-700"
                                    >
                                      Required
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 mb-3 text-sm sm:text-base">
                                {document.description}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span>{document.fileType}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 lg:w-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 bg-transparent"
                            asChild
                          >
                            <a
                              href={document.downloadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="h-4 w-4" />
                              View
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Help Section */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-lg border">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Assistance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you can't find a document or need help accessing resources, our
              administrative team is here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Contact Admin</a>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <a href="newstandardacademy1976@gmail.com">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
