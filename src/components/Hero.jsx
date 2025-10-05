import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10">
        <img
          src="/mariafer/romantic-wedding-venue-with-soft-natural-lighting.jpg"
          alt="Wedding venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 text-balance">
          Sarah &amp; James
        </h1>
        <p className="text-xl md:text-2xl mb-4 tracking-wide">are getting married</p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          June 15, 2025 • Napa Valley, California
        </p>

        <Button size="lg" className="text-base px-8" asChild>
          <a href="#rsvp">RSVP Now</a>
        </Button>
      </div>
    </section>
  )
}
