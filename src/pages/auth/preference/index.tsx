import { Box, FormControlLabel, Radio, Slider } from "@mui/material";
import React, { useState } from "react";
import { RadioButtonUncheckedOutlined } from "@mui/icons-material";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Preference() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    <SectionOne key="1" />,
    <SectionTwo key="2" />,
    <SectionThree key="3" />,
  ];

  

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <main className="bg-[fdfdff] min-h-screen flex flex-col items-center justify-center">
      
      <div className="rounded-3xl shadow-[0_19px_86.9px_0_rgba(149,127,255,0.53)] flex my-16 overflow-hidden w-[1075px] bg-[#FDFDFF] h-[80vh] relative">
        <section className="bg-brand-500 z-10 w-[30rem] px-11 py-4 h-full flex place-items-center">
          <h1 className="text-[#FDFDFF] text-3xl font-semibold leading-snug transition-all duration-300 ease-in-out">
            {currentSlide === 0
              ? "Learning Prefrences"
              : currentSlide === 1
                ? "Study Habits"
                : "Personality & Tone"}
          </h1>
        </section>

        <form
          className="flex flex-col justify-center space-y-2 mx-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full px-7">
                {slide}
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 right-10 ">
            <button
              onClick={() => {
                if (currentSlide < slides.length - 1) {
                  setCurrentSlide((prev) => prev + 1);
                } else {
                  toast.success("Preferences saved successfully!");
                  navigate("/login");
                }
              }}
              className="px-5 py-2 bg-brand-500 text-white w-fit rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
function SectionOne() {
  return (
    <div className="flex flex-col justify-center space-y-2 mx-7">
      <h2 className="text-xl text-dark-950 font-medium">
        What's your preferred way of learning?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Wactching Videos</div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Reading Articles</div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Practising with quizzes
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              group discussions
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              one-on-on explanations
            </div>
          }
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        How do you usually take notes?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Handwritten notes
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Typed notes</div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              I don't take notes
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              i use voice memos
            </div>
          }
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        What time do you fell most focused?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">morning</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Afternoon</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Evening</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Late night</div>}
        />
      </section>
    </div>
  );
}
function SectionTwo() {
  return (
    <div className="flex flex-col justify-center space-y-2 mx-7">
      <h2 className="text-xl text-dark-950 font-medium">
        How long can you study before loosing focus?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Less than 20 minutes{" "}
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">20-40 minutes</div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">1 hour</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Over one hour</div>
          }
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        Whats is your biggest struggle when studying?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Lack of motivation
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Procastination</div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">Time management</div>
          }
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        How often do you procastinate while studying?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Rarely</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Sometimes</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Often</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">All the time</div>
          }
        />
      </section>
    </div>
  );
}
function SectionThree() {
  return (
    <div className="flex flex-col justify-center space-y-2 mx-7">
      <h2 className="text-xl text-dark-950 font-medium">
        What's your current level of education?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">University </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Secondary </div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">Primary</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Professional level
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              one-on-on explanations
            </div>
          }
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        Would you like Simbi to hold you accountable? <br /> (E.g with reminders
        or check-in's)
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">yes</div>}
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={<div className="text-dark-950 cursor-pointer">No</div>}
        />
      </section>
      <h2 className="text-xl text-dark-950 font-medium">
        How should Simbi react if you miss a study session?
      </h2>

      <section className="flex flex-col">
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              send a gentle reminder
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Motivate with a funny message
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Be firm and direct
            </div>
          }
        />
        <FormControlLabel
          // value={item.value}
          control={
            <Radio
              icon={<RadioButtonUncheckedOutlined />}
              className="!text-brand-500"
              size="small"
            />
          }
          label={
            <div className="text-dark-950 cursor-pointer">
              Say nothing i'll catch up on my own
            </div>
          }
        />
      </section>
    </div>
  );
}
