import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Cambodia Blockchain Summit Logo"
        className="h-10 w-10"
      />
      <div className="leading-tight text-white">
        <p className="text-xs font-medium tracking-widest">CAMBODIA</p>
        <p className="text-xs font-bold tracking-wide">BLOCKCHAIN</p>
        <p className="text-xs font-medium tracking-widest">SUMMIT</p>
      </div>
    </div>
  </Link>
);
