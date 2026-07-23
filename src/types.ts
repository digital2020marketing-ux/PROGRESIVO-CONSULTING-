export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  iconName: string;
  keyBenefits: string[];
  processSteps: string[];
  targetIndustries: string[];
}

export interface QuizQuestion {
  id: number;
  text: string;
  category: "haccp" | "iso9001" | "iso22000" | "productivity";
  options: {
    text: string;
    points: number;
    feedback: string;
  }[];
}

export interface ConsultationRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  servicesNeeded: string[];
  companySize: string;
  message: string;
  submittedAt: string;
  status: "pending" | "contacted" | "completed";
}

export interface EstimatorInputs {
  standard: "haccp" | "iso9001" | "iso22000" | "productivity" | "all";
  companySize: "micro" | "small" | "medium" | "large";
  currentDocumentation: "none" | "partial" | "good";
}

export interface EstimatorResult {
  durationMonths: number;
  consultantVisits: number;
  recommendedSteps: string[];
  complexityScore: "Rendah" | "Sedang" | "Tinggi";
  estimatedReadiness: string;
}
