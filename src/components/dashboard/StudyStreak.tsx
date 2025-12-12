import { MoreVertical } from "lucide-react";

export default function StudyStreak() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-[#1A163F] mb-4">Study Streak</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Consecutive Days */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-gray-500 text-sm mb-1">Consecutive Days</div>
          <div className="text-2xl font-bold text-[#1A163F] flex items-center gap-2">
            5 <span className="text-2xl">🔥</span>
          </div>
        </div>

        {/* Simbi's Mood */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-gray-500 text-sm mb-1">Simbi's Mood</div>
          <div className="text-2xl font-bold text-[#1A163F]">Happy</div>
        </div>

        {/* Weekly Goal */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-500 text-sm mb-1">Weekly goal</div>
              <div className="text-2xl font-bold text-[#1A163F]">5 milestones</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
