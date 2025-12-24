'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
    {
        name: 'Dashboard',
        href: '/',
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
        name: 'Drift',
        href: '/drift',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
    },
    {
        name: 'Bias',
        href: '/bias',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        name: 'Hallucination',
        href: '/hallucination',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
            </svg>
        ),
    },
    {
        name: 'PII',
        href: '/pii',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
    },
    {
        name: 'Compliance',
        href: '/compliance',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
        ),
    },
    {
        name: 'Models',
        href: '/models',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
        ),
    },
    {
        name: 'Audits',
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
        name: 'Settings',
        href: '/settings',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
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
            className="relative flex flex-col"
            style={{
                width: '220px',
                minHeight: '100vh',
                background: '#f5f5f5',
                borderRight: '1px solid #e5e7eb',
            }}
        >
            {/* Logo Section */}
            <Link
                href="/"
                className="relative group no-underline"
                style={{
                    margin: '24px 16px 32px',
                    padding: '16px',
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <div className="flex flex-col">
                    <span
                        className="font-bold"
                        style={{
                            fontSize: '18px',
                            color: '#1a1a1a',
                        }}
                    >
                        AI Auditor
                    </span>
                    <span className="text-xs font-medium" style={{ color: '#888888' }}>Enterprise Suite</span>
                </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex-1 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative flex items-center gap-3 no-underline transition-all duration-200"
                            style={{
                                padding: '12px 16px',
                                color: isActive ? '#333333' : '#666666',
                                background: isActive ? '#ffffff' : 'transparent',
                                border: isActive ? '1px solid #e5e7eb' : '1px solid transparent',
                                boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = '#fafafa';
                                    e.currentTarget.style.color = '#333333';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#666666';
                                }
                            }}
                        >
                            {/* Icon */}
                            <div className="relative w-5 h-5">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div
                className="relative"
                style={{
                    margin: '16px',
                    padding: '16px 0 0',
                    borderTop: '1px solid #e5e7eb',
                }}
            >
                <button
                    onClick={handleLogout}
                    className="group w-full flex items-center gap-3 transition-all duration-200"
                    style={{
                        padding: '12px 16px',
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                        color: '#666666',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#fef2f2';
                        e.currentTarget.style.borderColor = '#fca5a5';
                        e.currentTarget.style.color = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.color = '#666666';
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
        </aside>
    );
}
