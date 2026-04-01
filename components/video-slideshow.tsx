"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/familia.jpg",
    time: "Los Aventureros",
    title: "14 Valientes Almas",
    subtitle: "El grupo legendario"
  },
  {
    image: "/images/yoga-bien.jpg",
    time: "8:00 AM",
    title: "Yoga al Amanecer",
    subtitle: "Cuando sale bien..."
  },
  {
    image: "/images/yoga-caida.jpg",
    time: "8:00 AM",
    title: "Yoga al Amanecer",
    subtitle: "...y cuando no tanto"
  },
  {
    image: "/images/breakfast-feast.jpg",
    time: "9:00 AM",
    title: "El Gran Festín",
    subtitle: "Desayuno de reyes"
  },
  {
    image: "/images/praia-do-forno.jpg",
    time: "10:00 AM",
    title: "Praia do Forno",
    subtitle: "Paraíso terrenal"
  },
  {
    image: "/images/beach-picnic.jpg",
    time: "1:00 PM",
    title: "El Picnic de los Campeones",
    subtitle: "Festín bajo las palmeras"
  },
  {
    image: "/images/hand-game.jpg",
    time: "5:00 PM",
    title: "El Gran Torneo de la Oca",
    subtitle: "Perdedor prepara la picada"
  },
  {
    image: "/images/pool-sunset.jpg",
    time: "5:30 PM",
    title: "El Regreso Triunfal",
    subtitle: "Piscina y cervezas"
  },
  {
    image: "/images/picada-sunset.jpg",
    time: "7:30 PM",
    title: "La Picada Legendaria",
    subtitle: "Atardecer dorado"
  },
  {
    image: "/images/fiesta-gala.jpg",
    time: "9:30 PM",
    title: "La Gran Fiesta de Gala",
    subtitle: "¡Es de gala, nobleza!"
  },
  {
    image: "/images/casa-ferradura.jpg",
    time: "La Fortaleza",
    title: "Casa Maravilhosa",
    subtitle: "Nuestro hogar en Búzios"
  }
]

export function VideoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const SLIDE_DURATION = 4000 // 4 seconds per slide

  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + (100 / (SLIDE_DURATION / 50))
      })
    }, 50)

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, SLIDE_DURATION)

    return () => {
      clearInterval(progressInterval)
      clearInterval(slideInterval)
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold text-lg tracking-wide uppercase">
            Presentación Cinematográfica
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">
            Un Día en el Paraíso
          </h2>
          <p className="text-foreground/70 text-xl mt-4 max-w-2xl mx-auto">
            Contempla el resumen de nuestra épica jornada en estas visiones del futuro
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary"
        >
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block bg-accent/90 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-3"
                  >
                    {slides[currentSlide].time}
                  </motion.span>
                  <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>

                {/* Play/Pause Button */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlayPause}
                  className="shrink-0 w-12 h-12 rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bars */}
          <div className="absolute top-4 left-4 right-4 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30 hover:bg-white/40 transition-colors cursor-pointer"
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      index < currentSlide
                        ? "100%"
                        : index === currentSlide
                        ? `${progress}%`
                        : "0%"
                  }}
                  transition={{ duration: 0.1 }}
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-white text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-primary/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
