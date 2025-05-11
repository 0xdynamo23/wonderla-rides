import React from "react";

// Three category positions in polar angles (degrees)
const categories = [
  { name: "Land", rides: 74, icon: "https://wonderla.vercel.app/icons/landRides.svg", angle: 225 }, // top
  { name: "Water", rides: 55, icon: "https://wonderla.vercel.app/icons/waterRides.svg", angle: 180 }, // center
  { name: "Kids", rides: 36, icon: "https://wonderla.vercel.app/icons/kidsRides.svg", angle: 135 } // bottom
];
const ARC_HEIGHT = 600;
const ARC_RADIUS = 180;
const ARC_CENTER = { x: 0, y: ARC_HEIGHT / 2 };
const ICON_RADIUS = 250; // slightly inside arc so icons sit on stroke

function getIconXY(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = ARC_CENTER.x - ICON_RADIUS * Math.cos(rad) - 30; // 60/2 for icon size
  const y = ARC_CENTER.y + ICON_RADIUS * Math.sin(rad) - 30;
  return { left: `${x}px`, top: `${y}px` };
}

const CATEGORY_ROT_MAP = {
  "Land": "-rotate-45",
  "Water": "rotate-0",
  "Kids": "rotate-45"
}

const CategorySidebar = ({ selected, onSelect }) => (
  <div className="relative flex flex-col justify-center" style={{ width: 200, minWidth: 200, height: ARC_HEIGHT }}>
    <div className={`bg-[conic-gradient(from_0deg,_rgb(232,233,241)_15deg,_rgb(250,213,0)_65deg,_rgb(250,213,0)_115deg,_rgb(232,233,241)_165deg,_rgb(232,233,241))] w-[600px] aspect-square rounded-full flex items-center justify-center -translate-x-1/2 relative transition-all duration-300 ${CATEGORY_ROT_MAP[selected]}`}>
      <div className="w-[420px] aspect-square bg-[#252f4b] rounded-full absolute"></div>

      <div className="size-[170px] rounded-full bg-[#fad500] flex items-center justify-center absolute translate-x-[255px]">
        <div className="size-[150px] rounded-full bg-white"></div>
      </div>
    </div>

    {categories.map(cat => {
      const pos = getIconXY(cat.angle);
      return (
        <div className="absolute flex gap-8 items-center"
          style={{ ...pos, transition: 'transform 280ms cubic-bezier(.32,.52,0,1), box-shadow .22s' }}
          key={cat.name}
        >
          <button
            onClick={() => onSelect(cat.name)}
            className={`group focus:outline-none transition-all flex flex items-center ${selected === cat.name ? 'z-20 scale-[2]' : 'z-10 scale-150'}`}
            // style={{ ...pos, transition: 'transform 280ms cubic-bezier(.32,.52,0,1), box-shadow .22s' }}
            aria-pressed={selected === cat.name}
          >
            <span
              className={`flex items-center justify-center rounded-full shadow`}
              style={{ width: 68, height: 68, boxShadow: selected === cat.name ? '0 2px 22px 0 #ffe35266' : '0 2px 9px 0 #0001', transition: 'box-shadow 220ms', marginBottom: 2 }}
            >
              <img src={cat.icon} alt={cat.name + " category"} className="w-[34px] h-[34px]" />
            </span>
          </button>
          <div className="translate-x-8 flex flex-col">
            <span className="font-bold text-white text-[1.05rem] mt-[2px] select-none drop-shadow" style={{ fontFamily: 'Montserrat,Poppins,sans-serif' }}>{cat.name}</span>
            <span className="text-[#7d8aff] bg-white/10 px-3 py-[1px] rounded-full text-[13.1px] font-medium min-w-[84px] text-center mt-0.5">{cat.rides} Rides</span>
          </div>
        </div>
      );
    })}
  </div>
);

export default CategorySidebar;
