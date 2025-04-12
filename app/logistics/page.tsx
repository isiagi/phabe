import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Building2, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { CornerDecoration } from "@/components/corner-decoration"
import { DecoratedTitle } from "@/components/decorated-title"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Logistics Management | Phabe Investment Ltd",
  description: "Efficient transportation, warehousing, and distribution solutions for your business in Uganda.",
}

export default function LogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Efficient Logistics Solutions"
          description="Streamline your supply chain with our comprehensive logistics management services tailored for businesses in Uganda and East Africa."
          icon={<Truck className="mr-2 h-4 w-4 text-green" />}
          backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showBackLink={false}
        />

        <section className="relative w-full py-12 md:py-24 lg:py-32">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <DecoratedTitle variant="purple" className="text-purple">
                  Our Logistics Services
                </DecoratedTitle>
                <p className="text-muted-foreground">
                  At Phabe Investment Ltd, we provide end-to-end logistics solutions that help businesses optimize their
                  supply chain operations, reduce costs, and improve efficiency.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Transportation Management
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Reliable and efficient transportation services across Uganda and East Africa.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Warehousing Solutions
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Secure storage facilities with inventory management systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Distribution Network
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Strategic distribution services to reach your customers efficiently.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-green/10 p-1">
                      <ChevronRight className="h-5 w-5 text-green" />
                    </div>
                    <div>
                      <DecoratedTitle as="h3" className="font-bold">
                        Supply Chain Consulting
                      </DecoratedTitle>
                      <p className="text-muted-foreground">
                        Expert advice to optimize your entire supply chain operations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={300}
                  alt="Logistics Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <DecoratedTitle variant="purple" className="text-purple">
                    Why Choose Our Logistics Services?
                  </DecoratedTitle>
                  <ul className="mt-4 grid gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Experienced team with local market knowledge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Modern fleet and warehousing facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Real-time tracking and reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Cost-effective solutions tailored to your needs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green" />
                      <span>Commitment to timely delivery and quality service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          {/* Corner Decoration */}
          <CornerDecoration variant="green" />
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle variant="purple" className="text-purple">
                Ready to Optimize Your Logistics?
              </DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Contact us today to discuss how our logistics management services can help your business grow and
                succeed.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-green hover:bg-green-dark">Get a Free Consultation</Button>
                <Button variant="outline" className="border-green text-green hover:bg-green/10">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#252B35] text-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <p className="text-sm font-medium">© 2025 Phabe Investment Ltd. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-white/90 hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
