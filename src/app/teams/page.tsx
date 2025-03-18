"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Network,
  ArrowLeft,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Mail,
  Facebook,
} from "lucide-react";

export default function TeamsPage() {
  // Mock data for team members
  const teamMembers = [
    {
      id: 1,
      name: "Sophia Chen",
      role: "Event Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Blockchain enthusiast with over 8 years of experience organizing tech conferences across Asia. Sophia has been instrumental in bringing together industry leaders and innovators to create impactful events.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "sophia@cambodiablockchain.com",
      },
    },
    {
      id: 2,
      name: "David Nguyen",
      role: "Technical Lead",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Blockchain developer and architect specializing in DeFi and smart contract development. David has contributed to several open-source blockchain projects and brings technical expertise to the summit.",
      socialLinks: {
        twitter: "#",
        github: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Mara Sok",
      role: "Marketing Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Digital marketing expert with a passion for emerging technologies and community building. Mara has led successful marketing campaigns for tech events throughout Southeast Asia.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Alex Kim",
      role: "Partnerships Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Connecting businesses and building strategic relationships in the blockchain ecosystem. Alex has a strong network in the industry and has secured partnerships with leading organizations.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "alex@cambodiablockchain.com",
      },
    },
    {
      id: 5,
      name: "Lina Prak",
      role: "Content Curator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Researcher and writer specializing in blockchain technology and cryptocurrency trends. Lina ensures that the summit's content is cutting-edge, relevant, and accessible to attendees.",
      socialLinks: {
        twitter: "#",
        website: "#",
        email: "lina@cambodiablockchain.com",
      },
    },
    {
      id: 6,
      name: "Michael Tan",
      role: "Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Logistics expert ensuring seamless execution of events and exceptional attendee experiences. Michael handles all operational aspects of the summit, from venue management to attendee services.",
      socialLinks: {
        linkedin: "#",
        email: "michael@cambodiablockchain.com",
      },
    },
    {
      id: 7,
      name: "Samnang Chhay",
      role: "Community Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Building and nurturing the blockchain community in Cambodia through education and engagement. Samnang is passionate about making blockchain technology accessible to everyone and fostering local talent.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
        email: "samnang@cambodiablockchain.com",
      },
    },
    {
      id: 8,
      name: "Jennifer Wong",
      role: "Speaker Relations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Coordinating with speakers and ensuring a diverse and engaging program. Jennifer works closely with industry experts to create valuable content for summit attendees.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "jennifer@cambodiablockchain.com",
      },
    },
    {
      id: 9,
      name: "Rithisak Heng",
      role: "Design Lead",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creative designer responsible for the visual identity of the Cambodia Blockchain Summit. Rithisak brings blockchain concepts to life through compelling visual design.",
      socialLinks: {
        website: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 10,
      name: "Mei Lin",
      role: "Finance Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Overseeing the financial aspects of the summit, from budgeting to sponsorship management. Mei ensures the financial sustainability of the event.",
      socialLinks: {
        linkedin: "#",
        email: "mei@cambodiablockchain.com",
      },
    },
    {
      id: 11,
      name: "Virak Khim",
      role: "Local Partnerships",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Fostering relationships with local businesses, government entities, and educational institutions. Virak helps integrate the summit into the local ecosystem.",
      socialLinks: {
        linkedin: "#",
        facebook: "#",
        email: "virak@cambodiablockchain.com",
      },
    },
    {
      id: 12,
      name: "Tara Singh",
      role: "Media Relations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Managing press coverage and media partnerships for the summit. Tara ensures that the event receives appropriate visibility in both traditional and digital media.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "tara@cambodiablockchain.com",
      },
    },
  ];

  const openPositions = [
    {
      title: "Blockchain Developer Advocate",
      type: "Full-time",
      location: "Phnom Penh, Cambodia",
      description:
        "We're looking for a passionate blockchain developer who can create educational content, lead workshops, and engage with the developer community.",
    },
    {
      title: "Event Coordinator",
      type: "Contract (6 months)",
      location: "Phnom Penh, Cambodia",
      description:
        "Join our team to help coordinate various aspects of the Cambodia Blockchain Summit, from logistics to attendee experience.",
    },
    {
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Remote (Southeast Asia)",
      description:
        "Help us promote the Cambodia Blockchain Summit through digital marketing, social media, and community engagement.",
    },
    {
      title: "Volunteer Coordinator",
      type: "Part-time",
      location: "Phnom Penh, Cambodia",
      description:
        "Manage our volunteer program, including recruitment, training, and coordination during the summit.",
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
            Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Meet the dedicated individuals working behind the scenes to make the
            Cambodia Blockchain Summit 2025 a success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
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
                  <p className="mb-3 text-sm text-purple-400">{member.role}</p>
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

        {/* Join Our Team */}
        <section className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-black/30 py-8">
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
