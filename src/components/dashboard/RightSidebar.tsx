import { Bell, ChevronDown, MoreVertical } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="w-80 bg-white p-6 border-l border-gray-100 hidden xl:block overflow-y-auto h-screen fixed right-0 top-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <Bell className="text-gray-400" size={24} />
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="flex items-center gap-3 bg-[#F3F0FF] p-2 pr-4 rounded-xl cursor-pointer">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
             {/* Placeholder for user avatar */}
             <img src="/sitting-simbi.png" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#1A163F]">Grace Fernandes</div>
            <div className="text-xs text-[#7B61FF]">Basic Plan</div>
          </div>
          <ChevronDown size={16} className="text-gray-400 ml-2" />
        </div>
      </div>

      {/* Rewards and Milestones */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#1A163F] mb-4">Rewards and Milestones</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Current NFT Badge */}
          <div className="bg-[#F3F0FF] p-4 rounded-2xl relative overflow-hidden">
            <div className="text-xs font-bold text-[#1A163F] mb-2 relative z-10">Current<br/>NFT<br/>badge</div>
            <div className="absolute right-0 bottom-0 w-16 h-16">
                 <img src="/sitting-simbi.png" alt="Badge" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Rewards Earned */}
          <div className="bg-[#F3F0FF] p-4 rounded-2xl relative overflow-hidden">
            <div className="text-xs font-bold text-[#1A163F] mb-2 relative z-10">Rewards Earned<br/>(token)</div>
            <div className="flex items-end justify-between mt-4">
                <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white text-xs">
                    🪙
                </div>
                <span className="text-2xl font-bold text-[#7B61FF]">15</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Milestones completed */}
          <div className="bg-[#F3F0FF] p-4 rounded-2xl">
            <div className="text-xs font-bold text-[#1A163F] mb-4">Milestones<br/>completed</div>
            <div className="text-right text-2xl font-bold text-[#7B61FF]">12</div>
          </div>
          
          {/* Active Plans */}
          <div className="bg-[#F3F0FF] p-4 rounded-2xl">
            <div className="text-xs font-bold text-[#1A163F] mb-4">Active Plans</div>
            <div className="text-right text-2xl font-bold text-[#7B61FF]">10</div>
          </div>
        </div>
      </div>

      {/* Simbi's Study Tips */}
      <div className="mb-8 border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-[#1A163F] text-sm">Simbi's Study tips</h3>
            <MoreVertical size={16} className="text-gray-300" />
        </div>
        <div className="bg-[#FAFAFA] rounded-xl p-3">
            <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-[#7B61FF] font-medium">Study Session</span>
                <span className="text-[10px] text-gray-400">9min ago</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
                I set a timer for your study session. Try not to wander off into TikTok land again.
            </p>
        </div>
      </div>

      {/* Study Consistency */}
      <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#1A163F]">Study Consistency</h2>
            <div className="flex gap-2 text-[10px]">
                <span className="text-gray-400">Day</span>
                <span className="text-[#7B61FF] font-medium">Week</span>
                <span className="text-gray-400">Month</span>
            </div>
        </div>
        
        <div className="bg-[#FAFAFA] rounded-2xl p-4 h-48 relative">
             <div className="text-xs text-gray-400 mb-2">Hours</div>
             {/* Simple SVG Chart */}
             <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="300" y2="0" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="25" x2="300" y2="25" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="75" x2="300" y2="75" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="#E5E7EB" strokeWidth="1" />

                {/* Area Path */}
                <path 
                    d="M0,20 Q50,30 75,80 T150,50 T225,30 T300,60 V100 H0 Z" 
                    fill="#E0E7FF" 
                    opacity="0.5"
                />
                {/* Line Path */}
                <path 
                    d="M0,20 Q50,30 75,80 T150,50 T225,30 T300,60" 
                    fill="none" 
                    stroke="#7B61FF" 
                    strokeWidth="2"
                />
                
                {/* Point */}
                <circle cx="150" cy="50" r="4" fill="#7B61FF" />
                
                {/* Label */}
                <text x="150" y="40" textAnchor="middle" fontSize="10" fill="#7B61FF">6hr 30m</text>
             </svg>
             
             <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tues</span>
                <span>Wed</span>
                <span>Thurs</span>
                <span>Fri</span>
                <span>Sat</span>
             </div>
        </div>
      </div>
    </div>
  );
}
