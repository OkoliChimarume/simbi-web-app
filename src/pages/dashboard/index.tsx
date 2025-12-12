import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StudyStreak from "../../components/dashboard/StudyStreak";
import ProductivityScorecard from "../../components/dashboard/ProductivityScorecard";
import ActiveStudyPlan from "../../components/dashboard/ActiveStudyPlan";
import RightSidebar from "../../components/dashboard/RightSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="flex-1 pr-0 xl:pr-80">
        <div className="max-w-5xl mx-auto">
          <WelcomeBanner />
          <StudyStreak />
          <ProductivityScorecard />

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#1A163F]">
                Active Study Plan
              </h2>
              <div className="text-[#7B61FF] text-sm font-medium cursor-pointer">
                View All
              </div>
            </div>
            {/* Note: ActiveStudyPlan component has its own header, I might have duplicated it. 
                 Let's check ActiveStudyPlan content. 
                 Yes, it has a header. I should remove the header here or there.
                 I'll just render the component as it handles its own layout.
             */}
          </div>
          {/* Actually, looking at my previous step, ActiveStudyPlan HAS the header inside it. 
              So I should just render <ActiveStudyPlan />.
              Wait, I added a wrapper div above with a header. I should remove that wrapper.
          */}

          <ActiveStudyPlan />
        </div>
      </div>

      <RightSidebar />
    </div>
  );
}
