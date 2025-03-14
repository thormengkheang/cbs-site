"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  MessageSquare,
  Network,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function BlockchainSummit() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const agendaRef = useRef(null);
  const speakersRef = useRef(null);
  const sponsorsRef = useRef(null);
  const exhibitorsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const target = new Date("2025-06-15 09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <Network className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                CBS 2025
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(agendaRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                Agenda
              </button>
              <button
                onClick={() => scrollToSection(speakersRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection(sponsorsRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                Sponsors
              </button>
              <button
                onClick={() => scrollToSection(exhibitorsRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                Exhibitors
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-purple-300 transition-colors"
              >
                Contact
              </button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full px-4 text-sm font-medium transition-all duration-300"
              >
                Register
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(agendaRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                Agenda
              </button>
              <button
                onClick={() => scrollToSection(speakersRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection(sponsorsRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                Sponsors
              </button>
              <button
                onClick={() => scrollToSection(exhibitorsRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                Exhibitors
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 py-2 transition-colors"
              >
                Contact
              </button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full px-4 text-sm font-medium transition-all duration-300 w-full"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_70%)]"></div>
          <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full opacity-20">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="relative"
                style={{
                  gridColumn: `${Math.floor(Math.random() * 20) + 1} / span 1`,
                  gridRow: `${Math.floor(Math.random() * 20) + 1} / span 1`,
                }}
              >
                <div
                  className="absolute h-px w-px rounded-full bg-purple-400 shadow-[0_0_15px_5px_rgba(120,80,255,0.5)]"
                  style={{
                    animation: `pulse ${Math.random() * 5 + 3}s infinite alternate ${Math.random() * 2}s`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-blue-300">
                Cambodia Blockchain Summit 2025
              </h1>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-xl/relaxed">
                Your gateway to cutting-edge discussions, networking, and
                opportunities in blockchain.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-[0_0_15px_rgba(120,80,255,0.5)] hover:shadow-[0_0_25px_rgba(120,80,255,0.7)]"
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Animated arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90 text-purple-400" />
        </div>
      </section>

      {/* About the Summit */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                About the Summit
              </h2>
              <p className="text-gray-300 md:text-xl/relaxed">
                Cambodia Blockchain Summit is THE EVENT to explore the present
                and future of blockchain, connect with industry leaders,
                entrepreneurs, and tech startups, and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">June 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <Network className="h-32 w-32 md:h-40 md:w-40 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section ref={agendaRef} className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Event Agenda
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Three days of inspiring talks, workshops, and networking
              opportunities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-purple-900/50 px-3 py-1 rounded-full text-sm font-medium text-purple-300">
                  Day 1 - June 15
                </div>
                <h3 className="text-xl font-bold">Opening & Keynotes</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">09:00 AM</div>
                  <div>
                    <p className="font-medium">Registration & Welcome Coffee</p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">10:00 AM</div>
                  <div>
                    <p className="font-medium">Opening Ceremony</p>
                    <p className="text-sm text-gray-400">
                      Welcome address by event organizers
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">11:00 AM</div>
                  <div>
                    <p className="font-medium">
                      Keynote: The Future of Blockchain in Southeast Asia
                    </p>
                    <p className="text-sm text-gray-400">By Industry Leader</p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">02:00 PM</div>
                  <div>
                    <p className="font-medium">
                      Panel Discussion: Blockchain Adoption Challenges
                    </p>
                    <p className="text-sm text-gray-400">
                      Industry experts discuss real-world implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-purple-900/50 px-3 py-1 rounded-full text-sm font-medium text-purple-300">
                  Day 2 - June 16
                </div>
                <h3 className="text-xl font-bold">Workshops & Networking</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">09:30 AM</div>
                  <div>
                    <p className="font-medium">
                      Technical Workshops (Multiple Tracks)
                    </p>
                    <p className="text-sm text-gray-400">
                      Hands-on sessions for developers and business leaders
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">01:00 PM</div>
                  <div>
                    <p className="font-medium">Networking Lunch</p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">03:00 PM</div>
                  <div>
                    <p className="font-medium">Startup Showcase</p>
                    <p className="text-sm text-gray-400">
                      Emerging blockchain startups pitch their innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-purple-900/50 px-3 py-1 rounded-full text-sm font-medium text-purple-300">
                  Day 3 - June 17
                </div>
                <h3 className="text-xl font-bold">Future Trends & Closing</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">10:00 AM</div>
                  <div>
                    <p className="font-medium">
                      Panel: Future of DeFi in Cambodia
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">01:30 PM</div>
                  <div>
                    <p className="font-medium">Roundtable Discussions</p>
                    <p className="text-sm text-gray-400">
                      Topic-based small group discussions
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4">
                  <div className="text-purple-400">04:00 PM</div>
                  <div>
                    <p className="font-medium">
                      Closing Ceremony & Networking Reception
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 relative bg-black/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Key Highlights
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)] group">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Industry Leaders & Speakers
              </h3>
              <p className="text-gray-400 text-center">
                Connect with visionaries, thought leaders, and experts from
                around the globe who are shaping the future of blockchain
                technology.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)] group">
              <div className="mb-4 flex justify-center">
                <MessageSquare className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Innovative Discussions & Panels
              </h3>
              <p className="text-gray-400 text-center">
                Engage in cutting-edge conversations about blockchain
                applications, regulatory frameworks, and emerging trends in the
                industry.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)] group">
              <div className="mb-4 flex justify-center">
                <Network className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Networking & Business Opportunities
              </h3>
              <p className="text-gray-400 text-center">
                Forge valuable connections, explore partnerships, and discover
                investment opportunities in Cambodia's growing blockchain
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section ref={speakersRef} className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Speakers & Panel Discussions
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Learn from industry leaders and engage in thought-provoking
              discussions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)] group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30 group-hover:border-purple-500/70 transition-all duration-300">
                    <Image
                      src={`/placeholder.svg?height=96&width=96`}
                      alt={`Speaker ${i}`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Speaker Name</h3>
                  <p className="text-purple-400 text-sm mb-2">
                    Position, Company
                  </p>
                  <p className="text-gray-400 text-sm">
                    Expert in blockchain technology with over 10 years of
                    experience in the industry.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-white/10 hover:bg-white/20 text-white border-0 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Don't Miss This Opportunity
            </h2>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white">{days}</div>
                <div className="text-xs text-gray-400">Days</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white">{hours}</div>
                <div className="text-xs text-gray-400">Hours</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white">{minutes}</div>
                <div className="text-xs text-gray-400">Minutes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-white">{seconds}</div>
                <div className="text-xs text-gray-400">Seconds</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">June 15-17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Phnom Penh, Cambodia</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-[0_0_15px_rgba(120,80,255,0.5)] hover:shadow-[0_0_25px_rgba(120,80,255,0.7)]"
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section ref={sponsorsRef} className="py-12 relative bg-black/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Our Sponsors
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/5 p-4 rounded-lg w-32 h-16 flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`Sponsor ${i}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section ref={exhibitorsRef} className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Exhibitors
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Explore innovative blockchain solutions from leading companies and
              startups.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`Exhibitor ${i}`}
                      width={40}
                      height={40}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
            <Button className="bg-white/10 hover:bg-white/20 text-white border-0 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300">
              View Floor Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 relative bg-black/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Contact Us
              </h2>
              <p className="mt-4 text-gray-300">
                Have questions about the Cambodia Blockchain Summit? We're here
                to help.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-400">
                        Phnom Penh Convention Center, Cambodia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Event Dates</p>
                      <p className="text-sm text-gray-400">June 15-17, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-400">
                        info@cambodiablockchain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Cambodia Blockchain Summit 2025
              </h3>
              <p className="text-gray-400 max-w-md">
                Join us for the premier blockchain event in Southeast Asia,
                bringing together innovators, investors, and industry leaders.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
              <div className="text-gray-400">
                <p>Contact: info@cambodiablockchain.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Cambodia Blockchain Summit. All rights
            reserved.
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
