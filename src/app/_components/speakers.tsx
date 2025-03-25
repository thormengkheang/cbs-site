import { Button } from "@/components/ui/button";
import { speakers } from "@/data/speakers";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";

export const Speakers = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Speakers & Panel Discussions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Learn from industry leaders and engage in thought-provoking
            discussions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-purple-500/30 transition-all duration-300 group-hover:border-purple-500/70">
                  <Image
                    src={item.image}
                    alt={`Speaker ${item.name}`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">{item.name}</h3>
                <p className="mb-2 text-sm text-purple-400">
                  {item.role} {!!item.company && `, ${item.company}`}
                </p>
                <p className="text-sm text-gray-400">
                  Expert in blockchain technology with over 10 years of
                  experience in the industry.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/speakers">
            <Button className="rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              View All Speakers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
