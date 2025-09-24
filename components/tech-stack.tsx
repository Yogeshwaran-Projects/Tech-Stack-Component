"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface TechItem {
  name: string
  category: string
  description: string
  color: string
  experience: string
}

const techStack: TechItem[] = [
  // Frontend - Unique choices
  {
    name: "SvelteKit",
    category: "Frontend",
    description: "Lightning-fast reactive framework",
    color: "bg-orange-500",
    experience: "2 years",
  },
  {
    name: "Solid.js",
    category: "Frontend",
    description: "Fine-grained reactive primitives",
    color: "bg-blue-600",
    experience: "1 year",
  },
  {
    name: "Astro",
    category: "Frontend",
    description: "Content-focused static site generator",
    color: "bg-purple-600",
    experience: "1.5 years",
  },
  {
    name: "Alpine.js",
    category: "Frontend",
    description: "Minimal framework for HTML enhancement",
    color: "bg-teal-600",
    experience: "2 years",
  },

  // Backend - Less common but powerful
  {
    name: "Bun",
    category: "Backend",
    description: "All-in-one JavaScript runtime & toolkit",
    color: "bg-yellow-600",
    experience: "6 months",
  },
  {
    name: "Hono",
    category: "Backend",
    description: "Ultrafast web framework for edge",
    color: "bg-red-500",
    experience: "8 months",
  },
  {
    name: "Drizzle ORM",
    category: "Backend",
    description: "TypeScript ORM with SQL-like syntax",
    color: "bg-green-600",
    experience: "1 year",
  },
  {
    name: "tRPC",
    category: "Backend",
    description: "End-to-end typesafe APIs",
    color: "bg-indigo-600",
    experience: "1.5 years",
  },

  // Database - Modern choices
  {
    name: "Turso",
    category: "Database",
    description: "Edge SQLite database",
    color: "bg-cyan-600",
    experience: "8 months",
  },
  {
    name: "PlanetScale",
    category: "Database",
    description: "Serverless MySQL platform",
    color: "bg-pink-600",
    experience: "1 year",
  },
  {
    name: "Upstash",
    category: "Database",
    description: "Serverless Redis & Kafka",
    color: "bg-emerald-600",
    experience: "1 year",
  },

  // DevOps & Tools - Cutting edge
  {
    name: "Biome",
    category: "Tools",
    description: "Fast formatter & linter",
    color: "bg-violet-600",
    experience: "6 months",
  },
  {
    name: "Vite",
    category: "Tools",
    description: "Next generation build tool",
    color: "bg-amber-600",
    experience: "2 years",
  },
  {
    name: "Turborepo",
    category: "Tools",
    description: "High-performance monorepo system",
    color: "bg-rose-600",
    experience: "1 year",
  },
  {
    name: "Cloudflare Workers",
    category: "Deployment",
    description: "Serverless compute at the edge",
    color: "bg-orange-600",
    experience: "1.5 years",
  },
  {
    name: "Railway",
    category: "Deployment",
    description: "Infrastructure platform",
    color: "bg-slate-600",
    experience: "1 year",
  },
]

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Deployment"]

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTech =
    selectedCategory === "All" ? techStack : techStack.filter((tech) => tech.category === selectedCategory)

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Tech Stack & "}
            <span className="text-accent">{"Expertise"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Crafting digital experiences with cutting-edge technologies and modern development practices"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTech.map((tech, index) => (
            <Card
              key={tech.name}
              className={`group relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                hoveredTech === tech.name ? "border-accent shadow-accent/25" : "border-border hover:border-accent/50"
              }`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${tech.color}`}
              />

              <div className="p-6 relative z-10">
                {/* Tech name and category badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${tech.color} text-white border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {tech.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tech.description}</p>

                {/* Experience indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{tech.experience} experience</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i < (tech.experience.includes("2") ? 3 : tech.experience.includes("1.5") ? 2 : 1)
                            ? "bg-accent scale-110"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">{techStack.length}+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Learning</div>
          </div>
        </div>
      </div>
    </section>
  )
}
