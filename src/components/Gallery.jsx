import { Card } from "@/components/ui/Card"

export function Gallery() {
  const images = [
    { query: "romantic couple walking on beach at sunset", span: "md:col-span-2" },
    { query: "couple laughing together in nature", span: "" },
    { query: "couple holding hands close up", span: "" },
    { query: "couple dancing together", span: "md:col-span-2" },
    { query: "couple having picnic in park", span: "md:col-span-2" },
    { query: "couple portrait in golden hour", span: "" },
  ]

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl md:text-6xl font-light text-center mb-16 text-balance">
          Our Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Card key={index} className={`overflow-hidden ${image.span}`}>
              <img
                src={`https://source.unsplash.com/600x400/?${encodeURIComponent(image.query)}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
