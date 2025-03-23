import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="container z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="animate-fade-in space-y-2">
            <h1 className="bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl">
              Cambodia Blockchain Summit 2025
            </h1>
            <p className="text-gray-300 md:text-xl/relaxed lg:text-xl/relaxed">
              Your gateway to cutting-edge discussions, networking, and
              opportunities in blockchain.
            </p>
          </div>
          <Link 
            href="https://www.bookme.plus/t/events/cbs2025"
            className="rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg font-medium text-white shadow-[0_0_15px_rgba(120,80,255,0.5)] transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_25px_rgba(120,80,255,0.7)]"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Animated arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronRight className="h-8 w-8 rotate-90 text-purple-400" />
      </div>
    </section>
  );
};
