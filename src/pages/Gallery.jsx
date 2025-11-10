const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1692708897550-b74084973cf7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbHVzaCUyME1hcGxlJTIwJUUyJTgwJUEyJTIwSGVhcnQlMjBRUnxlbnwwfDB8fHwxNzYyNzg3MjUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Blush Maple • Heart QR' },
  { id: 2, src: 'https://i.postimg.cc/HnvgNSYC/IMG-7788.jpg', title: 'Natural • Classic QR' },
  { id: 3, src: 'https://images.unsplash.com/photo-1692708897550-b74084973cf7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbHVzaCUyME1hcGxlJTIwJUUyJTgwJUEyJTIwSGVhcnQlMjBRUnxlbnwwfDB8fHwxNzYyNzg3MjUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Warm Walnut • Frame QR' },
  { id: 4, src: 'https://images.unsplash.com/photo-1692708897550-b74084973cf7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbHVzaCUyME1hcGxlJTIwJUUyJTgwJUEyJTIwSGVhcnQlMjBRUnxlbnwwfDB8fHwxNzYyNzg3MjUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Blush Maple • Duo' },
]

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">Gallery</h1>
      <p className="mt-2 text-rose-700/80">A look at our wooden love cards and QR engravings.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((item) => (
          <div key={item.id} className="group rounded-xl border border-rose-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-rose-50/40 flex items-center justify-center overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                loading="lazy"
              />
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
