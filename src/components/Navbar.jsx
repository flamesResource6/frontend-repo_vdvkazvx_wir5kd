import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Why VAGA', href: '#why' },
    { label: 'Deployment', href: '#deployment' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 grid place-items-center shadow-lg shadow-fuchsia-500/30">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">VAGA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-200/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-slate-200/80 hover:text-white transition-colors">Talk to us</a>
            <a
              href="#deployment"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95"
            >
              Get VAGA
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#deployment"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium"
            >
              Get VAGA
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
