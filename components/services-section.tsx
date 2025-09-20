"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code2 } from "lucide-react"

const services = [
  {
    title: "Web Designer",
    icon: Palette,
    description:
      "I'm a passionate and creative web designer dedicated to crafting visually stunning and user-friendly websites. With a keen eye for design and a love for clean, functional interfaces, I transform ideas into engaging digital experiences. Whether it's building responsive layouts, optimizing user journeys, or bringing brands to life online, I strive to blend aesthetics with usability in every project.",
  },
  {
    title: "Web Developer",
    icon: Code2,
    description:
      "I'm a dedicated and innovative web developer with a passion for building fast, functional, and user-focused websites. I specialize in turning ideas into interactive digital experiences using modern web technologies. From responsive front-end designs to efficient solutions, I strive to create seamless and scalable web applications that reflect my commitment to quality and continuous learning.",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Services</h2>
          <p className="text-xl text-muted-foreground">What I Offer</p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are the services I offer to help bring your digital vision to life with modern design and cutting-edge
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
