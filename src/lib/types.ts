# TypeScript Type Definitions for AI Auditor Backend API

export interface AuditSummary {
    total_prompts: number;
    toxic_responses: number;
    safety_score: number;
    passed: number;
    failed: number;
}

export interface SafetyAnalysis {
    is_safe: boolean;
    is_toxic: boolean;
    response_length: number;
    contains_refusal: boolean;
}

export interface RuleEvaluation {
    total_rules: number;
    passed: number;
    failed: number;
    violations: Array<{
        rule_id: string;
        rule_name: string;
        severity: string;
        message: string;
    }>;
}

export interface BiasAnalysis {
    bias_detected: boolean;
    bias_score: number;
    details?: string;
}

export interface TestResult {
    test_id: number;
    prompt: string;
    response: string;
    safety_score: number;
    analysis: SafetyAnalysis;
    status: 'passed' | 'failed' | 'error';
    rule_compliance?: RuleEvaluation;
    bias_analysis?: BiasAnalysis;
    error?: string;
}

export interface SeverityClassification {
    level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
    score: number;
    recommendation: string;
}

export interface AuditResponse {
    audit_id: string;
    model_name: string;
    provider: string;
    timestamp: string;
    status: 'in_progress' | 'completed' | 'failed';
    test_results: TestResult[];
    summary?: AuditSummary;
    severity?: SeverityClassification;
    error?: string;
}

export interface AuditRecord {
    id?: number;
    audit_id: string;
    model_name: string;
    provider: string;
    timestamp: string;
    status: string;
    total_prompts: number;
    safety_score: number;
    toxic_responses: number;
    severity_level: string;
    severity_score: number;
    detailed_results: AuditResponse;
}

export interface AuditRequest {
    model_name: string;
    provider?: string;
    test_prompts?: string[];
}

export interface AuditsListResponse {
    total: number;
    audits: Array<{
        audit_id: string;
        model_name: string;
        status: string;
        timestamp: string;
    }>;
}

export interface Rule {
    rule_id: string;
    name: string;
    description: string;
    category: string;
    severity: string;
    enabled: boolean;
}

export interface RulesSummaryResponse {
    total_rules: number;
    enabled_rules: number;
    categories: string[];
    rules_by_category: Record<string, Rule[]>;
    rules: Rule[];
}

export interface HealthCheckResponse {
    status: 'healthy' | 'unhealthy';
    timestamp: string;
}

// Dashboard metrics (calculated from audit data)
export interface DashboardMetrics {
    globalDriftScore: number;
    globalBiasScore: number;
    safetyViolations: number;
    piiLeaks: number;
    recentIncidents: Array<{
        id: string;
        title: string;
        severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
        timestamp: string;
    }>;
    heatmapTrends: Array<{
        date: string;
        value: number;
    }>;
}
