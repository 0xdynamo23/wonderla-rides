import React, { useRef, useEffect } from "react";

const RideCard = ({ video, title, location, description, onDetails }) => (
  <div
    className="group w-[250px] h-[400px] overflow-hidden shadow-md bg-[#364875] relative flex flex-col justify-end cursor-pointer transition-transform duration-200 shrink-0 hover:shadow-2xl rounded-[40px]"
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
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
    <div className="relative z-20 flex flex-col justify-end gap-1 p-4 mt-auto pb-3">
      <div>
        <div
          className="text-white font-bold text-lg mb-0.5 leading-tight tracking-wide"
          style={{
            fontSize: '1.1rem',
            letterSpacing: '0.01em'
          }}
        >
          {title}
        </div>
        <div
          className="text-gray-300 text-xs font-normal mb-1 tracking-wide"
          style={{
            fontSize: '0.75rem',
            whiteSpace: 'nowrap'
          }}
        >
          {location}
        </div>
        <div
          className="text-white/90 text-xs mb-2 min-h-[2.2em] font-medium leading-snug line-clamp-2"
          style={{
            fontFamily: 'Montserrat, Poppins, sans-serif'
          }}
        >
          {description}
        </div>
      </div>
      <button
        onClick={onDetails}
        className="bg-[#FAD504] text-[#334DCF] font-semibold px-4 py-1.5 rounded-md mt-auto w-fit shadow hover:bg-[#ffd700] focus:bg-[#ffd500] active:scale-95 transition text-xs"
        style={{ fontFamily: 'inherit' }}
      >
        RIDE DETAILS
      </button>
    </div>
  </div>
);

export default RideCard;
