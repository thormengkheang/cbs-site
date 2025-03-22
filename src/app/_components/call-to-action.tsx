"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CallToAction = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2025-03-30 08:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            {"Don't Miss This Opportunity"}
          </h2>

          {/* Countdown Timer */}
          <div className="mx-auto grid max-w-md grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">{days}</div>
              <div className="text-xs text-gray-400">Days</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">{hours}</div>
              <div className="text-xs text-gray-400">Hours</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">{minutes}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">{seconds}</div>
              <div className="text-xs text-gray-400">Seconds</div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
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

          <Link
            href="https://www.bookme.plus/t/events/cbs2025"
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg font-medium text-white shadow-[0_0_15px_rgba(120,80,255,0.5)] transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_25px_rgba(120,80,255,0.7)]"
            )}
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};
