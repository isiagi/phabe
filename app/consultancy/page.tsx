import Image from "next/image"
import Link from "next/link"
import { Building2, ChevronRight, LineChart, Users, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { DecoratedTitle } from "@/components/decorated-title"

export const metadata = {
  title: "Consultancy Services | Phabe Investment Ltd",
  description: "Expert advisory services to help your business grow and succeed in the Ugandan market.",
}

export default function ConsultancyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Expert Business Advisory"
          description="Strategic consulting services to help your business navigate the Ugandan market and achieve sustainable growth."
          icon={<LineChart className="mr-2 h-4 w-4 text-blue" />}
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-3 mb-8">
                <DecoratedTitle className="text-purple">Our Consultancy Expertise</DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  Phabe Investment Ltd offers comprehensive consultancy services designed to address the unique
                  challenges and opportunities in the Ugandan business landscape.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <LineChart className="h-10 w-10 text-blue mb-4" />
                <h3 className="text-xl font-bold text-purple">Business Strategy</h3>
                <p className="mt-2 text-muted-foreground">
                  Develop robust business strategies that align with your goals and the local market dynamics.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Market entry strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Business model optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Growth planning</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Users className="h-10 w-10 text-blue mb-4" />
                <h3 className="text-xl font-bold text-purple">Operational Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  Streamline your operations to improve efficiency, reduce costs, and enhance productivity.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Process optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Quality management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Resource allocation</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:scale-105 duration-300">
                <Lightbulb className="h-10 w-10 text-yellowgreen mb-4" />
                <h3 className="text-xl font-bold text-purple">Market Research</h3>
                <p className="mt-2 text-muted-foreground">
                  Gain valuable insights into the Ugandan market to make informed business decisions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Consumer behavior analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Competitive landscape</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green" />
                    <span>Market opportunity assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <DecoratedTitle className="text-purple">Our Consulting Approach</DecoratedTitle>
                <p className="mt-4 text-muted-foreground">
                  We follow a structured yet flexible approach to address your unique business challenges and
                  opportunities.
                </p>
                <ol className="mt-6 space-y-4">
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Discovery & Assessment</h3>
                      <p className="text-muted-foreground">
                        We begin by understanding your business, goals, and challenges through in-depth discussions and
                        analysis.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Strategy Development</h3>
                      <p className="text-muted-foreground">
                        Our team develops tailored strategies and solutions based on our findings and your objectives.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Implementation Support</h3>
                      <p className="text-muted-foreground">
                        We provide guidance and support during the implementation phase to ensure successful execution.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-green-foreground">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-purple">Monitoring & Optimization</h3>
                      <p className="text-muted-foreground">
                        We continuously monitor progress, measure results, and make adjustments to optimize outcomes.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={300}
                  alt="Consulting Approach"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-purple">Client Success Story</h3>
                  <p className="mt-2 text-muted-foreground italic">
                    "Phabe Investment's consultancy services helped us navigate the complexities of the Ugandan market.
                    Their strategic guidance was instrumental in our successful expansion."
                  </p>
                  <p className="mt-4 font-medium">— CEO, Leading Retail Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <DecoratedTitle className="text-purple">Ready to Transform Your Business?</DecoratedTitle>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Schedule a consultation with our expert advisors to discuss how we can help your business thrive in
                Uganda.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-green hover:bg-green-dark">Book a Consultation</Button>
                <Button variant="outline" className="border-green text-green hover:bg-green/10">
                  View Our Portfolio
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
