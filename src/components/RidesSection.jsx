import React, { useRef, useState } from "react";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";
import RideCard from "./RideCard";

const CARDS_ON_SCREEN = 3;
const CARD_WIDTH = 250; // Width of each card in pixels

const RidesSection = ({ ridesData, onExplore }) => {
  const [category, setCategory] = useState("Land");
  const rides = ridesData.filter(r => r.category === category);
  const [startIdx, setStartIdx] = useState(0);

  const maxStart = Math.max(0, rides.length - CARDS_ON_SCREEN);
  const cardContainerRef = useRef(null);
  const handlePrev = () => {
    if (cardContainerRef.current) {
      const rect = cardContainerRef.current.getBoundingClientRect();
      const x = rect.left;
      if (x > 0) {
        cardContainerRef.current.scrollLeft -= CARD_WIDTH + 16;
      } else {
        cardContainerRef.current.scrollLeft = cardContainerRef.current.scrollWidth;
      }
    }
  }
  const handleNext = () => {
    if (cardContainerRef.current) {
      const rect = cardContainerRef.current.getBoundingClientRect();
      const x = rect.left;
      if (x > 0) {
        cardContainerRef.current.scrollLeft -= CARD_WIDTH + 16;
      } else {
        cardContainerRef.current.scrollLeft = cardContainerRef.current.scrollWidth;
      }
    }
  };
  // const showRides = rides.slice(startIdx, startIdx + CARDS_ON_SCREEN);

  return (
    <div className="grid grid-cols-[1fr_2fr] w-full relative" style={{ zIndex: 1 }}>

      <div className="flex items-end justify-start">
        <CategorySidebar selected={category} onSelect={cat => { setStartIdx(0); setCategory(cat); }} />
      </div>
      <div className="">
        <div className="flex items-center justify-between mb-4 pr-8 pt-20">
          <span
            className="font-extrabold text-6xl text-white pb-2"
            style={{ fontFamily: 'Montserrat, Poppins, sans-serif', letterSpacing: '-1px' }}
          >
            OUR ICONIC RIDES
          </span>
          <CarouselControls onPrev={handlePrev} onNext={handleNext} />
        </div>

        <div className="w-full flex items-center justify-end overflow-hidden relative h-[380px]">
          <div className="absolute right-0 w-screen overflow-x-auto hide-scrollbar scroll-smooth" ref={cardContainerRef}>
            <div className="flex gap-8 items-center py-5 justify-start" style={{
              paddingRight: '50px',
              paddingLeft: '250px',
              width: 'calc(100vw - 160px)'
            }}>
              {rides.length === 0 ? (
                <div className="text-white/70 font-medium text-2xl flex items-center px-10">No rides in this category yet.</div>
              ) : (
                rides.map((ride, i) => (
                  <RideCard key={ride.title + i} video={ride.video} {...ride} />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="w-full flex justify-start mt-10 pb-2 pl-[calc(160px+24px+8px)]">
            <button
              className="bg-[#ffe352] hover:bg-[#ffd500] transition-colors duration-200 px-28 py-3 rounded-full font-semibold text-[#334dcf] text-lg shadow-md ml-[-160px] pt-5 items-centre align-middle"
              onClick={() => onExplore && onExplore()}
            >
              Explore All Rides!
            </button>
          </div>
        </div>
      </div>





    </div>
  );
};

export default RidesSection;
