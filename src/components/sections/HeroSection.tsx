import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
                América 133
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
              Arquitectos de Sistemas Comerciales Autónomos
            </p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
              No vendemos consultoría.<br/>
              <span className="text-primary">Construimos motores comerciales</span><br/>
              que se sostienen solos.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos empresas con alto potencial pero sistemas obsoletos en organizaciones modernas, humanas y eficientes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={(e) => handleButtonClick(e, "Hola! Me interesa conocer más sobre el Sistema Dual de Aceleración de América 133. ¿Podrían enviarme más información sobre cómo construyen motores comerciales autónomos?")}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
            >
              🧠 Descubre el Sistema Dual
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
  );
};

export { HeroSection }; 