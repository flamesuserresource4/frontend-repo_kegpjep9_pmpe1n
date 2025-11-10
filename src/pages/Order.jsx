import { useState } from 'react'

export default function Order() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    quantity: 1,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! We will reach out via email to collect your media and finalize your order.')
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-rose-800">Place an Order</h1>
      <p className="mt-2 text-rose-700/80">
        Tell us what you have in mind and we will get back to you with next steps.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div>
          <label className="block text-sm font-medium text-rose-800">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-rose-300 bg-white p-2.5 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-rose-800">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-rose-300 bg-white p-2.5 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="jane@email.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-rose-800">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              value={form.quantity}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-rose-300 bg-white p-2.5 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-800">Preferred Finish</label>
            <select
              name="finish"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-rose-300 bg-white p-2.5 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option>Natural</option>
              <option>Warm Walnut</option>
              <option>Blush Maple</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-rose-800">Notes</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-rose-300 bg-white p-2.5 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Share any ideas, dates, or special requests for the edit."
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-rose-600 text-white font-medium shadow hover:bg-rose-700 transition-colors"
        >
          Submit Request
        </button>
      </form>

      <div className="mt-10 rounded-lg border border-rose-200 bg-white p-6">
        <h2 className="font-semibold text-rose-800">What happens next?</h2>
        <ul className="mt-3 list-disc pl-6 text-rose-700/90 space-y-1">
          <li>We’ll email you to collect photos, videos, and messages.</li>
          <li>We create a custom edit and private link encoded into your card’s QR.</li>
          <li>We confirm design, engrave your wooden card, and ship it to you.</li>
        </ul>
      </div>
    </section>
  )
}
