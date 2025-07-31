import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { UploadSection } from "@/components/upload-section"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa] text-dark">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <UploadSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
