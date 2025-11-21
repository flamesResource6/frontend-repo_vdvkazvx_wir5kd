function Why() {
  const points = [
    {
      title: 'Built for Tunisia',
      desc: 'Localized modules and Arabic/French support to fit your operations perfectly.'
    },
    {
      title: 'Serious performance',
      desc: 'Snappy interfaces, reliable infrastructure, and real-time updates where it matters.'
    },
    {
      title: 'Own your data',
      desc: 'Choose full self-hosting, hybrid, or our cloud — keep sovereignty over your information.'
    },
  ]

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why VAGA</h2>
          <p className="mt-4 text-slate-300 max-w-prose">A modern platform engineered for Tunisian businesses of every size — from ambitious startups to established enterprises. Flexible, secure, and future-proof.</p>
          <div className="mt-8 grid gap-4">
            {points.map((p) => (
              <div key={p.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-blue-500/30 border border-white/10"></div>
          <div className="absolute -inset-4 -z-0 bg-[radial-gradient(500px_circle_at_70%_20%,rgba(59,130,246,0.25),transparent)] rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Why
