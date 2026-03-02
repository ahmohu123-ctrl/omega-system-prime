"use client";
import React, { useState } from 'react';
import { Send, Mic, MoreHorizontal, Share, Square } from 'lucide-react';

export default function OmegaDashboard() {
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start p-4 md:p-10">
      <div className="cyber-grid"></div>

      {/* الرأس - Header */}
      <header className="w-full max-w-5xl z-10 flex justify-between items-center mb-10">
        <div className="flex items-center gap-2 text-zinc-400">
          <Square size={18} />
          <span className="text-sm font-bold tracking-tighter uppercase">OMEGA X GODMODE SYSTEM</span>
        </div>
        <div className="flex gap-4 text-zinc-500">
          <Share size={20} />
          <MoreHorizontal size={20} />
        </div>
      </header>

      {/* المحتوى الوسطي - أسطوانة وشات */}
      <main className="w-full max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* اليسار: العنوان والأسطوانة */}
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white">
            AHMOHU SOVEREIGN SYSTEM
          </h1>
          
          <div className="relative p-2 rounded-full border border-cyan-500/20 shadow-[0_0_60px_rgba(0,242,255,0.1)]">
            <div className="vinyl-disc">
              <div className="vinyl-center-glow"></div>
            </div>
          </div>
        </div>

        {/* اليمين: معلومات وشات */}
        <div className="flex flex-col gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white">AHMOHU</h3>
            <p className="text-zinc-500 italic text-sm">"Sovereign AI Interface"</p>
            <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mt-2">Active Node: 20-215 Inferiute</p>
          </div>

          <div className="h-[300px] overflow-y-auto space-y-4 pr-4">
            <div className="message-ai p-4 self-start max-w-[80%] text-sm">
              SYSTEM INITIALIZED. CORE ONLINE.
            </div>
            <div className="message-user p-4 self-end ml-auto max-w-[80%] text-sm shadow-[0_5px_15px_rgba(0,132,255,0.3)]">
              EXECUTE DOMINATION PROTOCOL.
            </div>
          </div>
        </div>
      </main>

      {/* شريط الإدخال السفلي - Input */}
      <footer className="fixed bottom-10 w-full max-w-4xl z-20 px-4">
        <div className="glass-input rounded-2xl p-4 flex flex-col gap-4 shadow-2xl">
          <input 
            type="text" 
            placeholder="public/icons dir ./rlt"
            className="bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-700 font-mono text-sm"
          />
          <div className="flex justify-between items-center border-t border-white/5 pt-3">
            <div className="flex gap-4 text-zinc-500">
              <Mic size={20} className="hover:text-cyan-400 cursor-pointer" />
            </div>
            <button className="text-zinc-400 hover:text-white transition">
              <Send size={20} />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-zinc-700 font-mono mt-4 text-center">
           AHMOHU v3.0 // ENCRYPTED SESSION // NO LOGS MAINTAINED
        </p>
      </footer>
    </div>
  );
}
