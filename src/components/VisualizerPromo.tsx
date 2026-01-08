"use client";

import { ShimmerButton } from "@/components/ui/ShimmerButton";

export default function VisualizerPromo() {
  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/interior.jpg"
          alt="Room Visualizer Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          See It In Your Room
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Not sure which floor suits your home? Upload a photo of your room and
          instantly see how our floors look in your space.
        </p>
        <div className="mt-8 flex justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="flex items-center gap-2 text-base font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Try Room Visualizer
            </span>
          </ShimmerButton>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          No app download required. Works on mobile & desktop.
        </p>
      </div>
    </section>
  );
}
