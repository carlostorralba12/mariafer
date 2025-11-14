import { Card } from "@/components/ui/Card"

export function OurStory() {
  return (
    <section id="story" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-16 text-balance">
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl mb-3">How We Met</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our paths crossed on a rainy autumn evening at a cozy coffee shop in San Francisco.
                Sarah was reading her favorite book, and James accidentally spilled his coffee on her
                table. What started as an awkward apology turned into hours of conversation.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-3">The Proposal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Three years later, James took Sarah back to that same coffee shop. As they sat at their
                favorite corner table, he got down on one knee and asked her to spend forever with him.
                Through happy tears, she said yes.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden">
            <img
              src="/mariafer/fotoMariaFerOurStory2.jpg"
              alt="Sarah and James"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
