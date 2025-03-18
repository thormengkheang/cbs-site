"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Network, ArrowLeft, Download, ExternalLink } from "lucide-react";

export default function SponsorsPage() {
  // Mock data for sponsors
  const platinumSponsors = [
    {
      id: 1,
      name: "BlockTech Global",
      image: "/placeholder.svg?height=120&width=240",
      website: "#",
    },
    {
      id: 2,
      name: "Crypto Innovations",
      image: "/placeholder.svg?height=120&width=240",
      website: "#",
    },
    {
      id: 3,
      name: "DeFi Solutions",
      image: "/placeholder.svg?height=120&width=240",
      website: "#",
    },
  ];

  const goldSponsors = [
    {
      id: 1,
      name: "Chain Ventures",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
    {
      id: 2,
      name: "Digital Asset Partners",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
    {
      id: 3,
      name: "Blockchain Capital",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
    {
      id: 4,
      name: "Crypto Exchange",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
    {
      id: 5,
      name: "Web3 Accelerator",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
    {
      id: 6,
      name: "Token Innovations",
      image: "/placeholder.svg?height=100&width=200",
      website: "#",
    },
  ];

  const silverSponsors = [
    {
      id: 1,
      name: "Blockchain Academy",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 2,
      name: "Crypto Media",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 3,
      name: "DeFi Protocol",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 4,
      name: "NFT Marketplace",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 5,
      name: "Smart Contract Auditors",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 6,
      name: "Blockchain Consultancy",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 7,
      name: "Crypto Wallet",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 8,
      name: "Web3 Infrastructure",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
    {
      id: 9,
      name: "Blockchain Analytics",
      image: "/placeholder.svg?height=80&width=160",
      website: "#",
    },
  ];

  const bronzeSponsors = [
    {
      id: 1,
      name: "Startup Incubator",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 2,
      name: "Blockchain News",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 3,
      name: "Crypto Community",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 4,
      name: "Developer Tools",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 5,
      name: "Blockchain Education",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 6,
      name: "Crypto Events",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 7,
      name: "Web3 Jobs",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 8,
      name: "Blockchain Research",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 9,
      name: "Crypto Podcast",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 10,
      name: "NFT Artists Collective",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 11,
      name: "Blockchain Gaming",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
    {
      id: 12,
      name: "Metaverse Platform",
      image: "/placeholder.svg?height=60&width=120",
      website: "#",
    },
  ];

  const sponsorshipPackages = [
    {
      tier: "Platinum",
      price: "$15,000",
      benefits: [
        "Prime logo placement on all event materials",
        "Dedicated exhibition booth (premium location)",
        "5 VIP tickets to the summit",
        "Keynote speaking opportunity",
        "Sponsored workshop session",
        "Full-page ad in event program",
        "Featured in all press releases",
        "Access to attendee list (with consent)",
        "Social media promotion package",
        "Logo on event website with link",
      ],
    },
    {
      tier: "Gold",
      price: "$10,000",
      benefits: [
        "Prominent logo placement on event materials",
        "Exhibition booth",
        "3 VIP tickets to the summit",
        "Panel speaking opportunity",
        "Half-page ad in event program",
        "Mentioned in press releases",
        "Social media promotion",
        "Logo on event website with link",
      ],
    },
    {
      tier: "Silver",
      price: "$5,000",
      benefits: [
        "Logo on event materials",
        "Shared exhibition space",
        "2 tickets to the summit",
        "Quarter-page ad in event program",
        "Social media mention",
        "Logo on event website",
      ],
    },
    {
      tier: "Bronze",
      price: "$2,500",
      benefits: [
        "Logo on event materials",
        "1 ticket to the summit",
        "Logo in event program",
        "Logo on event website",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            <div className="flex items-center gap-2">
              <Network className="h-6 w-6 text-purple-400" />
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-lg font-bold text-transparent md:text-xl">
                CBS 2025
              </span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

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
      <footer className="border-t border-white/10 bg-black/30 py-8">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cambodia Blockchain Summit. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
