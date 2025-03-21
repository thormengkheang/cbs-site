"use client";

import { Button } from "@/components/ui/button";
import { Menu, Network, X } from "lucide-react";
import Link from "next/link";
import { RefObject, useEffect, useState } from "react";

interface SectionRefs {
  about: RefObject<HTMLElement | null>;
  agenda: RefObject<HTMLElement | null>;
  speakers: RefObject<HTMLElement | null>;
  sponsors: RefObject<HTMLElement | null>;
  exhibitors: RefObject<HTMLElement | null>;
  teams: RefObject<HTMLElement | null>;
  contact: RefObject<HTMLElement | null>;
}

interface HeaderProps {
  sectionRefs: SectionRefs;
}

export const LandingPageHeader = (props: HeaderProps) => {
  const { sectionRefs } = props;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/70 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Network className="h-6 w-6 text-purple-400" />
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-lg font-bold text-transparent md:text-xl">
              CBS 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection(sectionRefs.about)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.agenda)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Agenda
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.speakers)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.sponsors)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Sponsors
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.exhibitors)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Exhibitors
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.teams)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Teams
            </button>
            <Link
              href="/certificate"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Certificate
            </Link>
            {/* <button
              onClick={() => scrollToSection(sectionRefs.contact)}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </button> */}
            <Button
              size="sm"
              className="rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-sm font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              Register
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
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
        <div className="bg-gray-900/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <button
              onClick={() => scrollToSection(sectionRefs.about)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.agenda)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Agenda
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.speakers)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.sponsors)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Sponsors
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.exhibitors)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Exhibitors
            </button>
            <button
              onClick={() => scrollToSection(sectionRefs.teams)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Teams
            </button>
            <Link
              href="/certificate"
              className="py-2 text-center text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Certificate
            </Link>
            {/* <button
              onClick={() => scrollToSection(sectionRefs.contact)}
              className="py-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
            >
              Contact
            </button> */}
            <Button
              size="sm"
              className="w-full rounded-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-sm font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
