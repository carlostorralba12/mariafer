import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <p className="font-serif text-xl">Sarah &amp; James</p>
            <Heart className="h-5 w-5 text-primary fill-primary" />
          </div>

          <p className="text-sm text-muted-foreground">
            June 15, 2025 • Napa Valley, California
          </p>

          <p className="text-xs text-muted-foreground">
            For questions, please contact us at{" "}
            <a
              href="mailto:hello@sarahandjames.com"
              className="underline hover:text-primary transition-colors"
            >
              hello@sarahandjames.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
