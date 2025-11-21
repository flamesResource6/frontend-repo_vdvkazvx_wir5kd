function Footer() {
  return (
    <footer id="contact" className="py-14 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-white font-semibold">VAGA</h3>
            <p className="text-slate-400 text-sm mt-2">A Tunisian suite of tools empowering local businesses with global-grade software.</p>
          </div>
          <div className="md:col-span-2 md:justify-self-end">
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Work email" className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold">Request info</button>
            </form>
            <p className="text-slate-500 text-xs mt-3">By submitting, you agree to be contacted about VAGA. No spam.</p>
          </div>
        </div>
        <div className="mt-10 text-slate-500 text-xs">© {new Date().getFullYear()} VAGA — Made in Tunisia</div>
      </div>
    </footer>
  )
}

export default Footer
