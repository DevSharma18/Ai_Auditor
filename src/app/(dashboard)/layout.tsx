'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');

        if (isAuthenticated !== 'true') {
            // Redirect to login if not authenticated
            router.push('/login');
        }
    }, [router]);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 max-w-[1400px]" style={{ padding: '48px 60px' }}>
                {children}
            </main>
        </div>
    );
}
