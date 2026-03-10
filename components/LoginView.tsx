import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Ensure this path is correct
import { Scan, Shield, Lock, ArrowRight, Fingerprint, Building2, Infinity, Terminal, Loader2 } from 'lucide-react';

export const LoginView: React.FC = () => {
    // 🕵️‍♂️ SNATCH THE CORE Handshakeized METHODS
    // NOTE: loginWithCredentials, loginWithBiometrics, and loginWithSignup are currently STUBS
    // in your AuthContext.tsx. They will not perform actual authentication.
    // The primary functional login is via loginWithSSO.
    const { loginWithCredentials, loginWithBiometrics, loginWithSSO, loginWithSignup, isAuthenticated, isLoading } = useContext(AuthContext)!;
    const navigate = useNavigate();
    const [email, setEmail] = useState('visionary@sovereign-ai-nexus.io');
    const [password, setPassword] = useState('');
    const [authMethod, setAuthMethod] = useState<'credentials' | 'biometric' | 'sso'>('sso');
    const [handshakeStep, setHandshakeStep] = useState(0);

    const handshakeMessages = [
        "Initializing secure tunnel...",
        "Validating RS256 signature chain...",
        "Synchronizing with identity provider...",
        "Identity verified. Encrypting session token...",
        "Handshake finalized. Decrypting persona data..."
    ];

    // ⚡️ VORTEX EXIT: Automatic teleport if the session is already active
    useEffect(() => {
        if (isAuthenticated) {
            console.log("💎 AUTH_SUCCESS: TELEPORTING TO DASHBOARD...");
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    // 🌪️ TEMPORAL VISUALIZER: Spinning the bits while the aether charges
    useEffect(() => {
        if (isLoading && authMethod === 'sso') { // Only show handshake if loading specific to SSO flow
            const interval = setInterval(() => {
                setHandshakeStep(prev => (prev + 1) % handshakeMessages.length);
            }, 800);
            return () => clearInterval(interval);
        }
    }, [isLoading, authMethod]);

    // 🔥 THE FIX: THE DYNAMIC REDIRECT BURST for SSO
    const handleSSO = async () => {
        console.log("🛰️ INITIATING CITI-ENTERPRISE BURST... TARGET: #/DASHBOARD");
        setAuthMethod('sso');
        // JAMES! Look here! We are passing the returnTo state!
        // Auth0 sees this and says: "Ah, after the 'code' swap, send James to the Dash!"
        await loginWithSSO({
            appState: { returnTo: '/dashboard' }
        });
    };

    const handleCredentials = (e: React.FormEvent) => {
        e.preventDefault();
        // This will call the stubbed function in AuthContext and show an alert.
        loginWithCredentials(email, password);
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 font-sans relative overflow-hidden">
            {/* 🧬 BACKGROUND FRACTALS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b,transparent)] opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-black/60 backdrop-blur-2xl border border-gray-700/50 rounded-[2.5rem] shadow-2xl overflow-hidden p-10 transform transition-all duration-700 hover:shadow-indigo-500/10">

                    {/* 🏛️ BRAND LOGIC */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-6 group cursor-pointer">
                            <Infinity className="w-8 h-8 text-white transition-transform group-hover:rotate-180 duration-1000" />
                        </div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tighter">Infinite Intelligence</h1>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">Access Terminal Alpha-1</p>
                    </div>

                    {isLoading ? (
                        <div className="py-12 space-y-8 flex flex-col items-center">
                            <div className="relative">
                                <div className="w-24 h-24 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Shield className="w-8 h-8 text-indigo-400 animate-pulse" />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-sm font-mono text-indigo-400 animate-pulse">{handshakeMessages[handshakeStep]}</p>
                                <p className="text-[10px] text-gray-600 uppercase tracking-widest">Secure Handshake in Progress</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {authMethod === 'sso' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <button
                                        onClick={handleSSO}
                                        className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <Building2 size={20} />
                                        Authorize Portal
                                    </button>
                                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                        <p className="text-[10px] font-mono text-gray-500 leading-relaxed text-center">
                                            Handshake: CIAM / RS256<br/>
                                            <span className="text-blue-400">Connection: citi-connect-enterprise</span>
                                        </p>
                                    </div>
                                </div>
                            )}

                            {authMethod === 'credentials' && (
                                <form onSubmit={handleCredentials} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Identity Identifier</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="w-full bg-gray-800/50 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition-all pl-11"
                                                placeholder="identity@sovereign.io"
                                            />
                                            <Terminal className="w-4 h-4 text-gray-500 absolute left-4 top-3.5" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Security Key</label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                className="w-full bg-gray-800/50 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition-all pl-11"
                                                placeholder="••••••••••••"
                                            />
                                            <Lock className="w-4 h-4 text-gray-500 absolute left-4 top-3.5" />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-white text-black font-extrabold py-3 rounded-xl hover:bg-zinc-200 transition-all mt-4 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                                        Authenticate <ArrowRight size={18} />
                                    </button>

                                    <div className="mt-6 text-center border-t border-gray-800/50 pt-4">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                            New to the Nexus?
                                            <button
                                                onClick={(e) => { e.preventDefault(); loginWithSignup(); }}
                                                className="ml-2 text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4"
                                            >
                                                Create Identity
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            )}

                            {authMethod === 'biometric' && (
                                <div className="flex flex-col items-center justify-center space-y-6 py-8 animate-in fade-in zoom-in duration-500">
                                    <button
                                        onClick={loginWithBiometrics}
                                        className="w-24 h-24 rounded-full bg-cyan-600/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-600/30 transition-all relative group"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 animate-ping group-hover:animate-none"></div>
                                        <Fingerprint size={48} />
                                    </button>
                                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Verify Biometric Resonance</p>
                                </div>
                            )}

                            {/* ⚡️ SWITCHBOARD TOGGLE */}
                            <div className="pt-6 border-t border-gray-800/50 flex justify-center gap-6">
                                <button onClick={() => setAuthMethod('sso')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${authMethod === 'sso' ? 'text-white scale-110 underline underline-offset-4 decoration-blue-500' : 'text-zinc-600 hover:text-zinc-400'}`}>SSO</button>
                                <button onClick={() => setAuthMethod('biometric')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${authMethod === 'biometric' ? 'text-white scale-110 underline underline-offset-4 decoration-cyan-500' : 'text-zinc-600 hover:text-zinc-400'}`}>Bio-Sync</button>
                                <button onClick={() => setAuthMethod('credentials')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${authMethod === 'credentials' ? 'text-white scale-110 underline underline-offset-4 decoration-zinc-400' : 'text-zinc-600 hover:text-zinc-400'}`}>Vault-Key</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className="absolute bottom-8 text-center space-y-1">
                <p className="text-[10px] text-zinc-800 font-mono">PROTOCOL: SEAMLESS_DYNAMICS // GRID: 128_OCTET_IPV6</p>
                <p className="text-[10px] text-zinc-900 uppercase font-black tracking-widest">Terminal Signature: J.B.O. III</p>
            </footer>
        </div>
    );
};
