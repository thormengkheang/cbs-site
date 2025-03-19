import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Sponsors = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative bg-black/20 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold tracking-tighter text-transparent md:text-3xl">
            Our Sponsors & Partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
            Leading organizations supporting blockchain innovation in Cambodia
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-10">
          <h3 className="mb-4 text-center text-sm font-medium text-purple-400">
            Platinum Sponsors
          </h3>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-2 md:gap-8">
            {[1, 2].map((i) => (
              <div
                key={`platinum-${i}`}
                className="flex h-20 w-full items-center justify-center rounded-lg bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 md:h-24 md:p-6"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=160`}
                  alt={`Platinum Sponsor ${i}`}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-10">
          <h3 className="mb-4 text-center text-sm font-medium text-purple-400">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={`gold-${i}`}
                className="flex h-16 w-full items-center justify-center rounded-lg bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 md:h-20 md:p-4"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Gold Sponsor ${i}`}
                  width={120}
                  height={60}
                  className="max-h-full max-w-full opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="mb-4 text-center text-sm font-medium text-purple-400">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={`silver-${i}`}
                className="flex h-12 w-full items-center justify-center rounded-lg bg-white/5 p-2 transition-all duration-300 hover:bg-white/10 md:h-16 md:p-3"
              >
                <Image
                  src={`/placeholder.svg?height=40&width=80`}
                  alt={`Silver Sponsor ${i}`}
                  width={80}
                  height={40}
                  className="max-h-full max-w-full opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/sponsors">
            <Button className="rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
