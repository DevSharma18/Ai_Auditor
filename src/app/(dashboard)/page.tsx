'use client';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
} from 'recharts';

const gaugeData = [
    { name: 'Value', value: 72 },
    { name: 'Remaining', value: 28 },
];

const COLORS = ['#10b981', '#e5e7eb'];

const riskData = [
    { x: 25, y: 75, z: 100 },
    { x: 45, y: 65, z: 100 },
    { x: 55, y: 45, z: 100 },
    { x: 65, y: 75, z: 100 },
    { x: 75, y: 55, z: 100 },
    { x: 35, y: 35, z: 100 },
    { x: 25, y: 25, z: 100 },
    { x: 55, y: 15, z: 100 },
    { x: 75, y: 15, z: 100 },
    { x: 85, y: 25, z: 100 },
    { x: 85, y: 65, z: 100 },
];

export default function Home() {
    return (
        <div
            className="min-h-screen"
            style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #fce7f3 100%)',
                padding: '48px 60px',
            }}
        >
            {/* Page Header */}
            <div className="mb-12 animate-[fadeInDown_0.6s_ease-out]">
                <h1
                    className="font-extrabold mb-3"
                    style={{
                        fontSize: '48px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-2px',
                    }}
                >
                    Org Status
                </h1>
                <p className="text-gray-600 text-lg">Welcome back! Here's your AI governance overview</p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Global Compliance Gauge */}
                <div
                    className="group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                        borderRadius: '24px',
                        padding: '32px',
                        border: '2px solid #a7f3d0',
                        boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.05)';
                    }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className="p-3 rounded-xl"
                            style={{
                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                            }}
                        >
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4" />
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Global Compliance Gauge
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-[300px] h-[180px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={gaugeData}
                                        cx="50%"
                                        cy="85%"
                                        startAngle={180}
                                        endAngle={0}
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        {gaugeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <span
                                    className="font-black"
                                    style={{
                                        fontSize: '56px',
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    72%
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-full max-w-[300px] mt-2 px-5">
                            <span className="text-sm text-gray-500 font-semibold">0</span>
                            <span className="text-sm text-gray-500 font-semibold">100</span>
                        </div>
                    </div>
                </div>

                {/* Risk Matrix */}
                <div
                    className="group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)',
                        borderRadius: '24px',
                        padding: '32px',
                        border: '2px solid #fde68a',
                        boxShadow: '0 10px 40px rgba(251, 191, 36, 0.15), 0 0 0 1px rgba(251, 191, 36, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(251, 191, 36, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(251, 191, 36, 0.15), 0 0 0 1px rgba(251, 191, 36, 0.05)';
                    }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className="p-3 rounded-xl"
                            style={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                            }}
                        >
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Risk Matrix</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <ResponsiveContainer width={250} height={250}>
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#fde68a" />
                                <XAxis
                                    type="number"
                                    dataKey="x"
                                    domain={[0, 100]}
                                    name="Impact"
                                    tick={{ fill: '#92400e', fontSize: 12, fontWeight: 600 }}
                                />
                                <YAxis
                                    type="number"
                                    dataKey="y"
                                    domain={[0, 100]}
                                    name="Likelihood"
                                    tick={{ fill: '#92400e', fontSize: 12, fontWeight: 600 }}
                                />
                                <ZAxis type="number" dataKey="z" range={[60, 60]} />
                                <Scatter data={riskData} fill="#f59e0b" />
                            </ScatterChart>
                        </ResponsiveContainer>
                        <div className="text-center mt-2">
                            <span className="text-sm text-amber-700 font-semibold">Impact</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div
                    className="group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
                        borderRadius: '20px',
                        padding: '32px',
                        textAlign: 'center',
                        border: '2px solid #bfdbfe',
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 48px rgba(59, 130, 246, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.15)';
                    }}
                >
                    <div
                        className="font-black mb-3 leading-none"
                        style={{
                            fontSize: '64px',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        120
                    </div>
                    <div className="text-base text-blue-700 font-bold uppercase tracking-wide">Controls</div>
                </div>

                <div
                    className="group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #fce7f3 100%)',
                        borderRadius: '20px',
                        padding: '32px',
                        textAlign: 'center',
                        border: '2px solid #fbcfe8',
                        boxShadow: '0 8px 32px rgba(236, 72, 153, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 48px rgba(236, 72, 153, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(236, 72, 153, 0.15)';
                    }}
                >
                    <div
                        className="font-black mb-3 leading-none"
                        style={{
                            fontSize: '64px',
                            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        8
                    </div>
                    <div className="text-base text-pink-700 font-bold uppercase tracking-wide">Issues</div>
                </div>

                <div
                    className="group transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%)',
                        borderRadius: '20px',
                        padding: '32px',
                        textAlign: 'center',
                        border: '2px solid #d8b4fe',
                        boxShadow: '0 8px 32px rgba(168, 85, 247, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 48px rgba(168, 85, 247, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(168, 85, 247, 0.15)';
                    }}
                >
                    <div
                        className="font-black mb-3 leading-none"
                        style={{
                            fontSize: '64px',
                            background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        24
                    </div>
                    <div className="text-base text-purple-700 font-bold uppercase tracking-wide">Audits</div>
                </div>
            </div>

            {/* Recent Activity */}
            <div
                className="group transition-all duration-300"
                style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '2px solid #e5e7eb',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div
                        className="p-3 rounded-xl"
                        style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                        }}
                    >
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
                </div>
                <ul className="space-y-0">
                    {[
                        { text: 'Compliance report generated', time: '2h ago', color: '#10b981' },
                        { text: 'Model updated', time: '5h ago', color: '#3b82f6' },
                        { text: 'Update completed', time: 'Mar 23', color: '#8b5cf6' },
                        { text: 'Audit update', time: 'Mar 23', color: '#ec4899' },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center group/item transition-all duration-200"
                            style={{
                                padding: '20px 24px',
                                borderBottom: index < 3 ? '2px solid #f3f4f6' : 'none',
                                borderRadius: '12px',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #fafafa 0%, #f9fafb 100%)';
                                e.currentTarget.style.transform = 'translateX(8px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <span
                                    className="font-black text-2xl leading-none"
                                    style={{ color: item.color }}
                                >
                                    •
                                </span>
                                <span className="text-base text-gray-700 font-medium">{item.text}</span>
                            </div>
                            <span
                                className="text-sm font-semibold px-3 py-1 rounded-full"
                                style={{
                                    background: `${item.color}15`,
                                    color: item.color,
                                }}
                            >
                                {item.time}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
