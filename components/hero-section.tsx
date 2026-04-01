"use client"

import { Sparkles, Crown, MapPin, Users, Music } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"

export function HeroSection() {
  const spotifyUrl = "https://open.spotify.com/track/36SJ7ZFx8J1f1RsewmUwMX?si=31672ca4c7694310"
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 text-accent"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute top-40 right-20 text-accent"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-40 left-1/4 text-accent"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Crown decoration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <Crown className="w-16 h-16 text-accent" strokeWidth={1.5} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4"
        >
          Los Grandes Maestros Dul & Joaco presentan
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight text-balance"
        >
          La Gran Aventura
          <span className="block text-primary">de Búzios</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-32 h-0.5 bg-primary mx-auto mb-8"
        />

        {/* Epic description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto font-sans"
        >
          Una jornada legendaria donde <strong>14 valientes almas</strong> se embarcarán 
          en una odisea de playas cristalinas, festines dignos de la realeza 
          y atardeceres que harían llorar a los dioses.
        </motion.p>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border border-border shadow-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Casa Maravilhosa na Ferradura</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border border-border shadow-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">12 Nobles + 2 Pequeños Herederos</span>
          </div>
        </motion.div>

        {/* Spotify QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-card border border-border rounded-2xl p-4 shadow-lg mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <Music className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium text-sm">Banda Sonora Oficial</span>
          </div>
          <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="block">
            <QRCodeSVG 
              value={spotifyUrl}
              size={120}
              bgColor="transparent"
              fgColor="currentColor"
              className="text-foreground mx-auto"
            />
          </a>
          <p className="text-muted-foreground text-xs mt-2 text-center">Escanea para escuchar</p>
        </motion.div>

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-xl mb-8"
        >
          <Image
            src="/images/familia.jpg"
            alt="Los 14 valientes aventureros de Búzios"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest">Descubre el Itinerario</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
