"use client";

import { useRef } from "react";
import { Footer } from "./_components/footer";
import { LandingPageHeader } from "./_components/landing-page-header";
import { Teams } from "./_components/teams";
import { Contact } from "./_components/contact";
import { Exhibitors } from "./_components/exhibitors";
import { Sponsors } from "./_components/sponsors";
import { Speakers } from "./_components/speakers";
import { CallToAction } from "./_components/call-to-action";
import { HeroSection } from "./_components/hero-section";
import { About } from "./_components/about";
import { Agenda } from "./_components/agenda";
import { KeyHighlights } from "./_components/key-highlights";

export default function HomePage() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const agendaRef = useRef<HTMLElement | null>(null);
  const speakersRef = useRef<HTMLElement | null>(null);
  const sponsorsRef = useRef<HTMLElement | null>(null);
  const exhibitorsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const teamsRef = useRef<HTMLElement | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <LandingPageHeader
        sectionRefs={{
          about: aboutRef,
          agenda: agendaRef,
          speakers: speakersRef,
          sponsors: sponsorsRef,
          exhibitors: exhibitorsRef,
          teams: teamsRef,
          contact: contactRef,
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About the Summit */}
      <About ref={aboutRef} />

      {/* Agenda Section */}
      <Agenda ref={agendaRef} />

      {/* Key Highlights */}
      <KeyHighlights />

      {/* Speakers Section */}
      <Speakers ref={speakersRef} />

      {/* Call-to-Action */}
      <CallToAction />

      {/* Sponsors */}
      <Sponsors ref={sponsorsRef} />

      {/* Exhibitors Section */}
      <Exhibitors ref={exhibitorsRef} />

      {/* Team Section */}
      <Teams ref={teamsRef} />

      {/* Contact Section */}
      <Contact ref={contactRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
