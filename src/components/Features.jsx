import { Boxes, Calendar, Building2, Users, Cpu, Cloud, Lock, Server } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'ERP Core',
    desc: 'Inventory, purchasing, accounting and operations — streamlined for Tunisian workflows.'
  },
  {
    icon: Users,
    title: 'CRM & Sales',
    desc: 'Lead and pipeline management, quotes, invoices and smart follow-ups.'
  },
  {
    icon: Calendar,
    title: 'Calendar',
    desc: 'Company-wide schedules, resource planning and integrated events.'
  },
  {
    icon: Cpu,
    title: 'Automation',
    desc: 'Rules, webhooks and bots to automate repetitive tasks safely.'
  },
  {
    icon: Cloud,
    title: 'Cloud or On-Prem',
    desc: 'Deploy on your own servers or use our secure Tunisian cloud.'
  },
  {
    icon: Lock,
    title: 'Security First',
    desc: 'Role-based access, audit trails and encryption by default.'
  },
  {
    icon: Server,
    title: 'Self-Hosting Ready',
    desc: 'Containers and IaC blueprints for quick, reliable installs.'
  },
  {
    icon: Boxes,
    title: 'Modular Suite',
    desc: 'Pick just what you need: ERP, CRM, HR, Calendar, Projects and more.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(217,70,239,0.15),transparent),radial-gradient(800px_circle_at_90%_30%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything your business needs</h2>
          <p className="mt-3 text-slate-300">Built for local realities, global standards.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 grid place-items-center mb-4 shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
