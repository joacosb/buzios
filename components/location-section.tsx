"use client"

import { Castle, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Castle className="w-16 h-16 text-primary" strokeWidth={1.5} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            La Fortaleza
          </h2>

          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm max-w-3xl mx-auto">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/casa-ferradura.jpg"
                alt="Casa Maravilhosa na Ferradura - nuestra mansión en Búzios"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                Casa Maravilhosa na Ferradura
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Una mansión de ensueño ubicada en el corazón de Búzios, donde cada rincón 
                susurra historias de lujo y cada ventana enmarca un cuadro del paraíso. 
                Con su majestuosa piscina y vistas que quitan el aliento, esta será 
                nuestra base de operaciones para la aventura más épica del año.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
                  Piscina Encantada
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
                  Vistas al Infinito
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
                  Lujo Tropical
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
