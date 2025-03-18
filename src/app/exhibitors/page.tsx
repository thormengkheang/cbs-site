"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Network,
  ArrowLeft,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react";

export default function ExhibitorsPage() {
  // Mock data for exhibitors
  const exhibitors = [
    {
      id: 1,
      name: "BlockTech Solutions",
      description:
        "Enterprise blockchain solutions for supply chain and finance",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "A1",
      category: "Enterprise Solutions",
      website: "#",
    },
    {
      id: 2,
      name: "CryptoWallet Pro",
      description: "Secure multi-chain wallet with built-in DeFi capabilities",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "A2",
      category: "Wallets & Security",
      website: "#",
    },
    {
      id: 3,
      name: "DeFi Protocol",
      description:
        "Decentralized lending and borrowing platform with cross-chain support",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "A3",
      category: "DeFi",
      website: "#",
    },
    {
      id: 4,
      name: "NFT Marketplace",
      description:
        "Platform for creating, buying, and selling digital collectibles",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "A4",
      category: "NFTs & Digital Art",
      website: "#",
    },
    {
      id: 5,
      name: "Blockchain Academy",
      description:
        "Educational resources and certification programs for blockchain developers",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "B1",
      category: "Education",
      website: "#",
    },
    {
      id: 6,
      name: "Smart Contract Auditors",
      description:
        "Security auditing and vulnerability assessment for blockchain projects",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "B2",
      category: "Security",
      website: "#",
    },
    {
      id: 7,
      name: "Crypto Exchange",
      description:
        "Leading cryptocurrency exchange with advanced trading features",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "B3",
      category: "Exchanges",
      website: "#",
    },
    {
      id: 8,
      name: "Blockchain Analytics",
      description:
        "Data analytics and visualization tools for blockchain networks",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "B4",
      category: "Analytics",
      website: "#",
    },
    {
      id: 9,
      name: "Web3 Infrastructure",
      description:
        "Scalable infrastructure solutions for decentralized applications",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "C1",
      category: "Infrastructure",
      website: "#",
    },
    {
      id: 10,
      name: "Blockchain Gaming",
      description: "Play-to-earn games built on blockchain technology",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "C2",
      category: "Gaming & Metaverse",
      website: "#",
    },
    {
      id: 11,
      name: "Crypto Payment Gateway",
      description:
        "Payment processing solutions for cryptocurrency transactions",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "C3",
      category: "Payments",
      website: "#",
    },
    {
      id: 12,
      name: "DAO Platform",
      description:
        "Tools for creating and managing decentralized autonomous organizations",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "C4",
      category: "Governance",
      website: "#",
    },
    {
      id: 13,
      name: "Blockchain Consultancy",
      description:
        "Strategic consulting services for blockchain implementation",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "D1",
      category: "Consulting",
      website: "#",
    },
    {
      id: 14,
      name: "Crypto Media",
      description:
        "News and analysis covering the latest developments in blockchain",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "D2",
      category: "Media",
      website: "#",
    },
    {
      id: 15,
      name: "Blockchain for Social Impact",
      description:
        "Using blockchain technology to address social and environmental challenges",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "D3",
      category: "Social Impact",
      website: "#",
    },
    {
      id: 16,
      name: "Crypto Investment Fund",
      description: "Venture capital fund focused on blockchain startups",
      image: "/placeholder.svg?height=80&width=80",
      boothNumber: "D4",
      category: "Investment",
      website: "#",
    },
  ];

  const exhibitorPackages = [
    {
      tier: "Premium Booth",
      price: "$5,000",
      benefits: [
        "Prime location 4x4m booth",
        "Custom booth design",
        "4 exhibitor passes",
        "Logo on event website",
        "Featured in exhibitor directory",
        "Access to business matching program",
        "Lead capture technology",
      ],
    },
    {
      tier: "Standard Booth",
      price: "$3,000",
      benefits: [
        "3x3m booth space",
        "Standard booth setup",
        "2 exhibitor passes",
        "Logo on event website",
        "Listed in exhibitor directory",
        "Access to business matching program",
      ],
    },
    {
      tier: "Startup Kiosk",
      price: "$1,500",
      benefits: [
        "2x2m kiosk space",
        "Basic counter setup",
        "1 exhibitor pass",
        "Logo on event website",
        "Listed in exhibitor directory",
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
        <section className="mb-16 mt-20">
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
