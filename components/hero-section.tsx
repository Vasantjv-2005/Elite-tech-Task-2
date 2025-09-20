"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float animation-delay-800"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-primary">Vasant Jevengekar</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 animation-delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            A passionate front-end developer and web designer creating responsive, user-friendly web interfaces that
            bring ideas to life.
          </p>

          <p
            className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty transition-all duration-1000 animation-delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            With expertise in modern web technologies, I craft seamless user experiences and visually appealing designs
            that function beautifully across all devices.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 animation-delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => scrollToSection("about")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 animation-delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
