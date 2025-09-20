"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    level: "UNIVERSITY",
    period: "2023 - Present",
    title: "BS-MS (Bachelor of Science in Computer Science)",
    institution: "Vishwa Vishwani Institute of System and Management",
    description:
      "Currently pursuing BS-MS (Bachelor of Science in Computer Science) at Vishwa Vishwani Institute of System and Management since 2023, focusing on modern software development practices and emerging technologies.",
  },
  {
    level: "HIGH SCHOOL",
    period: "Graduated 2020",
    title: "High School Education",
    institution: "Narayana Junior College, Dilshuknagar",
    description:
      "Completed high school education at Narayana Junior College, Dilshuknagar, graduating with an outstanding 10.0 CGPA in 2020, demonstrating academic excellence and dedication to learning.",
  },
]

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Education</h2>
          <p className="text-xl text-muted-foreground">Academic Journey</p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My educational background and qualifications that have shaped my technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            {education.map((edu, index) => (
              <div
                key={edu.level}
                className={`relative mb-12 transition-all duration-1000 ${
                  isVisible ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                <div className="md:ml-20">
                  <Card className="gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                            {edu.level}
                          </span>
                          <div className="flex items-center mt-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-primary">{edu.title}</h3>
                      <p className="text-lg font-semibold mb-4 text-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
