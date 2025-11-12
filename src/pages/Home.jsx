import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const { lang } = useOutletContext()

  const t = {
    en: {
      h1: 'Small wooden love cards with a modern twist',
      p1: 'We craft premium wood cards engraved with a QR code that links to a personalized edit you create from your photos, videos, and heartfelt messages.',
      ctaOrder: 'Order yours',
      ctaHow: 'How it works',
      step1Title: '1. Send your memories',
      step1Desc: 'Share photos, videos, and messages you want in the edit.',
      step2Title: '2. We craft and encode',
      step2Desc: 'We design your custom video edit and engrave a unique QR on the wooden card.',
      step3Title: '3. Scan to relive',
      step3Desc: 'Scanning the QR opens your private link to the edit—anytime, anywhere.',
    },
    mk: {
      h1: 'Мали дрвени љубовни картички со модерен шмек',
      p1: 'Изработуваме премиум дрвени картички со гравиран QR код што води до персонализиран едит што го креирате од вашите фотографии, видеа и искрени пораки.',
      ctaOrder: 'Нарачај',
      ctaHow: 'Како функционира',
      step1Title: '1. Испрати ни спомени',
      step1Desc: 'Сподели фотографии, видеа и пораки што ги сакаш во едитот.',
      step2Title: '2. Ние креираме и кодираме',
      step2Desc: 'Го дизајнираме твојот персонализиран видео едит и гравираме уникатен QR на дрвената картичка.',
      step3Title: '3. Скенирај и оживеј',
      step3Desc: 'Скенирањето на QR отвора приватен линк до едитот — секогаш и насекаде.',
    },
  }[lang]

  return (
    <section className="relative overflow-hidden">
      {/* Background blobs behind everything */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-red-100 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          {/* Foreground content box with its own background to sit above blurs */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800 leading-tight">
              {t.h1}
            </h1>
            <p className="mt-4 text-rose-700/90 text-lg">
              {t.p1}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/order" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-600 text-white font-medium shadow hover:bg-rose-700 transition-colors">
                {t.ctaOrder}
              </a>
              <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-rose-300 text-rose-800 bg-white/70 hover:bg-white transition-colors">
                {t.ctaHow}
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-[linear-gradient(135deg,#ffe4e6,#fff)] border border-rose-200 shadow-lg p-2 sm:p-3 md:p-4 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-lg border border-rose-200 shadow-inner">
              {/* Replace Jumpshare with Google Drive preview iframe */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <iframe
                    title="Wooden card with QR code video"
                    src="https://drive.google.com/file/d/1zy4ctvGMl_1k5SdxsoXr_hRas6J7ozNy/preview?autoplay=1&mute=1&loop=1&controls=0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="how" className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">{t.step1Title}</h3>
          <p className="mt-2 text-rose-700/80">{t.step1Desc}</p>
        </div>
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">{t.step2Title}</h3>
          <p className="mt-2 text-rose-700/80">{t.step2Desc}</p>
        </div>
        <div className="rounded-lg border border-rose-200 bg-white p-6">
          <h3 className="font-semibold text-rose-800">{t.step3Title}</h3>
          <p className="mt-2 text-rose-700/80">{t.step3Desc}</p>
        </div>
      </div>
    </section>
  )
}
