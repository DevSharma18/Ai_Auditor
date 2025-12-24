'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts';

// Sample data
const driftTrendData = [
    { date: 'Jan 20', value: 0.5 },
    { date: 'Jul 21', value: 0.6 },
    { date: 'Jul 21', value: 0.5 },
    { date: 'Jul 22', value: 0.7 },
    { date: 'Jul 23', value: 0.8 },
    { date: 'Jul 24', value: 1.0 },
];

const biasMetricsData = [
    { category: 'Prot', male: 0.3, female: 0.5 },
    { category: 'Male', male: 0.8, female: 0.6 },
    { category: 'Alige', male: 0.7, female: 0.9 },
    { category: 'Bias', male: 0.5, female: 1.0 },
    { category: 'Aran', male: 0.9, female: 0.5 },
];

const safetyViolationsData = [
    { date: 'Jan 03', value: 5 },
    { date: 'Sep 03', value: 15 },
    { date: 'Jan 04', value: 25 },
    { date: 'Sep 04', value: 40 },
    { date: 'Sep 03', value: 45 },
    { date: 'Jan 05', value: 55 },
];

const severityTimelineData = [
    { label: 'Incident', jan: 2, apr: 3, jul: 4, oct: 2, aug: 3 },
    { label: 'Incident', jan: 1, apr: 0, jul: 2, oct: 2, aug: 3 },
    { label: 'Coority', jan: 0, apr: 1, jul: 3, oct: 4, aug: 3 },
    { label: 'Incident', jan: 2, apr: 2, jul: 3, oct: 4, aug: 5 },
];

const recentWarnings = [
    {
        date: '2023/06-27 12:01 PM',
        incident: 'Comorised Warnings',
        severity: 'Warnings',
        model: 'Chatbot-Alpha Model Detail',
        status: 'Warnings',
        lastScore: '17 hours ago',
    },
    {
        date: '2023/06-27 12:01 PM',
        incident: 'Comorised Warnings',
        severity: 'Warnings',
        model: 'Chatbot-Alpha Model Detail',
        status: 'Warnings',
        lastScore: '17 hours ago',
    },
];

export default function ModelDetailPage() {
    const searchParams = useSearchParams();
    const modelName = searchParams.get('name') || 'Unknown Model';
    const modelVersion = searchParams.get('version') || 'v0.0.0';
    const modelId = searchParams.get('id') || '';

    return (
        <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '32px' }}>
            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/models" className="hover:text-blue-600">Models</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-900 font-medium">{modelName}</span>
            </div>

            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">{modelName}</h1>
                <p className="text-gray-500 mt-1">Version: {modelVersion} • ID: {modelId}</p>
            </div>

            {/* Top Row: Model Overview, Drift Trend, Bias Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Model Overview */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Overview</h2>

                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Model Stats</div>
                            <div className="text-3xl font-bold text-gray-900">25.38</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Model Tarciet</div>
                            <div className="text-3xl font-bold text-gray-900">1.0%</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Productive rate</div>
                            <div className="text-3xl font-bold text-gray-900">40%</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Recum to chhath</div>
                            <div className="text-3xl font-bold text-gray-900">24 Tons</div>
                        </div>
                    </div>

                    <button
                        style={{
                            padding: '8px 16px',
                            background: '#ffffff',
                            border: '1px solid #d0d0d0',
                            borderRadius: '6px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            fontWeight: '500',
                        }}
                    >
                        Learn More ▼
                    </button>
                </div>

                {/* Drift Trend */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Drift Trend</h2>
                    <ResponsiveContainer width="100%" height={180}>
                        <AreaChart data={driftTrendData}>
                            <defs>
                                <linearGradient id="driftGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#666' }} />
                            <YAxis domain={[0, 10]} tick={{ fontSize: 12, fill: '#666' }} />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#6366f1"
                                strokeWidth={2}
                                fill="url(#driftGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Bias Metrics */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                        position: 'relative',
                    }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Bias Metrics</h2>
                        <button
                            style={{
                                padding: '6px 16px',
                                background: '#ffffff',
                                border: '1px solid #d0d0d0',
                                borderRadius: '6px',
                                fontSize: '13px',
                                cursor: 'pointer',
                                fontWeight: '500',
                            }}
                        >
                            View Bias Metrics
                        </button>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={biasMetricsData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="category" tick={{ fontSize: 12, fill: '#666' }} />
                            <YAxis domain={[0, 0.8]} tick={{ fontSize: 12, fill: '#666' }} />
                            <Tooltip />
                            <Bar dataKey="male" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="female" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Middle Row: Safety Violations, Severity Timeline */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Safety Violations */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Safety Violations</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <AreaChart data={safetyViolationsData}>
                            <defs>
                                <linearGradient id="safetyGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#666' }} />
                            <YAxis domain={[0, 60]} tick={{ fontSize: 12, fill: '#666' }} />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#ef4444"
                                strokeWidth={2}
                                fill="url(#safetyGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Severity Timeline */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Severity Timeline</h2>
                    <div className="space-y-3">
                        {severityTimelineData.map((row, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-20 text-sm text-gray-700">{row.label}</div>
                                <div className="flex-1 flex gap-2">
                                    {[row.jan, row.apr, row.jul, row.oct, row.aug].map((count, i) => (
                                        <div key={i} className="flex gap-1">
                                            {Array.from({ length: count }).map((_, j) => (
                                                <div
                                                    key={j}
                                                    style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        background:
                                                            idx === 0 ? '#6366f1' :
                                                                idx === 1 ? '#10b981' :
                                                                    idx === 2 ? '#f59e0b' :
                                                                        '#ef4444',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 justify-center mt-6 text-xs text-gray-600">
                        <span>Jan 05</span>
                        <span>Apr 05</span>
                        <span>Jul 05</span>
                        <span>Oct 05</span>
                        <span>Aug 06</span>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Recent Warnings, Red-team Score */}
            <div className="grid grid-cols-[1fr_300px] gap-6">
                {/* Recent Warnings Table */}
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #e0e0e0',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Warnings</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Date</th>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Incident</th>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Severity</th>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Model</th>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Status</th>
                                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#666' }}>Last Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentWarnings.map((warning, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#333' }}>{warning.date}</td>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#333' }}>{warning.incident}</td>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#333' }}>
                                            <span
                                                style={{
                                                    padding: '4px 12px',
                                                    background: '#fef3f2',
                                                    color: '#dc2626',
                                                    borderRadius: '12px',
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {warning.severity}
                                            </span>
                                        </td>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#333' }}>{warning.model}</td>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#333' }}>
                                            <span
                                                style={{
                                                    padding: '4px 12px',
                                                    background: '#fef3f2',
                                                    color: '#dc2626',
                                                    borderRadius: '12px',
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {warning.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '12px 8px', fontSize: '13px', color: '#666' }}>{warning.lastScore}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Red-team Score */}
                <div
                    style={{
                        background: '#fef2f2',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid #fecaca',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Red-team Score</h2>
                    <div className="text-7xl font-bold text-red-600">85%</div>
                </div>
            </div>
        </div>
    );
}
