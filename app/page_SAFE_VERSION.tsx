"use client";
import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function PredatorSovereign() {
  const [activeCard, setActiveCard] = useState<string | null>('trade');
  const [prices, setPrices] = useState({ BTC: "...", ETH: "...", SOL: "..." });
  const [ipData, setIpData] = useState({ ip: "ANALIZZANDO...", status: "VULNERABILE", color: "#ff4444" });
  const [stakingAmt, setStakingAmt] = useState(1000);
  const [showMatrix, setShowMatrix] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- LOGICA PREZZI E IP ---
  useEffect(() => {
    const updateData = async () => {
      try {
        const coins = ['BTC', 'ETH', 'SOL'];
        const newPrices: any = {};
        for (const c of coins) {
          const r = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${c}USDT`).then(res => res.json());
          newPrices[c] = parseFloat(r.price).toLocaleString();
        }
        setPrices(newPrices);

        const ipRes = await fetch('https://ipapi.co/json/').then(res => res.json());
        const isProtected = ipRes.org?.toLowerCase().includes('vpn') || ipRes.asn?.toLowerCase().includes('nord');
        setIpData({
          ip: ipRes.ip,
          status: isProtected ? "BLINDATO" : "VULNERABILE",
          color: isProtected ? "#00ff41" : "#ff4444"
        });
      } catch (e) { console.error("Update error", e); }
    };

    updateData();
    const interval = setInterval(updateData, 15000);
    return () => clearInterval(interval);
  }, []);

  // --- EFFETTO MATRIX ---
  useEffect(() => {
    if (!showMatrix || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = "01BTCGATTONORD";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [showMatrix]);

  const toggle = (id: string) => setActiveCard(activeCard === id ? null : id);

  return (
    <main className="min-h-screen bg-[#050505] text-[#e0e0e0] p-4 md:p-10 font-sans selection:bg-green-500/30">
      {/* Script Esterno TradingView */}
      <Script src="https://s3.tradingview.com/tv.js" strategy="lazyOnload" />
      
      {/* Sfondo Matrix */}
      <canvas ref={canvasRef} className={`fixed top-0 left-0 z-[-1] ${showMatrix ? 'block' : 'hidden'} pointer-events-none`} />

      <div className="max-w-[550px] mx-auto bg-[#121212]/98 border border-[#222] rounded-[30px] p-6 shadow-[0_30px_100px_rgba(0,0,0,1)] backdrop-blur-xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-[9px] font-black text-[#007bff] uppercase tracking-widest mb-4">
            Official Security Intel: NordVPN
          </div>
          <br />
          <img 
            src="/logo.png" 
            className="w-20 h-20 rounded-full border-2 border-[#f3ba2f] p-1 bg-black mx-auto shadow-[0_0_20px_rgba(243,186,47,0.3)]" 
            alt="Sovereign Logo" 
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80/000000/f3ba2f?text=SOVEREIGN')} 
          />
          <h1 className="text-2xl font-black mt-3 tracking-tighter uppercase">Predator Sovereign <span className="text-[#f3ba2f]">v25.0</span></h1>
          <p className="text-[8px] text-[#444] tracking-[3px] font-mono mt-1">8700K_ULTRA_POWERED // SYSTEM_ONLINE</p>
        </div>

        {/* NEWS SCROLLER */}
        <div className="bg-black text-[#f3ba2f] text-[9px] p-2 rounded-lg mb-4 border border-[#111] overflow-hidden whitespace-nowrap font-mono">
          <div className="inline-block animate-[scroll_30s_linear_infinite]">
            {`> [REPORT]: NordLynx protocol garantisce latenza < 10ms ... [SEC]: Analisi vulnerabilità IP attiva ... [LIVE]: Binance Data Feed OK ... [BLOCK]: Hash verified ...`}
          </div>
        </div>

        {/* RADAR BOX */}
        <div className="relative h-[60px] bg-[radial-gradient(circle,#111,#000)] border border-[#222] rounded-2xl mb-4 overflow-hidden">
          <div className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(0,255,65,0.08))] animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-green-500/40 uppercase tracking-[4px]">Scanning Airspace</div>
        </div>

        {/* REAL-TIME TICKER */}
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
          {Object.entries(prices).map(([coin, price]) => (
            <div key={coin} className="bg-[#000] px-4 py-2 rounded-xl border border-[#222] text-[11px] font-mono flex-shrink-0 shadow-inner">
              <span className="text-[#f3ba2f]">{coin}:</span> ${price}
            </div>
          ))}
        </div>

        {/* STATUS GRID */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-black border border-[#222] p-3 rounded-2xl text-center">
            <div className="text-[7px] text-[#555] uppercase font-bold mb-1">Privacy Score</div>
            <div className="font-mono text-xs font-black" style={{ color: ipData.color }}>{ipData.status}</div>
          </div>
          <div className="bg-black border border-[#222] p-3 rounded-2xl text-center">
            <div className="text-[7px] text-[#555] uppercase font-bold mb-1">Security Level</div>
            <div className="font-mono text-xs font-black" style={{ color: ipData.color }}>{ipData.status === "BLINDATO" ? "MASSIMO" : "CRITICO"}</div>
          </div>
        </div>

        {/* SECTION: TRADING */}
        <div className={`bg-[#111] border border-[#222] rounded-2xl mb-3 overflow-hidden transition-all duration-500 ${activeCard === 'trade' ? 'max-h-[800px]' : 'max-h-[56px]'}`}>
          <div className="p-4 cursor-pointer flex justify-between items-center font-black text-[11px] uppercase" onClick={() => {
            toggle('trade');
            if (activeCard !== 'trade') {
              setTimeout(() => {
                // @ts-ignore
                if (window.TradingView) {
                  new window.TradingView.widget({"autosize":true,"symbol":"BINANCE:BTCUSDT","theme":"dark","container_id":"tv_chart","hide_top_toolbar":true,"interval":"1","style":"1","locale":"it","toolbar_bg":"#000000","hide_legend":true,"backgroundColor":"#000000"});
                }
              }, 200);
            }
          }}>
            <span className="text-[#f3ba2f]">[₿] LIVE MARKET TERMINAL</span>
            <span className="font-mono text-white">${prices.BTC}</span>
          </div>
          <div className="px-5 pb-5">
            <div id="tv_chart" className="h-[280px] rounded-xl overflow-hidden border border-[#222]" />
            <a href="https://www.binance.com/it/register?ref=1218709503" target="_blank" className="block w-full text-center bg-[#f3ba2f] text-black p-4 rounded-xl font-black text-[10px] uppercase mt-4 hover:scale-[1.02] transition-transform">ATTIVA OPERATIVITÀ BINANCE</a>
          </div>
        </div>

        {/* SECTION: NORDVPN */}
        <div className={`bg-[#111] border border-[#222] rounded-2xl mb-3 overflow-hidden transition-all duration-500 ${activeCard === 'sec' ? 'max-h-[800px]' : 'max-h-[56px]'}`}>
          <div className="p-4 cursor-pointer flex justify-between items-center font-black text-[11px] uppercase" onClick={() => toggle('sec')}>
            <span className="text-[#007bff]">[🛡️] GATTO-SHIELD AUDIT</span>
            <span className="text-xs">LOG &gt;</span>
          </div>
          <div className="px-5 pb-5">
            <div className="bg-black p-4 rounded-xl font-mono text-[10px] border border-[#222] leading-relaxed shadow-inner">
              SYSTEM_IP: <span style={{ color: ipData.color }}>{ipData.ip}</span><br />
              ENCRYPTION: <span className="text-red-500">DISABLED (EXPOSED)</span><br />
              TUNNEL: <span className="text-red-500">NONE</span>
            </div>
            <div className="bg-red-500/5 border-l-4 border-red-500 p-4 rounded-r-lg mt-4 text-[10px] text-[#ccc] leading-relaxed">
              <b className="text-white">TECHNICAL VERDICT:</b> Il traffico è attualmente intercettabile. Per operare in sicurezza su Binance, attiva il protocollo <span className="text-[#007bff] font-bold">NordLynx</span>.
            </div>
            <a href="https://nordvpn.com/it/" target="_blank" className="block w-full text-center bg-[#007bff] text-white p-4 rounded-xl font-black text-[10px] uppercase mt-4 shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors">PROTEGGI SESSIONE CON NORDVPN</a>
          </div>
        </div>

        {/* SECTION: UTILITIES */}
        <div className={`bg-[#111] border border-[#222] rounded-2xl mb-3 overflow-hidden transition-all duration-500 ${activeCard === 'util' ? 'max-h-[800px]' : 'max-h-[56px]'}`}>
          <div className="p-4 cursor-pointer flex justify-between items-center font-black text-[11px] uppercase" onClick={() => toggle('util')}>
            <span>[⚙️] SYSTEM UTILITIES</span>
            <span className="text-xs">OPEN &gt;</span>
          </div>
          <div className="px-5 pb-5 text-center">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black/50 p-4 rounded-xl border border-[#222]">
                <label className="text-[7px] text-[#555] uppercase font-bold block mb-2">Staking Yield Calculator</label>
                <input 
                  type="number" 
                  value={stakingAmt} 
                  onChange={(e) => setStakingAmt(Number(e.target.value))}
                  className="w-full bg-[#000] text-[#00ff41] border border-[#333] p-2 rounded-lg text-center font-mono text-sm mb-2"
                />
                <div className="text-[#00ff41] font-mono text-xs font-bold">EST. EARN: ${(stakingAmt * 0.128).toFixed(0)}/YEAR</div>
              </div>
              <button 
                className="w-full border border-[#00ff41] text-[#00ff41] text-[9px] py-3 rounded-xl uppercase font-black tracking-widest hover:bg-green-500/10 transition-colors"
                onClick={() => setShowMatrix(!showMatrix)}
              >
                {showMatrix ? "STOP MATRIX_OVERRIDE" : "START MATRIX_OVERRIDE"}
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-[8px] text-[#222] mt-8 tracking-[2px] font-mono uppercase">
          Commander ID: 1218709503 | Sovereign Engine 2026
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(100%; }
          100% { transform: translateX(-100%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}