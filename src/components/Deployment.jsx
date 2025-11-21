import { Cloud, Server, ShieldCheck } from 'lucide-react'

function Deployment() {
  const options = [
    {
      icon: Server,
      title: 'Self-Hosted',
      desc: 'Install on your own infrastructure with Docker and IaC recipes. Air‑gapped mode available.',
      note: 'Best for enterprises and public sector'
    },
    {
      icon: Cloud,
      title: 'Cloud (SaaS)',
      desc: 'Launch instantly on our Tunisian cloud with managed updates and backups.',
      note: 'Best for speed and simplicity'
    },
    {
      icon: ShieldCheck,
      title: 'Hybrid',
      desc: 'Keep sensitive data on-prem while using our cloud for collaboration features.',
      note: 'Best for regulated industries'
    }
  ]

  return (
    <section id="deployment" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your deployment</h2>
          <p className="mt-3 text-slate-300">Same product, flexible hosting.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {options.map(({ icon: Icon, title, desc, note }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 grid place-items-center mb-4 shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
              <p className="text-slate-400 text-xs mt-3">{note}</p>
              <a href="#contact" className="mt-5 inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium">Request a demo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Deployment
