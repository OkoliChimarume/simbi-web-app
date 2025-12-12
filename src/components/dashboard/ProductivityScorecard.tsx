import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductivityScorecard() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#1A163F]">Productivity Scorecard</h2>
        <div className="flex gap-4 text-sm">
          <span className="text-gray-400 cursor-pointer hover:text-[#7B61FF]">Day</span>
          <span className="text-[#7B61FF] font-medium cursor-pointer">Week</span>
          <span className="text-gray-400 cursor-pointer hover:text-[#7B61FF]">Month</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Study Hours */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <h3 className="font-bold text-[#1A163F] mb-4">Study Hours</h3>
          
          {/* Semi-circle Gauge */}
          <div className="relative w-32 h-16 mb-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-gray-100 box-border"></div>
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-transparent border-t-[#4F46E5] border-r-[#4F46E5] box-border rotate-[-45deg]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-[#1A163F]">40</div>
          </div>
          
          <div className="text-sm font-bold text-[#1A163F] mb-1">Great Job!</div>
          <p className="text-xs text-gray-500 mb-4">Optimize your study hours</p>
          
          <button className="bg-[#F3F0FF] text-[#7B61FF] text-xs font-medium py-2 px-6 rounded-lg hover:bg-[#EBE5FF] transition-colors">
            Tips
          </button>
        </div>

        {/* Study Session */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-300 cursor-pointer">
                <ChevronLeft size={20} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 cursor-pointer">
                <ChevronRight size={20} />
            </div>

          <h3 className="font-bold text-[#1A163F] mb-4">Study Session</h3>
          
          {/* Full Circle Gauge */}
          <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#F3F4F6"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#FFC107"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset="60" 
              />
            </svg>
            <span className="absolute text-2xl font-bold text-[#1A163F]">05</span>
          </div>
          
          <div className="text-sm font-medium text-[#1A163F] mb-4">Focus Time</div>
        </div>

        {/* Rating */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <h3 className="font-bold text-[#1A163F] mb-4">Rating</h3>
          
          {/* Semi-circle Gauge */}
          <div className="relative w-32 h-16 mb-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-gray-100 box-border"></div>
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-transparent border-t-[#4F46E5] border-r-[#4F46E5] box-border rotate-[-45deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
             {/* Custom arc logic simplified for CSS, using a simpler approach for the visual */}
             <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-gray-100"></div>
             <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-[#4F46E5] border-b-transparent border-l-transparent rotate-[135deg]"></div>
             
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E0E7FF] rounded-full flex items-center justify-center text-[#4F46E5]">
                <span className="text-lg">😊</span>
             </div>
          </div>
          
          <div className="text-sm font-bold text-[#1A163F] mb-1">72% Brainpower</div>
          <p className="text-xs text-gray-500 mb-4">Keep it up!</p>
          
          <button className="bg-[#F3F0FF] text-[#7B61FF] text-xs font-medium py-2 px-6 rounded-lg hover:bg-[#EBE5FF] transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
