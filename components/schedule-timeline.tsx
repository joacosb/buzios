"use client"

import { Coffee, Sandwich, Waves, Wine, Sun, TreePalm, Sparkles, Beer, Trophy, Volleyball, Star } from "lucide-react"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"

interface ScheduleItemProps {
  time: string
  title: string
  description: string
  details?: string[]
  icon: React.ReactNode
  index: number
  image?: string
  imageAlt?: string
  secondImage?: string
  secondImageAlt?: string
}

function ScheduleItem({ time, title, description, details, icon, index, image, imageAlt, secondImage, secondImageAlt }: ScheduleItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex items-start gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-xl overflow-hidden`}>
          {image && !secondImage && (
            <div className="relative w-full h-48 md:h-56 -mt-6 -mx-6 md:-mt-8 md:-mx-8 mb-6 overflow-hidden">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/20" />
            </div>
          )}
          {image && secondImage && (
            <div className="grid grid-cols-2 gap-2 -mt-6 -mx-6 md:-mt-8 md:-mx-8 mb-6 overflow-hidden">
              <div className="relative h-40 md:h-48">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 md:h-48">
                <Image
                  src={secondImage}
                  alt={secondImageAlt || title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <p className="text-accent font-semibold text-lg mb-2">{time}</p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">{description}</p>
          {details && (
            <ul className={`space-y-1 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              {details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 justify-start md:justify-inherit">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Timeline icon */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
          {icon}
        </div>
        {index < scheduleItems.length - 1 && (
          <div className="w-0.5 h-32 bg-border mt-4" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

const scheduleItems = [
  {
    time: "8:00 AM",
    title: "El Despertar del Cuerpo y el Alma",
    description: "Antes de que el mundo despierte, los guerreros más iluminados se reunirán para una sesión de yoga sagrado. Como pueden ver en las fotos, a veces sale perfecto... y a veces terminamos en el piso. Pero eso es parte del encanto.",
    details: [
      "Saludos al sol tropical",
      "Posturas dignas de Instagram (o no)",
      "Todos los niveles bienvenidos",
      "Si te caes, te levantas con gracia"
    ],
    icon: <Sparkles className="w-7 h-7" />,
    image: "/images/yoga-bien.jpg",
    imageAlt: "Yoga perfecto - cuando todo sale bien",
    secondImage: "/images/yoga-caida.jpg",
    secondImageAlt: "Yoga fail - cuando la gravedad gana"
  },
  {
    time: "9:00 AM",
    title: "El Gran Festín del Amanecer",
    description: "Los primeros rayos del sol tropical iluminarán un desayuno digno de los reyes más caprichosos del reino.",
    details: [
      "Leche fresca de las vacas más nobles",
      "Café del más fino aroma",
      "Yogurt cremoso y Nesquik mágico",
      "Cereales encantados y tostadas doradas",
      "Huevos preparados por maestros culinarios",
      "Frutas exóticas recién cortadas"
    ],
    icon: <Coffee className="w-7 h-7" />,
    image: "/images/breakfast-feast.jpg",
    imageAlt: "Desayuno abundante con frutas, café y huevos"
  },
  {
    time: "10:30 AM",
    title: "La Travesía a Praia do Forno",
    description: "Emprenderemos una expedición hacia la legendaria Praia do Forno, una joya escondida de aguas turquesas y arena dorada que solo los verdaderos aventureros conocen.",
    details: [
      "Aguas cristalinas de color esmeralda",
      "Vista aérea de ensueño",
      "Paraíso terrenal garantizado"
    ],
    icon: <TreePalm className="w-7 h-7" />,
    image: "/images/praia-do-forno.jpg",
    imageAlt: "Praia do Forno - vista aérea de aguas turquesas"
  },
  {
    time: "1:00 PM",
    title: "El Picnic de los Campeones",
    description: "Bajo la sombra de palmeras milenarias, desplegaremos un festín de sándwiches artesanales que harían envidiar a cualquier banquete medieval.",
    details: [
      "Sanguches de fiambres varios",
      "Una selección digna de los paladares más exigentes",
      "Bebidas refrescantes al borde del mar"
    ],
    icon: <Sandwich className="w-7 h-7" />,
    image: "/images/beach-picnic.jpg",
    imageAlt: "Picnic en la playa con sándwiches y frutas"
  },
  {
    time: "2:00 PM",
    title: "La Tarde de las Delicias Playeras",
    description: "El océano nos llamará para disfrutar de sus aguas cristalinas. Baños refrescantes, descanso bajo el sol brasileño, y caipirinhas que fluirán como ríos de néctar divino.",
    details: [
      "Baños en aguas del más puro cristal",
      "Caipirinhas preparadas por expertos",
      "Descanso bajo el sol tropical",
      "Pura relajación playera"
    ],
    icon: <Beer className="w-7 h-7" />,
    image: "/images/praia-do-forno.jpg",
    imageAlt: "Tarde de relax en Praia do Forno"
  },
  {
    time: "5:00 PM",
    title: "El Gran Torneo de la Oca",
    description: "A la orilla del mar, con los pies en la arena, se celebrará el legendario Campeonato del Juego de la Oca (el místico juego de las manos). Los derrotados deberán cumplir su penitencia sagrada: asistir en la preparación de la picada.",
    details: [
      "Competencia feroz entre nobles",
      "Reflejos puestos a prueba",
      "El perdedor... prepara la picada",
      "Cervezas para los espectadores"
    ],
    icon: <Trophy className="w-7 h-7" />,
    image: "/images/hand-game.jpg",
    imageAlt: "Competencia del juego de las manos entre amigos"
  },
  {
    time: "5:30 PM",
    title: "El Regreso Triunfal",
    description: "Como héroes de una epopeya, retornaremos a nuestra fortaleza: la majestuosa Casa Maravilhosa con su piscina de aguas encantadas y cervezas infinitas.",
    icon: <Waves className="w-7 h-7" />,
    image: "/images/pool-sunset.jpg",
    imageAlt: "Piscina al atardecer con cervezas y relax"
  },
  {
    time: "7:30 PM",
    title: "El Atardecer Dorado & La Picada Legendaria",
    description: "Mientras el sol pinte el cielo de colores imposibles, nos deleitaremos con una picada que los bardos cantarán por generaciones. Preparada con amor... y con la ayuda de los perdedores del torneo.",
    details: [
      "Quesos importados de tierras lejanas",
      "Salamines curados por artesanos",
      "Aceitunas de los olivos más antiguos",
      "Y todo tipo de delicias gourmet"
    ],
    icon: <Wine className="w-7 h-7" />,
    image: "/images/picada-sunset.jpg",
    imageAlt: "Picada gourmet al atardecer junto a la piscina"
  },
  {
    time: "9:30 PM",
    title: "La Gran Fiesta de Gala",
    description: "El broche de oro de la jornada épica: una noche de gala en el salón de eventos de la mansión. Trajes de etiqueta, champagne y la elegancia de los grandes. ¡Es de gala, nobleza — a vestirse a la altura!",
    details: [
      "Vestimenta formal obligatoria",
      "Salón de eventos de la Casa Maravilhosa",
      "Champagne y cócteles de autor",
      "Música en vivo y baile hasta el amanecer"
    ],
    icon: <Star className="w-7 h-7" />,
    image: "/images/fiesta-gala.jpg",
    imageAlt: "Fiesta de gala en el salón de eventos de la mansión"
  }
]

export function ScheduleTimeline() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center mb-4">
            <Sun className="w-12 h-12 text-accent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            El Itinerario Sagrado
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Cada momento ha sido cuidadosamente orquestado por los Grandes Maestros 
            para garantizar una jornada de pura magia y aventura.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {scheduleItems.map((item, index) => (
            <ScheduleItem
              key={index}
              time={item.time}
              title={item.title}
              description={item.description}
              details={item.details}
              icon={item.icon}
              index={index}
              image={item.image}
              imageAlt={item.imageAlt}
              secondImage={item.secondImage}
              secondImageAlt={item.secondImageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
