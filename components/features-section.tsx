import { FeatureCard } from "./feature-card"
import { Upload, Zap, MapPin } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <h2 className="relative mb-12 text-center text-3xl font-bold text-dark after:absolute after:bottom-[-15px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-primary">
          How Tek Shop Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Upload}
            title="Upload Product"
            description="List your product with details like name, price, description, and location. Pay ₹10 to highlight your listing."
          />
          <FeatureCard
            icon={Zap}
            title="Get Highlighted"
            description="After 5 hours of payment, your product gets a green LED highlight and becomes more visible to buyers."
          />
          <FeatureCard
            icon={MapPin}
            title="Local Search"
            description="Buyers can search products by city or district to find items available in their local area."
          />
        </div>
      </div>
    </section>
  )
}
