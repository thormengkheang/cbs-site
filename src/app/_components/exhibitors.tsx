import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Exhibitors = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Exhibitors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Explore innovative blockchain solutions from leading companies and
            startups.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Exhibitor ${i}`}
                    width={40}
                    height={40}
                    className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Company Name</h3>
                  <p className="text-sm text-gray-400">Booth #{i}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Showcasing innovative blockchain solutions for enterprise and
                consumer applications.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/exhibitors">
            <Button className="rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              View Floor Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

Exhibitors.displayName = "Exhibitors";
