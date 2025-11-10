export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-red-100 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800 leading-tight">
            Small wooden love cards with a modern twist
          </h1>
          <p className="mt-4 text-rose-700/90 text-lg">
            We craft premium wood cards engraved with a QR code that links to a personalized edit you create from your photos, videos, and heartfelt messages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/order" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-600 text-white font-medium shadow hover:bg-rose-700 transition-colors">
              Order yours
            </a>
            <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-rose-300 text-rose-800 bg-white/70 hover:bg-white transition-colors">
              How it works
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-[linear-gradient(135deg,#ffe4e6,#fff)] border border-rose-200 shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-28 w-44 rounded-md bg-[conic-gradient(at_50%_50%,#fecdd3,#fef2f2,#fecdd3)] border border-rose-200 shadow-inner" />
              <p className="text-sm text-rose-700/80">Example wooden card with QR</p>
            </div>
          </div>
        </div>
      </div>

      <div id="how" className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">1. Send your memories</h3>
          <p className="mt-2 text-rose-700/80">Share photos, videos, and messages you want in the edit.</p>
        </div>
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">2. We craft and encode</h3>
          <p className="mt-2 text-rose-700/80">We design your custom video edit and engrave a unique QR on the wooden card.</p>
        </div>
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">3. Scan to relive</h3>
          <p className="mt-2 text-rose-700/80">Scanning the QR opens your private link to the edit—anytime, anywhere.</p>
        </div>
      </div>
    </section>
  )
}
