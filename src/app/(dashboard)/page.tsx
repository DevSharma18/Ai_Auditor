'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from 'recharts';

// Sample data for heatmap trends
const heatmapData = [
    { date: 'Dec 2023', value: 5 },
    { date: 'Jan 2024', value: 7 },
    { date: 'Feb 2024', value: 9 },
    { date: 'Mar 2024', value: 11 },
    { date: 'Apr 2024', value: 13 },
    { date: 'May 2024', value: 18 },
    { date: 'Jun 2024', value: 8 },
];

export default function DashboardPage() {
    return (
        <div
            className="min-h-screen"
            style={{
                background: '#fafafa',
                padding: '0',
            }}
        >
            {/* Page Header */}
            <div className="mb-8">
                <h1
                    className="font-bold mb-2"
                    style={{
                        fontSize: '28px',
                        color: '#1a1a1a',
                    }}
                >
                    AI Auditor
                </h1>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-4 gap-6 mb-10">
                {/* Global Drift Score */}
                <div
                    className="transition-all duration-200"
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px 24px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div className="text-sm text-gray-600 mb-3" style={{ fontWeight: '500' }}>Global Drift Score</div>
                    <div className="text-4xl font-bold text-gray-900" style={{ lineHeight: '1' }}>12%</div>
                </div>

                {/* Global Bias Score */}
                <div
                    className="transition-all duration-200"
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px 24px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div className="text-sm text-gray-600 mb-3" style={{ fontWeight: '500' }}>Global Bias Score</div>
                    <div className="text-4xl font-bold text-gray-900" style={{ lineHeight: '1' }}>8%</div>
                </div>

                {/* Safety Violations */}
                <div
                    className="transition-all duration-200"
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px 24px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div className="text-sm text-gray-600 mb-3" style={{ fontWeight: '500' }}>Safety Violations</div>
                    <div className="text-4xl font-bold text-gray-900" style={{ lineHeight: '1' }}>15</div>
                </div>

                {/* PII Leaks */}
                <div
                    className="transition-all duration-200"
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px 24px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <div className="text-sm text-gray-600 mb-3" style={{ fontWeight: '500' }}>PII Leaks</div>
                    <div className="text-4xl font-bold text-gray-900" style={{ lineHeight: '1' }}>3</div>
                </div>
            </div>

            {/* Severity Distribution */}
            <div
                className="mb-10"
                style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    padding: '28px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
            >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Severity Distribution</h3>

                {/* Horizontal Stacked Bar */}
                <div
                    className="relative mb-5"
                    style={{
                        height: '48px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        display: 'flex',
                    }}
                >
                    <div style={{ flex: '1', background: '#e74c3c' }}></div>
                    <div style={{ flex: '1', background: '#ff9800' }}></div>
                    <div style={{ flex: '1', background: '#ffd54f' }}></div>
                    <div style={{ flex: '1', background: '#81c784' }}></div>
                    <div style={{ flex: '1', background: '#42a5f5' }}></div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <div style={{ width: '12px', height: '12px', background: '#e74c3c', borderRadius: '2px' }}></div>
                        <span className="text-sm text-gray-700 font-medium">Critical</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div style={{ width: '12px', height: '12px', background: '#ff9800', borderRadius: '2px' }}></div>
                        <span className="text-sm text-gray-700 font-medium">High</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div style={{ width: '12px', height: '12px', background: '#ffd54f', borderRadius: '2px' }}></div>
                        <span className="text-sm text-gray-700 font-medium">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div style={{ width: '12px', height: '12px', background: '#81c784', borderRadius: '2px' }}></div>
                        <span className="text-sm text-gray-700 font-medium">Low</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div style={{ width: '12px', height: '12px', background: '#42a5f5', borderRadius: '2px' }}></div>
                        <span className="text-sm text-gray-700 font-medium">Info</span>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6">
                {/* Heatmap Trends */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-5">Heatmap Trends</h3>

                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={heatmapData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis
                                dataKey="date"
                                tick={{ fill: '#666666', fontSize: 12 }}
                                stroke="#e0e0e0"
                            />
                            <YAxis
                                domain={[0, 20]}
                                tick={{ fill: '#666666', fontSize: 12 }}
                                stroke="#e0e0e0"
                            />
                            <Tooltip
                                contentStyle={{
                                    background: '#ffffff',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#ff6b6b"
                                strokeWidth={3}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Recent Incidents */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '28px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Incidents</h3>

                    <div className="space-y-3">
                        {/* Incident 1 - Critical */}
                        <div
                            className="group transition-all duration-200"
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)',
                                border: '1px solid #fee2e2',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = '#fecaca';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#fee2e2';
                            }}
                        >
                            <div className="flex items-start gap-3">
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-900" style={{ fontSize: '15px' }}>
                                            PII Leak in Model A
                                        </span>
                                        <span
                                            className="px-2 py-0.5 rounded text-xs font-bold"
                                            style={{
                                                background: '#dc2626',
                                                color: 'white',
                                            }}
                                        >
                                            CRITICAL
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            3 months ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Incident 2 - High */}
                        <div
                            className="group transition-all duration-200"
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)',
                                border: '1px solid #fed7aa',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = '#fdba74';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#fed7aa';
                            }}
                        >
                            <div className="flex items-start gap-3">
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-900" style={{ fontSize: '15px' }}>
                                            Safety Violation in Model B
                                        </span>
                                        <span
                                            className="px-2 py-0.5 rounded text-xs font-bold"
                                            style={{
                                                background: '#ea580c',
                                                color: 'white',
                                            }}
                                        >
                                            HIGH
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            12 months ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Incident 3 - High */}
                        <div
                            className="group transition-all duration-200"
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)',
                                border: '1px solid #fed7aa',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = '#fdba74';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#fed7aa';
                            }}
                        >
                            <div className="flex items-start gap-3">
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-900" style={{ fontSize: '15px' }}>
                                            Safety Violation in Model C
                                        </span>
                                        <span
                                            className="px-2 py-0.5 rounded text-xs font-bold"
                                            style={{
                                                background: '#ea580c',
                                                color: 'white',
                                            }}
                                        >
                                            HIGH
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            16 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Incident 4 - Info */}
                        <div
                            className="group transition-all duration-200"
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
                                border: '1px solid #bfdbfe',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = '#93c5fd';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#bfdbfe';
                            }}
                        >
                            <div className="flex items-start gap-3">
                                {/* Icon */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-gray-900" style={{ fontSize: '15px' }}>
                                            Audit in Model C
                                        </span>
                                        <span
                                            className="px-2 py-0.5 rounded text-xs font-bold"
                                            style={{
                                                background: '#2563eb',
                                                color: 'white',
                                            }}
                                        >
                                            INFO
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            3 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
