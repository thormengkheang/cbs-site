import { Button } from "@/components/ui/button";
import { sponsors } from "@/data/sponsors";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Sponsors = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative bg-black/20 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Our Sponsors & Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Leading organizations supporting blockchain innovation and making
            the Cambodia Blockchain Summit 2025 possible.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {sponsors.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="max-h-[80%] max-w-[80%] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <p className="text-center text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/sponsors">
            <Button className="rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700">
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
