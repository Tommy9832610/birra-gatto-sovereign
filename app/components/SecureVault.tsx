import React, { useState } from 'react';
import { ShieldCheck, Lock, Unlock, Key, FileText } from 'lucide-react';

const SecureVault = () => {
  const [note, setNote] = useState('');
  const [password, setPassword] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleCrypt = async (action: 'encrypt' | 'decrypt') => {
    if (!password || !note) {
      alert("Inserire sia la Master Key che il testo.");
      return;
    }

    try {
      const encoder = new TextEncoder();
      const digest = await crypto.subtle.digest('SHA-256', encoder.encode(password));
      const key = await crypto.subtle.importKey('raw', digest, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);

      if (action === 'encrypt') {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(note));
        const combined = new Uint8Array(iv.length + new Uint8Array(encrypted).length);
        combined.set(iv);
        combined.set(new Uint8Array(encrypted), 12);
        const base64 = btoa(String.fromCharCode(...combined));
        setNote(base64);
        setIsEncrypted(true);
      } else {
        const data = new Uint8Array(atob(note).split('').map(c => c.charCodeAt(0)));
        const iv = data.slice(0, 12);
        const encryptedContent = data.slice(12);
        const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, encryptedContent);
        setNote(new TextDecoder().decode(decrypted));
        setIsEncrypted(false);
      }
    } catch (e) {
      alert("Errore: Master Key errata o dati corrotti.");
    }
  };

  return (
    <div className="p-6 bg-black border border-blue-900/30 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <ShieldCheck size={100} />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Key size={20} className="text-blue-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Sovereign Vault</h3>
          <p className="text-[9px] text-blue-400/60 font-mono">AES-256 MILITARY GRADE ENCRYPTION</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block ml-1">Master Access Key</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••••••" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50 transition-colors font-mono"
            />
          </div>
        </div>

        <div>
          <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block ml-1">Sensitive Data</label>
          <textarea 
            placeholder="Incolla qui seed phrases, note private o codici..."
            value={note} 
            onChange={e => setNote(e.target.value)}
            className="w-full h-32 bg-gray-900/30 border border-white/5 rounded-2xl p-4 text-xs font-mono text-gray-300 resize-none outline-none focus:border-blue-500/20"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => handleCrypt('encrypt')} 
            className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all text-[11px] uppercase tracking-tighter"
          >
            <Lock size={14} /> Encrypt Data
          </button>
          <button 
            onClick={() => handleCrypt('decrypt')} 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition-all text-[11px] uppercase tracking-tighter shadow-lg shadow-blue-900/20"
          >
            <Unlock size={14} /> Decrypt Data
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[9px] text-gray-600 font-mono italic">LOCAL_STORAGE_ONLY: TRUE</span>
        {isEncrypted && (
          <span className="text-[9px] text-green-500 font-bold animate-pulse">● DATA_ENCRYPTED</span>
        )}
      </div>
    </div>
  );
};

export default SecureVault;