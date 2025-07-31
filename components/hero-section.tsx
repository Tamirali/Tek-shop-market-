import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center py-20 text-center text-white md:py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/placeholder.svg?height=1200&width=1920')",
      }}
    >
      <div className="container relative z-10">
        <h1 className="mb-5 text-4xl font-bold leading-tight text-white drop-shadow-md md:text-6xl">
          Welcome to Tek Shop
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg md:text-2xl">
          Your Local Marketplace to Buy and Sell Products in Your City
        </p>
        <Link
          href="#upload"
          className="inline-block rounded-full bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#3d8b40] hover:translate-y-[-3px] hover:shadow-xl"
          prefetch={false}
        >
          Sell Your Product Now
        </Link>
      </div>
    </section>
  )
}
