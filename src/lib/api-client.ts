// API Client for AI Auditor Backend
import type {
    AuditResponse,
    AuditRequest,
    AuditsListResponse,
    RulesSummaryResponse,
    HealthCheckResponse,
    AuditRecord,
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Helper function for API requests
async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                errorData.detail || `API request failed: ${response.status} ${response.statusText}`
            );
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('An unknown error occurred');
    }
}

// Health check
export async function checkHealth(): Promise<HealthCheckResponse> {
    return apiRequest<HealthCheckResponse>('/health');
}

// Get all audits (paginated)
export async function fetchAudits(
    skip: number = 0,
    limit: number = 10
): Promise<AuditsListResponse> {
    return apiRequest<AuditsListResponse>(`/api/v1/audits?skip=${skip}&limit=${limit}`);
}

// Get specific audit by ID
export async function fetchAudit(auditId: string): Promise<AuditResponse> {
    return apiRequest<AuditResponse>(`/api/v1/audit/${auditId}`);
}

// Run a new audit
export async function runAudit(auditRequest: AuditRequest): Promise<AuditResponse> {
    return apiRequest<AuditResponse>('/api/v1/audit', {
        method: 'POST',
        body: JSON.stringify(auditRequest),
    });
}

// Get rules summary
export async function fetchRulesSummary(): Promise<RulesSummaryResponse> {
    return apiRequest<RulesSummaryResponse>('/api/v1/rules/summary');
}

// Download PDF report
export async function downloadPdfReport(auditId: string): Promise<Blob> {
    const url = `${API_BASE_URL}/api/v1/audit/${auditId}/report/pdf`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to download PDF report: ${response.statusText}`);
    }

    return await response.blob();
}

// Download HTML report
export async function downloadHtmlReport(auditId: string): Promise<Blob> {
    const url = `${API_BASE_URL}/api/v1/audit/${auditId}/report/html`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to download HTML report: ${response.statusText}`);
    }

    return await response.blob();
}

// Helper function to trigger download in browser
export function triggerDownload(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// ============ Monitoring Platform APIs ============

// Tenant Management
export async function createTenant(name: string) {
    return apiRequest('/v1/tenants', {
        method: 'POST',
        body: JSON.stringify({ name })
    });
}

export async function listTenants() {
    return apiRequest('/v1/tenants');
}

// Project Management
export async function createProject(data: { tenant_id: string; name: string; task_type: string }) {
    return apiRequest('/v1/projects', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export async function listProjects(tenantId?: string) {
    const params = tenantId ? `?tenant_id=${tenantId}` : '';
    return apiRequest(`/v1/projects${params}`);
}

export async function getProject(projectId: string) {
    return apiRequest(`/v1/projects/${projectId}`);
}

// Model Management  
export async function createModel(data: { project_id: string; name: string; version: string }) {
    return apiRequest('/v1/models', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export async function listModels(projectId?: string) {
    const params = projectId ? `?project_id=${projectId}` : '';
    return apiRequest(`/v1/models${params}`);
}

// Event Ingestion
export async function ingestEvents(events: any[]) {
    return apiRequest('/v1/events', {
        method: 'POST',
        body: JSON.stringify(events)
    });
}

export async function ingestLabels(labels: any[]) {
    return apiRequest('/v1/labels', {
        method: 'POST',
        body: JSON.stringify(labels)
    });
}

export async function ingestFeedback(feedback: any[]) {
    return apiRequest('/v1/feedback', {
        method: 'POST',
        body: JSON.stringify(feedback)
    });
}

export async function getEvent(requestId: string) {
    return apiRequest(`/v1/events/${requestId}`);
}

// Baseline Management
export async function createBaseline(data: {
    project_id: string;
    model_id?: string;
    name: string;
    source_type: string;
    window_start?: string;
    window_end?: string;
}) {
    return apiRequest('/v1/baselines', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export async function getBaseline(baselineId: string) {
    return apiRequest(`/v1/baselines/${baselineId}`);
}

export async function listBaselines(projectId: string, modelId?: string) {
    const params = new URLSearchParams({ project_id: projectId });
    if (modelId) params.append('model_id', modelId);
    return apiRequest(`/v1/baselines?${params.toString()}`);
}

