import { Button } from "@/components/ui/button";
import { exhibitors, mediaPartners } from "@/data/exhibitors";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Exhibitors = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Partners & Exhibitors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Connect with leading organizations and innovative companies in the
            blockchain space.
          </p>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-purple-300">
            Media Partners
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {mediaPartners.map((item) => (
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
        </div>

        {/* Exhibitors */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-purple-300">
            Exhibitors
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {exhibitors.map((item) => (
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
        </div>

        <div className="mt-12 text-center">
          <Link href="/exhibitors">
            <Button className="mr-4 rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              View Floor Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

Exhibitors.displayName = "Exhibitors";
