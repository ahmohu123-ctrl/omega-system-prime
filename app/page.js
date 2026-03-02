"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Menu, cpu, Shield, Zap } from 'lucide-react';

export default function AhmohuSystem() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'نظام AHMOHU جاهز للعمل. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // التمرير التلقائي للأسفل
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // محاكاة رد الذكاء الاصطناعي
    setTimeout(() => {
      const aiMsg = { role: 'ai', content: `تم تحليل طلبك [${input}] بنجاح. أنا هنا لتنفيذ أوامرك.` };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center relative overflow-hidden px-4">
      
      {/* الخلفية المتحركة (الشبكة) */}
      <div className="bg-grid opacity-20 pointer-events-none"></div>

      {/* الشريط العلوي - Header */}
      <header className="w-full max-w-2xl py-6 flex justify-between items-center z-10 border-b border-white/5">
        <Menu className="text-zinc-500" size={24} />
        <h2 className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase italic">
          AHMOHU CORE v2.5
        </h2>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
      </header>

      {/* الجزء العلوي - الأسطوانة والاسم (توسيط كامل) */}
      <div className="flex flex-col items-center justify-center py-10 z-10">
        <div className="relative flex items-center justify-center">
          <h1 className="text-[60px] md:text-[100px] font-black italic opacity-20 ahmohu-title select-none">
            AHMOHU
          </h1>
          <div className="absolute vinyl-container scale-75 md:scale-100">
            <div className="vinyl-record">
              <div className="vinyl-center">
                <div className="vinyl-dot"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* محلل الصوت */}
        <div className="visualizer-container mt-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      {/* منطقة الشات - Chat Area */}
      <main className="w-full max-w-2xl flex-1 overflow-y-auto z-10 space-y-4 py-4 no-scrollbar">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-cyan-600 text-black font-bold rounded-tr-none shadow-[0_5px_15px_rgba(6,182,212,0.3)]' 
                : 'bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-tl-none text-cyan-50'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && <div className="text-[10px] text-cyan-500 animate-pulse uppercase tracking-widest">Processing...</div>}
        <div ref={chatEndRef} />
      </main>

      {/* شريط الإدخال السفلي - Input Bar (توسيط) */}
      <footer className="w-full max-w-2xl pb-8 pt-4 z-20 bg-gradient-to-t from-black via-black to-transparent">
        <form onSubmit={handleSubmit} className="input-glass rounded-full p-2 flex items-center relative overflow-hidden">
          <div className="p-3 text-cyan-400">
            <Mic size={20} />
          </div>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="تحدث مع نظام AHMOHU..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-white px-2 py-2 text-sm outline-none"
          />
          <button type="submit" className="p-3 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 transition-all">
            <Send size={18} />
          </button>
        </form>
      </header>
    </div>
  );
}
