"use client";

import Image from "next/image";
import { PageHeader } from "../_components/page-header";
import { Footer } from "../_components/footer";
import { coreTeamMembers } from "@/data/teams";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <PageHeader />

      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-5xl">
            Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Meet the dedicated individuals working behind the scenes to make the
            Cambodia Blockchain Summit 2025 a success.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {coreTeamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="mb-4 aspect-square w-full max-w-[180px] overflow-hidden rounded-full border-2 border-purple-500/30 bg-white/5 p-1 transition-all duration-300 group-hover:border-purple-500/70">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-lg font-bold transition-colors duration-300 group-hover:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-center text-sm text-purple-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Join Our Team */}
        {/* <section className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-center text-3xl font-bold text-transparent">
            Join Our Team
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-300">
            {
              "We're looking for passionate individuals to help us make the Cambodia Blockchain Summit 2025 an unforgettable experience."
            }
          </p>

          <div className="mb-8 space-y-6">
            <h3 className="mb-4 text-xl font-bold">Open Positions</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]"
                >
                  <h4 className="text-lg font-bold">{position.title}</h4>
                  <div className="my-2 flex flex-wrap gap-2">
                    <span className="inline-block rounded-full bg-purple-900/50 px-2 py-1 text-xs font-medium text-purple-300">
                      {position.type}
                    </span>
                    <span className="inline-block rounded-full bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-300">
                      {position.location}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-gray-300">
                    {position.description}
                  </p>
                  <Button className="w-full bg-white/10 text-white hover:bg-white/20">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4 text-gray-300">
              {
                "Don't see a position that matches your skills? We're alwayslooking for talented individuals to join our team."
              }
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
              Send Open Application
            </Button>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
