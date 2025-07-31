import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  title: string
  price: string
  description: string
  location: string
  seller: string
  contact: string
  isHighlighted: boolean
  imageUrl?: string
}

export function ProductCard({
  title,
  price,
  description,
  location,
  seller,
  contact,
  isHighlighted,
  imageUrl = "/placeholder.svg?height=200&width=280",
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div
          className={cn(
            "absolute right-4 top-4 h-5 w-5 rounded-full shadow-md",
            isHighlighted ? "bg-success animate-pulse-green" : "bg-danger",
          )}
        />
      </div>
      <CardContent className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-dark">{title}</h3>
        <div className="mb-3 text-2xl font-bold text-primary">{price}</div>
        <p className="mb-4 text-sm text-gray-700 line-clamp-2">{description}</p>
        <div className="mb-4 flex items-center gap-2 text-sm text-gray">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between border-t border-originalBorder pt-4 text-sm text-gray">
          <div>Seller: {seller}</div>
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>{contact}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
