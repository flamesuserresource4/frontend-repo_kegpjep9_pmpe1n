export default function Order() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">Order & Contact</h1>
      <p className="mt-2 text-rose-700/80">
        Ready to create your wooden love card? Reach out directly and we’ll guide you through
        choosing finishes, sending media, and shipping.
      </p>

      {/* Quick Contact Buttons */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a
          href="https://www.instagram.com/loveframe_mk/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white shadow hover:shadow-md transition-all bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
          aria-label="Message us on Instagram"
        >
          <span className="mr-2">💬</span> Message me on Instagram
        </a>
        <a
          href="https://www.facebook.com/people/Loveframe-Mk/pfbid02HrDeR9s8GsUiX7JR59Bj5akoozaZbiHjhCEoziN9WyMe6Ga5vuye9TWoFK5ejhUjl/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white shadow hover:shadow-md transition-all bg-[#1877F2] hover:bg-[#1463cc]"
          aria-label="Message us on Facebook"
        >
          <span className="mr-2">📩</span> Message me on Facebook
        </a>
      </div>

      {/* Next steps info */}
      <div className="mt-10 rounded-lg border border-rose-200 bg-white p-6">
        <h2 className="font-semibold text-rose-800">What happens next?</h2>
        <ul className="mt-3 list-disc pl-6 text-rose-700/90 space-y-1">
          <li>We’ll DM or email you to collect photos, videos, and messages.</li>
          <li>We create a custom edit and private link encoded into your card’s QR.</li>
          <li>We confirm design, engrave your wooden card, and ship it to you.</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://www.instagram.com/loveframe_mk/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            See our latest posts on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  )
}
