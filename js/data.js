// ===== MODEL: IPL 2026 Data =====

const TeamMeta = {
    PBKS: { name: 'Punjab Kings', short: 'PBKS', color: '#d71920', gradient: 'linear-gradient(135deg, #d71920, #ff4d4d)' },
    RCB: { name: 'Royal Challengers Bengaluru', short: 'RCB', color: '#c8102e', gradient: 'linear-gradient(135deg, #c8102e, #1c1c1c)' },
    SRH: { name: 'Sunrisers Hyderabad', short: 'SRH', color: '#f26522', gradient: 'linear-gradient(135deg, #f26522, #ffb347)' },
    RR: { name: 'Rajasthan Royals', short: 'RR', color: '#ea1a85', gradient: 'linear-gradient(135deg, #ea1a85, #254aa5)' },
    GT: { name: 'Gujarat Titans', short: 'GT', color: '#1c2c3b', gradient: 'linear-gradient(135deg, #1c2c3b, #3d6b99)' },
    CSK: { name: 'Chennai Super Kings', short: 'CSK', color: '#f9cd05', gradient: 'linear-gradient(135deg, #f9cd05, #f7a400)' },
    DC: { name: 'Delhi Capitals', short: 'DC', color: '#004c93', gradient: 'linear-gradient(135deg, #004c93, #ef1b23)' },
    MI: { name: 'Mumbai Indians', short: 'MI', color: '#004ba0', gradient: 'linear-gradient(135deg, #004ba0, #d4a017)' },
    KKR: { name: 'Kolkata Knight Riders', short: 'KKR', color: '#3a225d', gradient: 'linear-gradient(135deg, #3a225d, #d4a017)' },
    LSG: { name: 'Lucknow Super Giants', short: 'LSG', color: '#004f91', gradient: 'linear-gradient(135deg, #004f91, #a72056)' }
};

// Current standings as of May 20, 2026 (after match 65)
const Standings = [
    { team: 'RCB', p: 13, w: 9, l: 4, nr: 0, pts: 18, nrr: 1.065 },
    { team: 'GT', p: 13, w: 8, l: 5, nr: 0, pts: 16, nrr: 0.400 },
    { team: 'SRH', p: 13, w: 8, l: 5, nr: 0, pts: 16, nrr: 0.350 },
    { team: 'RR', p: 13, w: 7, l: 6, nr: 0, pts: 14, nrr: 0.083 },
    { team: 'PBKS', p: 13, w: 6, l: 6, nr: 1, pts: 13, nrr: 0.227 },
    { team: 'KKR', p: 13, w: 6, l: 6, nr: 1, pts: 13, nrr: 0.011 },
    { team: 'CSK', p: 13, w: 6, l: 7, nr: 0, pts: 12, nrr: -0.016 },
    { team: 'DC', p: 13, w: 6, l: 7, nr: 0, pts: 12, nrr: -0.871 },
    { team: 'MI', p: 13, w: 4, l: 9, nr: 0, pts: 8, nrr: -0.510 },
    { team: 'LSG', p: 13, w: 4, l: 9, nr: 0, pts: 8, nrr: -0.702 }
];

// Recent form (last 5 matches, most recent first)
const RecentForm = {
    PBKS: ['L', 'L', 'L', 'L', 'L'],
    RCB: ['W', 'W', 'W', 'W', 'L'],
    SRH: ['W', 'L', 'L', 'W', 'W'],
    RR: ['W', 'L', 'L', 'L', 'W'],
    GT: ['L', 'W', 'W', 'W', 'W'],
    DC: ['W', 'W', 'L', 'L', 'W'],
    CSK: ['L', 'L', 'W', 'W', 'W'],
    KKR: ['W', 'W', 'W', 'L', 'W'],
    MI: ['L', 'W', 'L', 'W', 'L'],
    LSG: ['L', 'W', 'L', 'W', 'L']
};

// Remaining matches (Match 66 onwards)
const RemainingMatches = [
    { id: 66, home: 'GT', away: 'CSK', date: 'May 21', venue: 'Ahmedabad' },
    { id: 67, home: 'SRH', away: 'RCB', date: 'May 22', venue: 'Hyderabad' },
    { id: 68, home: 'LSG', away: 'PBKS', date: 'May 23', venue: 'Lucknow' },
    { id: 69, home: 'MI', away: 'RR', date: 'May 24', venue: 'Mumbai' },
    { id: 70, home: 'KKR', away: 'DC', date: 'May 24', venue: 'Kolkata' }
];
