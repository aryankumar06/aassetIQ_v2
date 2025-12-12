import React, { useState, useEffect, useRef } from 'react';
import { BrandLogoFull, LogoMark } from './BrandLogo';
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  FileText,
  CheckCircle,
  PlayCircle,
  Shield,
  Users,
  DollarSign,
  X,
  Plus,
  Minus,
  Building2,
  Lock,
  Zap,
  TrendingUp,
  PieChart,
  AlertCircle,
  MapPin,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

    :root {
      --accent-gold: #F4C430;
      --accent-green: #00382B;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: #000;
      color: white;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Clash Display', sans-serif;
    }

    .text-gradient-gold {
      background: linear-gradient(135deg, #F4C430 0%, #FFE066 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .galaxy-bg {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: radial-gradient(ellipse at center, #0a192f 0%, #000 70%);
      z-index: 0;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes pulse-glow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }

    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
      animation: twinkle var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
    }

    .shooting-star {
      position: absolute;
      width: 2px; height: 2px;
      background: linear-gradient(90deg, #fff, transparent);
      border-radius: 50%;
      animation: shoot 3s ease-out infinite;
      animation-delay: var(--delay);
    }

    @keyframes shoot {
      0% { transform: translateX(0) translateY(0); opacity: 1; }
      100% { transform: translateX(-300px) translateY(300px); opacity: 0; }
    }

    .corner-gradient {
      position: fixed;
      width: 600px; height: 600px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.4;
      animation: pulse-glow 8s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    .corner-tl { top: -300px; left: -300px; background: radial-gradient(circle, #F4C430 0%, transparent 70%); animation-delay: 0s; }
    .corner-tr { top: -300px; right: -300px; background: radial-gradient(circle, #00382B 0%, transparent 70%); animation-delay: 2s; }
    .corner-bl { bottom: -300px; left: -300px; background: radial-gradient(circle, #00382B 0%, transparent 70%); animation-delay: 4s; }
    .corner-br { bottom: -300px; right: -300px; background: radial-gradient(circle, #F4C430 0%, transparent 70%); animation-delay: 6s; }

    .nav-star {
      position: absolute;
      animation: twinkle 2s ease-in-out infinite, float 4s ease-in-out infinite;
    }

    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .fade-up.visible { opacity: 1; transform: translateY(0); }

    @keyframes grow-y {
      0% { transform: scaleY(0); }
      100% { transform: scaleY(1); }
    }
    .animate-grow-y {
      transform-origin: bottom;
      animation: grow-y 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes pulse-slow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 3s infinite ease-in-out;
    }

    .glass-nav {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .nebula {
      position: absolute;
      width: 800px; height: 800px;
      background: radial-gradient(circle, rgba(244, 196, 48, 0.08) 0%, rgba(0, 56, 43, 0.08) 50%, transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      animation: rotate 60s linear infinite, pulse-glow 8s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}</style>
);

const StarField = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  const shootingStars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 50,
    delay: Math.random() * 10,
  }));

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      {shootingStars.map((star) => (
        <div
          key={`shoot-${star.id}`}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

const NavbarStars = () => {
  const navStars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {navStars.map((star) => (
        <div
          key={star.id}
          className="nav-star"
          style={{
            left: `${star.x}%`,
            top: `${Math.random() * 100}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            borderRadius: '50%',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
};

const SlideDashboard = () => (
  <div className="p-8 h-full bg-[#050A08] flex flex-col relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

    <div className="relative z-10 flex flex-col h-full gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white font-serif">Financial Overview</h3>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#00382B] p-4 rounded-xl border border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-30"><Sparkles className="w-8 h-8 text-white" /></div>
          <p className="text-[#F4C430] text-[10px] font-bold uppercase tracking-widest mb-1">ROI</p>
          <p className="text-3xl font-bold text-white">214%</p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">IRR</p>
          <p className="text-2xl font-bold text-white">15.4%</p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Cash Flow</p>
          <p className="text-2xl font-bold text-green-400">₹84k</p>
        </div>
      </div>

      <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-5 relative flex items-end justify-between gap-2 overflow-hidden">
        {[35, 50, 40, 65, 55, 80, 70, 95, 85, 100, 75, 90].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
            className="flex-1 bg-gradient-to-t from-[#00382B] to-[#F4C430] opacity-80 rounded-t-sm animate-grow-y"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const SlideInteractive = () => {
  const [years, setYears] = useState(5);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const targetProfit = Math.round(50 * Math.pow(1.10, years)) - 50;
    setProfit(targetProfit);
  }, [years]);

  return (
    <div className="p-8 h-full bg-gradient-to-br from-[#0A0A0A] to-[#001510] flex flex-col justify-center relative">
      <div className="absolute top-0 right-0 p-32 bg-[#F4C430] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="p-2 bg-[#F4C430] rounded-lg shadow-[0_0_20px_rgba(244,196,48,0.3)] animate-pulse-slow">
          <Zap className="h-6 w-6 text-[#00382B]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Simulate Returns</h3>
          <p className="text-xs text-gray-400">Drag to see compound growth</p>
        </div>
      </div>

      <div className="bg-black/40 p-6 rounded-2xl border border-white/10 shadow-inner relative z-10 backdrop-blur-sm">
        <div className="flex justify-between text-xs text-gray-400 mb-6 font-bold uppercase tracking-wider">
          <span>Holding Period</span>
          <span className="text-[#F4C430]">{years} Years</span>
        </div>

        <div className="relative mb-8">
          <input
            type="range" min="1" max="20" value={years}
            onChange={(e) => setYears(parseInt(e.target.value))}
            className="w-full z-20 relative accent-[#F4C430]"
          />
        </div>

        <div className="flex justify-between items-end border-t border-white/10 pt-4">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Projected Profit</p>
            <p className="text-4xl font-bold text-white tracking-tight">₹{profit}L</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/20">
              +{(profit/50*100).toFixed(0)}% ROI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideComparison = () => (
  <div className="p-10 h-full bg-[#050505] flex flex-col justify-center">
    <div className="mb-6 flex justify-between items-center border-b border-white/10 pb-4">
      <h3 className="text-xl text-white font-medium">Comparative Analysis</h3>
      <div className="px-3 py-1 bg-[#F4C430] text-[#00382B] text-[10px] font-bold rounded-full">Winner: Option A</div>
    </div>
    <div className="grid grid-cols-3 gap-4 flex-1 items-center">
      <div className="space-y-6 text-right text-xs text-gray-500 font-bold uppercase tracking-wider">
        <div>Net Cost</div>
        <div>IRR</div>
        <div>Cash Flow</div>
      </div>
      <div className="bg-[#00382B] rounded-xl p-4 flex flex-col gap-4 text-center border border-[#F4C430] shadow-xl transform scale-105 z-10">
        <div className="text-[#F4C430] font-bold text-sm">Option A</div>
        <div className="text-white font-bold text-lg">₹1.8 Cr</div>
        <div className="text-green-400 font-bold bg-white/10 rounded py-1">15.4%</div>
        <div className="text-white">₹84k</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 flex flex-col gap-4 text-center border border-white/5 opacity-50 grayscale">
        <div className="text-gray-300 font-bold text-sm">Option B</div>
        <div className="text-gray-400 text-sm">₹2.1 Cr</div>
        <div className="text-gray-400 text-sm">11.2%</div>
        <div className="text-gray-400 text-sm">₹62k</div>
      </div>
    </div>
  </div>
);

const Carousel3D = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    <SlideInteractive />,
    <SlideDashboard />,
    <SlideComparison />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-full relative bg-[#000] rounded-b-3xl overflow-hidden">
      {slides.map((slide, index) => {
        let className = 'opacity-0 z-0 scale-95 translate-x-10';
        if (index === activeSlide) className = 'opacity-100 z-20 scale-100 translate-x-0';
        if (index === (activeSlide - 1 + slides.length) % slides.length) className = 'opacity-0 z-10 scale-95 -translate-x-10';

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${className}`}
          >
            {slide}
          </div>
        );
      })}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-[#F4C430] w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroDashboard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-[#F4C430]/20 to-[#00382B]/30 rounded-full blur-[100px] opacity-60 pointer-events-none animate-pulse-slow"></div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#050505] rounded-3xl border border-white/10 p-2 relative overflow-visible shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out h-[500px]"
        style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
      >
        <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-6 gap-3 rounded-t-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>

        <div className="h-[calc(100%-48px)] w-full relative overflow-hidden bg-[#000] rounded-b-2xl">
          <Carousel3D />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <div className="fade-up group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#F4C430]/30 transition-all duration-500" style={{ transitionDelay: `${delay}ms` }}>
    <div className="w-12 h-12 rounded-xl bg-[#F4C430]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4C430]/20 transition-colors">
      <Icon className="h-6 w-6 text-[#F4C430]" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const PricingCard = ({ title, price, features, popular, onStart }: any) => (
  <div className={`fade-up p-8 rounded-2xl border transition-all duration-500 flex flex-col h-full ${popular ? 'border-[#F4C430] bg-[#0A0A0A] shadow-[0_0_50px_-20px_rgba(244,196,48,0.3)]' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-[#F4C430] text-[#00382B] text-[10px] font-black px-6 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
          Most Popular
        </div>
      </div>
    )}
    <div className="mb-8">
      <h3 className={`text-lg font-bold uppercase tracking-widest ${popular ? 'text-[#F4C430]' : 'text-gray-400'}`}>{title}</h3>
      <div className="flex items-baseline gap-1 mt-6">
        <span className="text-5xl font-bold text-white">{price}</span>
        <span className="text-sm text-gray-400">/month</span>
      </div>
    </div>

    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f: string) => (
        <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle className="h-4 w-4 text-[#F4C430] flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>

    <button
      onClick={onStart}
      className={`w-full py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
        popular
          ? 'bg-[#F4C430] text-[#00382B] hover:bg-[#ffe066] hover:shadow-[0_0_20px_rgba(244,196,48,0.4)]'
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
      }`}
    >
      Get Started
    </button>
  </div>
);

const FAQItem = ({ q, a, delay }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fade-up border-b border-white/10 transition-all duration-300" style={{ transitionDelay: `${delay}ms` }}>
      <button
        className="w-full py-6 px-6 flex justify-between items-center text-left hover:text-[#F4C430] transition-colors group"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-lg font-medium transition-colors ${open ? 'text-[#F4C430]' : 'text-white'}`}>{q}</span>
        {open ? <Minus className="h-5 w-5 text-[#F4C430]" /> : <Plus className="h-5 w-5 text-gray-500 group-hover:text-white" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
          {a}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label, delay }: any) => (
  <div className="fade-up text-center" style={{ transitionDelay: `${delay}ms` }}>
    <div className="text-4xl md:text-5xl font-bold text-[#F4C430] mb-2">{number}</div>
    <div className="text-gray-400 text-sm uppercase tracking-widest font-bold">{label}</div>
  </div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#F4C430] selection:text-[#00382B] overflow-x-hidden relative">
      <CustomStyles />

      <div className="galaxy-bg" />
      <StarField />

      <div className="corner-gradient corner-tl" />
      <div className="corner-gradient corner-tr" />
      <div className="corner-gradient corner-bl" />
      <div className="corner-gradient corner-br" />

      <nav className="fixed w-full z-50 glass-nav h-20 flex items-center transition-all duration-300">
        <NavbarStars />
        <div className="max-w-[1800px] mx-auto px-12 w-full flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-[#F4C430]" />
            <span className="text-xl font-bold tracking-tight text-white hidden md:block">Aasset<span className="text-[#F4C430]">IQ</span></span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-[#F4C430] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#F4C430] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#F4C430] transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onStart} className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Log In</button>
            <button
              onClick={onStart}
              className="bg-[#F4C430] text-[#00382B] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#ffe066] hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              Launch App
            </button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-12 z-10 overflow-hidden">
        <div className="nebula" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />

        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-24 relative z-20">
          <div className="w-full max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-pulse shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#F4C430] shadow-[0_0_10px_#F4C430]"></span>
              <span className="text-[10px] font-bold text-[#F4C430] uppercase tracking-widest">India's First AI-Powered Analysis</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
              Invest in Real Estate <br/>
              <span className="text-gray-500">with Data, </span>
              <span className="text-gradient-gold">Not Guesswork.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
              Analyze 15+ real estate financial metrics with institutional-grade financial modelling, AI-powered risk assessment, and professional reports in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
              <button
                onClick={onStart}
                className="px-8 py-4 bg-[#F4C430] text-[#00382B] rounded-full text-lg font-bold hover:bg-[#ffe066] hover:scale-105 transition-all shadow-[0_0_40px_rgba(244,196,48,0.3)]"
              >
                Analyze Property Free
              </button>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full text-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2 group backdrop-blur-sm">
                <PlayCircle className="h-6 w-6 group-hover:text-[#F4C430] transition-colors" /> Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#F4C430]" /> No Credit Card</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#F4C430]" /> Instant PDF</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#F4C430]" /> Unbiased</span>
            </div>
          </div>

          <div className="w-full max-w-2xl hidden lg:block">
            <HeroDashboard />
          </div>
        </div>
      </section>

      <section className="relative py-20 px-12 z-10">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50K+" label="Properties Analyzed" delay={0} />
            <StatCard number="₹5000Cr+" label="Portfolio Value" delay={100} />
            <StatCard number="2.5x" label="Avg Returns" delay={200} />
            <StatCard number="94%" label="Accuracy Rate" delay={300} />
          </div>
        </div>
      </section>

      <section id="features" className="relative py-24 px-12 z-10">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to make smarter investment decisions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BarChart3}
              title="15+ Financial Metrics"
              description="ROI, IRR, Cap Rate, Cash Flow, and more - all calculated instantly with industry-standard formulas"
              delay={0}
            />
            <FeatureCard
              icon={Sparkles}
              title="AI-Powered Analysis"
              description="Get intelligent recommendations based on market trends, location data, and historical performance patterns"
              delay={100}
            />
            <FeatureCard
              icon={FileText}
              title="Professional Reports"
              description="Generate PDF reports with executive summaries, detailed analysis, and investment recommendations"
              delay={200}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Market Comparison"
              description="Compare multiple properties side-by-side and identify the best investment opportunities instantly"
              delay={300}
            />
            <FeatureCard
              icon={Shield}
              title="Risk Assessment"
              description="Advanced algorithms evaluate market risks, tenant quality, and property vulnerabilities"
              delay={400}
            />
            <FeatureCard
              icon={Lock}
              title="Bank-Grade Security"
              description="Your data is encrypted and secured with enterprise-level security protocols"
              delay={500}
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-24 px-12 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <PricingCard
              title="Starter"
              price="₹999"
              features={[
                "5 property analyses per month",
                "Basic financial metrics",
                "Email support",
                "PDF reports"
              ]}
              onStart={onStart}
            />
            <PricingCard
              title="Pro"
              price="₹4,999"
              features={[
                "Unlimited analyses",
                "All 15+ metrics",
                "AI recommendations",
                "Priority support",
                "Portfolio tracking",
                "Market reports"
              ]}
              popular={true}
              onStart={onStart}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Everything in Pro",
                "API access",
                "Dedicated support",
                "Custom integrations",
                "Team management",
                "Advanced analytics"
              ]}
              onStart={onStart}
            />
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-24 px-12 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <FAQItem
              q="How accurate is the AI analysis?"
              a="Our AI model has been trained on thousands of real estate transactions and has achieved 94% accuracy in predicting property performance. We use institutional-grade financial modeling that aligns with industry standards."
              delay={0}
            />
            <FAQItem
              q="Can I export reports for my investors?"
              a="Yes! All reports can be exported as professional PDFs with your branding. You can also customize the analysis parameters before generating reports."
              delay={50}
            />
            <FAQItem
              q="Is my property data secure?"
              a="Absolutely. We use bank-grade encryption (AES-256) for all data transmission and storage. Your data is never shared with third parties and you maintain complete control."
              delay={100}
            />
            <FAQItem
              q="What metrics does the analysis include?"
              a="We calculate 15+ metrics including ROI, IRR, Cap Rate, Cash Flow, Debt Service Coverage Ratio, and more. Each is calculated using standard real estate industry formulas."
              delay={150}
            />
            <FAQItem
              q="Can I analyze properties in other states?"
              a="Yes, our database covers properties across India. The AI adjusts its analysis based on regional market trends, local regulations, and area-specific factors."
              delay={200}
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 px-12 z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Invest Smarter?</h2>
          <p className="text-xl text-gray-400 mb-10">Get started with AassetIQ today and make data-driven investment decisions</p>
          <button
            onClick={onStart}
            className="px-10 py-5 bg-[#F4C430] text-[#00382B] rounded-full text-xl font-bold hover:bg-[#ffe066] hover:scale-105 transition-all shadow-[0_0_40px_rgba(244,196,48,0.3)] inline-flex items-center gap-3"
          >
            Launch App Now <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-6 border-t border-white/5 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <LogoMark className="h-6 w-6 text-[#F4C430]" />
                <span className="font-bold text-lg">AassetIQ</span>
              </div>
              <p className="text-gray-400 text-sm">Making real estate investment analysis intelligent and accessible.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#F4C430] transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2024 AassetIQ. All rights reserved.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-[#F4C430] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#F4C430] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#F4C430] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
