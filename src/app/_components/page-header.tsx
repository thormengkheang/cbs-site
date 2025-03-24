import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export const PageHeader = () => {
  return (
    <header className="border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-purple-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
};
