import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Lock, Eye, EyeOff, Shield, BookOpen, Users, Settings } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const handleLogin = (e: React.FormEvent, userType: string) => {
    e.preventDefault()
    // Handle login logic here
    console.log(`${userType} login:`, loginData)
    alert(`${userType} login attempted. This is a demo - no actual authentication.`)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const portals = [
    {
      title: "Student Portal",
      description: "Access grades, assignments, schedules, and resources",
      icon: <BookOpen className="h-8 w-8" />,
      features: ["View Grades & Progress", "Assignment Calendar", "Class Schedules", "Library Resources"],
      color: "border-blue-500 bg-blue-50",
    },
    {
      title: "Parent Portal",
      description: "Monitor your child's progress and school communications",
      icon: <Users className="h-8 w-8" />,
      features: ["Student Progress Reports", "Attendance Records", "School Communications", "Event Calendar"],
      color: "border-green-500 bg-green-50",
    },
    {
      title: "Staff Portal",
      description: "Access teaching resources and administrative tools",
      icon: <Settings className="h-8 w-8" />,
      features: ["Grade Management", "Lesson Planning", "Student Records", "Administrative Tools"],
      color: "border-purple-500 bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Secure Portal Access</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access your personalized dashboard with grades, schedules, resources, and school communications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Login Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Portal Login</CardTitle>
                  <CardDescription className="text-center">
                    Select your user type and enter your credentials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="student" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="student">Student</TabsTrigger>
                      <TabsTrigger value="parent">Parent</TabsTrigger>
                      <TabsTrigger value="staff">Staff</TabsTrigger>
                    </TabsList>

                    {["student", "parent", "staff"].map((userType) => (
                      <TabsContent key={userType} value={userType} className="space-y-6 mt-6">
                        <form onSubmit={(e) => handleLogin(e, userType)} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`${userType}-username`}>Username or Email</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id={`${userType}-username`}
                                type="text"
                                value={loginData.username}
                                onChange={(e) => handleInputChange("username", e.target.value)}
                                placeholder="Enter your username or email"
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`${userType}-password`}>Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id={`${userType}-password`}
                                type={showPassword ? "text" : "password"}
                                value={loginData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                placeholder="Enter your password"
                                className="pl-10 pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Eye className="h-4 w-4 text-gray-400" />
                                )}
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`${userType}-remember`}
                              checked={loginData.rememberMe}
                              onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                            />
                            <Label htmlFor={`${userType}-remember`} className="text-sm">
                              Remember me
                            </Label>
                          </div>

                          <Button type="submit" className="w-full" size="lg">
                            Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                          </Button>
                        </form>

                        <div className="text-center space-y-2">
                          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot your password?
                          </Link>
                          <p className="text-xs text-gray-500">
                            Need help? Contact our{" "}
                            <Link to="/contact" className="text-blue-600 hover:underline">
                              IT Support
                            </Link>
                          </p>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Alert className="mt-6">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  Your privacy and security are important to us. All login sessions are encrypted and automatically
                  expire after periods of inactivity. Never share your login credentials with others.
                </AlertDescription>
              </Alert>
            </div>

            {/* Portal Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Portal Features</h2>
                <p className="text-gray-600 mb-6">
                  Each portal is designed specifically for your role in our school community, providing relevant tools
                  and information.
                </p>
              </div>

              {portals.map((portal, index) => (
                <Card key={index} className={`${portal.color} border-2`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-700">{portal.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{portal.title}</CardTitle>
                        <CardDescription className="text-gray-600">{portal.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {portal.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Technical Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Supported Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)
                    </p>
                    <p>
                      <strong>Mobile:</strong> iOS 12+ and Android 8+ devices supported
                    </p>
                    <p>
                      <strong>Connection:</strong> Stable internet connection required
                    </p>
                    <p>
                      <strong>Cookies:</strong> Please enable cookies for full functionality
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
