import {  useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera } from "lucide-react"

export default function GalleryPage() {

  // Security: Disable right-click, keyboard shortcuts, and developer tools
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "U")) ||
        (e.ctrlKey && (e.key === "s" || e.key === "S")) ||
        (e.ctrlKey && (e.key === "a" || e.key === "A")) ||
        (e.ctrlKey && (e.key === "p" || e.key === "P")) ||
        (e.metaKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.metaKey && (e.key === "u" || e.key === "U")) ||
        (e.metaKey && (e.key === "s" || e.key === "S")) ||
        (e.metaKey && (e.key === "a" || e.key === "A")) ||
        (e.metaKey && (e.key === "p" || e.key === "P"))
      ) {
        e.preventDefault()
        return false
      }
    }

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("selectstart", handleSelectStart)

    // Disable print
    const style = document.createElement("style")
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        .no-print, .no-print * {
          display: none !important;
        }
      }
    `
    document.head.appendChild(style)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("selectstart", handleSelectStart)
      document.head.removeChild(style)
    }
  }, [])

const photos = [
  {
    id: 1,
    image: "/Gallery/DSC03035.webp",
  },
  {
    id: 2,
    image: "/Gallery/DSC03094.webp",
  },
  {
    id: 3,
    image: "/Gallery/DSC03096.webp",
  },
  {
    id: 4,
    image: "/Gallery/DSC03109.webp",
  },
  {
    id: 5,
    image: "/Gallery/DSC03119.webp",
  },
  {
    id: 6,
    image: "/Gallery/DSC03121.webp",
  },
  {
    id: 7,
    image: "/Gallery/DSC03129.webp",
  },
  {
    id: 8,
    image: "/Gallery/DSC03131.jpg",
  },
  {
    id: 9,
    image: "/Gallery/DSC03136.webp",
  },
  {
    id: 10,
    image: "/Gallery/DSC03163.webp",
  },
  {
    id: 11,
    image: "/Gallery/DSC03167.webp",
  },
  {
    id: 12,
    image: "/Gallery/DSC03196.webp",
  },
  {
    id: 13,
    image: "/Gallery/DSC03198.webp",
  },
  {
    id: 14,
    image: "/Gallery/DSC03201.webp",
  },
  {
    id: 15,
    image: "/Gallery/Farewell.webp",
  },
  {
    id: 16,
    image: "/Gallery/Group 1.webp",
  },
  {
    id: 17,
    image: "/Gallery/Group 2.webp",
  },
  {
    id: 18,
    image: "/Gallery/Group Photo Annual Function.webp",
  },
  {
    id: 19,
    image: "/Gallery/Prize Distribution.webp",
  },
  {
    id: 20,
    image: "/Gallery/Women Empowerment.webp",
  },
  {
    id: 21,
    image: "/Gallery/Z50_1962.webp",
  },
  {
    id: 22,
    image: "/Gallery/Z50_2116.webp",
  },
];

  return (
    <div className="min-h-screen py-8 gallery-protected no-select no-print">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">School Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant school community through photos of our campus, classrooms, events, and student life.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow group screenshot-protection">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt="School Photo"
                        width={400}
                        height={300}
                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        style={{
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto screenshot-protection">
                <div className="space-y-4">
                  <img
                    src={photo.image || "/placeholder.svg"}
                    alt="School Photo"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-16 p-6 sm:p-8 bg-red-50 rounded-lg border border-red-200">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Camera className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-4">Protected Content</h3>
            <p className="text-red-800 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
              These images are protected by copyright and are for viewing purposes only. Unauthorized downloading,
              copying, or distribution is strictly prohibited and may result in legal action.
            </p>
            <div className="text-xs text-red-700">
              <p>© {new Date().getFullYear()} New Standard Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
