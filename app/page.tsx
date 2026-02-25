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

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#f3ba2f] selection:text-black">
      
      {/* HEADER / LOGO SECTION */}
      <div className="pt-12 pb-8 text-center bg-gradient-to-b from-[#111] to-transparent">
        <div className="relative inline-block">
          <img 
            src="/gatto.jpeg" 
            className="w-20 h-20 rounded-full border-2 border-[#f3ba2f] p-1 bg-black mx-auto shadow-[0_0_25px_rgba(243,186,47,0.3)] transition-transform hover:scale-110 duration-500" 
            alt="Gatto Comandante"
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100/000000/f3ba2f?text=SOVEREIGN')}
          />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f3ba2f] text-black text-[9px] px-2 py-0.5 rounded font-black tracking-tighter uppercase shadow-lg">
            Sovereign
          </div>
        </div>
        <h1 className="mt-8 text-4xl font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3ba2f] to-white">
          Predator Sovereign v25.0
        </h1>
        <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1 italic">Advanced Intelligence Dashboard</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-6 pb-20">
        
        {/* NEWS SCROLLER */}
        <div className="bg-[#0a0a0a] border border-white/5 overflow-hidden py-2 rounded-sm italic text-xs shadow-inner">
          <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap space-x-12 text-[#f3ba2f]">
            <span>SYSTEM_READY: ENCRYPTION_ACTIVE</span>
            <span>NETWORK: SECURE_VAULT_CONNECTED</span>
            <span>SIGNAL: PURE_ALPHA_DETECTED</span>
            <span>USER: COMMANDER_8700K</span>
            <span>MARKET_STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* MARKET TERMINAL */}
        <section className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#121212]">
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
            className="group relative overflow-hidden bg-[#f3ba2f] text-black p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(243,186,47,0.15)]"
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
            className="group relative overflow-hidden bg-[#007bff] text-white p-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(0,123,255,0.15)]"
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

        {/* MODULO CYBER-AUDIO */}
        <div className="bg-black/40 border border-[#00ffcc]/30 p-4 rounded-xl backdrop-blur-md flex flex-col justify-between shadow-[0_0_15px_rgba(0,255,204,0.1)] max-w-md mx-auto w-full mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#00ffcc] font-black tracking-widest text-xs uppercase">Winamp Protocol</h3>
            <span className="text-[10px] text-green-400 animate-pulse">● ONLINE</span>
          </div>
          
          {/* Display Equalizzatore */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded p-2 h-20 flex items-end justify-between gap-[3px] overflow-hidden">
            {['40%', '80%', '60%', '100%', '30%', '70%', '90%', '50%', '80%', '40%', '100%', '60%', '20%', '80%', '50%', '90%'].map((height, i) => (
              <div 
                key={i}
                className="w-full bg-gradient-to-t from-green-500 via-yellow-400 to-red-500 rounded-t-[1px] opacity-80 animate-pulse"
                style={{ 
                  height: height,
                  animationDelay: `${i * 0.1}s` 
                }}
              ></div>
            ))}
          </div>

          {/* Track Info */}
          <div className="mt-4 text-center bg-black/50 py-1 rounded border border-gray-800">
            <p className="text-[#00ffcc] text-xs font-mono truncate animate-pulse">
              ▶ TRACCIA_01_PREDATOR.mp3
            </p>
          </div>

          {/* Controlli Winamp */}
          <div className="flex justify-center gap-6 mt-4">
            <button className="text-gray-500 hover:text-[#00ffcc] transition-colors text-xl active:scale-95">⏮</button>
            <button className="text-[#00ffcc] hover:text-white transition-colors text-2xl active:scale-95 drop-shadow-[0_0_8px_rgba(0,255,2