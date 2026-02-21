"use client";
import React from 'react';
import WhaleRadar from './components/WhaleRadar';
import SecurityAudit from './components/SecurityAudit';
import SecureVault from './components/SecureVault';
import TradingviewChart from './components/TradingviewChart';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* HEADER TATTICO */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-blue-900/20">
              P
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase">
              Predator <span className="text-blue-500">v23.1</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-[10px] font-mono text-green-500 font-bold uppercase">System_Online</span>
            </div>
            <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
              8700K_POWERED
            </span>
          </div>
        </div>
      </header>

      {/* GRID LAYOUT PER PC (Responsive) */}
      <div className="max-w-6xl mx-auto p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLONNA SINISTRA: Grafico e Radar */}
          <div className="lg:col-span-8 space-y-8">
            <section className="group">
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 ml-2">Market Real-Time Feed</h2>
              <TradingViewChart />
            </section>
            
            <section>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 ml-2">Deep Water Detection</h2>
              <WhaleRadar />
            </section>
          </div>

          {/* COLONNA DESTRA: Sicurezza e Vault */}
          <div className="lg:col-span-4 space-y-8">
            <section>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 ml-2">System Integrity</h2>
              <SecurityAudit />
            </section>

            <section>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 ml-2">Encrypted Storage</h2>
              <SecureVault />
            </section>
          </div>

        </div>
      </div>

      {/* FOOTER HACKER STYLE */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[9px] text-gray-600 font-mono tracking-[0.5em] uppercase">
          Birra Gatto Sovereign Ecosystem // AES-256 Verified
        </p>
      </footer>
    </main>
  );
}