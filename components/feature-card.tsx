import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl shadow-md transition-all hover:translate-y-[-10px] hover:shadow-xl">
      <div className="flex h-20 items-center justify-center bg-gradient-to-br from-primary to-[#8BC34A] text-3xl text-white">
        <Icon className="h-8 w-8" />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-dark">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  )
}
