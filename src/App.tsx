import React, { useEffect, useState, useRef } from 'react';

// Import components with type declarations
// @ts-ignore - Ignore missing type declarations for imported components
import CategorySidebar from './components/CategorySidebar';
// @ts-ignore
import CarouselControls from './components/CarouselControls';
// @ts-ignore
import RideCard from './components/RideCard';

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
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [parksOpen, setParksOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
      if (desktopMenu && desktopMenuRef.current && !desktopMenuRef.current.contains(e.target as Node)) setDesktopMenu(false);
      if (locationsOpen && locationsRef.current && !locationsRef.current.contains(e.target as Node)) setLocationsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, desktopMenu, locationsOpen]);

  // Prevent body scroll when hamburger menu is open
  useEffect(() => {
    if (hamburgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hamburgerMenuOpen]);

  return (
    <>
      <div className="top-8 left-15 right-15 w-full h-[70px] bg-white/95 border border-zinc-100 rounded-xl mx-auto max-w-[1420px] flex items-center justify-between px-12 py-3 shadow-xl relative z-15"
        style={{fontFamily: 'Montserrat,Poppins,sans-serif', boxShadow:'0 4px 28px 0 rgba(31,40,63,0.06)'}}>
        <img src="https://ext.same-assets.com/3163014771/2180747740.webp" alt="Wonderla Logo" className="h-12 w-auto ml-1" style={{flex:'0 0 auto'}}/>
        <div className="flex-1 flex items-center justify-center gap-4 ml-10 text-[#717D92] font-bold text-[0.8rem] whitespace-nowrap px-2">
          {MENU_ITEMS.map(item => (
            <div className="relative group" key={item.label} ref={item.label === "LOCATIONS" ? locationsRef : null}>
              <span 
                className="flex gap-2 items-center cursor-pointer text-black font-extrabold tracking-tightest opacity-90 hover:opacity-100 transition" 
                style={{filter: 'brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)'}}
                onClick={() => item.label === "LOCATIONS" ? setLocationsOpen(!locationsOpen) : null}
              >
                <img src={item.icon} className="h-5 w-5" alt={item.label} />
                {item.label}
                {item.label === "LOCATIONS" && (
                  <svg height="24" width="24" className={`ml-1 h-4 w-4 transition-transform duration-500 group-hover:rotate-360 ${locationsOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="#717D92" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9L12 15L18 9"></path>
                  </svg>
                )}
              </span>
              
              {/* Locations Dropdown */}
              {item.label === "LOCATIONS" && locationsOpen && (
                <div className="absolute left-0 top-full mt-8 z-50 bg-white  text-black rounded-xl shadow-xl p-4 w-[300px]">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-center group/subSection relative">
                        <div className="flex items-center gap-4">
                          <div>
                            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="kochi" />
                          </div>
                          <div className="uppercase">kochi</div>
                        </div>
                      </div>
                      <div>
                        <div className="pt-3"></div>
                        <hr className="border-t-1 border-gray-200" />
                        <div className="pt-3"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center group/subSection relative">
                        <div className="flex items-center gap-4 text-black">
                          <div>
                            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="bengaluru" />
                          </div>
                          <div className="uppercase">bengaluru</div>
                        </div>
                        <div>
                          <div className="h-16 -top-3 w-12 absolute"></div>
                          <div>
                            <svg height="24" width="24" className="ml-auto size-5" viewBox="0 0 24 24" fill="none" stroke="#717D92" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 6L15 12L9 18"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute left-full ml-2 top-0 group-hover/subSection:visible invisible flex flex-col bg-white rounded-xl p-4 w-40 shadow-lg z-50 ml-6">
                          <div>
                            <div className="flex items-center gap-4">
                              <div>
                                <img src="https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="park" />
                              </div>
                              <div className="uppercase">park</div>
                            </div>
                            <div>
                              <div className="h-2"></div>
                              <hr className="border-t-1 border-gray-200" />
                              <div className="h-2"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-4">
                              <div>
                                <img src="https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="resort" />
                              </div>
                              <div className="uppercase">resort</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="pt-3"></div>
                        <hr className="border-t-1 border-gray-200" />
                        <div className="pt-3"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center group/subSection relative">
                        <div className="flex items-center gap-4">
                          <div>
                            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="hyderabad" />
                          </div>
                          <div className="uppercase">hyderabad</div>
                        </div>
                      </div>
                      <div>
                        <div className="pt-3"></div>
                        <hr className="border-t-1 border-gray-200" />
                        <div className="pt-3"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center group/subSection relative">
                        <div className="flex items-center gap-4">
                          <div>
                            <img src="https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75" className="h-12 w-12 rounded-xl object-cover" alt="bhubaneshwar" />
                          </div>
                          <div className="uppercase">bhubaneshwar</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="bg-[#FAD600] px-2.5 py-2.5 rounded-lg font-extrabold text-[#334DCF] text-xs transition hover:bg-[#ffe352]/90 border ml-2 mr-2 flex items-center gap-1">
          BOOK TICKETS
          <img src="https://wonderla.vercel.app/icons/tickets.svg" className="h-[12px]" alt="icon" />
        </button>
        <div className="ml-2 pr-1 hidden md:block relative">
          <button 
            onClick={() => setHamburgerMenuOpen(true)} 
            aria-label="Show Menu" 
            className="p-[10px] hover:bg-[#ffe352]/55 transition flex items-center justify-center rounded-md"
          >
            <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-[#334DCF] lg:h-[17px] lg:w-[26px]">
              <rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
              <rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect>
              <rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Hamburger Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${hamburgerMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-[500px] bg-white transform transition-transform duration-300 ease-in-out ${hamburgerMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{right: hamburgerMenuOpen ? 0 : '-500px'}}>
          {/* Logo and close button at top */}
          <div className="flex justify-between items-center bg-white w-full p-8 pb-3">
            <img className="h-12" alt="Wonderla Logo" src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75" />
            <div className="mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border" onClick={() => setHamburgerMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] text-black">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          
          <div className="h-full min-h-0 overflow-y-scroll p-7">
            <div className="h-fit flex flex-col overflow-y-visible flex-1 pb-24">
              {/* Parks Section */}
              <div className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3 justify-between" onClick={() => setParksOpen(!parksOpen)}>
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Parks</div>
                      <div className="text-xs text-gray-600">Explore Your favourite Wonderla Park</div>
                    </div>
                  </div>
                  <svg height="24" width="24" className={`transform transition-transform ${parksOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="#334DCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9L12 15L18 9"></path>
                  </svg>
                </div>
                
                <div className="overflow-hidden transform transition-all ease-out duration-350" style={{ height: parksOpen ? 'auto' : '0px' }}>
                  <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1">
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <img className="rounded-full h-10 w-10 mb-2 object-cover" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75" />
                        </div>
                        <div className="capitalize">kochi</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <img className="rounded-full h-10 w-10 mb-2 object-cover" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75" />
                        </div>
                        <div className="capitalize">bengaluru</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <img className="rounded-full h-10 w-10 mb-2 object-cover" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75" />
                        </div>
                        <div className="capitalize">hyderabad</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3">
                        <div>
                          <img className="rounded-full h-10 w-10 mb-2 object-cover" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75" />
                        </div>
                        <div className="capitalize">bhubaneshwar</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="h-4"></div>
                  <hr className="border-t-1 border-gray-200" />
                  <div className="h-4"></div>
                </div>
              </div>
              
              {/* Resorts Section */}
              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Resorts</div>
                      <div className="text-xs text-gray-600">Get a rejuvenating experience at Wonderla Resort</div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Offers & Combos Section */}
              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Offers & Combos</div>
                      <div className="text-xs text-gray-600">Plan the perfect day with exciting offers</div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Timings And Guidelines Section */}
              <div>
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Timings And Guidelines</div>
                      <div className="text-xs text-gray-600">Know the timings and other guidelines</div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Colored Sections */}
              <div className="flex flex-col gap-2">
                <div className="flex-1 p-2 rounded-2xl" style={{ backgroundColor: 'rgb(250, 214, 0)', color: 'rgb(0, 0, 0)' }}>
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="h-10" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Group Booking</div>
                      <div className="text-xs text-gray-600">Reach Out To Wanderla Team</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-2 rounded-2xl" style={{ backgroundColor: 'rgb(51, 77, 207)', color: 'rgb(255, 255, 255)' }}>
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="h-10" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Tour Operator Portal</div>
                      <div className="text-xs text-gray-600" style={{ color: 'rgb(255, 255, 255)' }}>Reach Out To Wanderla Team</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-2 rounded-2xl" style={{ backgroundColor: 'rgb(250, 214, 0)', color: 'rgb(0, 0, 0)' }}>
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="h-10" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Partner With Us</div>
                      <div className="text-xs text-gray-600">Reach Out To Wanderla Team</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Us Section */}
              <div className="pt-3">
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">About Us</div>
                      <div className="text-xs text-gray-600">Know all about Wonderla</div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Quick Links Section */}
              <div className="mb-8">
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3 justify-between" onClick={() => setQuickLinksOpen(!quickLinksOpen)}>
                    <div className="flex items-center gap-3">
                      <div>
                        <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75" />
                      </div>
                      <div>
                        <div className="text-xl font-normal mb-1">Quick Links</div>
                        <div className="text-xs text-gray-600">Explore all other relevant information here</div>
                      </div>
                    </div>
                    <svg height="24" width="24" className={`transform transition-transform ${quickLinksOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="#334DCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9L12 15L18 9"></path>
                    </svg>
                  </div>
                  
                  <div className="overflow-hidden transform transition-all ease-out duration-350" style={{ height: quickLinksOpen ? 'auto' : '0px' }}>
                    <div className="flex pt-3">
                      <div className="w-10"></div>
                      <div className="flex gap-2 text-sm flex-col">
                        <div>Restaurants</div>
                        <div>Merchandise</div>
                        <div>Events</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
                
                {/* Contact Us Section */}
                <div className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <img className="h-7" alt="" src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75" />
                    </div>
                    <div>
                      <div className="text-xl font-normal mb-1">Contact Us</div>
                      <div className="text-xs text-gray-600">Get In Touch Wordela Team</div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4"></div>
                    <hr className="border-t-1 border-gray-200" />
                    <div className="h-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotate-360 {
          transform: rotate(360deg);
        }
      `}</style>
    </>
  );
};

// Constants for the RidesSection component
const CARDS_ON_SCREEN = 3;
const CARD_WIDTH = 250; // Width of each card in pixels
const CARD_GAP = 32; // Gap between cards

// RidesSection component moved from separate file
interface RideData {
  video: string;
  title: string;
  location: string;
  description: string;
  category: string;
}

interface RidesSectionProps {
  ridesData: RideData[];
  onExplore: () => void;
}

const RidesSection = ({ ridesData, onExplore }: RidesSectionProps) => {
  const [category, setCategory] = useState("Land");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Filter rides by current category
  const rides = ridesData.filter(ride => ride.category === category);

  // Function to start auto-scroll
  const startAutoScroll = () => {
    if (isScrolling || rides.length <= 1) return;
    
    // Clear any existing timer
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
    
    // Set up the next auto-scroll
    autoScrollTimerRef.current = setTimeout(() => {
      handleNext();
    }, 4000);
  };
  
  // Reset scroll position and index when category changes
  useEffect(() => {
    // Clear any existing auto-scroll timer
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
    
    // Reset position and state
    setCurrentIndex(0);
    setIsScrolling(false);
    
    // Reset scroll position
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft = 0;
    }
    
    // Delay starting auto-scroll to ensure DOM is ready
    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 1000);
    
    return () => {
      clearTimeout(initialDelay);
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
    };
  }, [category, rides.length]);

  // Function to handle previous button click
  const handlePrev = () => {
    if (isScrolling || rides.length <= 1) return;
    
    // Clear auto-scroll timer
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
    
    setIsScrolling(true);
    
    // Calculate new index with wraparound
    const newIndex = currentIndex === 0 ? rides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    // Handle scroll animation
    if (cardContainerRef.current) {
      if (currentIndex === 0) {
        // Jump to end without animation if at beginning
        const maxScroll = (rides.length - 1) * (CARD_WIDTH + CARD_GAP);
        cardContainerRef.current.scrollLeft = maxScroll;
        setIsScrolling(false);
      } else {
        // Smooth scroll to previous card
        cardContainerRef.current.scrollTo({
          left: (newIndex) * (CARD_WIDTH + CARD_GAP),
          behavior: 'smooth'
        });
        
        // Reset scrolling state after animation completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 700);
      }
    }
    
    // Restart auto-scroll after a delay
    const restartTimer = setTimeout(() => {
      startAutoScroll();
    }, 800);
  };

  // Function to handle next button click
  const handleNext = () => {
    if (isScrolling || rides.length <= 1) return;
    
    // Clear auto-scroll timer
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
    
    setIsScrolling(true);
    
    // Calculate new index with wraparound
    const newIndex = (currentIndex + 1) % rides.length;
    setCurrentIndex(newIndex);
    
    // Handle scroll animation
    if (cardContainerRef.current) {
      if (newIndex === 0) {
        // Fast reset to beginning
        cardContainerRef.current.scrollLeft = 0;
        setIsScrolling(false);
        
        // Restart auto-scroll after reset
        setTimeout(() => {
          startAutoScroll();
        }, 800);
      } else {
        // Smooth scroll to next card
        cardContainerRef.current.scrollTo({
          left: newIndex * (CARD_WIDTH + CARD_GAP),
          behavior: 'smooth'
        });
        
        // Reset scrolling state after animation completes
        setTimeout(() => {
          setIsScrolling(false);
          
          // Restart auto-scroll after animation completes
          setTimeout(() => {
            startAutoScroll();
          }, 800);
        }, 700);
      }
    }
  };

  return (
    <div className="grid grid-cols-[1fr_2fr] w-full relative" style={{ zIndex: 1 }}>

      <div className="flex items-end justify-start">
        <CategorySidebar selected={category} onSelect={(cat: string) => { setCurrentIndex(0); setCategory(cat); }} />
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

        <div className="w-full overflow-hidden relative h-[400px]">
          <div className="absolute left-0 w-screen overflow-x-auto hide-scrollbar" ref={cardContainerRef}>
            {rides.length === 0 ? (
              <div className="text-white/70 font-medium text-2xl flex items-center px-10">No rides in this category yet.</div>
            ) : (
              <div 
                className="flex gap-8 items-center py-5"
                style={{ 
                  paddingLeft: '160px', // Reduced padding to eliminate initial gap
                  paddingRight: '50px',
                  width: `${Math.max(3, rides.length) * (CARD_WIDTH + CARD_GAP) + 100}px` // Ensure enough width for all cards with minimum of 3
                }}
                key={`carousel-${category}`} // Force re-render when category changes
              >
                {rides.map((ride, i) => (
                  <div key={`${category}-${ride.title}-${i}`} className="flex-shrink-0">
                    <RideCard 
                      {...ride} 
                      onDetails={() => console.log(`View details for ${ride.title}`)}
                    />
                  </div>
                ))}
              </div>
            )}
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
