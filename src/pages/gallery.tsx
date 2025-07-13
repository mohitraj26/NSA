"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera } from "lucide-react"

// Image Imports
import img1 from "../assets/Gallery/DSC03035.jpg"
import img2 from "../assets/Gallery/DSC03094.jpg"
import img3 from "../assets/Gallery/DSC03096.jpg"
import img4 from "../assets/Gallery/DSC03109.jpg"
import img5 from "../assets/Gallery/DSC03119.jpg"
import img6 from "../assets/Gallery/DSC03121.jpg"
import img7 from "../assets/Gallery/DSC03129.jpg"
import img8 from "../assets/Gallery/DSC03131.jpg"
import img9 from "../assets/Gallery/DSC03136.jpg"
import img10 from "../assets/Gallery/DSC03163.jpg"
import img11 from "../assets/Gallery/DSC03167.jpg"
import img12 from "../assets/Gallery/DSC03196.jpg"
import img13 from "../assets/Gallery/DSC03198.jpg"
import img14 from "../assets/Gallery/DSC03201.jpg"
import farewell from "../assets/Gallery/Farewell.jpg"
import group1 from "../assets/Gallery/Group 1.jpg"
import group2 from "../assets/Gallery/Group 2.jpg"
import groupAnnual from "../assets/Gallery/Group Photo Annual Function.jpg"
import prizeDistribution from "../assets/Gallery/Prize Distribution.jpg"
import womenEmpowerment from "../assets/Gallery/Women Empowerment.jpg"
import z50_1962 from "../assets/Gallery/Z50_1962.jpg"
import z50_2116 from "../assets/Gallery/Z50_2116.jpg"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    {
      id: 1,
      title: "School Event",
      image: img1,
      description: "Students participating in a school event.",
    },
    {
      id: 2,
      title: "Class Activity",
      image: img2,
      description: "Students engaged in a classroom activity.",
    },
    {
      id: 3,
      title: "Group Learning",
      image: img3,
      description: "Students working together on a project.",
    },
    {
      id: 4,
      title: "School Function",
      image: img4,
      description: "Annual school function celebration.",
    },
    {
      id: 5,
      title: "Student Performance",
      image: img5,
      description: "Students performing at a school event.",
    },
    {
      id: 6,
      title: "Cultural Event",
      image: img6,
      description: "Cultural performance by students.",
    },
    {
      id: 7,
      title: "School Gathering",
      image: img7,
      description: "Students gathered for an event.",
    },
    {
      id: 8,
      title: "Annual Function",
      image: img8,
      description: "Celebration at the annual function.",
    },
    {
      id: 9,
      title: "Student Interaction",
      image: img9,
      description: "Students interacting during an event.",
    },
    {
      id: 10,
      title: "School Activity",
      image: img10,
      description: "Students participating in an activity.",
    },
    {
      id: 11,
      title: "Group Photo",
      image: img11,
      description: "Students posing for a group photo.",
    },
    {
      id: 12,
      title: "Event Celebration",
      image: img12,
      description: "Celebration during a school event.",
    },
    {
      id: 13,
      title: "Student Gathering",
      image: img13,
      description: "Students gathered for an activity.",
    },
    {
      id: 14,
      title: "School Function",
      image: img14,
      description: "Students at a school function.",
    },
    {
      id: 15,
      title: "Farewell Event",
      image: farewell,
      description: "Students at the farewell event.",
    },
    {
      id: 16,
      title: "Group Photo 1",
      image: group1,
      description: "Students posing for a group photo.",
    },
    {
      id: 17,
      title: "Group Photo 2",
      image: group2,
      description: "Another group photo of students.",
    },
    {
      id: 18,
      title: "Annual Function Group",
      image: groupAnnual,
      description: "Group photo from annual function.",
    },
    {
      id: 19,
      title: "Prize Distribution",
      image: prizeDistribution,
      description: "Students receiving prizes.",
    },
    {
      id: 20,
      title: "Women Empowerment",
      image: womenEmpowerment,
      description: "Event celebrating women empowerment.",
    },
    {
      id: 21,
      title: "School Event",
      image: z50_1962,
      description: "Students at a school event.",
    },
    {
      id: 22,
      title: "Student Activity",
      image: z50_2116,
      description: "Students engaged in an activity.",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">School Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant school community through photos of various events and activities.
          </p>
        </div>

        {/* Photo Grid - Updated with larger card sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow group h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-t-lg flex-1">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2">{photo.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{photo.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <div className="space-y-4">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{photo.title}</h2>
                    <p className="text-gray-600 text-base sm:text-lg">{photo.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Photo Submission Section */}
        <div className="mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg">
          <div className="text-center">
            <Camera className="h-12 w-12 mx-auto text-gray-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Photos</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have great photos from school events or activities? We'd love to feature them in our gallery! Submit your
              photos to be considered for inclusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Submit Photos</Button>
              <Button variant="outline" className="bg-transparent">
                Photo Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}