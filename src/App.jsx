import { useMemo } from 'react'

function App() {
  const services = useMemo(() => ([
    {
      title: 'Servizi',
      items: [
        'Consulenza sulla Sicurezza sul lavoro',
        'HACCP',
        'Certificazioni ISO e GDPR',
        'Consulenza sulla Sicurezza Ambientale',
        'Consulenza Marketing e Creazione siti internet',
        'Consulenza Finanziaria a privati e aziende (Prestiti – Finanziamenti)',
        'Consulenza ADR',
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ),
      accent: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Consulenza Finanziaria',
      items: [
        'Consulenza Fiscale alle imprese/persone',
        'Finanza Agevolata',
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
      accent: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Corsi & Qualifiche',
      items: [
        'Corsi di formazione per commerciali',
        'Corsi di formazione per Mondo Scuola',
        'Corsi e Qualifiche Professionali per inserimento mondo del lavoro',
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 15 2 10 12 5l10 5z"/><path d="M6 12v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5"/></svg>
      ),
      accent: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'CAF & Patronato',
      items: [
        'Servizi CAF',
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
      accent: 'from-rose-500 to-orange-500',
    },
    {
      title: 'Altri Servizi',
      items: [
        'Noleggio Auto',
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5H15.6a2 2 0 0 1 1.9 1.5L19 11"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></svg>
      ),
      accent: 'from-sky-500 to-indigo-500',
    },
  ]), [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 grid place-items-center text-white font-bold">IC</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">International Consulting</h1>
              <p className="text-xs text-slate-500 -mt-0.5">Strategie. Compliance. Crescita.</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servizi" className="hover:text-blue-600 transition-colors">Servizi</a>
            <a href="#corsi" className="hover:text-blue-600 transition-colors">Corsi</a>
            <a href="#contatti" className="hover:text-blue-600 transition-colors">Contatti</a>
            <a href="/test" className="px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-700 transition-colors">Test Backend</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Consulenza integrata per imprese e privati
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Dalla sicurezza alla finanza agevolata, dalla formazione al marketing: un unico partner per conformità, crescita e innovazione.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#servizi" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow hover:opacity-95 transition">Scopri i servizi</a>
              <a href="#contatti" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-white transition">Richiedi una consulenza</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-500"/> Esperti certificati</div>
              <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-blue-500"/> Approccio su misura</div>
              <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-violet-500"/> Risultati misurabili</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-slate-200 hover:shadow-md transition bg-gradient-to-br from-white to-slate-50">
                    <div className={`w-10 h-10 rounded-xl grid place-items-center text-white bg-gradient-to-r ${s.accent} mb-3`}>
                      {s.icon}
                    </div>
                    <p className="font-semibold text-slate-800 text-sm">{s.title}</p>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-3">{s.items[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi principali */}
      <section id="servizi" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold">Ambiti di intervento</h3>
          <p className="mt-3 text-slate-600 max-w-3xl">Soluzioni complete per conformità e sviluppo del tuo business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((block, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${block.accent}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl grid place-items-center text-white bg-gradient-to-r ${block.accent} mb-4`}>{block.icon}</div>
                <h4 className="text-xl font-semibold">{block.title}</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Noleggio Auto */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Noleggio Auto</h3>
              <p className="mt-4 text-slate-300">Soluzioni flessibili per aziende e privati, a breve e lungo termine.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex gap-3 items-start"><span className="mt-2 inline-block w-2 h-2 rounded-full bg-cyan-400"/> Aziende (breve/lungo termine)</li>
                <li className="flex gap-3 items-start"><span className="mt-2 inline-block w-2 h-2 rounded-full bg-cyan-400"/> Privati (breve/lungo termine)</li>
              </ul>
              <a href="#contatti" className="inline-block mt-8 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white hover:opacity-95 transition">Richiedi un preventivo</a>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-2 gap-4 text-slate-100">
                  {['Aziende','Privati','Breve termine','Lungo termine'].map((tag,i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center font-medium">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contatti */}
      <section id="contatti" className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold">Parliamo dei tuoi obiettivi</h3>
              <p className="mt-3 text-white/90">Scrivici per una consulenza gratuita: analizziamo esigenze, normative e opportunità per costruire insieme il percorso più efficace.</p>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-3">
                <input className="rounded-lg px-4 py-3 text-slate-900" placeholder="Nome e Cognome" />
                <input className="rounded-lg px-4 py-3 text-slate-900" placeholder="Email o Telefono" />
                <textarea rows="3" className="rounded-lg px-4 py-3 text-slate-900" placeholder="Come possiamo aiutarti?" />
                <button type="button" onClick={() => alert('Grazie! Ti contatteremo a breve.')} className="mt-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 font-semibold">Invia richiesta</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} International Consulting • Tutti i diritti riservati</p>
          <div className="flex items-center gap-6">
            <a href="#servizi" className="hover:text-slate-900">Servizi</a>
            <a href="#corsi" className="hover:text-slate-900">Corsi</a>
            <a href="#contatti" className="hover:text-slate-900">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
