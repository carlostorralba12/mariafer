import { Card, CardContent } from "@/components/ui/Card"
import { MapPin, Clock, Music, Utensils } from "lucide-react"

export function EventDetails() {
  const events = [
    {
      icon: Clock,
      title: "Ceremony",
      time: "4:00 PM",
      description: "Join us as we exchange our vows in the vineyard",
    },
    {
      icon: Utensils,
      title: "Reception",
      time: "6:00 PM",
      description: "Dinner and celebration under the stars",
    },
    {
      icon: Music,
      title: "Dancing",
      time: "8:00 PM",
      description: "Dance the night away with us",
    },
  ]

  return (
    <section id="details" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-16 text-balance">Event Details</h2>

        <Card className="mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-2xl mb-2">Venue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Silverado Resort and Spa
                  <br />
                  1600 Atlas Peak Road
                  <br />
                  Napa, CA 94558
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.title} className="">
              <CardContent className="p-8 text-center">
                <event.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                <p className="text-lg font-medium mb-2">{event.time}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
