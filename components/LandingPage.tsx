import React from 'react';
import { Link } from 'react-router-dom';
import { Infinity } from 'lucide-react';

// 🔥 PULLING THE RAW HOOK 🔥
import { useAuth0 } from "@auth0/auth0-react";

export const LandingPage: React.FC = () => {
    // Exact methods from the Auth0 docs
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b,transparent)] opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-8">
                    <Infinity className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 tracking-tighter">
                    Sovereign Nexus
                </h1>
                
                <p className="text-xl text-gray-400 mb-12 max-w-2xl font-mono">
                    High-frequency AI intelligence and institutional grade infrastructure.
                </p>

                {/* THE RAW AUTH0 LOGIC */}
                {!isAuthenticated ? (
                    <button
                        onClick={() => loginWithRedirect({ appState: { returnTo: '/dashboard' }})}
                        className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-indigo-500/20 transition-all transform hover:scale-105"
                    >
                        Authorize Portal
                    </button>
                ) : (
                    <Link
                        to="/dashboard"
                        className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-cyan-500/20 transition-all transform hover:scale-105"
                    >
                        Enter Dashboard
                    </Link>
                )}
            </div>

            <footer className="absolute bottom-8 text-center text-gray-600 text-[10px] font-mono tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Sovereign AI Nexus. Terminal Alpha-1.
            </footer>
        </div>
    );
};

export default LandingPage;
