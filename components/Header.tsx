
import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { View, Notification } from '../types';
import { Infinity } from 'lucide-react'; // Conceptual icon

/**
 * @description A dynamic widget to show the simulated real-time status of the "Heuristic API".
 */
const HeuristicAPIStatus: React.FC = () => {
    const messages = [
        "Intelligence Core: Actively analyzing portfolio...",
        "Intelligence Core: Monitoring market data...",
        "Intelligence Core: Identified 2 potential opportunities...",
        "Intelligence Core: All systems nominal.",
        "Intelligence Core: Cross-referencing patterns...",
        "Intelligence Core: Compiling weekly insights..."
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:flex items-center space-x-2 text-xs text-cyan-300/80 bg-gray-900/40 px-3 py-1.5 rounded-full border border-cyan-500/10 transition-all duration-500">
            <div className="flex space-x-0.5 items-end h-4">
                <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                <span className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                <span className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
            </div>
            <span className="font-mono">{messages[currentMessageIndex]}</span>
        </div>
    );
};

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const context = useContext(DataContext);
  const { logout, user } = useAuth(); // ⚡️ SNATCH THE REAL LOGOUT ENGINE
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (!context) {
    throw new Error("Header must be used within a DataProvider");
  }

  const { notifications, markNotificationRead, setActiveView } = context;
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleNotificationClick = (notification: Notification) => {
      if (notification.view) {
          setActiveView(notification.view);
      }
      markNotificationRead(notification.id);
      setIsNotificationsOpen(false);
  }

  return (
    <header className="py-4 px-6 bg-gray-900/30 backdrop-blur-md border-b border-gray-700/50 flex justify-between items-center z-20">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="lg:hidden mr-4 text-gray-400 hover:text-white" aria-label="Open navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-white tracking-wider uppercase flex items-center gap-2">
            <span className="text-cyan-400 font-bold"><Infinity className="w-5 h-5" /></span> Infinite Intelligence Foundation
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        <HeuristicAPIStatus />
        <div className="relative">
            <button onClick={() => setIsNotificationsOpen(prev => !prev)} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
              )}
            </button>
            {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="p-3 font-semibold text-white border-b border-gray-700">Notifications</div>
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.map(notification => (
                            <div key={notification.id} onClick={() => handleNotificationClick(notification)} className={`p-3 text-sm flex items-start border-b border-gray-700/50 cursor-pointer ${notification.read ? 'opacity-60' : 'bg-cyan-500/10'}`}>
                                {!notification.read && <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>}
                                <div className="ml-2">
                                    <p className="text-gray-200">{notification.message}</p>
                                    <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div className="relative">
            <button 
                onClick={() => setIsProfileOpen(prev => !prev)} 
                className="flex items-center space-x-3 group outline-none"
            >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group-hover:scale-105 group-active:scale-95">
                    {user?.picture ? (
                        <img src={user.picture} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                            {user?.name?.charAt(0) || 'I'}
                        </div>
                    )}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-tight text-left">
                    <span className="font-bold text-white text-sm tracking-tighter uppercase">{user?.name || 'The Caretaker'}</span>
                    <span className="text-[9px] text-cyan-400 font-mono uppercase tracking-widest">Architect Level</span>
                </div>
            </button>

            {isProfileOpen && (
                 <div className="absolute right-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                     <div className="p-4 border-b border-gray-800 bg-gray-800/50">
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Active Session</p>
                        <p className="text-xs text-white font-mono truncate">{user?.email || 'authenticated-node'}</p>
                     </div>
                     <div className="p-2">
                        <button 
                            onClick={() => { setActiveView(View.Settings); setIsProfileOpen(false); }} 
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 rounded-xl transition-colors"
                        >
                            <Settings size={16} className="text-gray-500" /> Settings
                        </button>
                        <button 
                            onClick={() => logout()} 
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors group"
                        >
                            <LogOut size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" /> Logout Session
                        </button>
                     </div>
                 </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
