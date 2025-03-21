import { Button } from "@/components/ui/button";
import { Facebook, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Teams = ({ ref }: { ref?: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative bg-black/20 py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            The dedicated individuals working behind the scenes to make the
            Cambodia Blockchain Summit a success.
          </p>
        </div>

        {/* Team Grid - Core Team Only */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Team Member 1 - Event Director */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
              <div className="relative z-10">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sophia Chen"
                    width={300}
                    height={300}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">Sophia Chen</h3>
                <p className="mb-2 text-sm text-purple-400">Event Director</p>
                <p className="mb-4 text-sm text-gray-400">
                  Blockchain enthusiast with over 8 years of experience
                  organizing tech conferences across Asia.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Technical Lead */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
              <div className="relative z-10">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="David Nguyen"
                    width={300}
                    height={300}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">David Nguyen</h3>
                <p className="mb-2 text-sm text-purple-400">Technical Lead</p>
                <p className="mb-4 text-sm text-gray-400">
                  Blockchain developer and architect specializing in DeFi and
                  smart contract development.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Marketing Director */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
              <div className="relative z-10">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Mara Sok"
                    width={300}
                    height={300}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">Mara Sok</h3>
                <p className="mb-2 text-sm text-purple-400">
                  Marketing Director
                </p>
                <p className="mb-4 text-sm text-gray-400">
                  Digital marketing expert with a passion for emerging
                  technologies and community building.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-purple-400"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/teams">
            <Button className="rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

Teams.displayName = "Teams";
