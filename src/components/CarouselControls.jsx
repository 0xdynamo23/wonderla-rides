import React from "react";

const CarouselControls = ({ onPrev, onNext }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full bg-[#ffe352] flex items-center justify-center hover:scale-110 active:scale-100 transition shadow-lg"
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M21 28L11 16L21 4" stroke="#252f4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full bg-[#ffe352] flex items-center justify-center hover:scale-110 active:scale-100 transition shadow-lg"
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M11 28L21 16L11 4" stroke="#252f4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;
