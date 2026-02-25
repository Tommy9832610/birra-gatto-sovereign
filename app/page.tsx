/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    TradingView: any;
  }
}

"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function PredatorSovereign() {
  const container = useRef<HTMLDivElement>(null);
  
  // Riferimenti e Stato per l'Audio Cyberpunk
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Riferimento per l'effetto Matrix
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // EFFETTO MATRIX
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const matrix = letters.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Sfondo semi-trasparente nero
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffcc'; // Colore verde acqua cyber
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // TERMINALE TRADINGVIEW
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== "undefined" && container.current) {
        new window.TradingView.MediumWidget({
          symbols: [
            ["BTC", "BINANCE:BTCUSDT|1M"],
            ["ETH", "BINANCE:ETHUSDT|1M"],
            ["BNB", "BINANCE:BNBUSDT|1M"]
          ],
          chartOnly: false,
          width: "100%",
          height: 450,
          locale: "it",
          colorTheme: "dark",
          autosize: true,
          showVolume: false,
          hideDateRanges: false,
          scalePosition: "right",
          scaleMode: "Normal",
          fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          fontSize: "10",
          noTimeScale: false,
          valuesTracking: "1",
          changeMode: "price-and-percent",
          chartType: "area",
          lineColor: "#f3ba2f",
          bottomColor: "rgba(243, 186, 47, 0)",
          topColor: "rgba(243, 186, 47, 0.11)",
          container_id: "tradingview_widget"
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  // CONTROLLI AUDIO
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#f3ba2f] selection:text-black relative overflow-hidden">
      
      {/* SFONDO MATRIX ANIMATO */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
      />
      
      {/* CONTENUTO PRINCIPALE IN PRIMO PIANO */}
      <div className="relative z-10">
        
        {/* HEADER / LOGO SECTION */}
        <div className="pt-12 pb-8 text-center bg-gradient-to-b from-[#111] to-transparent">
          <div className="relative inline-block">
            <img 
              src="/gatto.jpeg" 
              className="w-20 h-20 rounded-full border-2 border-[#f3ba2f] p-1 bg-black mx-auto shadow-[0_0_25px_rgba(243,186,47,0.3)] transition-transform hover:scale-110 duration-500 object-cover" 
              alt="Gatto Comandante"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100/000000/f3ba2f?text=SOVEREIGN')}
            />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f3ba2f] text-black text-[9px] px-2 py-0.5 rounded font-black tracking-tighter uppercase shadow-lg">
              Sovereign
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3ba2f] to-white drop-shadow-[0_0_10px_rgba(243,186,47,0.5)]">
            Predator Sovereign v25.0
          </h1>
          <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1 italic">Advanced Intelligence Dashboard</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-6 pb-20">
          
          {/* NEWS SCROLLER */}
          <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 overflow-hidden py-2 rounded-sm italic text-xs shadow-inner">
            <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap space-x-12 text-[#f3ba2f]">
              <span>SYSTEM_READY: ENCRYPTION_ACTIVE</span>
              <span>NETWORK: SECURE_VAULT_CONNECTED</span>
              <span>SIGNAL: PURE_ALPHA_DETECTED</span>
              <span>USER: COMMANDER_8700K</span>
              <span>MARKET_STATUS: OPERATIONAL</span>
            </div>
          </div>

          {/* MARKET TERMINAL */}
          <section className="bg-[#0f0f0f]/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#121212]/90">
              <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f3ba2f] rounded-full animate-pulse"></span>
                Live Market Terminal
              </h2>
            </div>
            <div id="tradingview_widget" ref={container} className="w-full"></div>
          </section>

          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://www.binance.com/it/register?ref=1218709503" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#f3ba2f]/90 backdrop-blur-md text-black p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(243,186,47,0.15)] border border-[#f3ba2f]/50"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Binance Exchange</span>
                <h3 className="text-xl font-black italic">ATTIVA OPERATIVITÀ BINANCE</h3>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform text-5xl">
                ₿
              </div>
            </a>

            <a 
              href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=141624&url_id=902" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#007bff]/90 backdrop-blur-md text-white p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(0,123,255,0.15)] border border-[#007bff]/50"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Session Protection</span>
                <h3 className="text-xl font-black italic">PROTEGGI SESSIONE NORDVPN</h3>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform text-5xl">
                🛡️
              </div>
            </a>
          </div>

          {/* MODULO CYBER-AUDIO WINAMP */}
          <div className="bg-black/60 border border-[#00ffcc]/30 p-4 rounded-xl backdrop-blur-xl flex flex-col justify-between shadow-[0_0_20px_rgba(0,255,204,0.15)] max-w-md mx-auto w-full mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#00ffcc] font-black tracking-widest text-xs uppercase">Winamp Protocol</h3>
              <span className={`text-[10px] font-bold ${isPlaying ? 'text-green-400 animate-pulse' : 'text-red-500'}`}>
                {isPlaying ? '● ONLINE' : '○ STANDBY'}
              </span>
            </div>
            
            {/* Display Equalizzatore */}
            <div className="bg-[#0a0a0a] border border-gray-800 rounded p-2 h-20 flex items-end justify-between gap-[3px] overflow-hidden transition-all duration-500">
              {['40%', '80%', '60%', '100%', '30%', '70%', '90%', '50%', '80%', '40%', '100%', '60%', '20%', '80%', '50%', '90%'].map((height, i) => (
                <div 
                  key={i}
                  className={`w-full bg-gradient-to-t from-green-500 via-yellow-400 to-red-500 rounded-t-[1px] transition-all duration-300 ${isPlaying ? 'animate-pulse opacity-80' : 'opacity-20'}`}
                  style={{ 
                    height: isPlaying ? height : '10%',
                    animationDelay: `${i * 0.1}s` 
                  }}
                ></div>
              ))}
            </div>

            {/* Track Info */}
            <div className="mt-4 text-center bg-black/80 py-1 rounded border border-gray-800">
              <audio ref={audioRef} src="/song.mp3" loop />
              <p className="text-[#00ffcc] text-xs font-mono truncate">
                {isPlaying ? '▶ TRACCIA_01_PREDATOR.mp3 - SYNC ACTIVE...' : '⏸ SYSTEM_PAUSED'}
              </p>
            </div>

            {/* Controlli Reali Winamp */}
            <div className="flex justify-center gap-6 mt-4">
              <button className="text-gray-600 cursor-not-allowed text-xl">⏮</button>
              <button 
                onClick={handlePlay} 
                className={`transition-all text-2xl active:scale-95 ${isPlaying ? 'text-white drop-shadow-[0_0_8px_rgba(0,255,204,0.8)] scale-110' : 'text-[#00ffcc] hover:text-white'}`}
              >
                ▶
              </button>
              <button 
                onClick={handlePause} 
                className={`transition-all text-xl active:scale-95 ${!isPlaying ? 'text-white drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]' : 'text-gray-500 hover:text-red-500'}`}
              >
                ⏸
              </button>
              <button className="text-gray-600 cursor-not-allowed text-xl">⏭</button>
            </div>
          </div>

        </div>

        <footer className="fixed bottom-0 w-full bg-black/90 backdrop-blur-md border-t border-white/5 p-4 text-center z-50">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em]">
            Powered by <span className="text-white font-bold">8700K Intelligence</span> — &copy; 2026 Sovereign Systems
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </main>
  );
}