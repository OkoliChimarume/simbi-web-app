import React from "react";

export default function SignUpComponent(props: {
  title: string;
  isSignUp?: boolean;
}) {
  const { title, isSignUp } = props;
  return (
    <div
      className={`bg-[#E4DFFF] flex flex-col items-center justify-center p-8 md:p-12 text-center gap-8 ${isSignUp ? "h-[70vh]" : "h-[65vh]"}`}
    >
      <h1 className="text-4xl md:text-5xl font-medium leading-[58px] tracking-[-4%]">
        {title}
        <span className="text-brand-500 font-bold">
          <br /> SIMBI
        </span>
      </h1>

      <img
        src="/sitting-simbi.png"
        alt="Simbi"
        className="w-48 h-48 md:w-[215px] md:h-[293px] object-contain"
      />
    </div>
  );
}
