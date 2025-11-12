import { useOutletContext } from 'react-router-dom'

const photos = [
  { id: 1, src: 'https://i.postimg.cc/gjtW7Mz2/IMG-7787.jpg', title: 'Blush Maple • Heart QR' },
  { id: 2, src: 'https://i.postimg.cc/HnvgNSYC/IMG-7788.jpg', title: 'Natural • Classic QR' },
  { id: 3, src: 'https://i.postimg.cc/W1nxNymm/IMG-7780.jpg', title: 'Warm Walnut • Frame QR' },
  { id: 4, src: 'https://i.postimg.cc/y8P21GhF/IMG-7781.jpg', title: 'Blush Maple • Duo' },
]

export default function Gallery() {
  const { lang } = useOutletContext()

  const t = {
    en: {
      title: 'Gallery',
      subtitle: 'A look at our wooden love cards and QR engravings.',
    },
    mk: {
      title: 'Галерија',
      subtitle: 'Поглед на нашите дрвени љубовни картички и QR гравури.',
    },
  }[lang]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">{t.title}</h1>
      <p className="mt-2 text-rose-700/80">{t.subtitle}</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((item) => {
          const isDuo = item.id === 4 // keep the two-piece photo as-is
          return (
            <div
              key={item.id}
              className="group rounded-xl border border-rose-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] bg-rose-50/40 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className={[
                    'max-h-full max-w-full transition-transform duration-200',
                    'group-hover:scale-[1.02]',
                    isDuo ? 'h-full w-full object-cover object-center' : 'h-full w-full object-contain object-center',
                  ].join(' ')}
                  loading="lazy"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
