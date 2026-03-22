import React, { useState } from 'react';
import { 
  Home, 
  Megaphone, 
  Store, 
  Landmark, 
  CalendarDays, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MapPin, 
  Download, 
  MessageSquare,
  Wrench,
  Car,
  ChevronRight,
  TrendingUp,
  Users,
  X,
  Star,
  Image as ImageIcon
} from 'lucide-react';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col h-screen bg-[#ECE5D7] font-sans text-stone-800 overflow-hidden">
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
          {activeTab === 'announcements' && <AnnouncementsView />}
          {activeTab === 'marketplace' && <MarketplaceView />}
          {activeTab === 'association' && <AssociationView />}
        </div>
      </main>
    </div>
  );
}

// --- NAVIGATION & HEADER ---
function TopNavigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'marketplace', label: 'Marketplace', icon: Store },
    { id: 'association', label: 'HOA & Board', icon: Landmark },
  ];

  return (
    <header className="h-20 bg-[#E7D6BA] flex items-center justify-between px-4 lg:px-10 shrink-0 z-20 sticky top-0 shadow-sm">
      {/* Brand */}
      <div className="flex items-center gap-3 w-auto md:w-1/4">
        <div className="w-10 h-10 bg-[#A0B299] rounded-xl flex items-center justify-center shadow-inner shrink-0">
          <span className="font-serif text-2xl font-bold text-stone-900">F</span>
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 hidden lg:block">Forly</span>
      </div>

      {/* Center Navigation Pills */}
      <nav className="flex-1 flex justify-center overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 md:px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? 'bg-[#DEC6A7] text-stone-900 font-bold shadow-sm' 
                    : 'text-stone-600 hover:bg-[#DEC6A7]/50 hover:text-stone-900 font-medium'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-stone-900' : ''} />
                <span className="hidden sm:block">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center justify-end gap-2 sm:gap-4 w-auto md:w-1/4">
        <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-[#DEC6A7]/50 hidden sm:block">
          <Search size={20} />
        </button>
        <button className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-[#DEC6A7]/50">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#E7D6BA]"></span>
        </button>
        <div className="h-8 w-px bg-[#DEC6A7] mx-1 hidden sm:block"></div>
        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="text-right hidden xl:block">
            <p className="text-sm font-bold text-stone-900">Kasper Jensen</p>
            <p className="text-xs text-stone-600">14 Oak Street</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#A0B299] text-stone-900 flex items-center justify-center font-bold text-lg shrink-0">
            K
          </div>
        </button>
      </div>
    </header>
  );
}

// --- VIEWS ---

function HomeView({ setActiveTab }: any) {
  const [pollVoted, setPollVoted] = useState(false);
  const [pollOption, setPollOption] = useState<number | null>(null);
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      
      {/* Welcome Card */}
      <section className="bg-[#185B3A] rounded-[2rem] p-8 md:p-12 shadow-sm shrink-0 flex flex-col relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[300%] aspect-square text-[#0f4228] pointer-events-none translate-x-[10%]">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="60" />
            <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="60" />
            <circle cx="200" cy="200" r="45" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Good morning, Kasper!</h2>
          <p className="text-stone-200 text-lg mb-8">Here is what's happening in Sunnyvale Estates today.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-white text-[#185B3A] font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-stone-100 transition-colors">
              <Plus size={20} /> New Post
            </button>
            <button className="bg-transparent border border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Browse Marketplace
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Hero Banner */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-80 bg-stone-200 shrink-0">
           <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" alt="Neighborhood" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
           <div className="absolute bottom-8 left-8 right-8">
             <span className="bg-[#1e5b3a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Community</span>
             <h1 className="font-serif text-4xl text-white font-bold leading-tight">Norrebro<br/>neighborhood</h1>
           </div>
        </div>

        {/* Upcoming Events */}
        <section className="bg-[#DEC6A7] rounded-[2rem] p-8 shadow-sm shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-stone-900">Upcoming Events</h2>
            <button className="text-sm text-stone-700 font-semibold hover:text-stone-900">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EventCard 
              date="15" 
              month="APR" 
              title="Annual General Meeting" 
              location="Community Center · 19:00"
            />
            <EventCard 
              date="02" 
              month="MAY" 
              title="Summer Block Party Planning" 
              location="Online (Zoom) · 20:00"
            />
          </div>
        </section>

        {/* Bottom Row of Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Featured Item */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-sm min-h-[280px] bg-stone-200 w-full shrink-0">
             <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" alt="Lawn Mower" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
             <div className="absolute top-6 left-6">
               <span className="bg-[#A0B299] text-stone-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Featured</span>
             </div>
             <div className="absolute bottom-6 left-6 right-6">
               <h3 className="text-white font-bold text-xl leading-tight mb-4">Nice used<br/>Lawn Mower, Electric Powered</h3>
               <div className="flex items-center justify-between border-t border-white/20 pt-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-stone-300 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Peter" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div>
                     <p className="text-white text-xs font-bold">Peter Hensen</p>
                     <p className="text-white/60 text-[10px]">Created 2 Hours Ago</p>
                   </div>
                 </div>
                 <button className="bg-[#E7D6BA] text-stone-900 text-xs font-bold px-4 py-2 rounded-full hover:bg-[#DEC6A7] transition-colors">Contact</button>
               </div>
             </div>
          </div>

          {/* Poll Section */}
          <section className="bg-[#A0B299] rounded-[2rem] p-8 shadow-sm shrink-0">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Community Poll</h3>
            <p className="text-sm text-stone-800 mb-6">Should we install new bike racks near the south entrance?</p>
            
            {!pollVoted ? (
              <div className="space-y-3">
                {['Yes, definitely', 'No, we have enough', 'Neutral'].map((option, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setPollOption(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${pollOption === idx ? 'border-stone-900 bg-[#DEC6A7] text-stone-900' : 'border-[#DEC6A7] bg-[#E7D6BA]/50 text-stone-800 hover:bg-[#E7D6BA]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${pollOption === idx ? 'border-stone-900' : 'border-stone-500'}`}>
                        {pollOption === idx && <div className="w-2 h-2 rounded-full bg-stone-900" />}
                      </div>
                      {option}
                    </div>
                  </button>
                ))}
                <button 
                  onClick={() => setPollVoted(true)}
                  disabled={pollOption === null}
                  className="w-full mt-4 py-3 bg-stone-900 text-[#E7D6BA] rounded-xl text-sm font-bold hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Vote
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-stone-900">Yes, definitely</span>
                    <span className="text-stone-800">65%</span>
                  </div>
                  <div className="h-2 w-full bg-[#DEC6A7] rounded-full overflow-hidden">
                    <div className="h-full bg-stone-900 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-stone-900">No, we have enough</span>
                    <span className="text-stone-800">20%</span>
                  </div>
                  <div className="h-2 w-full bg-[#DEC6A7] rounded-full overflow-hidden">
                    <div className="h-full bg-stone-700 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-stone-900">Neutral</span>
                    <span className="text-stone-800">15%</span>
                  </div>
                  <div className="h-2 w-full bg-[#DEC6A7] rounded-full overflow-hidden">
                    <div className="h-full bg-stone-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-center text-stone-800 mt-4 pt-4 border-t border-[#DEC6A7]">Thank you for voting! 42 total votes.</p>
              </div>
            )}
          </section>
        </div>

      </div>

      {/* Right Column */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Recent Activity */}
        <section className="bg-[#185B3A] rounded-[2rem] p-8 shadow-sm text-stone-100 flex flex-col h-[400px]">
          <div className="flex items-center justify-between mb-6 shrink-0">
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
          </div>
          <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2 flex-1">
            <ActivityCard 
              user="Matilda R." 
              avatar="M" 
              action="is looking for a ladder to borrow this weekend."
              time="2 hours ago"
              type="request"
              dark
            />
            <ActivityCard 
              user="Board of Directors" 
              avatar="B" 
              action="posted the minutes from the April general meeting."
              time="5 hours ago"
              type="official"
              isOfficial
              dark
            />
            <ActivityCard 
              user="Peter H." 
              avatar="P" 
              action="listed an electric lawnmower for sale ($45)."
              time="Yesterday"
              type="marketplace"
              dark
            />
            <ActivityCard 
              user="Anna S." 
              avatar="A" 
              action="is giving away Monstera plant cuttings."
              time="2 days ago"
              type="marketplace"
              dark
            />
            <ActivityCard 
              user="Lars N." 
              avatar="L" 
              action="found a set of keys near the mailboxes."
              time="3 days ago"
              type="announcement"
              dark
            />
          </div>
        </section>

        {/* Board Notice */}
        {showNotice && (
          <div className="bg-[#DEC6A7] rounded-2xl p-6 shadow-sm flex flex-col gap-4 shrink-0">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#E7D6BA] rounded-full flex items-center justify-center text-stone-900 shrink-0">
                <Megaphone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">Board Notice: Water Meter Reading</h4>
                <p className="text-stone-800 text-sm mt-1">Reminder: Water meter readings must be submitted by Friday, May 1st via the municipal portal.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end mt-2">
              <button 
                onClick={() => setShowNotice(false)}
                className="text-sm font-bold text-stone-900 bg-[#E7D6BA] hover:bg-[#E7D6BA]/80 px-4 py-2 rounded-full transition-colors whitespace-nowrap">
                Remind me later
              </button>
              <button 
                onClick={() => setShowNotice(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E7D6BA] hover:bg-[#E7D6BA]/80 text-stone-900 transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Community Card */}
        <section className="bg-[#E7D6BA] rounded-[2rem] p-8 shadow-sm shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-stone-900">Community</h3>
            <button className="text-sm text-stone-700 font-semibold hover:text-stone-900">Directory</button>
          </div>
          <p className="text-sm text-stone-700 mb-4">Neighbors active this week</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#A0B299] text-stone-900 flex items-center justify-center font-bold text-lg border-2 border-[#E7D6BA] shadow-sm group-hover:scale-110 transition-transform">M</div>
              <span className="text-[10px] font-bold text-stone-700">Matilda</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#DEC6A7] text-stone-900 flex items-center justify-center font-bold text-lg border-2 border-[#E7D6BA] shadow-sm group-hover:scale-110 transition-transform">H</div>
              <span className="text-[10px] font-bold text-stone-700">Henrik</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#A0B299] text-stone-900 flex items-center justify-center font-bold text-lg border-2 border-[#E7D6BA] shadow-sm group-hover:scale-110 transition-transform">L</div>
              <span className="text-[10px] font-bold text-stone-700">Lars</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#DEC6A7] text-stone-900 flex items-center justify-center font-bold text-lg border-2 border-[#E7D6BA] shadow-sm group-hover:scale-110 transition-transform">A</div>
              <span className="text-[10px] font-bold text-stone-700">Anna</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#E7D6BA] text-stone-700 flex items-center justify-center font-bold text-sm border-2 border-[#DEC6A7] border-dashed group-hover:bg-[#DEC6A7] transition-colors">
                +12
              </div>
              <span className="text-[10px] font-bold text-stone-700">More</span>
            </div>
          </div>
        </section>

        {/* Shared Resources */}
        <section className="bg-[#DEC6A7] rounded-[2rem] p-8 shadow-sm flex-1 min-h-[300px]">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Shared Resources</h3>
          <div className="space-y-4">
            <ResourceItem icon={Car} title="Utility Trailer" status="In Use" user="Henrik J." />
            <ResourceItem icon={Home} title="Party Room" status="Available" />
            <ResourceItem icon={Wrench} title="Power Washer" status="Available" />
          </div>
          <button className="w-full mt-6 py-3 border border-stone-800 rounded-xl text-sm font-semibold text-stone-900 hover:bg-[#E7D6BA] transition-colors">
            Book a resource
          </button>
        </section>

        {/* Neighborhood Stats */}
        <section className="bg-[#E7D6BA] rounded-[2rem] p-8 shadow-sm shrink-0">
          <h3 className="text-xl font-bold text-stone-900 mb-4">Neighborhood Stats</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-4 bg-[#DEC6A7] rounded-2xl">
              <span className="text-2xl font-bold text-stone-900">42</span>
              <span className="text-[10px] font-bold text-stone-700 uppercase tracking-wider mt-1 text-center">Homes</span>
            </div>
            <div className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-4 bg-[#DEC6A7] rounded-2xl">
              <span className="text-2xl font-bold text-stone-900">12</span>
              <span className="text-[10px] font-bold text-stone-700 uppercase tracking-wider mt-1 text-center">Active Listings</span>
            </div>
            <div className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-4 bg-[#DEC6A7] rounded-2xl">
              <span className="text-2xl font-bold text-stone-900">3</span>
              <span className="text-[10px] font-bold text-stone-700 uppercase tracking-wider mt-1 text-center">Open Polls</span>
            </div>
          </div>
        </section>

      </div>
      </div>
    </div>
  );
}

function AnnouncementsView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-stone-800 mb-1">Announcements</h1>
          <p className="text-stone-500">Official news and neighborhood discussions.</p>
        </div>
        <button className="bg-[#A0B299] text-stone-900 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#A0B299]/80 transition-colors flex items-center gap-2">
          <Plus size={18} /> Create Post
        </button>
      </div>

      <div className="flex gap-4 border-b border-stone-200">
        <button className="pb-3 border-b-2 border-[#A0B299] text-stone-900 font-bold text-sm">All Posts</button>
        <button className="pb-3 border-b-2 border-transparent text-stone-500 hover:text-stone-800 font-medium text-sm">Official (Board)</button>
        <button className="pb-3 border-b-2 border-transparent text-stone-500 hover:text-stone-800 font-medium text-sm">Discussions</button>
      </div>

      <div className="space-y-4">
        <PostCard 
          author="Board of Directors"
          avatar="B"
          time="2 hours ago"
          title="Weekend Cleanup Canceled"
          content="Due to the heavy rain forecast for this weekend, we are postponing the communal gardening and cleanup day to next month. We will send out a new poll for dates soon."
          isOfficial
          comments={12}
          likes={4}
        />
        <PostCard 
          author="Hanne S."
          avatar="H"
          time="Yesterday"
          title="Looking for recommendations: Plumber"
          content="Hi neighbors! We have a leaky pipe in the basement. Has anyone had good experiences with a local plumber they could recommend? Thanks in advance!"
          comments={8}
          likes={1}
        />
        <PostCard 
          author="Lars N."
          avatar="L"
          time="3 days ago"
          title="Found: Set of keys near the mailboxes"
          content="I found a set of 3 keys on a blue lanyard near the main mailbox cluster this morning. I've left them on the ledge above box #12."
          comments={2}
          likes={5}
        />
      </div>
    </div>
  );
}

function MarketplaceView() {
  const items = [
    { title: "Electric Lawnmower, Great Condition", price: "$45", type: "For Sale", author: "Peter H.", time: "2h ago", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400" },
    { title: "Moving Boxes (approx 20)", price: "Free", type: "Giveaway", author: "Maria K.", time: "5h ago", image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&q=80&w=400" },
    { title: "Heavy Duty Power Drill", price: "Borrow", type: "Lending", author: "Jens L.", time: "1d ago", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
    { title: "Monstera Plant Cuttings", price: "Free", type: "Giveaway", author: "Anna S.", time: "2d ago", image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        
        {/* Left Card - Buy & Sell */}
        <div className="lg:col-span-7 bg-[#A0B299] rounded-[2rem] p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden shadow-sm">
          <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1200" alt="Marketplace Background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply pointer-events-none" referrerPolicy="no-referrer" />
          <div className="flex justify-between items-start relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#185B3A]">Marketplace</span>
            <button className="bg-white text-stone-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-stone-100 transition-colors shadow-sm">
              <Plus size={16} /> Create ad
            </button>
          </div>
          
          <div className="relative z-10 my-auto py-8">
            <h1 className="font-serif text-6xl md:text-8xl italic text-[#185B3A]">Buy & Sell</h1>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
            <button className="px-5 py-2.5 bg-[#185B3A] text-white rounded-full text-sm font-bold shadow-sm">For sale</button>
            <button className="px-5 py-2.5 bg-white/40 text-[#185B3A] rounded-full text-sm font-bold hover:bg-white/60 transition-colors">Given away</button>
            <button className="px-5 py-2.5 bg-white/40 text-[#185B3A] rounded-full text-sm font-bold hover:bg-white/60 transition-colors">On loan</button>
            <button className="px-5 py-2.5 bg-white/40 text-[#185B3A] rounded-full text-sm font-bold hover:bg-white/60 transition-colors">Wanted</button>
          </div>
        </div>

        {/* Right Card - Featured */}
        <div className="lg:col-span-5 bg-[#E7D6BA] rounded-[2rem] p-8 flex flex-col min-h-[400px] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Featured</span>
            <Star size={16} className="text-[#B57A66] fill-[#B57A66]" />
          </div>
          
          <div className="w-full h-48 bg-[#B57A66] rounded-2xl mb-6 flex items-center justify-center text-white/50 overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" alt="Lawn Mower" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" referrerPolicy="no-referrer" />
             <ImageIcon size={32} className="relative z-10" />
          </div>

          <div className="flex justify-between items-start mb-auto">
            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight pr-4">Nice used lawn mower, electric powered</h3>
            <span className="font-bold text-[#185B3A] whitespace-nowrap">450 kr</span>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#DEC6A7]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-stone-900 text-sm">P</div>
              <div>
                <p className="text-sm font-bold text-stone-900 leading-none mb-1">Peter Hansen</p>
                <p className="text-[10px] text-stone-500 leading-none">Created 2 hours ago</p>
              </div>
            </div>
            <button className="bg-[#185B3A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#124f31] transition-colors shadow-sm">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#DEC6A7] rounded-2xl border border-[#E7D6BA] overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col">
            <div className="h-48 relative overflow-hidden bg-stone-200">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-3 left-3 bg-[#E7D6BA]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-stone-900">
                {item.type}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-stone-900 leading-tight mb-2 line-clamp-2">{item.title}</h3>
              <div className="mt-auto pt-4 flex items-end justify-between">
                <div>
                  <p className="text-lg font-bold text-stone-900">{item.price}</p>
                  <p className="text-[11px] text-stone-600 mt-1">{item.author} · {item.time}</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-[#E7D6BA] flex items-center justify-center text-stone-800 group-hover:bg-[#A0B299] group-hover:text-stone-900 transition-colors">
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssociationView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-stone-800 mb-1">HOA Board & Documents</h1>
          <p className="text-stone-500">Financial overviews, rules, and official documents.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Treasury Balance" value="$42,380" trend="+5.2%" isGood />
        <StatCard title="Active Households" value="84 / 85" subtitle="99% Participation" />
        <StatCard title="Pending Dues" value="3" subtitle="Households" />
        <StatCard title="Next Meeting" value="Apr 15" subtitle="Community Center" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Documents */}
        <section className="bg-[#DEC6A7] rounded-2xl p-6 border border-[#E7D6BA] shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-stone-900">Official Documents</h2>
            <button className="text-sm text-stone-700 font-semibold hover:text-stone-900">View Archive</button>
          </div>
          <div className="space-y-3">
            <DocItem title="Community Bylaws 2024" type="PDF" size="2.4 MB" />
            <DocItem title="Q1 Board Meeting Minutes" type="PDF" size="1.1 MB" />
            <DocItem title="Approved Budget 2025" type="XLSX" size="0.8 MB" />
            <DocItem title="Insurance Policy Overview" type="PDF" size="3.2 MB" />
          </div>
        </section>

        {/* Board Members */}
        <section className="bg-[#DEC6A7] rounded-2xl p-6 border border-[#E7D6BA] shadow-sm">
          <h2 className="text-lg font-bold text-stone-900 mb-6">Board of Directors</h2>
          <div className="space-y-4">
            <BoardMember name="Lars Nielsen" role="President" avatar="L" />
            <BoardMember name="Hanne Schmidt" role="Treasurer" avatar="H" />
            <BoardMember name="Morten Koch" role="Secretary" avatar="M" />
          </div>
          <button className="w-full mt-6 py-2.5 bg-[#E7D6BA] text-stone-900 rounded-xl text-sm font-semibold hover:bg-[#A0B299] transition-colors flex justify-center items-center gap-2">
            <MessageSquare size={16} /> Contact the Board
          </button>
        </section>

      </div>
    </div>
  );
}

// --- REUSABLE UI COMPONENTS ---

function ActivityCard({ user, avatar, action, time, type, isOfficial, dark }: any) {
  const isReq = type === 'request';
  return (
    <div className={`p-4 rounded-xl flex items-start gap-4 transition-colors ${
      dark ? 'bg-[#A0B299]/20 border border-[#A0B299]/30 hover:bg-[#A0B299]/30' :
      isOfficial ? 'bg-[#E7D6BA] border border-[#DEC6A7]' : 'bg-[#DEC6A7] border border-[#E7D6BA] shadow-sm hover:shadow-md'
    }`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
        dark ? 'bg-[#A0B299] text-stone-900' :
        isOfficial ? 'bg-[#DEC6A7] text-stone-900' : 'bg-[#E7D6BA] text-stone-800'
      }`}>
        {avatar}
      </div>
      <div className="flex-1 pt-0.5">
        <p className={`text-sm leading-snug ${dark ? 'text-stone-200' : 'text-stone-800'}`}>
          <span className={`font-bold ${dark ? 'text-white' : 'text-stone-900'}`}>{user}</span> {action}
        </p>
        <p className={`text-xs mt-1 ${dark ? 'text-stone-400' : 'text-stone-600'}`}>{time}</p>
      </div>
    </div>
  );
}

function EventCard({ date, month, title, location }: any) {
  return (
    <div className="bg-[#DEC6A7] border border-[#E7D6BA] rounded-2xl p-4 flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer">
      <div className="bg-[#E7D6BA] rounded-xl w-14 h-14 flex flex-col items-center justify-center border border-[#DEC6A7] shrink-0">
        <span className="font-serif font-bold text-xl text-stone-900 leading-none">{date}</span>
        <span className="text-[10px] uppercase font-bold text-stone-700 tracking-wider mt-1">{month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-stone-900 text-sm truncate">{title}</h4>
        <p className="text-xs text-stone-700 mt-1 truncate">{location}</p>
      </div>
    </div>
  );
}

function ResourceItem({ icon: Icon, title, status, user }: any) {
  const isAvailable = status === 'Available';
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-[#E7D6BA] bg-[#E7D6BA]">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAvailable ? 'bg-[#DEC6A7] text-stone-800 shadow-sm' : 'bg-stone-300 text-stone-600'}`}>
          <Icon size={18} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-stone-900">{title}</h4>
          {user && <p className="text-xs text-stone-600 mt-0.5">Booked by {user}</p>}
        </div>
      </div>
      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${isAvailable ? 'bg-[#A0B299] text-stone-900' : 'bg-stone-300 text-stone-700'}`}>
        {status}
      </span>
    </div>
  );
}

function PostCard({ author, avatar, time, title, content, isOfficial, comments, likes }: any) {
  return (
    <div className={`bg-[#DEC6A7] rounded-2xl p-6 border ${isOfficial ? 'border-[#A0B299] shadow-sm' : 'border-[#E7D6BA] shadow-sm'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isOfficial ? 'bg-[#A0B299] text-stone-900' : 'bg-[#E7D6BA] text-stone-800'}`}>
          {avatar}
        </div>
        <div>
          <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
            {author}
            {isOfficial && <span className="px-2 py-0.5 bg-[#A0B299] text-stone-900 text-[10px] rounded uppercase tracking-wider">Official</span>}
          </h4>
          <p className="text-xs text-stone-600">{time}</p>
        </div>
      </div>
      <h3 className="font-bold text-lg text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-800 text-sm leading-relaxed mb-4">{content}</p>
      <div className="flex items-center gap-4 border-t border-[#E7D6BA] pt-4">
        <button className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors">
          <Home size={16} /> {likes} Likes
        </button>
        <button className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 text-sm font-medium transition-colors">
          <MessageSquare size={16} /> {comments} Comments
        </button>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, trend, isGood }: any) {
  return (
    <div className="bg-[#DEC6A7] rounded-2xl p-5 border border-[#E7D6BA] shadow-sm flex flex-col justify-center">
      <h4 className="text-sm font-medium text-stone-700 mb-2">{title}</h4>
      <div className="flex items-end gap-3">
        <span className="font-serif text-3xl font-bold text-stone-900">{value}</span>
        {trend && (
          <span className={`flex items-center text-xs font-bold mb-1.5 ${isGood ? 'text-[#A0B299]' : 'text-rose-600'}`}>
            <TrendingUp size={14} className="mr-1" /> {trend}
          </span>
        )}
      </div>
      {subtitle && <p className="text-xs text-stone-600 mt-1">{subtitle}</p>}
    </div>
  );
}

function DocItem({ title, type, size }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#E7D6BA] border border-transparent hover:border-[#A0B299] transition-colors group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${type === 'PDF' ? 'bg-[#E7D6BA] text-rose-700' : 'bg-[#E7D6BA] text-[#A0B299]'}`}>
          <Download size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-sm text-stone-900">{title}</h4>
          <p className="text-xs text-stone-600">{type} · {size}</p>
        </div>
      </div>
      <button className="text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-stone-900 p-2">
        <Download size={18} />
      </button>
    </div>
  );
}

function BoardMember({ name, role, avatar }: any) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#E7D6BA] border border-[#DEC6A7]">
      <div className="w-12 h-12 rounded-full bg-[#A0B299] text-stone-900 flex items-center justify-center font-bold text-lg shadow-inner">
        {avatar}
      </div>
      <div>
        <h4 className="font-bold text-sm text-stone-900">{name}</h4>
        <p className="text-xs text-stone-700">{role}</p>
      </div>
    </div>
  );
}
