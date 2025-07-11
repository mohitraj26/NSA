"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {Link} from "react-router-dom"
import Autoplay from "embla-carousel-autoplay"

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: "Welcome to New Standard Academy",
      subtitle: "Empowering students to achieve excellence through innovative education and character development",
      image: "/placeholder.svg?height=600&width=1200&text=Students+Learning",
      gradient: "from-blue-600 to-blue-800",
      buttonColor: "bg-white text-blue-600 hover:bg-blue-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-blue-600",
      textColor: "text-blue-100",
      primaryAction: { text: "Apply Now", to: "/admissions" },
      secondaryAction: { text: "Learn More", to: "/about" },
    },
    {
      title: "STEM Excellence Program",
      subtitle:
        "Cutting-edge science, technology, engineering, and mathematics education preparing students for tomorrow",
      image: "/placeholder.svg?height=600&width=1200&text=Science+Laboratory",
      gradient: "from-green-600 to-green-800",
      buttonColor: "bg-white text-green-600 hover:bg-green-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-green-600",
      textColor: "text-green-100",
      primaryAction: { text: "Explore STEM", to: "/admissions" },
      secondaryAction: { text: "Our Programs", to: "/about" },
    },
    {
      title: "Arts & Culture Program",
      subtitle: "Nurturing creativity through comprehensive music, theater, and visual arts education",
      image: "/placeholder.svg?height=600&width=1200&text=Arts+Performance",
      gradient: "from-purple-600 to-purple-800",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-purple-600",
      textColor: "text-purple-100",
      primaryAction: { text: "Join the Arts", to: "/admissions" },
      secondaryAction: { text: "View Performances", to: "/events" },
    },
    {
      title: "Athletic Excellence",
      subtitle: "Building character, teamwork, and physical fitness through competitive sports programs",
      image: "/placeholder.svg?height=600&width=1200&text=Sports+Athletics",
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
      textColor: "text-orange-100",
      primaryAction: { text: "Join Our Teams", to: "/admissions" },
      secondaryAction: { text: "Game Schedule", to: "/events" },
    },
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r ${slide.gradient}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/40"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                  }}
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
                        {slide.title}
                      </h1>
                      <p
                        className={`text-base sm:text-xl lg:text-2xl mb-6 sm:mb-8 ${slide.textColor} animate-fade-in-delay max-w-3xl mx-auto`}
                      >
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2 px-4">
                        <Button asChild size="lg" className={`${slide.buttonColor} w-full sm:w-auto`}>
                          <Link to={slide.primaryAction.to}>{slide.primaryAction.text}</Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className={`${slide.outlineColor} bg-transparent w-full sm:w-auto`}
                        >
                          <Link to={slide.secondaryAction.to}>{slide.secondaryAction.text}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="right-2 sm:right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
