import React, { useState, useEffect } from 'react';
import { Radar, Activity } from 'lucide-react';
interface Signal {
  id: number;
  pair: string;
  amount: string;
  type: string;
  distance: number;
  angle: number;
}
const WhaleRadar = () => {
  const [signals, setSignals] = useState([] as Signal[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSignal = {
        id: Date.now(),
        pair: 'BTC/USDT',
        amount: (Math.random() * 5 + 1).toFixed(2) + 'M',
        type: Math.random() > 0.5 ? 'BUY' : 'SELL',
        distance: Math.floor(Math.random() * 80) + 10,
        angle: Math.floor(Math.random() * 360),
      };
      setSignals(prev => [newSignal, ...prev].slice(0, 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-black/40 border border-blue-900/30 rounded-3xl backdrop-blur-xl shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-blue-500">
          <Radar size={20} className="animate-pulse" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Deep Sea Radar</h2>
        </div>
        <div className="px-2 py-1 bg-blue-900/20 rounded-full border border-blue-500/30 text-[10px] text-blue-400 font-mono">LIVE FEED</div>
      </div>
      <div className="relative aspect-square w-full rounded-full border-2 border-blue-900/20 flex items-center justify-center overflow-hidden">
        <div className="absolute w-1/2 h-1/2 origin-bottom-right bottom-1/2 right-1/2 bg-gradient-to-tr from-transparent to-blue-500/20 border-r border-blue-400/30 animate-spin" style={{animationDuration: '4s'}} />
        {signals.map((s) => (
      <div key={s.id} className={`absolute w-3 h-3 rounded-full blur-[2px] animate-ping ${s.type === 'BUY' ? 'bg-green-400' : 'bg-red-400'}`}
              style={{ transform: `rotate(${s.angle}deg) translate(${s.distance}px)` }}
            />
          ))}
        <Activity className="text-blue-500/40" size={40} />
      </div>
    </div>
  );
};

export default WhaleRadar;