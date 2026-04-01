"use client"

import { HeroSection } from "@/components/hero-section"
import { VideoSlideshow } from "@/components/video-slideshow"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideoSlideshow />
      <ScheduleTimeline />
      <LocationSection />
      <Footer />
    </main>
  )
}
