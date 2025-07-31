import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#2c3e50] to-[#1a1a2e] py-12 text-white">
      <div className="container">
        <div className="grid gap-8 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="footer-column">
            <h3 className="relative mb-5 text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
              Tek Shop
            </h3>
            <p className="text-gray-400">
              Your local marketplace to buy and sell products within your city. Connect with local buyers and sellers
              easily.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="relative mb-5 text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 transition-all hover:text-white hover:pl-1"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 transition-all hover:text-white hover:pl-1"
                  prefetch={false}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#upload"
                  className="text-gray-400 transition-all hover:text-white hover:pl-1"
                  prefetch={false}
                >
                  Sell Product
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-400 transition-all hover:text-white hover:pl-1"
                  prefetch={false}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 transition-all hover:text-white hover:pl-1"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="relative mb-5 text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Market Street, City Center, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 8797221991</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>support@tekshop.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-sm text-gray-400">
          &copy; 2023 Tek Shop. All Rights Reserved. | Site Owner: Tamir Ali
        </div>
      </div>
    </footer>
  )
}
