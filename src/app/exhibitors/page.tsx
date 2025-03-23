"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, MapPin } from "lucide-react";
import { Footer } from "../_components/footer";
import { PageHeader } from "../_components/page-header";
import { exhibitors } from "@/data/exhibitors";

export default function ExhibitorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <PageHeader />

      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-5xl">
            Exhibitors
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Explore innovative blockchain solutions from leading companies and
            startups at the Cambodia Blockchain Summit 2025.
          </p>
        </div>

        {/* Floor Plan */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
              Exhibition Floor Plan
            </h2>
            <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-gray-800/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  alt="Exhibition Floor Plan"
                  width={1000}
                  height={600}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-white/10 text-white hover:bg-white/20">
                <Download className="mr-2 h-4 w-4" />
                Download Floor Plan
              </Button>
            </div>
          </div>
        </section>

        {/* Exhibitors List */}
        <section className="mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Our Exhibitors
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exhibitors.map((exhibitor) => (
              <div
                key={exhibitor.id}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]"
              >
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                    <Image
                      src={exhibitor.image || "/placeholder.svg"}
                      alt={exhibitor.name}
                      width={80}
                      height={80}
                      className="max-h-12 max-w-12 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{exhibitor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-purple-400">
                      <MapPin className="h-3 w-3" />
                      <span>Booth #{exhibitor.boothNumber}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 inline-block rounded-full bg-purple-900/50 px-2 py-1 text-xs font-medium text-purple-300">
                  {exhibitor.category}
                </div>
                <p className="mb-4 text-sm text-gray-400">
                  {exhibitor.description}
                </p>
                <a
                  href={exhibitor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
                >
                  Visit website <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Become an Exhibitor */}
        {/* <section className="mb-16 mt-20">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-3xl font-bold text-transparent">
              Become an Exhibitor
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-300">
              Showcase your blockchain solutions and connect with potential
              clients, partners, and investors at the Cambodia Blockchain Summit
              2025.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {exhibitorPackages.map((pkg) => (
                <div
                  key={pkg.tier}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]"
                >
                  <h3 className="mb-2 text-xl font-bold">{pkg.tier}</h3>
                  <p className="mb-4 text-2xl font-bold text-purple-300">
                    {pkg.price}
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-gray-300">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-purple-400">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white/10 text-white hover:bg-white/20">
                    Select
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Exhibitor Prospectus
              </Button>
              <p className="mt-4 text-sm text-gray-400">
                For custom exhibition requirements, please contact us at{" "}
                <a
                  href="mailto:exhibitors@cambodiablockchain.com"
                  className="text-purple-400 hover:underline"
                >
                  exhibitors@cambodiablockchain.com
                </a>
              </p>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
