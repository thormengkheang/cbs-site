"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Network,
  ArrowLeft,
  Search,
  Filter,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock data for speakers
  const speakers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Blockchain Strategist",
      company: "Future Chain Labs",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah is a renowned blockchain strategist with over 10 years of experience in the industry. She has advised numerous Fortune 500 companies on blockchain implementation strategies.",
      category: "Strategy",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "DeFi Researcher",
      company: "DeFi Alliance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael leads research initiatives in decentralized finance, focusing on innovative protocols and financial inclusion through blockchain technology.",
      category: "DeFi",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Crypto Economist",
      company: "Blockchain Economics Institute",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Aisha specializes in tokenomics and economic models for blockchain projects. Her research has been published in leading academic journals.",
      category: "Economics",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Smart Contract Developer",
      company: "Secure Chain Solutions",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David is an expert in smart contract security and development. He has audited over 100 smart contracts and developed secure solutions for enterprise clients.",
      category: "Development",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Blockchain Governance Specialist",
      company: "Decentralized Governance Foundation",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Elena focuses on governance models for DAOs and decentralized systems. She has helped design governance structures for several major blockchain projects.",
      category: "Governance",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "NFT & Digital Art Expert",
      company: "Digital Art Collective",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James explores the intersection of blockchain technology and digital art. He has curated NFT exhibitions and advised artists on entering the blockchain space.",
      category: "NFTs",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 7,
      name: "Sophia Lee",
      role: "Blockchain for Social Impact",
      company: "Impact Chain Initiative",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia works on blockchain solutions for social and environmental challenges. Her projects have addressed issues from supply chain transparency to carbon credits.",
      category: "Social Impact",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 8,
      name: "Carlos Mendez",
      role: "Crypto Regulation Expert",
      company: "Blockchain Policy Institute",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Carlos specializes in regulatory frameworks for cryptocurrencies and blockchain technology. He advises governments and organizations on policy development.",
      category: "Regulation",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 9,
      name: "Nadia Cheng",
      role: "Web3 UX Designer",
      company: "User-Centric Blockchain",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Nadia focuses on creating intuitive user experiences for blockchain applications. She has designed interfaces for several popular DeFi and NFT platforms.",
      category: "Design",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 10,
      name: "Omar Hassan",
      role: "Blockchain Infrastructure Engineer",
      company: "Distributed Systems Inc.",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Omar builds scalable infrastructure for blockchain networks. He has contributed to several open-source blockchain projects and layer 2 scaling solutions.",
      category: "Infrastructure",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 11,
      role: "Blockchain Education Advocate",
      name: "Priya Singh",
      company: "Blockchain Academy",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Priya is dedicated to making blockchain education accessible to everyone. She has developed curriculum for universities and online learning platforms.",
      category: "Education",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
    {
      id: 12,
      name: "Thomas Nguyen",
      role: "Blockchain in Southeast Asia",
      company: "ASEAN Blockchain Consortium",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Thomas specializes in blockchain adoption across Southeast Asian markets. He works with regional governments and businesses to implement blockchain solutions.",
      category: "Regional",
      twitter: "#",
      linkedin: "#",
      website: "#",
    },
  ];

  const categories = [
    "All",
    "Strategy",
    "DeFi",
    "Economics",
    "Development",
    "Governance",
    "NFTs",
    "Social Impact",
    "Regulation",
    "Design",
    "Infrastructure",
    "Education",
    "Regional",
  ];

  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || speaker.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
            Our Speakers
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Meet the industry leaders, innovators, and experts who will be
            sharing their knowledge and insights at the Cambodia Blockchain
            Summit 2025.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                type="text"
                placeholder="Search speakers..."
                className="w-full border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <select
                className="h-10 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 md:w-48"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-gray-800"
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSpeakers.map((speaker) => (
            <div key={speaker.id} className="group">
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      width={400}
                      height={400}
                      className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mb-2 inline-block rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-300">
                    {speaker.category}
                  </div>
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="mb-2 text-sm text-purple-400">
                    {speaker.role}, {speaker.company}
                  </p>
                  <p className="mb-4 flex-grow text-sm text-gray-400">
                    {speaker.bio}
                  </p>
                  <div className="mt-auto flex space-x-3 pt-2">
                    <a
                      href={speaker.twitter}
                      className="text-gray-400 transition-colors hover:text-purple-400"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href={speaker.linkedin}
                      className="text-gray-400 transition-colors hover:text-purple-400"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href={speaker.website}
                      className="text-gray-400 transition-colors hover:text-purple-400"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-300">
              No speakers found matching your search criteria.
            </p>
            <Button
              className="mt-4 bg-white/10 text-white hover:bg-white/20"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Join Us at Cambodia Blockchain Summit 2025
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            {
              "Don't miss the opportunity to learn from these industry experts and connect with the blockchain community."
            }
          </p>
          <Button
            size="lg"
            className="rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg font-medium text-white shadow-[0_0_15px_rgba(120,80,255,0.5)] transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_25px_rgba(120,80,255,0.7)]"
          >
            Register Now
          </Button>
        </div>
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
