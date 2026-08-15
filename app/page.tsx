import { PopArtCard } from "@/components/pop-art/PopArtCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Background Halftone overall - made very subtle */}
      <div className="absolute inset-0 bg-halftone opacity-[0.03] pointer-events-none" />

      {/* Clean Hero/Header Section with Blue Halftone Accent */}
      <section className="relative w-full py-28 px-4 sm:px-8 flex flex-col items-center justify-center text-center z-10 bg-halftone-blue border-b-8 border-sky-900 overflow-hidden">
        {/* Subtle overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-sky-900/30"></div>
        
        <div className="relative max-w-3xl mx-auto space-y-6 z-10">
          <div className="inline-block px-4 py-1.5 mb-2 bg-yellow-400 text-sky-900 font-bold font-space tracking-widest uppercase text-sm border-2 border-sky-900 shadow-[4px_4px_0px_0px_rgba(12,74,110,1)]">
            Explore Your Future
          </div>
          <h1 className="font-space text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow-pop">
            Sistem Informasi <span className="text-yellow-400">UNAIR</span>
          </h1>
          <p className="text-lg md:text-2xl text-sky-50 font-medium max-w-2xl mx-auto text-shadow-outline">
            Membangun generasi technopreneur masa depan melalui perpaduan keilmuan bisnis dan teknologi informasi.
          </p>
        </div>
      </section>

      {/* Info Graphics Header Section - Toned Down */}
      <section className="relative w-full py-12 flex items-center justify-center z-10">
        <div className="relative z-10 text-center">
          <h2 className="font-pacifico text-4xl md:text-5xl text-gray-900">
            info graphics
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Cards Grid Section - Kept the pop-art cards but removed thick page borders */}
      <section className="relative w-full pb-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <PopArtCard 
            title="Kegiatan Ekstra Kampus yang bisa dilakukan" 
            name="michael" 
            colorClass="bg-cyan-500" 
          />
          <PopArtCard 
            title="Bahasa Pemrograman yang banyak diminati" 
            name="benioff" 
            colorClass="bg-indigo-500" 
          />
          <PopArtCard 
            title="Pemrograman Perkuliahan oleh Kemdikbud" 
            name="torvalds" 
            colorClass="bg-blue-600" 
          />
          <PopArtCard 
            title="Tools AI yang berguna bagi Mahasiswa" 
            name="bezos" 
            colorClass="bg-purple-500" 
          />
          <PopArtCard 
            title="Softskill yang diperlukan" 
            name="zuckerberg" 
            colorClass="bg-violet-600" 
          />
          <PopArtCard 
            title="Time Management untuk Mahasiswa" 
            name="jensen" 
            colorClass="bg-indigo-600" 
          />
          <PopArtCard 
            title="Apa yang dipelajari di Sistem Informasi" 
            name="ellison" 
            colorClass="bg-fuchsia-700" 
          />
          <PopArtCard 
            title="Prospek Kerja Sistem Informasi" 
            name="gates" 
            colorClass="bg-purple-700" 
          />
          <PopArtCard 
            title="Lebih Mengenal Sistem Informasi" 
            name="jobs" 
            colorClass="bg-violet-800" 
          />
        </div>
      </section>

      {/* Footer Collage Section - Toned Down */}
      <section className="relative w-full border-t border-gray-200 z-10 bg-white">
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-0 border-b border-gray-200">
           {[
             { name: "ellison", bg: "bg-blue-100/50" },
             { name: "bezos", bg: "bg-green-100/50" },
             { name: "benioff", bg: "bg-red-100/50" },
             { name: "jensen", bg: "bg-orange-100/50" },
             { name: "jobs", bg: "bg-indigo-100/50" },
           ].map((person, i) => (
             <div key={i} className={`relative aspect-square border-r border-gray-200 ${person.bg} p-4 flex items-end overflow-hidden group`}>
                <div className="absolute inset-0 bg-halftone opacity-[0.03] mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="relative font-space font-medium text-lg text-gray-900 z-10 group-hover:text-blue-600 transition-colors">
                  {person.name}
                </h3>
             </div>
           ))}
        </div>
        
        {/* Footer Text */}
        <div className="w-full py-12 px-4 bg-white text-center relative">
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-2">
            <h2 className="font-space font-bold text-2xl md:text-3xl text-gray-900">
              Connected by Information,
            </h2>
            <h2 className="font-space font-bold text-2xl md:text-3xl text-blue-600">
              Limitless in Innovation
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
