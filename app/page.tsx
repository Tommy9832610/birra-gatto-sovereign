/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    TradingView: any;
  }
}

"use client";
import React, { useEffect, useRef } from 'react';

export default function PredatorSovereign() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Caricamento Script TradingView
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== "undefined" && container.current) {
        new window.TradingView.MediumWidget({
          symbols: [
            ["Binance", "BTCUSDT|1M"],
            ["Binance", "ETHUSDT|1M"],
            ["Binance", "BNBUSDT|1M"]
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

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#f3ba2f] selection:text-black">
      
      {/* HEADER / LOGO SECTION */}
      <div className="pt-12 pb-8 text-center bg-gradient-to-b from-[#111] to-transparent">
        <div className="relative inline-block">
          <img 
            src="/gatto.jpg" 
            className="w-24 h-24 rounded-full border-2 border-[#f3ba2f] p-1 bg-black mx-auto shadow-[0_0_30px_rgba(243,186,47,0.4)] transition-transform hover:scale-105 duration-500" 
            alt="Gatto Comandante"
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100/000000/f3ba2f?text=SOVEREIGN')}
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#f3ba2f] text-black text-[10px] px-2 py-0.5 rounded font-black tracking-tighter uppercase">
            Sovereign
          </div>
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3ba2f] to-white">
          Predator Sovereign v25.0
        </h1>
        <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1">Advanced Intelligence Dashboard</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-6 pb-20">
        
        {/* NEWS SCROLLER */}
        <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden py-2 rounded-sm italic text-xs">
          <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap space-x-12 text-[#f3ba2f]">
            <span>SYSTEM_READY: ENCRYPTION_ACTIVE</span>
            <span>NETWORK: SECURE_VAULT_CONNECTED</span>
            <span>SIGNAL: PURE_ALPHA_DETECTED</span>
            <span>USER: COMMANDER_8700K</span>
            <span>MARKET_STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* MARKET TERMINAL (TRADING VIEW) */}
        <section className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#121212]">
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f3ba2f] rounded-full animate-pulse"></span>
              Live Market Terminal
            </h2>
          </div>
          <div id="tradingview_widget" ref={container} className="w-full"></div>
        </section>

        {/* ACTION BUTTONS (REFERRALS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://www.binance.com/it/register?ref=1218709503" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#f3ba2f] text-black p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_5px_15px_rgba(243,186,47,0.2)]"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Binance Exchange</span>
              <h3 className="text-xl font-black italic">ATTIVA OPERATIVITÀ BINANCE</h3>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
              ₿
            </div>
          </a>

          <a 
            href="https://nordvpn.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#007bff] text-white p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_5px_15px_rgba(0,123,255,0.2)]"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Session Protection</span>
              <h3 className="text-xl font-black italic">PROTEGGI SESSIONE NORDVPN</h3>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
              🛡️
            </div>
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-md border-t border-white/5 p-4 text-center">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em]">
          Powered by <span className="text-white font-bold">8700K Intelligence</span> — &copy; 2026 Sovereign Systems
        </p>
      </footer>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </main>
  );
}