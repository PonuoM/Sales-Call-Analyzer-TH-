

export interface IdentifiedSalesperson {
  name: string;
  phone: string;
}

export interface TranscribedUtterance {
  speaker: string;
  utterance: string;
  timestamp?: string;
}

export enum InputMode {
  TEXT = 'text',
  AUDIO = 'audio',
}

export interface CallMetadata {
  date: string;
  time: string;
  callType: string; // e.g., 'โทรออก', 'โทรเข้า'
  sourcePhone: string;
  destinationPhone: string;
  originalFilename: string;
}

// Data from "ข้อมูลสินค้า" sheet
export interface ProductContext {
  productName: string;
  category: string;
}

// Data from "ข้อมูลสินค้า" sheet, specifically for matching
export interface SalespersonData {
    name: string;
    phone: string;
}

// Data from "ข้อมูลลูกค้า" sheet
export interface CustomerHistoryRecord {
  date?: string;
  customerName?: string;
  salesperson?: string;
  price?: number;
  recipientName?: string;
  secondaryPhone?: string;
  address?: string;
  province?: string;
  postalCode?: string;
  deliveryDate?: string;
  deliveryRound?: string;
  customerType?: string;
  product?: string;
  quantity?: number;
  customerId?: string;
  phone: string; // This is the key for matching
}

// Consolidated data context from Google Sheets
export interface DataContext {
    productContext: string | null;
    salespersons: SalespersonData[];
    customerHistory: CustomerHistoryRecord[];
}

export interface GoogleUserProfile {
    name: string;
    email: string;
    imageUrl: string;
}


export interface PurchasingBehavior {
  summary: string;
  buyingFrequency: string;
  typicalPurchaseVolume: string;
  priceSensitivity: string;
}

// New, detailed analysis structure
export interface SalespersonEvaluation {
  strengths: string[];
  areasForImprovement: string[];
  communicationStyle: string;
  productKnowledgeScore: number; // 1-10
  closingSkillScore: number; // 1-10
  overallPerformanceScore: number; // 0-100%
}

export interface CustomerEvaluation {
  customerProfile: string;
  interestLevel: number; // 1-10
  painPointsIdentified: string[];
  decisionMakingFactors: string[];
  purchasingBehavior?: PurchasingBehavior;
  customerSentiment: string;
}

export interface SituationalEvaluation {
  callSentiment: string;
  currentSalesStage: string;
  keyTopicsDiscussed: string[];
  unresolvedQuestions: string[];
  callOutcomeSummary: string;
  closingProbability: number; // 0-100%
  positiveSignals: string[]; // Re-added this field
  negativeSignals: string[]; // Re-added this field
}

export interface StrategicRecommendationItem {
  recommendation: string;
  reasoning: string;
  successProbability: number; // 0-100%
}

export interface StrategicRecommendations {
  nextBestAction: string;
  talkingPoints: string[];
  suggestedOffer?: string;
  potentialUpsellOpportunities: string[];
  detailedStrategy: StrategicRecommendationItem[];
}

export interface AnalysisResult {
  salespersonEvaluation: SalespersonEvaluation;
  customerEvaluation: CustomerEvaluation;
  situationalEvaluation: SituationalEvaluation;
  strategicRecommendations: StrategicRecommendations;
  transcribedText?: TranscribedUtterance[] | null;
}