import React, { useEffect, useState, useRef } from 'react';
import RidesSection from './components/RidesSection';

const MENU_ITEMS = [
  { label: "LOCATIONS", icon: "https://ext.same-assets.com/3163014771/3434962533.svg", href: "#" },
  { label: "OFFERS", icon: "https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75", href: "#" },
  { label: "RIDES", icon: "https://ext.same-assets.com/3163014771/3525134914.webp", href: "#" },
  { label: "RESTAURANTS", icon: "https://ext.same-assets.com/3163014771/3506622605.webp", href: "#" },
  { label: "EVENTS", icon: "https://ext.same-assets.com/3163014771/1102262385.webp", href: "#" }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
      if (desktopMenu && desktopMenuRef.current && !desktopMenuRef.current.contains(e.target as Node)) setDesktopMenu(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, desktopMenu]);

  return (
    <>
      <div className="top-8 left-15 right-15 w-full h-[70px] bg-white/95 border border-zinc-100 rounded-xl mx-auto max-w-[1420px] flex items-center justify-between px-12 py-3 shadow-xl relative z-15"
        style={{fontFamily: 'Montserrat,Poppins,sans-serif', boxShadow:'0 4px 28px 0 rgba(31,40,63,0.06)'}}>
        <img src="https://ext.same-assets.com/3163014771/2180747740.webp" alt="Wonderla Logo" className="h-12 w-auto ml-1" style={{flex:'0 0 auto'}}/>
        <div className="flex-1 flex items-center justify-center gap-4 ml-10 text-[#717D92] font-bold text-[0.8rem] whitespace-nowrap px-2">
          {MENU_ITEMS.map(item => (
            <span className="flex gap-2 items-center cursor-pointer text-black font-extrabold tracking-tightest opacity-90 hover:opacity-100 transition" key={item.label} style={{filter: 'brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)'}}>
              <img src={item.icon} className="h-5 w-5" alt={item.label} />
              {item.label}
            </span>
          ))}
        </div>
        <button className="bg-[#FAD600] px-2.5 py-2.5 rounded-lg font-extrabold text-[#334DCF] text-xs transition hover:bg-[#ffe352]/90 border ml-2 mr-2 flex items-center gap-1">
          BOOK TICKETS
          <img src="https://wonderla.vercel.app/icons/tickets.svg" className="h-[12px]" alt="icon" />
        </button>
        <div className="ml-2 pr-1 hidden md:block relative">
          <button onClick={() => setDesktopMenu(m => !m)} aria-label="Show Menu" className="p-[10px] hover:bg-[#ffe352]/55 transition flex items-center justify-center">
            <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-[#334DCF] lg:h-[17px] lg:w-[26px]">
              <rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
              <rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect>
              <rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
            </svg>
          </button>
          {desktopMenu && (
            <div ref={desktopMenuRef} className="absolute right-0 top-[60px] w-64 bg-white rounded-xl shadow-2xl px-7 py-6 flex flex-col gap-3 animate-fadein z-50" style={{animation: 'fadein 0.23s'}}>
              {MENU_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 py-2 text-base text-[#252f4b] font-bold hover:text-[#ffe352] transition"
                  onClick={() => setDesktopMenu(false)}
                >
                  <img src={item.icon} className="h-5" alt={item.label} /> {item.label}
                </a>
              ))}
              <a href="#" className="mt-4 bg-[#ffe352] hover:bg-[#ffd500] text-[#252f4b] text-center py-3 rounded-lg font-semibold shadow">BOOK TICKETS</a>
            </div>
          )}
        </div>
      </div>
      {/* Desktop menu fade animation */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(-12px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 0.23s;
        }
      `}</style>
    </>
  );
};

const fetchRidesData = async () => {
  // Dynamic import to load JSON without breaking Vite
  const rides = await import('./data/rides.json');
  return rides.default || rides;
};

const App = () => {
  const [ridesData, setRidesData] = useState<RideData[]>([]);

  useEffect(() => {
    fetchRidesData().then(data => setRidesData(data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#252f4b] flex flex-col font-sans ">
      <Header />
      <RidesSection ridesData={ridesData} onExplore={() => {}} />
    </div>
  );
};

export default App;
