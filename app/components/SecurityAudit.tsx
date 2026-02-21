import React from 'react';
import { ShieldAlert, ExternalLink, Lock } from 'lucide-react';

const SecurityAudit = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-red-500">
          <ShieldAlert className="animate-pulse" size={24} />
          <h3 className="text-sm font-bold uppercase tracking-widest font-mono text-red-400">Security Audit</h3>
        </div>
        <div className="px-2 py-1 bg-red-900/20 rounded-full border border-red-500/30 text-[10px] text-red-500 font-mono animate-pulse">VULNERABILITY DETECTED</div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-red-500/10">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <Lock size={18} className="text-red-500" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Connection Status</p>
            <p className="text-xs text-red-400 font-mono">NO ACTIVE VPN DETECTED - IP EXPOSED</p>
          </div>
        </div>
      </div>

      <a 
        href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=TUO_ID" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/40 group"
      >
        PROTEGGI CONNESSIONE <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      <p className="mt-3 text-[9px] text-center text-gray-600 font-mono uppercase tracking-widest">Sovereign Encryption Level: Zero</p>
    </div>
  );
};

export default SecurityAudit;