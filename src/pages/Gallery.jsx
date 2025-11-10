const sample = [
  { id: 1, title: 'Blush Maple • Heart QR', color: 'from-rose-100 to-rose-50' },
  { id: 2, title: 'Natural • Classic QR', color: 'from-neutral-100 to-white' },
  { id: 3, title: 'Warm Walnut • Frame QR', color: 'from-amber-100 to-orange-50' },
  { id: 4, title: 'Blush Maple • Duo', color: 'from-rose-100 to-white' },
  { id: 5, title: 'Natural • Minimal', color: 'from-neutral-100 to-white' },
  { id: 6, title: 'Warm Walnut • Love Script', color: 'from-amber-100 to-rose-50' },
]

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">Gallery</h1>
      <p className="mt-2 text-rose-700/80">A look at our wooden love cards and QR engravings.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((item) => (
          <div key={item.id} className="group rounded-xl border border-rose-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <div className="h-24 w-36 rounded-md border-2 border-rose-300 bg-[conic-gradient(at_50%_50%,#fecdd3,#fef2f2,#fecdd3)] shadow-inner" />
            </div>
            <div className="p-4">
              <p className="font-medium text-rose-800">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
