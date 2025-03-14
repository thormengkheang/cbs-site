import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

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
                href="#"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-purple-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-purple-400"
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
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cambodia Blockchain Summit. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
