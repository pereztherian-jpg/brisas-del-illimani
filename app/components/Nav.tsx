"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { href: "#quienes-somos", label: "Quienes somos" },
  { href: "#servicios", label: "Nuestros Servicios" },
  { href: "#capilla", label: "Capilla" },
  { href: "#contacto", label: "Contáctanos" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <a href="#inicio" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-white.png"
            alt="Brisas del Illimani — Parque Cementerio"
            width={200}
            height={70}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide uppercase">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-neutral-300 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.link/9xjvrq"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 border-b border-white text-sm tracking-wide uppercase pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
        >
          Contáctate con nosotros ↗
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-11 w-11 items-center justify-center -mr-2 text-white"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-200 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-200 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-brand-purple/98 backdrop-blur transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8 text-lg">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.link/9xjvrq"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-cream px-6 py-3 text-sm font-medium tracking-wide uppercase text-brand-purple"
          >
            Contáctate con nosotros ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
