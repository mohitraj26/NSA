import {Link} from "react-router-dom"
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* School Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 sm:h-8 w-6 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">New Standard Academy</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Empowering students to achieve excellence through innovative education and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
                            <li>
                <Link
                  to="/teachers"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Staff Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Prithvipur Chiraiyatand Lane No - 02</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+(91) 9386110332</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">newstandardacademy1976@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} New Standard Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
