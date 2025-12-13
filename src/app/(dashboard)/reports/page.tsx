export default function ReportsPage() {
    return (
        <>
            <h1 className="text-[32px] font-semibold mb-8 text-[#1d1d1f] bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent drop-shadow-sm">
                Reports
            </h1>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e7] text-center">
                <div className="py-12">
                    <svg
                        className="w-20 h-20 mx-auto mb-4 text-[#d1d5db]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h2 className="text-xl font-semibold text-[#6b7280] mb-2">Reports Coming Soon</h2>
                    <p className="text-[#9ca3af]">
                        Report generation and management features will be available in the next release.
                    </p>
                </div>
            </div>
        </>
    );
}
