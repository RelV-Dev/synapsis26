"use client"

import Image from "next/image"
import { InfoCard } from "@/components/pop-art/PopArtCard"
import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardGridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const teamList = [
  "Ellison",
  "Bezos",
  "Benioff",
  "Jensen",
  "Jobs",
  "Page",
  "Gates",
  "Torvalds",
  "Zuckerberg",
  "Michael",
]

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/component3.png"
            alt="Background Halftone"
            fill
            className="object-cover object-center scale-110"
            priority
          />
          <div className="absolute inset-0 bg-[#003d7a]/55" />
          <div className="absolute inset-0 bg-halftone-hero opacity-[0.09] mix-blend-overlay" />
          {/* Bottom gradient for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#003d7a]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-6 flex md:flex-row flex-col items-center justify-between gap-8 md:gap-12">
          {/* Left Text Block */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full text-center md:text-left justify-center content-center"
          >


            <motion.h1
              variants={fadeInUp}
              className="text-white font-bold text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl leading-[1] md:leading-[0.95] tracking-tight"
            >
              Sistem<br />Informasi<br />
              <span className="text-[#d4a843]">UNAIR &apos;26</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 md:mt-5 text-white/80 nd:text-xs text-light max-w-md mx-auto md:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, officia inventore cumque delectus iste nulla odit assumenda repellendus tempore nostrum vel ducimus, voluptatum minus similique, harum eaque soluta? Nam, sequi!
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-5 md:mt-7 text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-pacifico max-w-md mx-auto md:mx-0"
            >
              Connected by{" "}
              <span className="relative inline-block px-2.5 py-0.5 mx-0.5 -rotate-1 align-middle">
                <motion.span
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="absolute inset-0 bg-[#d4a843] rounded-xs origin-left shadow-sm -z-10"
                />
                <motion.span
                  variants={{
                    hidden: { color: "#ffffff" },
                    visible: {
                      color: "#003d7a",
                      transition: { duration: 0.25, delay: 0.85 },
                    },
                  }}
                  className="relative z-10 font-normal"
                >
                  Information
                </motion.span>
              </span>
              , Limitless in{" "}
              <span className="relative inline-block px-2.5 py-0.5 mx-0.5 rotate-1 align-middle">
                <motion.span
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="absolute inset-0 bg-[#d4a843] rounded-xs origin-left shadow-sm -z-10"
                />
                <motion.span
                  variants={{
                    hidden: { color: "#ffffff" },
                    visible: {
                      color: "#003d7a",
                      transition: { duration: 0.25, delay: 1.2 },
                    },
                  }}
                  className="relative z-10 font-normal"
                >
                  Innovation
                </motion.span>
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Right Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm md:max-w-md flex justify-center md:justify-end"
          >
            <img
              src="/component3.png"
              alt="Visual Graphic"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-white/50"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <span className="w-1 h-4 rounded-full bg-white/40 block" />
        </motion.div>
      </section>

      {/* ─── Spacer ─── */}
      <div className="h-24 md:h-40" />

      {/* ─── Infographics Section ─── */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4 mb-14"
        >
          <span className="text-sm font-mono text-[#003d7a]/60 tracking-widest uppercase font-semibold">
            Infografis
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 h-px bg-[#003d7a]/15 origin-left"
          />
        </motion.div>

        {/* Asymmetric Animated Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardGridContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {/* Row 1: 1 large + 1 medium */}
          <div className="md:col-span-7">
            <InfoCard
              variants={fadeInUp}
              number="01"
              title="Apa yang Dipelajari di Sistem Informasi"
              description="Perpaduan antara manajemen bisnis, analisis data, dan pengembangan sistem — bukan hanya coding."
              size="large"
              className="h-full"
            />
          </div>
          <div className="md:col-span-5">
            <InfoCard
              variants={fadeInUp}
              number="02"
              title="Prospek Kerja Lulusan SI"
              description="Business analyst, data engineer, product manager, IT consultant — peran strategis yang terus bertumbuh pesat."
              size="large"
              className="h-full"
            />
          </div>

          {/* Row 2: 3 cards */}
          <div className="md:col-span-4">
            <InfoCard
              variants={fadeInUp}
              number="03"
              title="Bahasa Pemrograman yang Banyak Diminati"
              description="Python, TypeScript, SQL, dan Go untuk fondasi analitik & rekayasa perangkat lunak modern."
              className="h-full"
            />
          </div>
          <div className="md:col-span-4">
            <InfoCard
              variants={fadeInUp}
              number="04"
              title="Tools AI untuk Mahasiswa"
              description="Pemanfaatan generative AI dan tools otomasi untuk produktivitas riset & pengembangan solusi."
              className="h-full"
            />
          </div>
          <div className="md:col-span-4">
            <InfoCard
              variants={fadeInUp}
              number="05"
              title="Kurikulum Kemdikbud & MBKM"
              description="Studi independen, magang bersertifikat, dan rekognisi proyek industri terintegrasi."
              className="h-full"
            />
          </div>

          {/* Row 3: 2 cards, offset */}
          <div className="md:col-span-6">
            <InfoCard
              variants={fadeInUp}
              number="06"
              title="Softskill Selama Perkuliahan"
              description="Kemampuan komunikasi, berpikir kritis, negosiasi, dan kolaborasi multidisiplin."
              className="h-full"
            />
          </div>
          <div className="md:col-span-6">
            <InfoCard
              variants={fadeInUp}
              number="07"
              title="Kegiatan Ekstra Kampus"
              description="Dari kompetisi hackathon, inkubator startup, hingga kepengurusan himpunan & pengabdian masyarakat."
              className="h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── Spacer ─── */}
      <div className="h-32 md:h-48" />

      {/* ─── Team / Kelompok ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline gap-4 mb-12"
        >
          <span className="text-sm font-mono text-[#003d7a]/60 tracking-widest uppercase font-semibold">
            Kelompok
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 h-px bg-[#003d7a]/15 origin-left"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardGridContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8"
        >
          {teamList.map((name, i) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#003d7a]/[0.07] rounded-sm mb-3 overflow-hidden relative border border-[#003d7a]/10 transition-all duration-300 group-hover:border-[#003d7a]/30 group-hover:shadow-[0_8px_20px_rgba(0,61,122,0.12)]">
                <div className="absolute inset-0 bg-halftone-hero opacity-[0.06] mix-blend-overlay" />
                <div className="absolute top-2 left-2 text-[10px] font-mono text-[#003d7a]/40 group-hover:text-[#003d7a] transition-colors">
                  0{i + 1}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-[#003d7a]/20 group-hover:text-[#003d7a]/40 transition-colors text-2xl font-mono">
                  {name[0]}
                </div>
              </div>
              <p className="text-sm font-medium text-[#1a1a1a]/80 group-hover:text-[#003d7a] transition-colors flex items-center justify-between">
                <span>{name}</span>
                <span className="text-xs text-[#003d7a] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#003d7a]/15 py-12 px-6 bg-[#fff6dd]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-4"
        >
          <p className="text-sm text-[#1a1a1a]/50">
            Synapsis 26 — Sistem Informasi, Universitas Airlangga
          </p>

          <p className="font-pacifico text-base md:text-lg text-[#003d7a]/50">
            Connected by Information, Limitless in Innovation.
          </p>
        </motion.div>
      </footer>
    </main>
  )
}
