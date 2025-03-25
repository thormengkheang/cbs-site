"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Twitter, Linkedin, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { speakers } from "@/data/speakers";
import { PageHeader } from "../_components/page-header";
import { Footer } from "../_components/footer";

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase());

    // const matchesCategory =
    //   selectedCategory === "All" || speaker.category === selectedCategory;

    // return matchesSearch && matchesCategory;
    return matchesSearch;
  });

  const handleOnResetFilters = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <PageHeader />

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
            {/* <div className="relative">
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
            </div> */}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSpeakers.map((speaker) => (
            <div key={speaker.id} className="group">
              <div className="relative flex h-[450px] flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 h-36 w-36 self-center rounded-full border-2 border-purple-500/30 transition-all duration-300 group-hover:border-purple-500/70">
                    <Image
                      src={speaker.image}
                      alt={`Speaker ${speaker.name}`}
                      width={144}
                      height={144}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="mb-2 text-sm text-purple-400">
                    {speaker.role}
                    {!!speaker.company && `, ${speaker.company}`}
                  </p>
                  <div className="scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent mb-4 flex-grow overflow-y-auto pr-1 text-sm text-gray-400">
                    {speaker.bio}
                  </div>
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
              onClick={handleOnResetFilters}
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
      <Footer />
    </div>
  );
}
