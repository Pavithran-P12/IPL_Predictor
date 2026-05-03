// ===== CONTROLLER: App Logic =====

class IPLApp {
    constructor() {
        this.predictions = {};
        this.activeTab = 'points';
        this.selectedTeam = '';
        this.init();
    }

    init() {
        this.renderPointsTable();
        this.populateTeamSelector();
        this.renderPredictor();
        this.renderPredictedTable();
        this.bindTabs();
    }

    // --- Tab Management ---
    bindTabs() {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
        });
    }

    switchTab(tab) {
        this.activeTab = tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === `${tab}Section`));
        if (tab === 'predictor') this.renderPredictedTable();
    }

    // --- Team Selector ---
    populateTeamSelector() {
        const container = document.getElementById('teamSimulator');
        if (!container) return;
        container.innerHTML = Standings.map(s => {
            const meta = TeamMeta[s.team];
            return `<button class="team-picker-btn" data-team="${s.team}" style="background:${meta.gradient}" title="${meta.name}" onclick="app.simulateForTeam('${s.team}')">${meta.short}<span class="tick"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span></button>`;
        }).join('');
    }

    updateTeamPicker() {
        const btns = document.querySelectorAll('.team-picker-btn');
        btns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.team === this.selectedTeam);
        });
    }

    simulateForTeam(team) {
        // Toggle off if same team clicked again
        if (this.selectedTeam === team) {
            this.selectedTeam = '';
            this.predictions = {};
            this.updateTeamPicker();
            this.renderPredictor();
            this.renderPredictedTable();
            return;
        }
        this.selectedTeam = team;
        if (!team) {
            this.predictions = {};
        } else {
            this.predictions = {};
            RemainingMatches.forEach(match => {
                if (match.home === team || match.away === team) {
                    this.predictions[match.id] = team;
                } else {
                    this.predictions[match.id] = Math.random() < 0.5 ? match.home : match.away;
                }
            });
        }
        this.updateTeamPicker();
        this.renderPredictor();
        this.renderPredictedTable();
    }

    // --- Points Table ---
    renderPointsTable() {
        const tbody = Standings.map((row, i) => {
            const meta = TeamMeta[row.team];
            const form = RecentForm[row.team];
            const isQualify = i < 4;
            const isLine = i === 3;

            return `
                <tr class="${isQualify ? 'qualify-zone' : ''} ${isLine ? 'qualify-line' : ''}">
                    <td>
                        <div class="team-cell">
                            <span class="team-pos">${i + 1}</span>
                            <div class="team-badge" style="background:${meta.gradient}">${meta.short}</div>
                            <span class="team-name">${meta.name}</span>
                            <span class="team-short">${meta.short}</span>
                        </div>
                    </td>
                    <td>${row.p}</td>
                    <td>${row.w}</td>
                    <td>${row.l}</td>
                    <td>${row.nr}</td>
                    <td><span class="pts-value">${row.pts}</span></td>
                    <td class="${row.nrr >= 0 ? 'nrr-positive' : 'nrr-negative'}">${row.nrr >= 0 ? '+' : ''}${row.nrr.toFixed(3)}</td>
                    <td>
                        <div class="form-group">
                            ${form.map(f => `<span class="form-pip ${f}">${f}</span>`).join('')}
                        </div>
                    </td>
                </tr>`;
        }).join('');

        document.getElementById('pointsTableBody').innerHTML = tbody;
    }

    // --- Predictor ---
    renderPredictor() {
        const grid = document.getElementById('matchesGrid');
        let html = '';

        RemainingMatches.forEach(match => {
            const homeMeta = TeamMeta[match.home];
            const awayMeta = TeamMeta[match.away];
            const homeSelected = this.predictions[match.id] === match.home;
            const awaySelected = this.predictions[match.id] === match.away;
            const hasPick = homeSelected || awaySelected;

            html += `
                <div class="match-card">
                    <div class="match-meta">
                        <span class="match-number">#${match.id}</span>
                        <span class="match-date">${match.date}</span>
                    </div>
                    <div class="match-teams">
                        <button class="pick-btn ${homeSelected ? 'selected' : ''} ${hasPick && !homeSelected ? 'not-selected' : ''}"
                                style="background:${homeMeta.gradient}"
                                onclick="app.predict(${match.id}, '${match.home}')">
                            ${match.home}${homeSelected ? '<span class="win-badge">W</span>' : ''}
                        </button>
                        <span class="match-vs">v</span>
                        <button class="pick-btn ${awaySelected ? 'selected' : ''} ${hasPick && !awaySelected ? 'not-selected' : ''}"
                                style="background:${awayMeta.gradient}"
                                onclick="app.predict(${match.id}, '${match.away}')">
                            ${match.away}${awaySelected ? '<span class="win-badge">W</span>' : ''}
                        </button>
                    </div>
                </div>`;
        });

        grid.innerHTML = html;
        this.updateProgress();
    }

    predict(matchId, team) {
        // Clear team simulator when manually picking
        this.selectedTeam = '';
        this.updateTeamPicker();

        // Get standings before this prediction
        const prevStandings = this.calculatePredictedStandings();

        if (this.predictions[matchId] === team) {
            delete this.predictions[matchId];
        } else {
            this.predictions[matchId] = team;
        }
        this.renderPredictor();
        this.renderPredictedTable();

        // Get standings after and show toasts for all affected teams
        if (this.predictions[matchId]) {
            const newStandings = this.calculatePredictedStandings();
            const affected = [];

            newStandings.forEach((row, i) => {
                const prevIdx = prevStandings.findIndex(t => t.team === row.team);
                if (prevIdx !== i) {
                    affected.push({ team: row.team, newPos: i + 1, oldPos: prevIdx + 1 });
                }
            });

            // If no movement, just show the winner
            if (affected.length === 0) {
                const pos = newStandings.findIndex(t => t.team === team) + 1;
                const prevPos = prevStandings.findIndex(t => t.team === team) + 1;
                this.showToast(team, pos, prevPos);
            } else {
                affected.forEach((item, idx) => {
                    setTimeout(() => this.showToast(item.team, item.newPos, item.oldPos), idx * 150);
                });
            }
        }
    }

    resetPredictions() {
        this.predictions = {};
        this.selectedTeam = '';
        this.updateTeamPicker();
        this.renderPredictor();
        this.renderPredictedTable();
    }

    updateProgress() {
        const count = Object.keys(this.predictions).length;
        const total = RemainingMatches.length;
        const pct = (count / total) * 100;

        const fill = document.getElementById('progressFill');
        const text = document.getElementById('progressText');
        if (fill) fill.style.width = `${pct}%`;
        if (text) text.textContent = `${count}/${total}`;
    }

    // --- Toast Notifications ---
    showToast(team, position, prevPosition) {
        // Create or reuse backdrop
        let backdrop = document.getElementById('toastBackdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'toastBackdrop';
            backdrop.className = 'toast-backdrop';
            backdrop.addEventListener('click', () => this.dismissToasts());
            document.body.appendChild(backdrop);
        }

        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const meta = TeamMeta[team];
        const wasTop4 = prevPosition <= 4;
        const isTop4 = position <= 4;

        let posLabel, posClass;
        if (isTop4) {
            posClass = 'top4';
            if (!wasTop4) {
                posLabel = `#${position} — Into playoffs! ✓`;
            } else if (position < prevPosition) {
                posLabel = `#${position} — Moves up ↑ ✓`;
            } else if (position > prevPosition) {
                posLabel = `#${position} — Drops down ↓ (still qualifies)`;
            } else {
                posLabel = `#${position} — Retains spot ✓`;
            }
        } else {
            posClass = 'bottom';
            if (wasTop4) {
                posLabel = `#${position} — Dropped from qualification ✗`;
            } else if (position < prevPosition) {
                posLabel = `#${position} — Moves up ↑`;
            } else if (position > prevPosition) {
                posLabel = `#${position} — Drops down ↓`;
            } else {
                posLabel = `#${position} — Same position`;
            }
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <button class="toast-close" onclick="app.dismissToasts()">✕</button>
            <span class="toast-team">${meta.name}</span> → <span class="toast-pos ${posClass}">${posLabel}</span>
        `;
        container.appendChild(toast);

        // Auto-dismiss after 4 seconds
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => this.dismissToasts(), 4000);
    }

    dismissToasts() {
        const container = document.getElementById('toastContainer');
        const backdrop = document.getElementById('toastBackdrop');
        if (container) container.remove();
        if (backdrop) backdrop.remove();
        clearTimeout(this._toastTimer);
    }

    // --- Predicted Standings ---
    calculatePredictedStandings() {
        const predicted = Standings.map(s => ({ ...s }));

        Object.entries(this.predictions).forEach(([matchId, winner]) => {
            const match = RemainingMatches.find(m => m.id === parseInt(matchId));
            if (!match) return;

            const loser = winner === match.home ? match.away : match.home;
            const winnerTeam = predicted.find(t => t.team === winner);
            const loserTeam = predicted.find(t => t.team === loser);

            if (winnerTeam) { winnerTeam.w++; winnerTeam.p++; winnerTeam.pts += 2; }
            if (loserTeam) { loserTeam.l++; loserTeam.p++; }
        });

        predicted.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            return b.nrr - a.nrr;
        });

        return predicted;
    }

    renderPredictedTable() {
        const predicted = this.calculatePredictedStandings();
        const tbody = predicted.map((row, i) => {
            const meta = TeamMeta[row.team];
            const isQualify = i < 4;
            const isLine = i === 3;
            const isHighlight = this.selectedTeam === row.team;

            return `
                <tr class="${isQualify ? 'qualify-zone' : ''} ${isLine ? 'qualify-line' : ''} ${isHighlight ? 'highlight-team' : ''}">
                    <td>
                        <div class="team-cell">
                            <span class="team-pos">${i + 1}</span>
                            <div class="team-badge" style="background:${meta.gradient}">${meta.short}</div>
                            <span class="team-name">${meta.name}</span>
                            <span class="team-short">${meta.short}</span>
                        </div>
                    </td>
                    <td>${row.p}</td>
                    <td>${row.w}</td>
                    <td>${row.l}</td>
                    <td>${row.nr}</td>
                    <td><span class="pts-value">${row.pts}</span></td>
                </tr>`;
        }).join('');

        document.getElementById('predictedTableBody').innerHTML = tbody;
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new IPLApp();
});
