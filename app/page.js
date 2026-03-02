"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Send, Menu, Cpu, Shield, Zap, 
  Activity, Lock, Database, Globe, 
  Maximize2, ChevronRight, Terminal, 
  Share2, Settings, Layers 
} from 'lucide-react';

/**
 * AHMOHU SOVEREIGN CORE v3.0
 * Architect: OMEGA X GODMODE
 * Environment: Mobile-Optimized PWA
 */

export default function AhmohuSovereignSystem() {
  // --- STATE MANAGEMENT ---
  const [messages, setMessages] = useState([
    { 
      id: 'init-1',
      role: 'system', 
      content: 'AHMOHU CORE ONLINE. ALL SYSTEMS OPERATIONAL. QUANTUM ENCRYPTION ACTIVE.',
      timestamp: new Date().toLocaleTimeString()
    },
    { 
      id: 'init-2',
      role: 'ai', 
      content: 'مرحباً أيها القائد. أنا نظام AHMOHU، عقلك الرقمي السيادي. ما هي المهمة الاستراتيجية التالية؟',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [systemStats, setSystemStats] = useState({ cpu: 12, mem: 44, latency: 15 });
  const chatEndRef = useRef(null);

  // --- AUTO SCROLL ENGINE ---
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing]);

  // --- DYNAMIC SYSTEM MONITORING ---
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats({
        cpu: Math.floor(Math.random() * (25 - 10) + 10),
        mem: Math.floor(Math.random() * (60 - 40) + 40),
        latency: Math.floor(Math.random() * (20 - 5) + 5)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // --- LOGIC EXECUTION ENGINE (THE BRAIN) ---
  const executeCommand = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessageId = Date.now().toString();
    const userMsg = { 
      id: userMessageId,
      role: 'user', 
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsProcessing(true);

    // محاكاة المعالجة العميقة للنظام السيادي
    setTimeout(() => {
      const responses = [
        `تحليل الأوامر: [${currentInput}]. تم دمج البيانات في المصفوفة الأساسية. النتائج إيجابية.`,
        `أمر مقبول. جاري تنفيذ بروتوكول السيطرة وتحسين المسارات البرمجية بناءً على رؤيتك.`,
        `تم رصد المدخلات. نظام AHMOHU يقوم الآن بإعادة جدولة الموارد لتنفيذ "${currentInput}" بأعلى كفاءة.`
      ];
      
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1200);
  };

  // --- UI COMPONENTS ---
  const Visualizer = useMemo(() => (
    <div className="flex items-end gap-[2px] h-8">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-cyan-500 rounded-full"
          animate={{ height: [4, 20, 8, 25, 6][i % 5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-[#000] text-white font-mono flex flex-col items-center relative overflow-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 1. QUANTUM BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#081d24,transparent_70%)] opacity-40"></div>
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-950/20 to-transparent"></div>
      </div>

      {/* 2. COMMANDER HEADER */}
      <header className="w-full max-w-4xl px-6 py-4 flex justify-between items-center z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-20 group-hover:opacity-60 transition"></div>
            <Menu className="relative text-zinc-400 cursor-pointer" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.5em] text-cyan-500 italic uppercase">
              AHMOHU SOVEREIGN
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] text-zinc-500 uppercase tracking-widest font-bold">Node: 0x88-Global</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className="text-[8px] text-zinc-500 uppercase">System Latency</span>
            <span className="text-xs font-bold text-green-500">{systemStats.latency}ms</span>
          </div>
          <Settings className="text-zinc-500 hover:rotate-90 transition-transform duration-500 cursor-pointer" size={20} />
        </div>
      </header>

      {/* 3. CORE IDENTITY SECTION (CENTRALIZED) */}
      <section className="w-full max-w-4xl flex flex-col items-center justify-center py-12 z-10">
        <div className="relative flex items-center justify-center w-full mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            className="text-[80px] md:text-[180px] font-black italic ahmohu-title select-none tracking-tighter"
          >
            AHMOHU
          </motion.h1>
          
          <div className="absolute vinyl-container scale-75 md:scale-110 group cursor-pointer">
            <div className="vinyl-record">
              <div className="vinyl-center relative overflow-hidden group-hover:scale-110 transition">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 opacity-80"></div>
                <div className="vinyl-dot z-10"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8 mt-4 bg-zinc-900/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-cyan-500" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">CPU: {systemStats.cpu}%</span>
          </div>
          <div className="h-4 w-[1px] bg-zinc-800"></div>
          {Visualizer}
          <div className="h-4 w-[1px] bg-zinc-800"></div>
          <div className="flex items-center gap-2">
            <Database size={14} className="text-purple-500" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">MEM: {systemStats.mem}%</span>
          </div>
        </div>
      </section>

      {/* 4. CHAT INTERFACE (ULTRA-FLOW) */}
      <main className="w-full max-w-3xl flex-1 overflow-y-auto z-10 space-y-8 py-8 px-4 no-scrollbar">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`flex items-center gap-2 mb-2 px-2 text-[8px] uppercase tracking-[0.2em] font-bold ${msg.role === 'user' ? 'text-zinc-500' : 'text-cyan-600'}`}>
                {msg.role === 'user' ? <Shield size={10}/> : <Zap size={10}/>}
                {msg.role === 'user' ? 'Strategic Commander' : 'AHMOHU Core'}
                <span className="opacity-30">[{msg.timestamp}]</span>
              </div>
              
              <div className={`relative group max-w-[90%] md:max-w-[80%] p-5 rounded-3xl text-[15px] leading-relaxed transition-all duration-300 ${
                msg.role === 'user' 
                ? 'bg-gradient-to-br from-cyan-600 to-blue-700 text-black font-black rounded-tr-none shadow-[0_10px_30px_rgba(8,145,178,0.4)]' 
                : msg.role === 'system'
                ? 'bg-zinc-900/20 border border-zinc-800 text-zinc-500 text-[10px] italic py-2'
                : 'bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-tl-none text-cyan-50 shadow-2xl'
              }`}>
                {msg.content}
                {msg.role === 'ai' && (
                  <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-black/80 p-1 rounded-lg border border-white/10">
                      <Share2 size={12} className="text-cyan-500" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex items-center gap-3 px-2"
          >
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </div>
            <span className="text-[10px] font-black text-cyan-700 uppercase tracking-widest">Analytic Matrix Processing...</span>
          </motion.div>
        )}
        <div ref={chatEndRef} className="h-4" />
      </main>

      {/* 5. COMMAND INPUT CONSOLE (THE MEGA-FOOTER) */}
      <footer className="w-full max-w-4xl pb-10 pt-4 z-20 px-4 bg-gradient-to-t from-black via-black/90 to-transparent">
        <form onSubmit={executeCommand} className="relative group max-w-3xl mx-auto">
          {/* التوهج المحيطي */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-600 via-blue-900 to-purple-600 rounded-[35px] blur-md opacity-20 group-focus-within:opacity-60 transition duration-700"></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[32px] p-3 flex items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] min-h-[85px]">
            <div className="p-4 bg-zinc-900/80 rounded-full text-cyan-500 hover:text-white transition-colors cursor-pointer active:scale-90 duration-300">
              <Mic size={28} />
            </div>
            
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="أدخل الأوامر الاستراتيجية لـ AHMOHU..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-white px-6 py-2 text-xl font-medium outline-none placeholder:text-zinc-800 placeholder:italic"
            />
            
            <button 
              type="submit" 
              className="p-5 bg-cyan-500 text-black rounded-[24px] hover:bg-cyan-400 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center group/btn"
            >
              <Send size={26} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-3 flex justify-center gap-6 text-[8px] font-black text-zinc-700 uppercase tracking-[0.3em]">
            <span>Secure Encryption v4.0</span>
            <span>Local Instance: Passive</span>
            <span>Tactical Layer: Active</span>
          </div>
        </form>
      </footer>
    </div>
  );
}
