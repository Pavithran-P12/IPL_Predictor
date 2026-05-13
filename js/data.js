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

// Current standings as of May 12, 2026
const Standings = [
    { team: 'GT', p: 12, w: 8, l: 4, nr: 0, pts: 16, nrr: 0.551 },
    { team: 'RCB', p: 11, w: 7, l: 4, nr: 0, pts: 14, nrr: 1.103 },
    { team: 'SRH', p: 12, w: 7, l: 5, nr: 0, pts: 14, nrr: 0.331 },
    { team: 'PBKS', p: 11, w: 6, l: 4, nr: 1, pts: 13, nrr: 0.428 },
    { team: 'CSK', p: 11, w: 6, l: 5, nr: 0, pts: 12, nrr: 0.185 },
    { team: 'RR', p: 11, w: 6, l: 5, nr: 0, pts: 12, nrr: 0.082 },
    { team: 'DC', p: 12, w: 5, l: 7, nr: 0, pts: 10, nrr: -0.993 },
    { team: 'KKR', p: 10, w: 4, l: 5, nr: 1, pts: 9, nrr: -0.169 },
    { team: 'MI', p: 11, w: 3, l: 8, nr: 0, pts: 6, nrr: -0.585 },
    { team: 'LSG', p: 11, w: 3, l: 8, nr: 0, pts: 6, nrr: -0.907 }
];

// Recent form (last 5 matches, most recent first)
const RecentForm = {
    PBKS: ['L', 'L', 'L', 'L', 'W'],
    RCB: ['W', 'L', 'L', 'W', 'W'],
    SRH: ['L', 'L', 'W', 'W', 'W'],
    RR: ['L', 'L', 'W', 'L', 'W'],
    GT: ['W', 'W', 'W', 'W', 'W'],
    DC: ['W', 'L', 'L', 'W', 'L'],
    CSK: ['W', 'W', 'W', 'L', 'W'],
    KKR: ['W', 'W', 'W', 'W', 'L'],
    MI: ['L', 'W', 'L', 'L', 'L'],
    LSG: ['L', 'W', 'L', 'L', 'L']
};

// Remaining matches (Match 57 onwards)
const RemainingMatches = [
    { id: 57, home: 'RCB', away: 'KKR', date: 'May 13', venue: 'Raipur' },
    { id: 58, home: 'PBKS', away: 'MI', date: 'May 14', venue: 'Dharamsala' },
    { id: 59, home: 'LSG', away: 'CSK', date: 'May 15', venue: 'Lucknow' },
    { id: 60, home: 'KKR', away: 'GT', date: 'May 16', venue: 'Kolkata' },
    { id: 61, home: 'PBKS', away: 'RCB', date: 'May 17', venue: 'Dharamsala' },
    { id: 62, home: 'DC', away: 'RR', date: 'May 17', venue: 'Delhi' },
    { id: 63, home: 'CSK', away: 'SRH', date: 'May 18', venue: 'Chennai' },
    { id: 64, home: 'RR', away: 'LSG', date: 'May 19', venue: 'Jaipur' },
    { id: 65, home: 'KKR', away: 'MI', date: 'May 20', venue: 'Kolkata' },
    { id: 66, home: 'GT', away: 'CSK', date: 'May 21', venue: 'Ahmedabad' },
    { id: 67, home: 'SRH', away: 'RCB', date: 'May 22', venue: 'Hyderabad' },
    { id: 68, home: 'LSG', away: 'PBKS', date: 'May 23', venue: 'Lucknow' },
    { id: 69, home: 'MI', away: 'RR', date: 'May 24', venue: 'Mumbai' },
    { id: 70, home: 'KKR', away: 'DC', date: 'May 24', venue: 'Kolkata' }
];
