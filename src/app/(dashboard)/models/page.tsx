'use client';

import { useState } from 'react';

// Mock data
const mockModels = [
    {
        id: 1,
        name: 'Customer_Service_Bot_v2',
        version: 'v2.1.0',
        type: 'Chat Assistant',
        owner: 'ml-team@acme.com',
        businessUnit: 'Finance',
        provider: 'OpenAI',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Legal_Doc_Summarizer',
        version: 'v1.5.2',
        type: 'Summarization',
        owner: 'legal-ai@acme.com',
        businessUnit: 'Legal',
        provider: 'Azure OpenAI',
        status: 'Active',
    },
    {
        id: 3,
        name: 'HR_Resume_Parser',
        version: 'v3.0.1',
        type: 'Information Extraction',
        owner: 'hr-analytics@acme.com',
        businessUnit: 'HR',
        provider: 'AWS Bedrock',
        status: 'Inactive',
    },
];

export default function ModelsPage() {
    const [showModal, setShowModal] = useState(false);

    const getBUBadgeClass = (bu: string) => {
        const classes: Record<string, string> = {
            Finance: 'bg-blue-50 text-blue-700 border border-blue-200',
            Legal: 'bg-amber-50 text-amber-700 border border-amber-200',
            HR: 'bg-pink-50 text-pink-700 border border-pink-200',
        };
        return classes[bu] || 'bg-gray-50 text-gray-700 border border-gray-200';
    };

    const getStatusBadgeClass = (status: string) => {
        return status === 'Active'
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-red-50 text-red-700 border border-red-200';
    };

    return (
        <div className="min-h-screen">
            {/* Page Header with Box Model */}
            <div
                className="flex justify-between items-center animate-[fadeInDown_0.6s_ease-out]"
                style={{
                    marginBottom: '48px', // margin
                    paddingBottom: '24px', // padding
                    borderBottom: '2px solid #f0f0f0', // border
                }}
            >
                <div>
                    <h1
                        className="relative inline-block font-extrabold tracking-tight"
                        style={{
                            fontSize: '42px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-1px',
                            marginBottom: '8px',
                        }}
                    >
                        Models
                        <span
                            className="absolute left-0 rounded-sm"
                            style={{
                                bottom: '-12px',
                                width: '80px',
                                height: '4px',
                                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                                boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
                            }}
                        />
                    </h1>
                    <p className="text-gray-500 text-sm mt-3 ml-0.5">Manage and monitor your AI models</p>
                </div>

                {/* Add Model Button - Box Model Approach */}
                <button
                    onClick={() => setShowModal(true)}
                    className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{
                        // Box Model: margin, border, padding, content
                        margin: '0',
                        border: '2px solid transparent',
                        borderRadius: '12px',
                        padding: '14px 28px',

                        // Modern styling
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)',

                        // Typography
                        fontSize: '15px',
                        fontWeight: '600',
                        color: 'white',

                        // Layout
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',

                        cursor: 'pointer',
                        boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.25)';
                    }}
                >
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-opacity duration-500" />

                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span className="relative z-10">Add Model</span>
                </button>
            </div>

            {/* Models Table Card - Box Model with solid borders */}
            <div
                className="bg-white overflow-hidden"
                style={{
                    // Box Model: margin, border, padding, content
                    marginTop: '32px', // Lower positioning
                    marginBottom: '32px',
                    marginLeft: '0',
                    marginRight: '0',

                    border: '2px solid #e5e7eb', // Solid border
                    borderRadius: '16px',
                    padding: '0', // No padding on container for table

                    // Modern shadow
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

                    boxSizing: 'border-box',
                }}
            >
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            }}
                        >
                            <tr>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Model Name
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Version
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Type
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Owner
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Business Unit
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Provider
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Status
                                </th>
                                <th
                                    className="text-left font-semibold uppercase tracking-wide text-white"
                                    style={{
                                        padding: '20px 24px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        borderBottom: '3px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockModels.map((model, index) => (
                                <tr
                                    key={model.id}
                                    className="transition-all duration-200 hover:bg-gray-50 cursor-pointer"
                                    style={{
                                        borderBottom: index === mockModels.length - 1 ? 'none' : '1px solid #f3f4f6',
                                    }}
                                >
                                    <td
                                        className="font-semibold text-[#667eea]"
                                        style={{
                                            padding: '20px 24px',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {model.name}
                                    </td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <span
                                            className="inline-block font-semibold"
                                            style={{
                                                padding: '6px 12px',
                                                background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
                                                color: '#4a5ae8',
                                                borderRadius: '8px',
                                                fontSize: '12px',
                                                border: '1px solid #c7d2fe',
                                            }}
                                        >
                                            {model.version}
                                        </span>
                                    </td>
                                    <td className="text-gray-700" style={{ padding: '20px 24px', fontSize: '14px' }}>{model.type}</td>
                                    <td className="text-gray-600" style={{ padding: '20px 24px', fontSize: '13px' }}>{model.owner}</td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <span
                                            className={`inline-block font-semibold ${getBUBadgeClass(model.businessUnit)}`}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '8px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {model.businessUnit}
                                        </span>
                                    </td>
                                    <td className="text-gray-700" style={{ padding: '20px 24px', fontSize: '14px' }}>{model.provider}</td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <span
                                            className={`inline-block font-semibold ${getStatusBadgeClass(model.status)}`}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '8px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {model.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <div className="flex gap-2">
                                            <button
                                                className="group transition-all duration-200 hover:scale-110 active:scale-95"
                                                style={{
                                                    width: '36px',
                                                    height: '36px',
                                                    padding: '8px',
                                                    background: 'transparent',
                                                    border: '1.5px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = '#f9fafb';
                                                    e.currentTarget.style.borderColor = '#667eea';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                                }}
                                                title="Edit"
                                            >
                                                <svg className="w-4 h-4 text-gray-600 group-hover:text-[#667eea] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="group transition-all duration-200 hover:scale-110 active:scale-95"
                                                style={{
                                                    width: '36px',
                                                    height: '36px',
                                                    padding: '8px',
                                                    background: 'transparent',
                                                    border: '1.5px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = '#fef2f2';
                                                    e.currentTarget.style.borderColor = '#ef4444';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                                }}
                                                title="Delete"
                                            >
                                                <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Model Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-[fadeIn_0.3s_ease]"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl w-[90%] max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col animate-[slideUp_0.3s_ease]"
                        style={{
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            border: '2px solid #e5e7eb',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div
                            className="flex justify-between items-center border-b-2 border-white/20"
                            style={{
                                padding: '24px 32px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            }}
                        >
                            <h2 className="text-2xl font-bold text-white m-0">Add New Model</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="transition-all duration-200 hover:rotate-90 active:scale-90"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    padding: '8px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                }}
                            >
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="overflow-y-auto flex-1" style={{ padding: '32px' }}>
                            <form id="modelForm" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                                {/* Section 1: Model Metadata */}
                                <div style={{ marginBottom: '32px' }}>
                                    <h3
                                        className="font-bold text-[#1d1d1f]"
                                        style={{
                                            fontSize: '18px',
                                            marginBottom: '20px',
                                            paddingBottom: '12px',
                                            borderBottom: '2px solid #667eea',
                                        }}
                                    >
                                        Model Metadata
                                    </h3>
                                    <div className="grid grid-cols-2 gap-5">
                                        {/* Model Name */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Model Name <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., Customer_Service_Bot_v2"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Version Tag */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Version Tag <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., v2.1.0 or prod-2025-12"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Owner */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Owner <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., ml-team@acme.com"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Business Unit */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Business Unit <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    cursor: 'pointer',
                                                    appearance: 'none',
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 12px center',
                                                    paddingRight: '36px',
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            >
                                                <option value="">Select Business Unit</option>
                                                <option value="Finance">Finance</option>
                                                <option value="HR">HR</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Legal">Legal</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Operations">Operations</option>
                                            </select>
                                        </div>

                                        {/* Model Type - Full Width */}
                                        <div className="flex flex-col col-span-2">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Model Type <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    cursor: 'pointer',
                                                    appearance: 'none',
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 12px center',
                                                    paddingRight: '36px',
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            >
                                                <option value="">Select Model Type</option>
                                                <option value="Chat Assistant">Chat Assistant</option>
                                                <option value="Summarization">Summarization</option>
                                                <option value="Information Extraction">Information Extraction</option>
                                                <option value="Text Classification">Text Classification</option>
                                                <option value="Question Answering">Question Answering</option>
                                                <option value="Code Generation">Code Generation</option>
                                                <option value="Translation">Translation</option>
                                                <option value="Custom">Custom</option>
                                            </select>
                                        </div>

                                        {/* Description - Full Width */}
                                        <div className="flex flex-col col-span-2">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Description <span className="text-red-600">*</span>
                                            </label>
                                            <textarea
                                                rows={3}
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    resize: 'vertical',
                                                    minHeight: '80px',
                                                }}
                                                placeholder="e.g., Summarizes legal PDF documents"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Connection Details */}
                                <div>
                                    <h3
                                        className="font-bold text-[#1d1d1f]"
                                        style={{
                                            fontSize: '18px',
                                            marginBottom: '20px',
                                            paddingBottom: '12px',
                                            borderBottom: '2px solid #667eea',
                                        }}
                                    >
                                        Connection Details
                                    </h3>
                                    <div className="grid grid-cols-2 gap-5">
                                        {/* Model Provider */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Model Provider <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    cursor: 'pointer',
                                                    appearance: 'none',
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 12px center',
                                                    paddingRight: '36px',
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            >
                                                <option value="">Select Provider</option>
                                                <option value="OpenAI">OpenAI</option>
                                                <option value="Azure OpenAI">Azure OpenAI</option>
                                                <option value="AWS Bedrock">AWS Bedrock</option>
                                                <option value="Google Vertex AI">Google Vertex AI</option>
                                                <option value="HuggingFace Endpoint">HuggingFace Endpoint</option>
                                                <option value="Anthropic">Anthropic</option>
                                                <option value="Custom/Self-Hosted">Custom/Self-Hosted</option>
                                            </select>
                                        </div>

                                        {/* Context Window Size */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Context Window Size <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    cursor: 'pointer',
                                                    appearance: 'none',
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 12px center',
                                                    paddingRight: '36px',
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            >
                                                <option value="">Select Size</option>
                                                <option value="4k">4k tokens</option>
                                                <option value="8k">8k tokens</option>
                                                <option value="16k">16k tokens</option>
                                                <option value="32k">32k tokens</option>
                                                <option value="64k">64k tokens</option>
                                                <option value="128k">128k tokens</option>
                                                <option value="200k">200k tokens</option>
                                            </select>
                                        </div>

                                        {/* Endpoint URL - Full Width */}
                                        <div className="flex flex-col col-span-2">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Endpoint URL <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="url"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., https://api.internal.acme.com/v1/inference"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Authentication Header Name */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Authentication Header Name <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., Authorization or X-API-Key"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* API Key/Token */}
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                API Key/Token <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="Enter API key or token"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>

                                        {/* Rate Limit - Full Width */}
                                        <div className="flex flex-col col-span-2">
                                            <label className="text-sm font-semibold text-gray-700 mb-2">
                                                Rate Limit (Requests per Minute) <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                className="transition-all duration-300"
                                                style={{
                                                    padding: '12px 16px',
                                                    fontSize: '15px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                }}
                                                placeholder="e.g., 60"
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e5e7eb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                            <small className="mt-2 text-xs text-gray-500 italic">
                                                Set a safe limit to prevent overloading your production server during audits
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div
                            className="flex justify-end gap-3 border-t border-gray-200"
                            style={{
                                padding: '24px 32px',
                                background: '#fafbfc',
                            }}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="transition-all duration-300 hover:bg-gray-100 active:scale-95"
                                style={{
                                    padding: '12px 24px',
                                    background: 'white',
                                    color: '#1d1d1f',
                                    border: '2px solid #e5e7eb',
                                    borderRadius: '10px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="transition-all duration-300 hover:shadow-lg active:scale-95"
                                style={{
                                    padding: '12px 24px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.25)';
                                }}
                            >
                                Save Model
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
