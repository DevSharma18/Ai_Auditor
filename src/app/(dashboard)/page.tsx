'use client';

import { useState } from 'react';
import PieChart from '@/components/charts/PieChart';
import BarChart from '@/components/charts/BarChart';

export default function DashboardPage() {
    // Top Metrics
    const metrics = {
        totalModelsMonitored: 47,
        modelsUnderMonitoring: 12,
        overallAIRiskScore: 68,
        complianceReadinessScore: 82,
    };

    // PII Data
    const piiLeaksData = [
        { name: 'Total PII Leaks', value: 23 },
        { name: 'Addressed Leaks', value: 15 }
    ];

    const piiSeverityData = [
        { name: 'Critical', value: 5 },
        { name: 'High', value: 8 },
        { name: 'Medium', value: 7 },
        { name: 'Low', value: 3 }
    ];

    const piiTrendData = {
        oneMonth: [
            { name: 'Week 1', value: 4 },
            { name: 'Week 2', value: 6 },
            { name: 'Week 3', value: 5 },
            { name: 'Week 4', value: 8 }
        ],
        sixMonths: [
            { name: 'Jan', value: 12 },
            { name: 'Feb', value: 15 },
            { name: 'Mar', value: 18 },
            { name: 'Apr', value: 14 },
            { name: 'May', value: 20 },
            { name: 'Jun', value: 23 }
        ],
        oneYear: [
            { name: 'Q1', value: 45 },
            { name: 'Q2', value: 57 },
            { name: 'Q3', value: 62 },
            { name: 'Q4', value: 71 }
        ]
    };

    // Drift Data
    const driftAnalysisData = [
        { name: 'Models Analyzed', value: 35 },
        { name: 'Models With Drift', value: 12 }
    ];

    const driftSeverityData = [
        { name: 'Critical', value: 3 },
        { name: 'High', value: 5 },
        { name: 'Medium', value: 3 },
        { name: 'Low', value: 1 }
    ];

    const driftTrendData = {
        oneMonth: [
            { name: 'Week 1', value: 2 },
            { name: 'Week 2', value: 4 },
            { name: 'Week 3', value: 3 },
            { name: 'Week 4', value: 3 }
        ],
        sixMonths: [
            { name: 'Jan', value: 8 },
            { name: 'Feb', value: 10 },
            { name: 'Mar', value: 12 },
            { name: 'Apr', value: 9 },
            { name: 'May', value: 11 },
            { name: 'Jun', value: 12 }
        ],
        oneYear: [
            { name: 'Q1', value: 30 },
            { name: 'Q2', value: 32 },
            { name: 'Q3', value: 28 },
            { name: 'Q4', value: 35 }
        ]
    };

    // Bias Data
    const biasAnalysisData = [
        { name: 'Models Analyzed', value: 40 },
        { name: 'Models With Bias', value: 9 }
    ];

    const biasSeverityData = [
        { name: 'Critical', value: 2 },
        { name: 'High', value: 3 },
        { name: 'Medium', value: 3 },
        { name: 'Low', value: 1 }
    ];

    const biasTrendData = {
        oneMonth: [
            { name: 'Week 1', value: 1 },
            { name: 'Week 2', value: 3 },
            { name: 'Week 3', value: 2 },
            { name: 'Week 4', value: 3 }
        ],
        sixMonths: [
            { name: 'Jan', value: 5 },
            { name: 'Feb', value: 7 },
            { name: 'Mar', value: 8 },
            { name: 'Apr', value: 6 },
            { name: 'May', value: 9 },
            { name: 'Jun', value: 9 }
        ],
        oneYear: [
            { name: 'Q1', value: 20 },
            { name: 'Q2', value: 24 },
            { name: 'Q3', value: 22 },
            { name: 'Q4', value: 27 }
        ]
    };

    // Hallucination Data
    const hallucinationAnalysisData = [
        { name: 'Models Analyzed', value: 38 },
        { name: 'Models Hallucinating', value: 7 }
    ];

    const hallucinationSeverityData = [
        { name: 'Critical', value: 1 },
        { name: 'High', value: 2 },
        { name: 'Medium', value: 3 },
        { name: 'Low', value: 1 }
    ];

    const hallucinationTrendData = {
        oneMonth: [
            { name: 'Week 1', value: 1 },
            { name: 'Week 2', value: 2 },
            { name: 'Week 3', value: 2 },
            { name: 'Week 4', value: 2 }
        ],
        sixMonths: [
            { name: 'Jan', value: 4 },
            { name: 'Feb', value: 5 },
            { name: 'Mar', value: 6 },
            { name: 'Apr', value: 5 },
            { name: 'May', value: 7 },
            { name: 'Jun', value: 7 }
        ],
        oneYear: [
            { name: 'Q1', value: 15 },
            { name: 'Q2', value: 17 },
            { name: 'Q3', value: 18 },
            { name: 'Q4', value: 21 }
        ]
    };

    const chartColors = {
        pii: ['#3b82f6', '#10b981'],
        drift: ['#8b5cf6', '#ec4899'],
        bias: ['#f59e0b', '#ef4444'],
        hallucination: ['#06b6d4', '#14b8a6'],
        severity: ['#dc2626', '#f97316', '#fbbf24', '#84cc16']
    };

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', padding: '0' }}>
            {/* Page Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>
                    Dashboard
                </h1>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    Comprehensive AI Model Monitoring and Compliance Overview
                </p>
            </div>

            {/* Top Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                {[
                    { label: 'Total Models Monitored', value: metrics.totalModelsMonitored, color: '#3b82f6' },
                    { label: 'Models Under Monitoring', value: metrics.modelsUnderMonitoring, color: '#10b981' },
                    { label: 'Overall AI Risk Score', value: metrics.overallAIRiskScore, suffix: '/100', color: '#f59e0b' },
                    { label: 'Compliance Readiness Score', value: metrics.complianceReadinessScore, suffix: '%', color: '#8b5cf6' }
                ].map((metric, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: '#ffffff',
                            border: '2px solid #e5e7eb',
                            padding: '24px',
                            transition: 'all 0.2s'
                        }}
                    >
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#6b7280', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {metric.label}
                        </div>
                        <div style={{ fontSize: '36px', fontWeight: '700', color: metric.color, lineHeight: '1' }}>
                            {metric.value}{metric.suffix || ''}
                        </div>
                    </div>
                ))}
            </div>

            {/* PII Section */}
            <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
                    PII Monitoring
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={piiLeaksData} colors={chartColors.pii} title="Total PII Leaks vs Addressed" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <BarChart data={piiTrendData} color="#3b82f6" title="Trend of PII Leakage" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={piiSeverityData} colors={chartColors.severity} title="PII Leaks by Severity" />
                    </div>
                </div>
            </div>

            {/* Drift Section */}
            <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
                    Drift Analysis
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={driftAnalysisData} colors={chartColors.drift} title="Models Analyzed vs Drift Detected" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <BarChart data={driftTrendData} color="#8b5cf6" title="Trend of Drift Detection" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={driftSeverityData} colors={chartColors.severity} title="Drift by Severity" />
                    </div>
                </div>
            </div>

            {/* Bias Section */}
            <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
                    Bias Detection
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={biasAnalysisData} colors={chartColors.bias} title="Models Analyzed vs Bias Detected" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <BarChart data={biasTrendData} color="#f59e0b" title="Trend of Bias Detection" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={biasSeverityData} colors={chartColors.severity} title="Bias by Severity" />
                    </div>
                </div>
            </div>

            {/* Hallucination Section */}
            <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
                    Hallucination Monitoring
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={hallucinationAnalysisData} colors={chartColors.hallucination} title="Models Analyzed vs Hallucinating" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <BarChart data={hallucinationTrendData} color="#06b6d4" title="Trend of Hallucination" />
                    </div>
                    <div style={{ background: '#ffffff', border: '2px solid #e5e7eb', padding: '24px' }}>
                        <PieChart data={hallucinationSeverityData} colors={chartColors.severity} title="Hallucination by Severity" />
                    </div>
                </div>
            </div>
        </div>
    );
}
