// ============================================
// SAMPLE DATA — Demo Mode
// Realistic-looking data for the dashboard widgets.
// When AWS Lambda + APIs go live, each of these
// arrays will be replaced with real API responses.
// ============================================

// --- METRIC CARDS ---
export const metrics = [
  { label: 'Total Revenue', value: '$12,847', change: '+18.2%', trend: 'up' },
  { label: 'Active Projects', value: '7', change: '+2 this week', trend: 'up' },
  { label: 'Tasks Today', value: '14', change: '4 completed', trend: 'neutral' },
  { label: 'YouTube Subs', value: '2,341', change: '+127', trend: 'up' },
];

// --- SALES CHART ---
export const salesData = [
  { month: 'Jan', etsy: 1200, ebay: 800, tiktok: 400 },
  { month: 'Feb', etsy: 1500, ebay: 950, tiktok: 650 },
  { month: 'Mar', etsy: 1800, ebay: 1100, tiktok: 900 },
  { month: 'Apr', etsy: 2100, ebay: 1300, tiktok: 1250 },
  { month: 'May', etsy: 2400, ebay: 1450, tiktok: 1600 },
  { month: 'Jun', etsy: 2800, ebay: 1700, tiktok: 2100 },
];

// --- YOUTUBE ANALYTICS ---
export const youtubeData = {
  channels: [
    { name: 'MyLynnLiving', subs: 1247, views: '48.2K', growth: '+12.4%' },
    { name: 'Lynn Living Studios', subs: 894, views: '22.1K', growth: '+8.1%' },
    { name: 'Linda Dadson Builds', subs: 200, views: '3.4K', growth: '+156%' },
  ],
  totalViews: '73.7K',
  totalSubs: 2341,
  watchHours: '1,204',
};

// --- HEALTH DATA ---
export const healthData = {
  steps: { value: 8247, goal: 10000 },
  sleep: { value: 7.2, goal: 8 },
  water: { value: 6, goal: 8 },
  calories: { value: 1847, goal: 2200 },
};

// --- PROJECT TRACKER ---
export const projects = [
  { name: 'MYCO Dashboard', status: 'In Progress', progress: 65, dueDate: 'Mar 30' },
  { name: 'Lynn Living — Spring Collection', status: 'Planning', progress: 25, dueDate: 'Apr 15' },
  { name: 'NAYA App Prototype', status: 'Ready', progress: 10, dueDate: 'May 20' },
  { name: 'Ghana Clinic Fundraiser', status: 'In Progress', progress: 45, dueDate: 'Apr 5' },
  { name: 'YouTube Series Ep. 1', status: 'Review', progress: 85, dueDate: 'Mar 25' },
];

// --- MARKET RESEARCH FEED ---
export const marketResearch = [
  {
    topic: 'Home Care',
    source: 'r/homecare',
    headline: 'New Medicare rules affecting in-home care billing',
    time: '2h ago',
  },
  {
    topic: 'NGO Funding',
    source: 'r/nonprofit',
    headline: 'Open grants for Ghana-based health initiatives closing soon',
    time: '5h ago',
  },
  {
    topic: 'E-commerce',
    source: 'r/Etsy',
    headline: 'TikTok Shop seller fees changing next quarter',
    time: '1d ago',
  },
  {
    topic: 'Cloud Engineering',
    source: 'r/aws',
    headline: 'AWS Lambda pricing model update for 2026',
    time: '1d ago',
  },
];
