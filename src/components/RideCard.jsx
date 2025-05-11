import React, { useRef, useEffect } from "react";

const RideCard = ({ video, title, location, description, onDetails }) => (
  <div
    className="group w-[250px] h-[400px] rounded-2xl overflow-hidden shadow-md bg-[#364875] relative flex flex-col justify-end cursor-pointer transition-transform duration-200 shrink-0 hover:shadow-2xl"
    style={{
      fontFamily: 'Montserrat, Poppins, sans-serif',
      borderRadius: 28,
      boxShadow: '0 8px 32px rgba(31,40,63,0.13)'
    }}
  >
    {/* Ride Video */}
    <video
      src={video}
      alt={title}
      className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300"
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Overlay for darken & gradient at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/7 to-transparent z-10" />
    <div className="relative z-20 flex flex-col justify-end gap-1 p-5">
      <div>
        <div
          className="text-white font-extrabold text-xl mb-1 leading-tight tracking-wide"
          style={{
            fontSize: '1.36rem',
            letterSpacing: '0.01em'
          }}
        >
          {title}
        </div>
        <div
          className="text-[#ffe352] text-xs font-semibold mb-1.5 uppercase tracking-wider"
          style={{
            fontSize: '0.82rem'
          }}
        >
          {location}
        </div>
        <div
          className="text-white/90 text-[15px] mb-4 min-h-[2.7em] font-medium leading-snug"
          style={{
            fontFamily: 'Montserrat, Poppins, sans-serif'
          }}
        >
          {description}
        </div>
      </div>
      <button
        onClick={onDetails}
        className="bg-[#ffe352] text-[#252f4b] font-bold px-6 py-1.5 rounded-md mt-auto w-fit shadow hover:bg-[#ffd700] focus:bg-[#ffd500] active:scale-95 transition text-sm"
        style={{ fontFamily: 'inherit' }}
      >
        RIDE DETAILS
      </button>
    </div>
  </div>
);

export default RideCard;
