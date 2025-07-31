"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function UploadSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productCity: "",
    productDistrict: "",
    sellerMobile: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API
    console.log("Product Data:", formData)

    toast({
      title: "Product Uploaded!",
      description: `Your product "${formData.productName}" has been submitted. Please pay ₹10 to UPI ID: 8797221991@ybl to highlight your product. It will be highlighted in 5 hours.`,
      duration: 9000,
    })

    // Reset form
    setFormData({
      productName: "",
      productPrice: "",
      productDescription: "",
      productCity: "",
      productDistrict: "",
      sellerMobile: "",
    })
  }

  return (
    <section id="upload" className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-gradient-to-br from-primary to-[#8BC34A] p-6 text-center text-white md:p-8">
            <h2 className="mb-2 text-3xl font-bold">Sell Your Product</h2>
            <p className="text-lg">Reach thousands of buyers in your city</p>
          </div>
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="productName" className="mb-2 block font-medium text-dark">
                  Product Name
                </label>
                <Input
                  type="text"
                  id="productName"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  placeholder="Enter product name"
                  required
                  value={formData.productName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="productPrice" className="mb-2 block font-medium text-dark">
                  Price (₹)
                </label>
                <Input
                  type="number"
                  id="productPrice"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  placeholder="Enter price in rupees"
                  required
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="productDescription" className="mb-2 block font-medium text-dark">
                  Description
                </label>
                <Textarea
                  id="productDescription"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  rows={4}
                  placeholder="Describe your product in detail"
                  required
                  value={formData.productDescription}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="productCity" className="mb-2 block font-medium text-dark">
                  City
                </label>
                <Input
                  type="text"
                  id="productCity"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  placeholder="Enter your city"
                  required
                  value={formData.productCity}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="productDistrict" className="mb-2 block font-medium text-dark">
                  District
                </label>
                <Input
                  type="text"
                  id="productDistrict"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  placeholder="Enter your district"
                  required
                  value={formData.productDistrict}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="sellerMobile" className="mb-2 block font-medium text-dark">
                  Your Mobile Number
                </label>
                <Input
                  type="tel"
                  id="sellerMobile"
                  className="w-full rounded-lg border border-originalBorder p-3 text-base transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  placeholder="Enter your 10-digit mobile number"
                  required
                  value={formData.sellerMobile}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6 rounded-lg border-l-4 border-primary bg-gray-50 p-5">
                <h3 className="mb-4 text-xl font-semibold text-dark">Payment Information</h3>
                <p className="mb-3 text-gray-700">
                  To highlight your product and make it more visible to buyers, you need to pay a small fee of{" "}
                  <strong className="text-primary">₹10</strong> per product.
                </p>
                <p className="text-gray-700">
                  Send payment to UPI ID: <strong className="text-primary">8797221991@ybl</strong> or scan the QR code
                  below.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-5">
                  <div className="flex-1 min-w-[200px] rounded-lg bg-white p-5 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                      1
                    </div>
                    <p className="text-gray-700">Upload your product details</p>
                  </div>
                  <div className="flex-1 min-w-[200px] rounded-lg bg-white p-5 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                      2
                    </div>
                    <p className="text-gray-700">Pay ₹10 to our UPI ID</p>
                  </div>
                  <div className="flex-1 min-w-[200px] rounded-lg bg-white p-5 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                      3
                    </div>
                    <p className="text-gray-700">Your product gets highlighted in 5 hours</p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-lg bg-primary py-4 text-lg font-bold text-white transition-all hover:bg-[#3d8b40]"
              >
                Upload Product & Pay ₹10
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
