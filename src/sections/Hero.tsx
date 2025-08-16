"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.webp"
          alt="Phoenix K-POP Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* Content */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
        Phoenix — Le nouvel univers K-POP
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
        Découvrez le premier single, plongez dans leur univers et vibrez au
        rythme de Phoenix.
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-pink-600 hover:bg-pink-500">
          Écouter le single
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black"
        >
          Voir le merch
        </Button>
      </div>
    </section>
  );
}
