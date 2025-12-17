'use client';

import { useState } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';

// Sample audit data with enhanced fields
const sampleAudits = [
    {
        id: '1',
        type: 'weekly',
        title: 'Weekly Audits',
        dateRange: 'December 29, 2021',
        auditScore: 92,
        previousScore: 89,
        status: 'completed',
        model: 'GPT-4',
        auditor: { name: 'Sarah Chen', avatar: 'SC' },
        issues: { critical: 3, high: 5, medium: 12 },
        severityData: { severity: 70, low: 30 },
        details: 'Comprehensive audit covering data privacy, bias detection, and performance metrics.'
    },
    {
        id: '2',
        type: 'weekly',
        title: 'Weekly Audits',
        dateRange: 'December 29, 2021 - June 28, 2022',
        auditScore: 92,
        previousScore: 92,
        status: 'completed',
        model: 'Customer Service Bot',
        auditor: { name: 'Mike Johnson', avatar: 'MJ' },
        issues: { critical: 2, high: 4, medium: 8 },
        severityData: { severity: 65, low: 35 },
        details: 'Regular monitoring audit with focus on conversational safety.'
    },
    {
        id: '3',
        type: 'monthly',
        title: 'Monthly Audits',
        dateRange: 'Monthly 11, 2023',
        auditScore: 93,
        previousScore: 90,
        status: 'completed',
        model: 'Claude 3',
        auditor: { name: 'Emily Davis', avatar: 'ED' },
        issues: { critical: 1, high: 3, medium: 10 },
        severityData: { low: 40, medium: 35, high: 25 },
        details: 'Monthly comprehensive review including compliance checks.'
    },
    {
        id: '4',
        type: 'monthly',
        title: 'Monthly Audits',
        dateRange: 'Monthly 20, 2023 - June 30, 2022',
        auditScore: 93,
        previousScore: 91,
        status: 'in-progress',
        model: 'Legal Doc Summarizer',
        auditor: { name: 'Alex Kumar', avatar: 'AK' },
        issues: { critical: 0, high: 2, medium: 6 },
        severityData: { low: 35, medium: 40, high: 25 },
        details: 'In-progress audit focusing on legal compliance and accuracy.'
    },
];

