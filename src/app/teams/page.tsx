"use client";

import Image from "next/image";
import { Twitter, Linkedin, Github, Globe, Mail, Facebook } from "lucide-react";
import { PageHeader } from "../_components/page-header";
import { Footer } from "../_components/footer";
import { teamMembers } from "@/data/teams";

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

        {/* Replace the existing Team Members Grid section with this: */}

        {/* Core Team / Team Leaders */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Core Team / Team Leaders
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {teamMembers
              .filter((member) => member.department === "Core Team")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Event Flow Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Event Flow (EF) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((member) => member.department === "Event Flow")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Information Technology Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Information Technology (IT) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter(
                (member) => member.department === "Information Technology"
              )
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Logistics & Admin Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Logistics & Admin (LA) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((member) => member.department === "Logistics & Admin")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Marketing & Media Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Marketing & Media (MM) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((member) => member.department === "Marketing & Media")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Partnership & Sponsorship Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Partnership & Sponsorship (PS) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter(
                (member) => member.department === "Partnership & Sponsorship"
              )
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* People Experience Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            People Experience (PE) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((member) => member.department === "People Experience")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Speaker & Program Team */}
        <section className="mb-16">
          <h2 className="mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Speaker & Program (SP) Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers
              .filter((member) => member.department === "Speaker & Program")
              .map((member) => (
                <div key={member.id} className="group">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                    <div className="relative z-10">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mb-3 text-sm text-purple-400">
                        {member.role}
                      </p>
                      <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                      <div className="mt-auto flex space-x-3 pt-2">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-gray-400 transition-colors hover:text-purple-400"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

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
