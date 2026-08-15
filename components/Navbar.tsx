import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-black/10 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-space font-bold text-lg">
              SI
            </div>
            <span className="font-space font-bold text-xl tracking-tight">Synapsis 26</span>

          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Infografis
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Tentang Kami
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex border-2 border-black/20 font-space font-medium hover:bg-gray-100">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </nav>
  );
}
