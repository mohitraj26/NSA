import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import newspaper from "../assets/Photos/00112.jpg"
import newsarticle from "../assets/Photos/001 Icard (1)_page-000312.jpg"
import award from "../assets/Photos/001 Icard (1)_page-0011.jpg"
import award2 from "../assets/Photos/001 Icard (1)_page-0010.jpg"
import rajgir from "../assets/Photos/Rajgir Tour.jpg"
import krishna from "../assets/Photos/Krishna Song.jpg"
import sarswati from "../assets/Photos/Sarswati Vandana.jpg"
import welcome from "../assets/Photos/Welcome Song.jpg"
import chiefguest from "../assets/Photos/Chief Guest.jpg"
import inaugration from "../assets/Photos/Inauguration.jpg"
import rajkumar from "../assets/Photos/Raj Kumar Sir.jpg"
import navdeep from "../assets/Photos/Navdeep Award.png"
import ward from "../assets/Photos/Ward Councillor.jpg"
import newsarticle2 from "../assets/Photos/001 Icard (1)_page-0003.jpg"
import newsarticle3 from "../assets/Photos/001 Icard (1)_page-0004.jpg"
import radhaSong from "../assets/Photos/001 Icard (1)_page-0007.jpg"

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: "Welcome to New Standard Academy",
      subtitle: "Empowering students to achieve excellence through innovative education and character development",
      image: "/placeholder.svg?height=600&width=1200&text=Welcome+to+New+Standard+Academy",
      gradient: "from-blue-600 to-blue-800",
      buttonColor: "bg-white text-blue-600 hover:bg-blue-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-blue-600",
      textColor: "text-blue-100",
    },
    {
      image: newspaper,
      buttonColor: "bg-white text-green-600 hover:bg-green-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-green-600",
    },
    {
      image: newsarticle,
      gradient: "from-purple-600 to-purple-800",
      buttonColor: "bg-white text-purple-600 hover:bg-purple-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-purple-600",
    },
    {
      image: rajgir,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: krishna,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: sarswati,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: radhaSong,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: welcome,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: inaugration,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: chiefguest,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: rajkumar,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: ward,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: newsarticle2,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: newsarticle3,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: navdeep,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: award,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
    },
    {
      image: award2,
      gradient: "from-orange-600 to-orange-800",
      buttonColor: "bg-white text-orange-600 hover:bg-orange-50",
      outlineColor: "border-white text-white hover:bg-white hover:text-orange-600",
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
                  className="absolute inset-0 bg-center bg-contain bg-no-repeat bg-blue-700"
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
