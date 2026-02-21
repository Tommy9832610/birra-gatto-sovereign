"use client"; // Aggiungiamo questo per sicurezza in Next.js

import React, { useEffect, useRef } from 'react';

const TradingviewChart = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Creiamo lo script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "it",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });

    // Lo attacchiamo
    if (container.current) {
      container.current.appendChild(script);
    }

    // --- QUESTA È LA PARTE CHE TOGLIE L'AVVISO "CALLBACK" ---
    return () => {
      if (container.current) {
        container.current.innerHTML = ''; // Pulisce tutto quando chiudi la pagina
      }
    };
  }, []); // L'array vuoto dice al computer: "Fallo solo una volta all'avvio"

  return (
    <div className="h-full w-full min-h-[500px] bg-black/40 border border-blue-900/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl" ref={container}>
      <div className="tradingview-widget-container__widget h-full w-full"></div>
    </div>
  );
};

export default TradingviewChart;