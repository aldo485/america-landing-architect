import { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, CheckCircle2, Zap, Users, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:aldo.francisco@america133.com?subject=GTM%20System%20Architect%20Inquiry&body=Email:%20${email}`;
      setSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hola Aldo, estoy interesado en el GTM System Architect program. ¿Podemos agendar una conversación?"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Chief Alignment Architect
          </div>
          <div className="flex gap-4 items-center">
            <a href="#offer" className="text-sm text-slate-300 hover:text-white transition">
              The Offer
            </a>
            <a href="#proof" className="text-sm text-slate-300 hover:text-white transition">
              Track Record
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
            <span className="text-red-400 text-sm font-semibold">THE PARADOX EXPOSED</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            75% of AI Initiatives Fail.
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text">
              Here's Why. Here's How to Own the 25%.
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Companies invest $2M in AI. Only $500K generates results. The problem isn't technology. 
            It's <span className="text-cyan-400 font-semibold">leadership architecture</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#offer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition flex items-center justify-center gap-2"
            >
              Discover GTM System Architect <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-cyan-400/50 hover:border-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/5 transition"
            >
              Free 30-Min Strategy Audit
            </a>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-400">75%</div>
              <div className="text-xs text-slate-400 mt-1">Fail to Scale</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-400">25%</div>
              <div className="text-xs text-slate-400 mt-1">Hit ROI Targets</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400">6 Weeks</div>
              <div className="text-xs text-slate-400 mt-1">To System Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Leadership Void: A $1.5T Problem</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-400 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No Clear Owner</h3>
              <p className="text-slate-300 leading-relaxed">
                "AI is everywhere, but nobody is formally responsible." —Marc Schmitt, Oxford
              </p>
              <p className="text-slate-400 text-sm mt-4 italic">
                CIO owns infrastructure. CTO owns product. Nobody owns strategy. Result: orphaned technology.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">The Strategy-Execution Gap</h3>
              <p className="text-slate-300 leading-relaxed">
                Tactics without architecture. Pilots without a master plan. Tools without governance.
              </p>
              <p className="text-slate-400 text-sm mt-4 italic">
                50% describe systems as "fragmented." 84% never scale beyond pilots.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-400 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scattered ROI</h3>
              <p className="text-slate-300 leading-relaxed">
                49% invest in AI. Only 25% hit targets. The remaining 24% burn cash without clarity.
              </p>
              <p className="text-slate-400 text-sm mt-4 italic">
                Without governance, every dollar spent is a gamble.
              </p>
            </div>

            {/* Problem 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Risk Multiplied</h3>
              <p className="text-slate-300 leading-relaxed">
                Algorithmic bias. Data silos. Compliance gaps. Every ungovernced pilot is a liability.
              </p>
              <p className="text-slate-400 text-sm mt-4 italic">
                Without centralized oversight, you're building tomorrow's scandal today.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8 text-center">
            <p className="text-lg text-slate-100">
              <span className="font-bold text-red-400">The Brutal Truth:</span> You don't need more AI tools. 
              You need a <span className="text-cyan-400 font-semibold">system architect</span> who speaks both 
              business strategy and technical architecture.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The CAA Model: Strategic Orchestration</h2>

          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Foundational Logic</h3>
                <p className="text-slate-300 text-sm">
                  Psychology meets architecture. Clear decision frameworks. Defined accountability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Orchestration</h3>
                <p className="text-slate-300 text-sm">
                  12-24 month roadmap. Value-driven prioritization. Scaled execution protocol.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Execution Alignment</h3>
                <p className="text-slate-300 text-sm">
                  Real-time measurement. Leadership change acceleration. Governance discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-cyan-400">→</span> Why CAA Works Where Others Fail
            </h3>
            <div className="space-y-4">
              {[
                { label: "CIO/CTO Focus", caa: "Business-Technology Alignment" },
                { label: "Fragmented Pilots", caa: "Integrated Scaling Blueprint" },
                { label: "Unclear ROI", caa: "Value-Driven Governance" },
                { label: "Siloed Data", caa: "Unified AI Architecture" },
                { label: "No Accountability", caa: "Clear Ownership Model" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-slate-500 flex-shrink-0">❌</div>
                  <div className="flex-grow">
                    <p className="font-semibold text-slate-300">{item.label}</p>
                    <p className="text-slate-400 text-sm">→ {item.caa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="offer" className="py-16 px-6 border-t border-slate-700/50 bg-gradient-to-b from-slate-800/30 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">GTM System Architect</h2>
            <p className="text-xl text-slate-300">6-Week Strategic System Design • Fixed Price • $20,000 USD</p>
          </div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Deliverable 1 */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-400 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold mb-4">Strategic Governance Blueprint</h3>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>C-Suite Decision Framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Authority & Accountability Model</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Risk & Friction Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Governance Playbook</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-semibold">WEEKS 1-2</p>
            </div>

            {/* Deliverable 2 */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold mb-4">AI/Digital Roadmap & Value Architecture</h3>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>12-24 Month Strategic Roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Three-Pillar ROI Framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>KPI Scaffolding & Metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Scaling Protocol</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-semibold">WEEKS 2-4</p>
            </div>

            {/* Deliverable 3 */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold mb-4">Organizational Orchestration System</h3>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>AI CoE Blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>60-90 Day Change Sprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Governance Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>First-Sprint Execution Plan</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-semibold">WEEKS 4-6</p>
            </div>
          </div>

          {/* The Math */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">The ROI Math (For Your CFO)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-400 mb-4">Status Quo Scenario</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Invest $2M in scattered initiatives</li>
                  <li>• 75% fail statistically</li>
                  <li>• $1.5M wasted</li>
                  <li>• 1-2 scaled successes</li>
                  <li className="font-bold text-red-400 mt-4">ROI: 25%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-4">With CAA System</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Same $2M investment</li>
                  <li>• Coherent governance & roadmap</li>
                  <li>• 4 initiatives scale</li>
                  <li>• $1.7M additional value captured</li>
                  <li className="font-bold text-green-400 mt-4">ROI: 85%+</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
              <p className="text-lg">
                <span className="text-cyan-400 font-bold">$20,000 investment pays for itself 60x over in Year 1.</span>
              </p>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6">This Is For:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
              {[
                "Fortune 500 / Mid-Market Companies",
                "CEOs frustrated with fragmented AI",
                "CTOs needing strategic governance",
                "CIOs ready to centralize decision-making",
                "Organizations with $2M+ AI budgets",
                "Leaders ready to own their market niche"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section id="proof" className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Aldo Is The CAA</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Proof 1: Proven Systems Architect */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-400">→</span> Proven Systems Architect
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Decade+ of experience designing organizational systems that scale. Proven track record transforming 
                chaos into clarity—from <span className="font-semibold text-cyan-400">$250K to $1.5M/month</span> in revenue. 
                Deep understanding of how intelligence, execution, and human psychology intersect to create sustainable transformation.
              </p>
              <p className="text-slate-400 text-sm italic">
                Systems thinking rooted in real-world results, not theory.
              </p>
            </div>

            {/* Proof 2: The Architect's Edge */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-cyan-400">→</span> The Architect's Edge
              </h3>
              <ul className="space-y-3 text-slate-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><span className="font-semibold">Psychology-Backed:</span> B.A. in Psychology + AI expertise = systems that enhance human potential, not replace it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><span className="font-semibold">Proven Execution:</span> Built intelligent systems that improved team performance by 20% and reduced churn by 10%</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm italic">
                The rare combination of technical mastery and human insight needed to architect true alignment.
              </p>
            </div>
          </div>

          {/* Track Record */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Proven Track Record</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$18M+</div>
                <p className="text-slate-300 text-sm">Revenue Generated</p>
                <p className="text-slate-400 text-xs mt-1">Built and led high-performing sales teams</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">96 Hrs</div>
                <p className="text-slate-300 text-sm">Sales Training Program</p>
                <p className="text-slate-400 text-xs mt-1">Compressed organizational alignment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <p className="text-slate-300 text-sm">Client Alignment Achieved</p>
                <p className="text-slate-400 text-xs mt-1">Every system designed scales to execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MESSAGE SECTION */}
      <section className="py-16 px-6 border-t border-slate-700/50 bg-gradient-to-b from-blue-500/5 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Design the System.<br />Own the Niche.</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            The 75% will spend years experimenting. The 25% spend 6 weeks architecting.
          </p>
          <p className="text-lg text-slate-400 italic mb-12">
            Which will you be?
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Talk System Architecture</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email CTA */}
            <a
              href="mailto:aldo.francisco@america133.com?subject=GTM%20System%20Architect%20Inquiry"
              className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg p-8 transition transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Send a message to discuss your AI strategy and governance needs.
              </p>
              <p className="text-white font-semibold text-sm mb-2">aldo.francisco@america133.com</p>
              <p className="text-white font-semibold flex items-center gap-2">
                Open Email Client <ArrowRight size={16} />
              </p>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/5219841904834?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg p-8 transition transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-green-100 text-sm mb-4">
                Quick conversation about your GTM System Architecture needs.
              </p>
              <p className="text-white font-semibold text-sm mb-2">Direct Message</p>
              <p className="text-white font-semibold flex items-center gap-2">
                Start on WhatsApp <ArrowRight size={16} />
              </p>
            </a>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 pt-12 border-t border-slate-700 text-center">
            <p className="text-slate-400 mb-4">Or reach out directly:</p>
            <p className="text-lg font-semibold text-white mb-2">aldo.francisco@america133.com</p>
            <p className="text-slate-400">Available for strategy calls • Mexico City & Remote</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700/50 py-8 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Aldo Francisco Rodríguez | Chief Alignment Architect</p>
          <p className="mt-2">"Design the System. Own the Niche."</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;