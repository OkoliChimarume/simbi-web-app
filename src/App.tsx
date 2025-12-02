import { Suspense } from "react";
import AllRoutes from "./routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-96">
          {/* Loading Spinner */}
        </div>
      }
    >
      <AllRoutes />
    </Suspense>
  );
}

export default App;
