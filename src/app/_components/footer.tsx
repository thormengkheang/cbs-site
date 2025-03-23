import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import siteConfig from "@/site.config";

const TikTokIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-xl font-bold text-transparent">
              Cambodia Blockchain Summit 2025
            </h3>
            <p className="max-w-md text-gray-400">
              Join us for the premier blockchain event in Southeast Asia,
              bringing together innovators, investors, and industry leaders.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-4">
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
            <div className="text-gray-400">
              <p>Contact: {siteConfig.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cambodia Blockchain Summit. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
