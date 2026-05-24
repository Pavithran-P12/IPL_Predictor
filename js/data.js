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

// Current standings (updated)
const Standings = [
    { team: 'RCB', p: 14, w: 9, l: 5, nr: 0, pts: 18, nrr: 0.783 },
    { team: 'GT', p: 14, w: 9, l: 5, nr: 0, pts: 18, nrr: 0.695 },
    { team: 'SRH', p: 14, w: 9, l: 5, nr: 0, pts: 18, nrr: 0.524 },
    { team: 'RR', p: 14, w: 8, l: 6, nr: 0, pts: 16, nrr: 0.189 },
    { team: 'PBKS', p: 14, w: 7, l: 6, nr: 1, pts: 15, nrr: 0.309 },
    { team: 'DC', p: 14, w: 7, l: 7, nr: 0, pts: 14, nrr: -0.651 },
    { team: 'KKR', p: 14, w: 6, l: 7, nr: 1, pts: 13, nrr: -0.147 },
    { team: 'CSK', p: 14, w: 6, l: 8, nr: 0, pts: 12, nrr: -0.345 },
    { team: 'MI', p: 14, w: 4, l: 10, nr: 0, pts: 8, nrr: -0.584 },
    { team: 'LSG', p: 14, w: 4, l: 10, nr: 0, pts: 8, nrr: -0.740 }
];

// Recent form (last 5 matches, most recent first)
const RecentForm = {
    PBKS: ['W', 'L', 'L', 'L', 'L'],
    RCB: ['L', 'W', 'W', 'W', 'W'],
    SRH: ['W', 'W', 'L', 'L', 'W'],
    RR: ['W', 'W', 'L', 'L', 'L'],
    GT: ['W', 'L', 'W', 'W', 'W'],
    DC: ['W', 'W', 'W', 'L', 'L'],
    CSK: ['L', 'L', 'L', 'W', 'W'],
    KKR: ['L', 'W', 'W', 'W', 'L'],
    MI: ['L', 'L', 'W', 'L', 'W'],
    LSG: ['L', 'L', 'W', 'L', 'W']
};

// Remaining matches (Match 66 onwards)
const RemainingMatches = [
    { id: 66, home: 'GT', away: 'CSK', date: 'May 21', venue: 'Ahmedabad' },
    { id: 67, home: 'SRH', away: 'RCB', date: 'May 22', venue: 'Hyderabad' },
    { id: 68, home: 'LSG', away: 'PBKS', date: 'May 23', venue: 'Lucknow' },
    { id: 69, home: 'MI', away: 'RR', date: 'May 24', venue: 'Mumbai' },
    { id: 70, home: 'KKR', away: 'DC', date: 'May 24', venue: 'Kolkata' }
];
