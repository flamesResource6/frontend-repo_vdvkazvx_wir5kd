import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/20 mb-6">
          <span className="text-xs tracking-wide uppercase">Tunisian-made</span>
          <span className="text-xs opacity-70">Web3-grade Business Suite</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          VAGA — The modern toolkit for Tunisian businesses
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
          ERP, CRM, Calendar and more — unified in one sleek platform. Run it on your own infrastructure or launch instantly on the cloud.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#deployment" className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">
            Get Started
          </a>
          <a href="#features" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/20">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