export default function AuditsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'weekly' | 'monthly'>('all');
    const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'in-progress'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'score'>('date');
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    // Filter and sort audits
    const filteredAudits = sampleAudits
        .filter(audit => {
            const matchesSearch = audit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                audit.model.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = filterType === 'all' || audit.type === filterType;
            const matchesStatus = filterStatus === 'all' || audit.status === filterStatus;
            return matchesSearch && matchesType && matchesStatus;
        })
        .sort((a, b) => {
            if (sortBy === 'score') return b.auditScore - a.auditScore;
            return 0; // Default date order
        });

    // Calculate statistics
    const totalAudits = sampleAudits.length;
    const avgScore = (sampleAudits.reduce((sum, a) => sum + a.auditScore, 0) / totalAudits).toFixed(1);
    const passRate = ((sampleAudits.filter(a => a.auditScore >= 90).length / totalAudits) * 100).toFixed(0);

    return (
        <div style={{ background: '#fafafa', minHeight: '100vh' }}>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Audits Page</h1>
                <p className="text-gray-600">Comprehensive audit management and reporting</p>
            </div>

            {/* Summary Statistics Dashboard */}
            <div className="grid grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon="📊"
                    label="Total Audits"
                    value={totalAudits.toString()}
                    color="#3b82f6"
                />
                <StatCard
                    icon="📈"
                    label="Average Score"
                    value={`${avgScore}%`}
                    color="#10b981"
                />
                <StatCard
                    icon="✅"
                    label="Pass Rate"
                    value={`${passRate}%`}
                    color="#8b5cf6"
                />
                <StatCard
                    icon="⏰"
                    label="Last Audit"
                    value="2 days ago"
                    color="#f59e0b"
                />
            </div>

            {/* Filter & Search Bar */}
            <div
                className="mb-8"
                style={{
                    background: '#ffffff',
                    padding: '20px 24px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                }}
            >
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="🔍 Search audits by model or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 16px',
                                border: '1px solid #d1d5db',
                                borderRadius: '8px',
                                fontSize: '14px',
                                outline: 'none',
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        />
                    </div>

                    {/* Type Filter */}
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value as any)}
                        style={{
                            padding: '10px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '14px',
                            background: '#ffffff',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="all">All Types</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>

                    {/* Status Filter */}
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as any)}
                        style={{
                            padding: '10px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '14px',
                            background: '#ffffff',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="all">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                    </select>

                    {/* Sort */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        style={{
                            padding: '10px 16px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '14px',
                            background: '#ffffff',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="date">Sort by Date</option>
                        <option value="score">Sort by Score</option>
                    </select>
                </div>
            </div>

            {/* Audits List */}
            {filteredAudits.length === 0 ? (
                <EmptyState searchQuery={searchQuery} />
            ) : (
                <>
                    {/* Weekly Audits */}
                    {filteredAudits.some(a => a.type === 'weekly') && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Audits</h2>
                            <div className="space-y-5">
                                {filteredAudits
                                    .filter(a => a.type === 'weekly')
                                    .map((audit) => (
                                        <EnhancedAuditCard
                                            key={audit.id}
                                            audit={audit}
                                            isExpanded={expandedCard === audit.id}
                                            onToggleExpand={() => setExpandedCard(expandedCard === audit.id ? null : audit.id)}
                                        />
                                    ))}
                            </div>
                        </section>
                    )}

                    {/* Monthly Audits */}
                    {filteredAudits.some(a => a.type === 'monthly') && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Audits</h2>
                            <div className="space-y-5">
                                {filteredAudits
                                    .filter(a => a.type === 'monthly')
                                    .map((audit) => (
                                        <EnhancedAuditCard
                                            key={audit.id}
                                            audit={audit}
                                            isExpanded={expandedCard === audit.id}
                                            onToggleExpand={() => setExpandedCard(expandedCard === audit.id ? null : audit.id)}
                                        />
                                    ))}
                            </div>
                        </section>
                    )}
                </>
            )}
        </div>
    );
}

// Stat Card Component
function StatCard({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
    return (
        <div
            className="transition-all duration-200"
            style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
            }}
        >
            <div className="flex items-center gap-3 mb-3">
                <div
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: `${color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                    }}
                >
                    {icon}
                </div>
                <div className="text-sm font-medium text-gray-600">{label}</div>
            </div>
            <div className="text-3xl font-bold" style={{ color }}>{value}</div>
        </div>
    );
}

// Enhanced Audit Card Component
function EnhancedAuditCard({ audit, isExpanded, onToggleExpand }: any) {
    const [showMenu, setShowMenu] = useState(false);
    const scoreTrend = audit.auditScore - audit.previousScore;
    const statusConfig = {
        completed: { label: 'Completed', color: '#10b981', bg: '#d1fae5' },
        'in-progress': { label: 'In Progress', color: '#3b82f6', bg: '#dbeafe' },
        failed: { label: 'Failed', color: '#ef4444', bg: '#fee2e2' },
    };
    const config = statusConfig[audit.status as keyof typeof statusConfig];

    return (
        <div
            className="transition-all duration-200"
            style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '28px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Main Card Content */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr',
                    gap: '32px',
                    alignItems: 'start',
                }}
            >
                {/* Column 1: Enhanced Audit Info */}
                <div>
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2" style={{ fontSize: '17px' }}>
                                {audit.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">{audit.dateRange}</p>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                                background: config.bg,
                                color: config.color,
                            }}
                        >
                            {config.label}
                        </span>
                        <span
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                background: '#f3f4f6',
                                color: '#6b7280',
                            }}
                        >
                            {audit.model}
                        </span>
                    </div>

                    {/* Auditor Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div
                            style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            {audit.auditor.avatar}
                        </div>
                        <span>by {audit.auditor.name}</span>
                    </div>
                </div>

                {/* Column 2: Audit Score with Trend */}
                <div>
                    <div className="text-sm text-gray-600 mb-2">Audit Score</div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-5xl font-extrabold text-gray-900" style={{ lineHeight: '1' }}>
                            {audit.auditScore}%
                        </div>
                    </div>
                    {scoreTrend !== 0 && (
                        <div className="flex items-center gap-1 text-sm font-medium" style={{
                            color: scoreTrend > 0 ? '#10b981' : '#ef4444'
                        }}>
                            <span>{scoreTrend > 0 ? '↗️' : '↘️'}</span>
                            <span>{scoreTrend > 0 ? '+' : ''}{scoreTrend}%</span>
                        </div>
                    )}
                </div>

                {/* Column 3: Severity Snapshot */}
                <div>
                    <div className="text-sm text-gray-600 mb-3">Severity Snapshot</div>
                    {audit.type === 'weekly' ? (
                        <WeeklySeverityChart data={audit.severityData} />
                    ) : (
                        <MonthlySeverityBar data={audit.severityData} />
                    )}

                    {/* Issues Summary */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {audit.issues.critical > 0 && (
                            <span className="text-xs px-2 py-1 rounded" style={{ background: '#fee2e2', color: '#dc2626' }}>
                                {audit.issues.critical} Critical
                            </span>
                        )}
                        {audit.issues.high > 0 && (
                            <span className="text-xs px-2 py-1 rounded" style={{ background: '#fed7aa', color: '#ea580c' }}>
                                {audit.issues.high} High
                            </span>
                        )}
                        {audit.issues.medium > 0 && (
                            <span className="text-xs px-2 py-1 rounded" style={{ background: '#fef3c7', color: '#d97706' }}>
                                {audit.issues.medium} Medium
                            </span>
                        )}
                    </div>
                </div>

                {/* Column 4: Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        className="transition-all duration-200 w-full"
                        style={{
                            background: '#2563eb',
                            color: 'white',
                            padding: '12px 20px',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#2563eb';
                        }}
                    >
                        Download PDF
                    </button>

                    <button
                        onClick={onToggleExpand}
                        className="transition-all duration-200 w-full"
                        style={{
                            background: '#ffffff',
                            color: '#6b7280',
                            padding: '12px 20px',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            border: '1px solid #d1d5db',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f9fafb';
                            e.currentTarget.style.borderColor = '#9ca3af';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.borderColor = '#d1d5db';
                        }}
                    >
                        {isExpanded ? 'Hide Details' : 'View Details'}
                    </button>

                    {/* Quick Actions Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="transition-all duration-200 w-full"
                            style={{
                                background: '#ffffff',
                                color: '#6b7280',
                                padding: '10px',
                                borderRadius: '8px',
                                fontSize: '18px',
                                fontWeight: '600',
                                border: '1px solid #d1d5db',
                                cursor: 'pointer',
                            }}
                        >
                            ⋮
                        </button>

                        {showMenu && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    marginTop: '8px',
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                    minWidth: '180px',
                                    zIndex: 10,
                                }}
                            >
                                {['Compare', 'Export CSV', 'Archive', 'Share'].map((action) => (
                                    <button
                                        key={action}
                                        className="transition-all duration-150"
                                        style={{
                                            width: '100%',
                                            padding: '12px 16px',
                                            textAlign: 'left',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            color: '#374151',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#f3f4f6';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Expanded Details */}
            {isExpanded && (
                <div
                    className="mt-6 pt-6"
                    style={{
                        borderTop: '1px solid #e5e7eb',
                    }}
                >
                    <h4 className="font-semibold text-gray-900 mb-3">Audit Details</h4>
                    <p className="text-sm text-gray-600 mb-4">{audit.details}</p>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-xs text-gray-500 mb-1">Total Issues</div>
                            <div className="text-lg font-bold text-gray-900">
                                {audit.issues.critical + audit.issues.high + audit.issues.medium}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 mb-1">Compliance Score</div>
                            <div className="text-lg font-bold text-green-600">98%</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 mb-1">Duration</div>
                            <div className="text-lg font-bold text-gray-900">3.5 hours</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Weekly Severity Donut Chart
function WeeklySeverityChart({ data }: { data: any }) {
    const chartData = [
        { name: 'Severity', value: data.severity, color: '#ff9800' },
        { name: 'Low', value: data.low, color: '#22c55e' },
    ];

    return (
        <div>
            <div style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={24}
                            outerRadius={36}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-3 justify-center mt-3">
                <div className="flex items-center gap-1.5">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff9800' }}></div>
                    <span className="text-xs text-gray-600">Severity</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></div>
                    <span className="text-xs text-gray-600">Low</span>
                </div>
            </div>
        </div>
    );
}

// Monthly Severity Horizontal Bar
function MonthlySeverityBar({ data }: { data: any }) {
    const total = data.low + data.medium + data.high;
    const lowPercent = (data.low / total) * 100;
    const mediumPercent = (data.medium / total) * 100;
    const highPercent = (data.high / total) * 100;

    return (
        <div
            style={{
                display: 'flex',
                height: '24px',
                borderRadius: '4px',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <div style={{ width: `${lowPercent}%`, background: '#22c55e' }}></div>
            <div style={{ width: `${mediumPercent}%`, background: '#ff9800' }}></div>
            <div style={{ width: `${highPercent}%`, background: '#ef4444' }}></div>
        </div>
    );
}

// Empty State Component
function EmptyState({ searchQuery }: { searchQuery: string }) {
    return (
        <div
            style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '80px 40px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
            }}
        >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {searchQuery ? 'No audits found' : 'No audits available'}
            </h3>
            <p className="text-gray-500 mb-6">
                {searchQuery
                    ? `No results for "${searchQuery}". Try different keywords.`
                    : 'Start by creating your first audit report.'}
            </p>
            {!searchQuery && (
                <button
                    style={{
                        background: '#2563eb',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Create First Audit
                </button>
            )}
        </div>
    );
}
