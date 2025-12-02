import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="bg-gradient-to-t from-[#E1BC80] to-[#957FFF] min-h-screen flex items-center justify-center">
      <div className="rounded-3xl shadow-[0_19px_86.9px_0_rgba(149,127,255,0.53)] flex flex-col my-16 overflow-hidden max-w-[1075px] bg-[#FDFDFF]">
        <Outlet />
      </div>
    </main>
  );
}
