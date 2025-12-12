import { Search } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Banner */}
      <div className="bg-[#F3F0FF] rounded-3xl p-8 relative overflow-hidden flex items-center min-h-[240px]">
        <div className="max-w-lg z-10">
          <h1 className="text-4xl font-bold text-[#1A163F] mb-2">Welcome back</h1>
          <p className="text-[#1A163F] text-lg mb-6">
            I'm Simbi, ready to learn and have fun?
          </p>
          <button className="bg-[#7B61FF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#6A51E0] transition-colors">
            Generate a new Study Plan
          </button>
        </div>
        
        {/* Illustration */}
        <div className="absolute right-8 bottom-0 md:right-16">
            {/* Using the same image as in the sidebar/signup for now, assuming it's the character */}
            <img src="/sitting-simbi.png" alt="Simbi Character" className="h-64 object-contain" />
        </div>
      </div>
    </div>
  );
}
