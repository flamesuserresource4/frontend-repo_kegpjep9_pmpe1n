import { useOutletContext } from 'react-router-dom'

export default function Order() {
  const { lang } = useOutletContext()

  const t = {
    en: {
      h1: 'Order & Contact',
      intro: "Ready to create your wooden love card? Reach out directly and we’ll guide you through choosing finishes, sending media, and shipping.",
      igBtn: 'Message me on Instagram',
      fbBtn: 'Message me on Facebook',
      nextTitle: 'What happens next?',
      step1: 'We’ll DM or email you to collect photos, videos, and messages.',
      step2: 'We create a custom edit and private link encoded into your card’s QR.',
      step3: 'We confirm design, engrave your wooden card, and ship it to you.',
      seeIg: 'See our latest posts on Instagram ↗',
    },
    mk: {
      h1: 'Нарачај и Контакт',
      intro: 'Подготвен/а за твојата дрвена љубовна картичка? Контактирај нè директно и ќе те водиме низ изборот на финиши, праќање материјали и испорака.',
      igBtn: 'Пиши ми на Instagram',
      fbBtn: 'Пиши ми на Facebook',
      nextTitle: 'Што следува?',
      step1: 'Ќе ти пишеме на DM или на е-пошта за да ги собереме фотографиите, видеата и пораките.',
      step2: 'Креираме персонализиран едит и приватен линк вграден во QR кодот на картичката.',
      step3: 'Потврдуваме дизајн, ја гравираме дрвената картичка и ја испраќаме.',
      seeIg: 'Види ги најновите објави на Instagram ↗',
    },
  }[lang]

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">{t.h1}</h1>
      <p className="mt-2 text-rose-700/80">
        {t.intro}
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
          <span className="mr-2">💬</span> {t.igBtn}
        </a>
        <a
          href="https://www.facebook.com/people/Loveframe-Mk/pfbid02HrDeR9s8GsUiX7JR59Bj5akoozaZbiHjhCEoziN9WyMe6Ga5vuye9TWoFK5ejhUjl/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white shadow hover:shadow-md transition-all bg-[#1877F2] hover:bg-[#1463cc]"
          aria-label="Message us on Facebook"
        >
          <span className="mr-2">📩</span> {t.fbBtn}
        </a>
      </div>

      {/* Next steps info */}
      <div className="mt-10 rounded-lg border border-rose-200 bg-white p-6">
        <h2 className="font-semibold text-rose-800">{t.nextTitle}</h2>
        <ul className="mt-3 list-disc pl-6 text-rose-700/90 space-y-1">
          <li>{t.step1}</li>
          <li>{t.step2}</li>
          <li>{t.step3}</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://www.instagram.com/loveframe_mk/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            {t.seeIg}
          </a>
        </div>
      </div>
    </section>
  )
}
