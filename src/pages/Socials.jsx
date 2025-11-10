export default function Socials() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">Follow Us</h1>
      <p className="mt-2 text-rose-700/80">Stay connected for new designs, behind-the-scenes, and customer stories.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        <a
          className="group rounded-lg border border-rose-200 bg-white p-6 hover:border-rose-300 transition-colors"
          href="https://www.instagram.com/loveframe_mk/" target="_blank" rel="noreferrer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-rose-800">Instagram</h3>
              <p className="text-rose-700/80 text-sm">Our latest drops and reels</p>
            </div>
            <span className="text-rose-600 group-hover:translate-x-1 transition-transform">↗</span>
          </div>
        </a>
        <a
          className="group rounded-lg border border-rose-200 bg-white p-6 hover:border-rose-300 transition-colors"
          href="https://www.facebook.com/people/Loveframe-Mk/pfbid02HrDeR9s8GsUiX7JR59Bj5akoozaZbiHjhCEoziN9WyMe6Ga5vuye9TWoFK5ejhUjl/" target="_blank" rel="noreferrer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-rose-800">Facebook</h3>
              <p className="text-rose-700/80 text-sm">Updates, photos, and customer reviews</p>
            </div>
            <span className="text-rose-600 group-hover:translate-x-1 transition-transform">↗</span>
          </div>
        </a>
      </div>

      <div className="mt-8 rounded-lg border border-rose-200 bg-white p-6">
        <h2 className="font-semibold text-rose-800">Contact</h2>
        <p className="text-rose-700/80">Email: hello@loveframemk.com</p>
      </div>
    </section>
  )
}
