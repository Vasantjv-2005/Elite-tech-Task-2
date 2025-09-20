"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Palette, Database, GitBranch, Smartphone, Globe } from "lucide-react"

const skills = [
  { name: "Frontend Development", percentage: 92, icon: Code },
  { name: "HTML & CSS", percentage: 95, icon: Globe },
  { name: "JavaScript & TypeScript", percentage: 88, icon: Code },
  { name: "React & Next.js", percentage: 90, icon: Code },
  { name: "Responsive Design", percentage: 94, icon: Smartphone },
  { name: "UI/UX Design", percentage: 87, icon: Palette },
  { name: "Git & GitHub", percentage: 91, icon: GitBranch },
  { name: "Database Management", percentage: 85, icon: Database },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(new Array(skills.length).fill(0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0
              const increment = skill.percentage / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= skill.percentage) {
                  current = skill.percentage
                  clearInterval(timer)
                }
                setAnimatedPercentages((prev) => {
                  const newPercentages = [...prev]
                  newPercentages[index] = Math.round(current)
                  return newPercentages
                })
              }, 20)
            }, index * 100)
          })
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">My expertise in modern web technologies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.name}
                className={`gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-semibold text-primary">{animatedPercentages[index]}%</span>
                    </div>
                    <Progress value={animatedPercentages[index]} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
