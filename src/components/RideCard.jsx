import React from "react";

const RideCard = ({ video, title, location, description, onDetails }) => (
  <div
    className="group w-[250px] h-[400px] overflow-hidden shadow-md bg-[#364875] relative flex flex-col justify-end cursor-pointer transition-transform duration-200 shrink-0 hover:shadow-2xl rounded-[40px]"
  >
    <video
      src={video}
      alt={title}
      className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
    
    <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#364875] via-[#364875]/70 to-transparent z-10 opacity-60" />
    
    <div className="relative z-20 flex flex-col justify-end gap-1 p-4 mt-auto pb-5">
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
          className="text-white/90 text-xs mb-3 min-h-[2.2em] font-medium leading-snug line-clamp-2"
          style={{
            fontFamily: 'Montserrat, Poppins, sans-serif'
          }}
        >
          {description}
        </div>
      </div>
      <button
        onClick={onDetails}
        className="bg-[#FAD504] text-[#334DCF] font-semibold px-8 py-3 rounded-md mt-1 w-fit shadow hover:bg-[#ffd700] focus:bg-[#ffd500] active:scale-95 transition text-xs uppercase"
        style={{ fontFamily: 'inherit' }}
      >
        RIDE DETAILS
      </button>
    </div>
  </div>
);

export default RideCard;
