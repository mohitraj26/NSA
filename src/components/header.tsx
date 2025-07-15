import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Teachers", to: "/teachers" },
    { name: "Gallery", to: "/gallery" },
    { name: "Admissions", to: "/admissions" },
    { name: "Events", to: "/events" },
    { name: "Contact", to: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <GraduationCap className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" /> */}
            <img src="/logo.png" alt="" className="h-14 sm:h-16"/>
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">
              New Standard Academy
            </span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">NSA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" variant="default" className="hidden md:inline-flex">
              <Link to="/login">Portal Login</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] px-6 py-6">
              <SheetTitle className="text-lg font-semibold text-gray-900">
                Menu
              </SheetTitle>
              <SheetDescription className="sr-only">
                Mobile navigation menu for the New Standard Academy website
              </SheetDescription>

              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-6 w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Portal Login
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
