"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-xl text-muted-foreground">Crafting Digital Experiences</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 animation-delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As an aspiring frontend developer, I've been actively building my skills through self-driven projects,
                  internships, and continuous learning. I have successfully completed internships at Course Central,
                  Alfido Tech, Codectechnologies, Codveda Technologies, InternCourse, and CodeAlpha.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through these experiences, I've developed a strong foundation in modern web technologies and honed my
                  ability to create clean, responsive, and accessible web interfaces. I'm passionate about integrating
                  AI to enhance user experiences through personalization and automation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            className={`transition-all duration-1000 animation-delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">What I Do</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a web developer and designer with a passion for creating elegant solutions to complex problems.
                  With expertise in React, Next.js, and modern web technologies, I build responsive and accessible web
                  applications that make a difference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm eager to contribute to innovative development teams and continue growing through impactful,
                  hands-on experience. My goal is to create digital experiences that not only look beautiful but also
                  provide exceptional user value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
