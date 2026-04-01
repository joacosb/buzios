"use client"

import { Heart, Crown } from "lucide-react"
import { motion } from "motion/react"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <Crown className="w-10 h-10" strokeWidth={1.5} />
          </div>
          
          <p className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Que la aventura comience
          </p>
          
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
            Preparad vuestros trajes de baño, cargad vuestros espíritus de alegría, 
            y alistáos para un día que quedará grabado en las crónicas de la eternidad.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
            <span>Organizado con</span>
            <Heart className="w-5 h-5 fill-current text-primary-foreground" />
            <span>por</span>
            <span className="font-semibold text-primary-foreground">Dul & Joaco</span>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              Búzios, Brasil • La Aventura del Año
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
