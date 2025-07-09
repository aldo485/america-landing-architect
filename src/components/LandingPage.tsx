import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getContent, Language } from '@/lib/content';

const LandingPage = () => {
  const [language, setLanguage] = useState<Language>('es');
  const content = getContent(language);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card-hover, .metric-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = (message: string) => {
    const phoneNumber = "5219841904834";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, message: string) => {
    const target = e.target as HTMLButtonElement;
    target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      target.style.transform = 'scale(1)';
      openWhatsApp(message);
    }, 150);
  };

  return (
    <div className="bg-gray-50 font-inter">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
                {content.hero.subtitle}
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
                {content.hero.description}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Transformamos empresas con alto potencial pero sistemas obsoletos en organizaciones modernas, humanas y eficientes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={(e) => handleButtonClick(e, content.hero.cta?.action || '')}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
              >
                {content.hero.cta?.text}
              </Button>
              <Button 
                onClick={(e) => handleButtonClick(e, "Hola! Necesito evaluar la situación actual de mi empresa. Me gustaría saber si calificamos para el programa de transformación comercial de América 133.")}
                variant="outline"
                className="bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border-white/30 h-auto"
              >
                🎯 Evalúa tu Situación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-red-400">
              {content.problem.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {content.problem.problems.map((problem, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl card-hover transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-gray-300">{problem.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">{content.problem.conclusion.title}</h3>
              <p className="text-lg">{content.problem.conclusion.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                {content.solution.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.solution.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {content.solution.pillars.map((pillar, index) => (
                <div key={index} className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl card-hover transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl`}>
                  <div className="text-5xl mb-6">{pillar.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${pillar.color}`}>{pillar.title}</h3>
                  <ul className="text-gray-700 space-y-3 text-lg">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Process Timeline */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Proceso de Transformación</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {content.solution.process.map((step) => (
                  <div key={step.number} className="text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                      {step.number}
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              {content.results.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {content.results.results.map((result, index) => (
                <div key={index} className="metric-card bg-gradient-to-br from-slate-50 to-slate-200 p-8 rounded-2xl text-gray-800 border border-slate-300/20">
                  <div className="text-4xl mb-4">{result.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-green-400 to-primary p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">{content.results.guarantee.title}</h3>
              <p className="text-lg">{content.results.guarantee.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                {content.pricing.title}
              </h2>
              <p className="text-xl text-gray-600">
                {content.pricing.description}
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 card-hover transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{content.pricing.plan.name}</h3>
                <p className="text-gray-600">{content.pricing.plan.duration}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{content.pricing.plan.pricing.fixed}</div>
                  <p className="text-gray-600">Fee fijo mensual (MXN)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{content.pricing.plan.pricing.commission}</div>
                  <p className="text-gray-600">Comisión sobre ventas incrementales</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <h4 className="font-bold mb-4 text-gray-800">Blindaje Contractual Incluido:</h4>
                <ul className="text-gray-700 space-y-2">
                  {content.pricing.plan.features.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={(e) => handleButtonClick(e, "¡Hola! Me interesa agendar el diagnóstico gratuito para mi empresa. Quiero conocer más sobre el Sistema Dual de Aceleración y cómo puede transformar mi negocio. ¿Cuándo podríamos agendar una cita?")}
                  className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse h-auto"
                >
                  🚀 Agenda tu Diagnóstico Gratuito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {content.team.title}
              </h2>
              <p className="text-xl text-gray-300">
                {content.team.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.team.members.map((member, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl card-hover text-center transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
                  <div className="text-5xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className={`${member.color} mb-4`}>{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content.contact.title}
            </h2>
            <p className="text-xl mb-8">
              {content.contact.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={(e) => handleButtonClick(e, content.contact.cta.primary.action)}
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
              >
                {content.contact.cta.primary.text}
              </Button>
              <Button 
                onClick={(e) => handleButtonClick(e, content.contact.cta.secondary.action)}
                variant="outline"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 h-auto"
              >
                {content.contact.cta.secondary.text}
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-blue-100">
              <p>{content.contact.disclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{content.footer.company.name}</h3>
              <p className="text-gray-400">{content.footer.company.tagline}</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://wa.me/5219841904834" className="text-gray-400 hover:text-green-400 transition-colors">
                {content.footer.contact.whatsapp}
              </a>
              <a href="mailto:aldo.francisco@america133.com" className="text-gray-400 hover:text-primary transition-colors">
                {content.footer.contact.email}
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">{content.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;