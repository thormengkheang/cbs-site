"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import {
  platinumSponsors,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  sponsorshipPackages,
} from "@/data/sponsors";
import { PageHeader } from "../_components/page-header";
import { Footer } from "../_components/footer";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <PageHeader />

      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-5xl">
            Our Sponsors & Partners
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Meet the organizations supporting blockchain innovation and making
            the Cambodia Blockchain Summit 2025 possible.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <section className="mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Platinum Sponsors
          </h2>
          <div className="grid items-center gap-6 md:grid-cols-3">
            {platinumSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-40 flex-col items-center justify-center rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
              >
                <Image
                  src={sponsor.image || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={240}
                  height={120}
                  className="max-h-20 w-auto opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <p className="mt-4 flex items-center gap-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Visit <ExternalLink className="inline h-3 w-3" />
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Gold Sponsors */}
        <section className="mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Gold Sponsors
          </h2>
          <div className="grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {goldSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-32 flex-col items-center justify-center rounded-lg bg-white/5 p-5 transition-all duration-300 hover:bg-white/10"
              >
                <Image
                  src={sponsor.image || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="max-h-16 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
                <p className="mt-3 flex items-center gap-1 text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Visit <ExternalLink className="inline h-3 w-3" />
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Silver Sponsors
          </h2>
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {silverSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-24 flex-col items-center justify-center rounded-lg bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
              >
                <Image
                  src={sponsor.image || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
                <p className="mt-2 flex items-center gap-1 text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Visit <ExternalLink className="inline h-3 w-3" />
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Bronze Sponsors */}
        <section className="mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Bronze Sponsors
          </h2>
          <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {bronzeSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-20 flex-col items-center justify-center rounded-lg bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
              >
                <Image
                  src={sponsor.image || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="max-h-10 w-auto opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                />
                <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Visit <ExternalLink className="inline h-2 w-2" />
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Become a Sponsor */}
        <section className="mb-16 mt-20">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-3xl font-bold text-transparent">
              Become a Sponsor
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-300">
              Join leading organizations in supporting the Cambodia Blockchain
              Summit 2025 and gain valuable exposure to the blockchain community
              in Southeast Asia.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sponsorshipPackages.map((pkg) => (
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
                Download Sponsorship Prospectus
              </Button>
              <p className="mt-4 text-sm text-gray-400">
                For custom sponsorship packages, please contact us at{" "}
                <a
                  href="mailto:sponsors@cambodiablockchain.com"
                  className="text-purple-400 hover:underline"
                >
                  sponsors@cambodiablockchain.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
