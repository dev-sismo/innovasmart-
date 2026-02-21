/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

const Logo = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Lightbulb Outline */}
    <path 
      d="M50 10C33.4315 10 20 23.4315 20 40C20 52.3245 27.4355 62.9065 38 67.485V80H62V67.485C72.5645 62.9065 80 52.3245 80 40C80 23.4315 66.5685 10 50 10Z" 
      stroke={color} 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Bulb Base */}
    <path d="M42 86H58" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <path d="M45 92H55" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    
    {/* Circuit Pattern Inside */}
    <rect x="44" y="42" width="12" height="12" rx="2" stroke={color} strokeWidth="3"/>
    <path d="M50 42V25" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="50" cy="22" r="3" fill={color}/>
    
    <path d="M44 45L35 32" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="33" cy="30" r="3" fill={color}/>
    
    <path d="M56 45L65 32" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="67" cy="30" r="3" fill={color}/>
  </svg>
);

const OfferCard = ({ 
  title, 
  price, 
  features, 
  buttonText,
  whatsappLink
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  buttonText: string;
  whatsappLink: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col p-8 rounded-2xl transition-all duration-300 bg-brand-black border-2 border-brand-yellow text-white hover:scale-105 hover:yellow-glow group"
    >
      <h3 className="font-display font-extrabold text-2xl mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-sm opacity-70">$</span>
        <span className="text-4xl font-black">{price}</span>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-brand-yellow" />
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider transition-all active:scale-95 bg-brand-yellow text-brand-black border-2 border-transparent hover:border-white hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center"
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" color="#FFD700" />
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
              INNOVA<span className="text-brand-yellow">SMART</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#programas" 
              className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brand-black transition-all"
            >
              Programas
            </a>
            <a 
              href="https://wa.me/5491160374306?text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-brand-yellow rounded-full text-xs font-bold uppercase tracking-widest text-brand-black hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)]"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-64 pb-32 bg-brand-black">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10 scale-110 grayscale"
            alt="Corporate background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-black/80" />
          
          {/* Decorative Light Rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_70%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Large Glowing Lamp Logo */}
            <div className="relative mb-16 group">
              <motion.div 
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-brand-yellow/30 blur-[60px] rounded-full" 
              />
              <Logo className="w-28 h-28 relative z-10 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-transform duration-500 group-hover:scale-110" color="#FFD700" />
            </div>

            <h1 className="font-display font-black text-5xl md:text-8xl text-white mb-10 leading-[0.85] tracking-tighter">
              ESCALÁ TUS VENTAS Y <br />
              <span className="text-brand-yellow">DOMINÁ</span> LAS IMPORTACIONES
            </h1>
            <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-light leading-relaxed tracking-wide">
              Transformamos tu negocio con estrategias tecnológicas y logística inteligente. 
              El mercado global está a un solo paso de tu alcance.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#programas"
                  className="bg-brand-yellow text-brand-black px-10 py-5 rounded-2xl font-display font-black text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                >
                  Ver Programas <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <motion.a
                href="https://www.tiktok.com/@matyfortin"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="group relative flex items-center gap-3 px-6 py-3 bg-brand-black rounded-full overflow-hidden transition-all hover:scale-105"
              >
                {/* Animated Golden Border Gradient */}
                <div className="absolute inset-0 p-[1px] rounded-full overflow-hidden">
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,#FFD700_50%,transparent_60%,transparent_100%)] animate-[spin_3s_linear_infinite]" />
                </div>
                
                {/* Inner Background to keep the border thin */}
                <div className="absolute inset-[1px] bg-brand-black rounded-full z-0" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="relative w-5 h-5">
                    <svg viewBox="0 0 448 512" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#ff0050" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" transform="translate(4, 4)"/>
                      <path fill="#00f2ea" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" transform="translate(-4, -4)"/>
                      <path fill="#fff" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
                    </svg>
                  </div>
                  <span className="font-display font-bold text-xs text-white/80 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Seguinos en <span className="text-brand-yellow">TikTok</span>
                  </span>
                </div>
                
                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.2)] transition-shadow" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-brand-yellow to-transparent" />
        </div>
      </section>

      {/* Offers Section */}
      <section id="programas" className="py-32 px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-4 uppercase tracking-tighter">
              NUESTROS <span className="text-brand-yellow">PROGRAMAS</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Elegí el nivel que mejor se adapte a tu etapa actual y empezá a importar como un profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferCard 
              title="Guía Importador Inicial"
              price="29.000"
              features={[
                "Acceso a PDF exclusivo",
                "Checklists de verificación",
                "Plantillas de costos",
                "Guía de proveedores confiables"
              ]}
              buttonText="Comprar ahora"
              whatsappLink="https://wa.me/5491160374306?text=Hola!%20Me%20interesa%20comprar%20la%20Gu%C3%ADa%20Importador%20Inicial."
            />
            
            <OfferCard 
              title="Mentoría Grupal Importadores"
              price="89.000"
              features={[
                "Sesión Zoom semanal en vivo",
                "Acceso a Grupo Privado",
                "Análisis de productos en vivo",
                "Networking con otros importadores",
                "Soporte por 3 meses"
              ]}
              buttonText="Comprar ahora"
              whatsappLink="https://wa.me/5491160374306?text=Hola!%20Me%20interesa%20sumarme%20a%20la%20Mentor%C3%ADa%20Grupal%20Importadores."
            />

            <OfferCard 
              title="Asesoría Premium 1 a 1"
              price="250.000"
              features={[
                "Acompañamiento total 24/7",
                "Estrategia personalizada",
                "Búsqueda directa de proveedores",
                "Gestión aduanera integral",
                "Escalado de ventas garantizado"
              ]}
              buttonText="Comprar ahora"
              whatsappLink="https://wa.me/5491160374306?text=Hola!%20Me%20interesa%20la%20Asesor%C3%ADa%20Premium%201%20a%201.%20Me%20gustar%C3%ADa%20agendar%20la%20entrevista%20de%20admisi%C3%B3n."
            />
          </div>

          <div className="mt-24 flex flex-col items-center gap-6 text-center">
            <p className="text-white/60 text-base md:text-lg font-light tracking-wide max-w-2xl">
              La <span className="text-white font-semibold border-b border-brand-yellow/30 pb-0.5">Asesoría Premium</span> requiere una entrevista previa de admisión para garantizar resultados.
            </p>
            <div className="flex items-center gap-6 opacity-40 hover:opacity-60 transition-opacity">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-white text-[11px] uppercase tracking-[0.4em] font-medium">Aceptamos todos los medios de pago</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black py-12 px-6 md:px-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Logo & TikTok */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" color="#FFD700" />
              <span className="font-display font-black text-xl tracking-tighter text-white uppercase">
                INNOVA<span className="text-brand-yellow">SMART</span>
              </span>
            </div>
            <a 
              href="https://www.tiktok.com/@matyfortin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-brand-yellow/50"
            >
              <div className="relative w-4 h-4">
                <svg viewBox="0 0 448 512" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ff0050" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" transform="translate(4, 4)"/>
                  <path fill="#00f2ea" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" transform="translate(-4, -4)"/>
                  <path fill="#fff" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Right Side: Copyright & Creator */}
          <div className="flex flex-col items-end gap-1">
            <div className="text-white/30 text-[10px] font-medium uppercase tracking-[0.2em] text-right">
              © 2026 Innovasmart. Todos los derechos reservados.
            </div>
            <div className="text-white/20 text-[9px] font-medium uppercase tracking-[0.15em] text-right">
              Creado por <a href="https://wa.me/5491126070373?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20una%20web." target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-yellow transition-colors">SISMO</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
