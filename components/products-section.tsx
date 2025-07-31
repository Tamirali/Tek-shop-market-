"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { ProductCard } from "./product-card"

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All Products")
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      title: "Samsung Galaxy S22 Ultra",
      price: "₹72,999",
      description: "Like new condition with 1 year warranty remaining. Original box and accessories included.",
      location: "Mumbai, Maharashtra",
      seller: "Rajesh Kumar",
      contact: "98XXXXXX12",
      isHighlighted: true,
      category: "Electronics",
    },
    {
      title: "Wooden Study Table",
      price: "₹4,500",
      description: "Solid wood study table with drawer. Excellent condition, barely used.",
      location: "Delhi, Central District",
      seller: "Priya Sharma",
      contact: "97XXXXXX45",
      isHighlighted: true,
      category: "Furniture",
    },
    {
      title: "Royal Enfield Classic 350",
      price: "₹1,85,000",
      description: "2022 model, 5000 km driven. Well maintained with service records.",
      location: "Bangalore, Karnataka",
      seller: "Vikram Singh",
      contact: "96XXXXXX78",
      isHighlighted: false,
      category: "Vehicles",
    },
    {
      title: "Designer Leather Jacket",
      price: "₹3,200",
      description: "Genuine leather jacket, size M. Brand new with tags.",
      location: "Chennai, Tamil Nadu",
      seller: "Arjun Menon",
      contact: "99XXXXXX23",
      isHighlighted: true,
      category: "Clothing",
    },
    {
      title: "Gaming PC (Custom Build)",
      price: "₹95,000",
      description: "High-end gaming PC with RTX 3080, i7 processor. Perfect for competitive gaming.",
      location: "Hyderabad, Telangana",
      seller: "Suresh Reddy",
      contact: "91XXXXXX01",
      isHighlighted: true,
      category: "Electronics",
    },
    {
      title: "Antique Wooden Chair Set",
      price: "₹12,000",
      description: "Set of 4 antique wooden chairs, hand-carved. Perfect for a vintage look.",
      location: "Kolkata, West Bengal",
      seller: "Ananya Das",
      contact: "90XXXXXX34",
      isHighlighted: false,
      category: "Furniture",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeFilter === "All Products" || product.category === activeFilter
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <section id="products" className="bg-[#f0f4f8] py-20">
      <div className="container">
        <h2 className="relative mb-12 text-center text-3xl font-bold text-dark after:absolute after:bottom-[-15px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-primary">
          Featured Products
        </h2>

        <div className="mx-auto mb-10 flex max-w-xl overflow-hidden rounded-full shadow-lg">
          <Input
            type="text"
            placeholder="Search by city or district..."
            className="flex-1 border-none px-5 py-3 text-base focus-visible:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="bg-primary px-8 text-white hover:bg-[#3d8b40]">
            <Search className="h-5 w-5" />
            <span className="ml-2">Search</span>
          </Button>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {["All Products", "Electronics", "Furniture", "Vehicles", "Clothing"].map((filter) => (
            <Button
              key={filter}
              variant="outline"
              className={`rounded-full px-5 py-2 transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white hover:bg-primary hover:text-white"
                  : "bg-white text-dark hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
