import { BookOpen, Calendar, Edit3, MoreVertical } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "Reading - Chemistry",
    time: "01:00 PM - 02:00 PM",
    icon: BookOpen,
    color: "bg-[#FCE7F3]", // pink-100ish
    iconColor: "text-[#DB2777]", // pink-600
  },
  {
    id: 2,
    title: "Test - Mathematics",
    time: "01:00 PM - 02:00 PM",
    icon: Edit3, // pencil icon
    color: "bg-[#DCFCE7]", // green-100ish
    iconColor: "text-[#16A34A]", // green-600
  },
  {
    id: 3,
    title: "Reading - Biology",
    time: "01:00 PM - 02:00 PM",
    icon: Edit3, // pencil icon
    color: "bg-[#FEF3C7]", // yellow-100ish
    iconColor: "text-[#D97706]", // yellow-600
  },
  {
    id: 4,
    title: "Reading - Physics",
    time: "01:00 PM - 02:00 PM",
    icon: Edit3,
    color: "bg-[#F3F4F6]", // gray-100
    iconColor: "text-[#4B5563]", // gray-600
  },
];

export default function ActiveStudyPlan() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#1A163F]">Active Study Plan</h2>
        <div className="flex items-center gap-4">
          <button className="text-[#7B61FF] text-sm font-medium hover:underline">
            View All
          </button>
          <div className="text-[#7B61FF] text-sm font-medium flex items-center gap-1">
            <Calendar size={16} />
            <span>Today, 23 April 2025</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 rounded-xl flex items-center justify-between ${
              // Using a very light background for the card itself, slightly different from the icon bg if needed,
              // but design shows the whole card has a tint.
              // Let's use a generic light gray or white for the card and the specific color for the icon box.
              // Actually design shows the whole card is tinted.
              // Let's map the card bg to the plan color but lighter?
              // The design shows cards have distinct background colors.
              // I'll use the color prop for the card background.
              plan.color
            } bg-opacity-30`} // Making it lighter
            style={{
              backgroundColor:
                plan.color === "bg-[#FCE7F3]"
                  ? "#FFF0F7"
                  : plan.color === "bg-[#DCFCE7]"
                    ? "#F0FDF4"
                    : plan.color === "bg-[#FEF3C7]"
                      ? "#FFFBEB"
                      : "#F3F4F6",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-lg ${plan.color} flex items-center justify-center ${plan.iconColor}`}
              >
                <plan.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-[#1A163F] text-sm">
                  {plan.title}
                </h3>
                <p className="text-xs text-gray-400">{plan.time}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
