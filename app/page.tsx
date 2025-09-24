import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {"Building the "}
            <span className="text-accent">{"Future"}</span>
            {" of Web"}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            {
              "Full-stack developer passionate about crafting exceptional digital experiences with cutting-edge technologies"
            }
          </p>
        </div>
      </section>

      {/* Tech Stack Component */}
      <TechStack />
    </main>
  )
}
