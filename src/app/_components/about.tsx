import { Calendar, MapPin } from "lucide-react";
import { Ref } from "react";
import Image from "next/image";

export const About = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-center md:gap-12">
          <div className="max-w-[700px] space-y-4 text-center md:text-left">
            <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
              About the Summit
            </h2>
            <p className="text-gray-300 md:text-xl/relaxed">
              Cambodia Blockchain Summit is THE EVENT to explore the present and
              future of blockchain, connect with industry leaders,
              entrepreneurs, and tech startups, and unlock new opportunities.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 md:flex-row md:items-start">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">March 30, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">
                  National University of Management
                </span>
              </div>
            </div>
          </div>
          <div className="relative mb-12 h-64 w-64 md:mb-0 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl"></div>
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src="/logo.png"
                width={128}
                height={128}
                alt="Cambodia Blockchain Summit logo"
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
