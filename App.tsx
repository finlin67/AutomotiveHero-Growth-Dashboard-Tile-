import React from 'react';
import { 
  Car, 
  Search, 
  Bell, 
  User, 
  Calendar, 
  Download, 
  BarChart3,
  List,
  Target,
  Megaphone
} from 'lucide-react';
import FleetTile from './components/FleetTile';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f8f8] dark:bg-[#101d22] font-sans text-white antialiased">
      
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-white/10 bg-[#101d22]/80 px-4 md:px-10 py-3 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-[#13b6ec]">
            <Car size={32} className="font-bold" />
            <h2 className="text-white text-lg font-extrabold tracking-tight hidden sm:block">AutomotiveHero</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[#13b6ec] text-sm font-semibold border-b-2 border-[#13b6ec] pb-1">Growth Path</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Inventory</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Lead Analytics</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Marketing</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className="bg-white/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-[#13b6ec] w-64 text-white placeholder-white/30 outline-none transition-all focus:bg-white/10"
            />
          </div>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
            <Bell className="text-white/70" size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#13b6ec] rounded-full border border-[#101d22]"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-[#13b6ec]/20 border border-[#13b6ec]/40 flex items-center justify-center cursor-pointer hover:bg-[#13b6ec]/30 transition-colors">
            <User className="text-[#13b6ec]" size={16} />
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 md:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Growth Dashboard</h1>
              <p className="text-white/50 text-base mt-1">Real-time Lead Journey & Revenue Trajectory</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-white/10">
                <Calendar size={16} />
                Last 30 Days
              </button>
              <button className="flex items-center gap-2 bg-[#13b6ec] hover:bg-[#13b6ec]/90 text-[#101d22] px-4 py-2 rounded-lg text-sm font-bold transition-all">
                <Download size={16} />
                Export Report
              </button>
            </div>
          </div>

          {/* Main Component: 1:1 Growth Animation Section */}
          <div className="flex flex-col items-center justify-center py-4">
             {/* 
                 REPLACED ORIGINAL HTML BLOCK WITH REACT COMPONENT 
                 This component is self-contained in components/FleetTile.tsx
             */}
             <FleetTile />
          </div>

          {/* Footer Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-2">
                 <Megaphone size={14} className="text-white/40" />
                 <p className="text-white/40 text-xs font-bold uppercase">Active Campaigns</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold group-hover:text-[#13b6ec] transition-colors">14 Active</span>
                <div className="h-10 w-20 flex items-end gap-1">
                  <div className="w-2 bg-[#13b6ec]/20 h-4 rounded-sm"></div>
                  <div className="w-2 bg-[#13b6ec]/40 h-6 rounded-sm"></div>
                  <div className="w-2 bg-[#13b6ec]/60 h-8 rounded-sm"></div>
                  <div className="w-2 bg-[#13b6ec] h-10 rounded-sm"></div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
               <div className="flex items-center gap-2 mb-2">
                 <Target size={14} className="text-white/40" />
                 <p className="text-white/40 text-xs font-bold uppercase">Showroom Traffic</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold group-hover:text-[#13b6ec] transition-colors">1,284 Visit</span>
                <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full">+8.2%</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
               <div className="flex items-center gap-2 mb-2">
                 <List size={14} className="text-white/40" />
                 <p className="text-white/40 text-xs font-bold uppercase">Digital Quote Requests</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold group-hover:text-[#13b6ec] transition-colors">452 Leads</span>
                <span className="text-[#13b6ec] text-xs font-bold">On Target</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
               <div className="flex items-center gap-2 mb-2">
                 <BarChart3 size={14} className="text-white/40" />
                 <p className="text-white/40 text-xs font-bold uppercase">Service Retention</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold group-hover:text-[#13b6ec] transition-colors">88.5%</span>
                <span className="text-[#13b6ec] text-xs font-bold bg-[#13b6ec]/10 px-2 py-1 rounded-full">Peak</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Side Decoration (Ambient Glow) */}
      <div className="fixed top-1/4 -right-64 w-96 h-96 bg-[#13b6ec]/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-1/4 -left-64 w-96 h-96 bg-[#13b6ec]/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
}