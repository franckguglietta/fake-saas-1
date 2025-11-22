export interface Campaign {
  id: string;
  name: string;
  platform: 'google' | 'facebook' | 'tiktok' | 'linkedin';
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  cpc: number;
  roas: number;
  startDate: string;
  endDate?: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  targetMetric: string;
  targetValue: number;
  currentValue: number;
  status: 'on-track' | 'at-risk' | 'completed';
  deadline: string;
}

export interface UserData {
  name: string;
  email: string;
  company: string;
  monthlyBudget: number;
  totalSpent: number;
  accountsConnected: {
    google: boolean;
    facebook: boolean;
    tiktok: boolean;
    linkedin: boolean;
  };
}

// Mock Campaigns Data
export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale - Google Search',
    platform: 'google',
    status: 'active',
    budget: 5000,
    spent: 3842,
    impressions: 245680,
    clicks: 12453,
    conversions: 487,
    cpc: 0.31,
    roas: 4.2,
    startDate: '2025-11-01',
  },
  {
    id: '2',
    name: 'Brand Awareness - Facebook',
    platform: 'facebook',
    status: 'active',
    budget: 3000,
    spent: 2156,
    impressions: 892340,
    clicks: 23456,
    conversions: 312,
    cpc: 0.09,
    roas: 3.8,
    startDate: '2025-11-05',
  },
  {
    id: '3',
    name: 'Product Launch - TikTok',
    platform: 'tiktok',
    status: 'active',
    budget: 4000,
    spent: 1823,
    impressions: 1234567,
    clicks: 45678,
    conversions: 289,
    cpc: 0.04,
    roas: 5.1,
    startDate: '2025-11-10',
  },
  {
    id: '4',
    name: 'Retargeting Campaign - Facebook',
    platform: 'facebook',
    status: 'paused',
    budget: 2000,
    spent: 2000,
    impressions: 456789,
    clicks: 8934,
    conversions: 178,
    cpc: 0.22,
    roas: 3.2,
    startDate: '2025-10-15',
    endDate: '2025-11-15',
  },
  {
    id: '5',
    name: 'B2B Lead Gen - LinkedIn',
    platform: 'linkedin',
    status: 'active',
    budget: 6000,
    spent: 4234,
    impressions: 123456,
    clicks: 5678,
    conversions: 234,
    cpc: 0.75,
    roas: 6.8,
    startDate: '2025-11-01',
  },
];

// Mock Objectives Data
export const mockObjectives: Objective[] = [
  {
    id: '1',
    title: 'Increase ROAS to 5.0',
    description: 'Improve return on ad spend across all campaigns',
    targetMetric: 'ROAS',
    targetValue: 5.0,
    currentValue: 4.3,
    status: 'on-track',
    deadline: '2025-12-31',
  },
  {
    id: '2',
    title: 'Generate 1000 conversions',
    description: 'Monthly conversion target for Q4',
    targetMetric: 'Conversions',
    targetValue: 1000,
    currentValue: 487,
    status: 'at-risk',
    deadline: '2025-11-30',
  },
  {
    id: '3',
    title: 'Reduce CPC to $0.20',
    description: 'Optimize cost per click across all platforms',
    targetMetric: 'CPC',
    targetValue: 0.20,
    currentValue: 0.28,
    status: 'on-track',
    deadline: '2025-12-15',
  },
  {
    id: '4',
    title: 'Reach 5M impressions',
    description: 'Expand brand awareness through increased reach',
    targetMetric: 'Impressions',
    targetValue: 5000000,
    currentValue: 2952832,
    status: 'on-track',
    deadline: '2025-12-31',
  },
];

// Mock User Data
export const mockUser: UserData = {
  name: 'John Doe',
  email: 'john@example.com',
  company: 'Tech Startup Inc.',
  monthlyBudget: 20000,
  totalSpent: 14055,
  accountsConnected: {
    google: true,
    facebook: true,
    tiktok: true,
    linkedin: false,
  },
};

// Performance metrics over time (for charts)
export const mockPerformanceData = [
  { date: '2025-11-01', spent: 1200, conversions: 45, roas: 3.8 },
  { date: '2025-11-05', spent: 2800, conversions: 98, roas: 4.1 },
  { date: '2025-11-10', spent: 5200, conversions: 187, roas: 4.3 },
  { date: '2025-11-15', spent: 8900, conversions: 324, roas: 4.5 },
  { date: '2025-11-20', spent: 12400, conversions: 423, roas: 4.4 },
  { date: '2025-11-22', spent: 14055, conversions: 487, roas: 4.3 },
];

// Platform stats
export const mockPlatformStats = [
  { platform: 'Google Ads', spent: 3842, conversions: 487, campaigns: 1 },
  { platform: 'Facebook Ads', spent: 4156, conversions: 490, campaigns: 2 },
  { platform: 'TikTok Ads', spent: 1823, conversions: 289, campaigns: 1 },
  { platform: 'LinkedIn Ads', spent: 4234, conversions: 234, campaigns: 1 },
];
