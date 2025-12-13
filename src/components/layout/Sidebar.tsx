'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
    {
        name: 'Models',
        href: '/models',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
    {
        name: 'Reports',
        href: '/reports',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        name: 'Inspector',
        href: '/inspector',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('username');
        router.push('/login');
    };

    return (
        <aside
            className="relative flex flex-col overflow-hidden"
            style={{
                width: '280px',
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                boxShadow: '4px 0 24px rgba(0, 0, 0, 0.12), inset -1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
        >
            {/* Animated background effects */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Subtle animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 8s ease infinite',
                    pointerEvents: 'none',
                }}
            />

            {/* Logo Section */}
            <Link
                href="/"
                className="relative group no-underline"
                style={{
                    margin: '32px 24px 40px',
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
            >
                <div className="flex items-center gap-4">
                    <div
                        className="relative overflow-hidden"
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'white',
                            padding: '2px',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="AI Auditor"
                            width={48}
                            height={48}
                            className="rounded-xl object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span
                            className="font-bold tracking-wide"
                            style={{
                                fontSize: '20px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            AI Auditor
                        </span>
                        <span className="text-xs text-gray-400 font-medium">Enterprise Suite</span>
                    </div>
                </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative flex items-center gap-3 no-underline transition-all duration-300"
                            style={{
                                padding: '14px 16px',
                                borderRadius: '12px',
                                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                                background: isActive
                                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.25) 0%, rgba(118, 75, 162, 0.25) 100%)'
                                    : 'transparent',
                                border: isActive
                                    ? '1px solid rgba(102, 126, 234, 0.3)'
                                    : '1px solid transparent',
                                boxShadow: isActive
                                    ? '0 4px 12px rgba(102, 126, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    : 'none',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                    e.currentTarget.style.color = '#ffffff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                                }
                            }}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div
                                    className="absolute left-0 top-1/2 -translate-y-1/2"
                                    style={{
                                        width: '4px',
                                        height: '24px',
                                        background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
                                        borderRadius: '0 4px 4px 0',
                                        boxShadow: '0 0 8px rgba(102, 126, 234, 0.5)',
                                    }}
                                />
                            )}

                            {/* Icon */}
                            <div
                                className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    filter: isActive ? 'drop-shadow(0 0 4px rgba(102, 126, 234, 0.5))' : 'none',
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Text */}
                            <span className="font-medium text-[15px]">{item.name}</span>

                            {/* Hover glow effect */}
                            <div
                                className="absolute inset-0 rounded-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                                }}
                            />
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div
                className="relative"
                style={{
                    margin: '24px',
                    padding: '20px 0 0',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <button
                    onClick={handleLogout}
                    className="group w-full flex items-center gap-3 transition-all duration-300"
                    style={{
                        padding: '14px 16px',
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        color: '#fca5a5',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(239, 68, 68, 0.2)';
                        e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)';
                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.color = '#fca5a5';
                    }}
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <span>Logout</span>
                </button>
            </div>

            <style jsx global>{`
                @keyframes gradientShift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
            `}</style>
        </aside>
    );
}
