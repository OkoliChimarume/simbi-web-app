import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Grid,
  Calendar,
  Clock,
  Trophy,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Grid, label: "Study plans", path: "/study-plans" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: Clock, label: "Milestone", path: "/milestone" },
  { icon: Trophy, label: "Rewards", path: "/rewards" },
  { icon: BookOpen, label: "Resources", path: "/resources" },
  { icon: Settings, label: "Setting", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#1A163F] text-white h-screen flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-8 flex items-center gap-3">
        {/* Logo Placeholder - replacing with text/icon if image not available immediately, 
            but design shows a specific logo. I'll use a text fallback for now or the image if I can find it. 
            The previous file view showed 'sitting-simbi.png' but that's likely for the welcome screen.
            I'll just use text 'SIMBI' with an icon for now. */}
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
             <img src="/simbi_logo.png" alt="Simbi" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
        <span className="text-2xl font-bold">SIMBI</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-white/10 text-[#FFD700] font-medium" // Active state with yellow dot indicator logic handled via CSS or just style
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-[#FFD700] rounded-full" />
              )}
            </Link>
          );
        })}
        
        <button className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white w-full mt-4">
            <LogOut size={20} />
            <span>Log out</span>
        </button>
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-[#2D2858] rounded-2xl p-4 relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -right-2 -top-2 w-16 h-16 bg-[#4B4685] rounded-full opacity-50 blur-xl"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 relative">
                     {/* Placeholder for the girl image in the sidebar card */}
                     <img src="/sitting-simbi.png" alt="Upgrade" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[#FFD700] font-bold mb-1">Upgrade your plan</h3>
                <p className="text-xs text-gray-300 mb-3">Connect Telegram bot, wallet, join study groups</p>
                <button className="bg-[#38BDF8] text-white text-sm font-medium py-2 px-4 rounded-lg w-full hover:bg-[#38BDF8]/90 transition-colors">
                    Sync Telegram
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
