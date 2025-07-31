import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#2c3e50] to-[#1a1a2e] py-4 text-white shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8BC34A] font-bold text-white">
              TA
            </div>
            <div>
              <div className="text-sm">Site Owner: Tamir Ali</div>
              <div className="text-sm">WhatsApp: 8797221991</div>
            </div>
          </div>
          <Link
            href="https://wa.me/918797221991"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-medium text-white transition-all hover:bg-[#128C7E] hover:translate-y-[-2px]"
            prefetch={false}
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Link>
        </div>

        <nav className="pt-2">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base md:justify-start md:gap-x-8">
            <li>
              <Link
                href="#home"
                className="relative py-1 transition-all hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                prefetch={false}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="relative py-1 transition-all hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                prefetch={false}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#upload"
                className="relative py-1 transition-all hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                prefetch={false}
              >
                Sell Product
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="relative py-1 transition-all hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                prefetch={false}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="relative py-1 transition-all hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                prefetch={false}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
