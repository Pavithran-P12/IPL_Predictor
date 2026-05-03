// ===== View Counter Logic (Firebase Firestore) =====
// Uses compat SDK loaded from index.html

function initFirebaseCounters() {
    const firebaseConfig = {
        apiKey: "AIzaSyCURVAEzTrrdaWJFWPPrU0_NMkbkWhNS-E",
        authDomain: "hack2skill-89f79.firebaseapp.com",
        projectId: "hack2skill-89f79",
        storageBucket: "hack2skill-89f79.firebasestorage.app",
        messagingSenderId: "286204741112",
        appId: "1:286204741112:web:97ba4cdcac7e39c278020d"
    };

    const fbApp = firebase.initializeApp(firebaseConfig, 'viewCounter');
    const db = firebase.firestore(fbApp);
    const counterRef = db.collection('counters').doc('ipl-playoff-predictor');
    const SESSION_KEY = 'ipl_session_counted';
    const LIKE_SESSION_KEY = 'ipl_session_liked';

    function formatCount(num) {
        if (num >= 10000000) return (num / 10000000).toFixed(1).replace(/\.0$/, '') + 'Cr';
        if (num >= 100000) return (num / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        return num.toString();
    }

    function renderCount(num) {
        const el = document.getElementById('viewCount');
        if (el) el.textContent = formatCount(num);
    }

    function renderLikes(num) {
        const el = document.getElementById('likeCount');
        if (el) el.textContent = formatCount(num);
    }

    function burstHearts() {
        const container = document.getElementById('heartsBurst');
        if (!container) return;
        container.innerHTML = '';
        const hearts = ['\u2764', '\ud83d\udc95', '\ud83d\udc97', '\ud83d\udc96', '\u2764', '\ud83d\udc93', '\u2665', '\ud83d\udc98'];
        for (let i = 0; i < 12; i++) {
            const span = document.createElement('span');
            span.className = 'burst-heart';
            span.textContent = hearts[i % hearts.length];
            const angle = (i / 12) * 360;
            const distance = 30 + Math.random() * 30;
            const tx = Math.cos(angle * Math.PI / 180) * distance;
            const ty = Math.sin(angle * Math.PI / 180) * distance - 20;
            span.style.setProperty('--tx', tx + 'px');
            span.style.setProperty('--ty', ty + 'px');
            span.style.animationDelay = (Math.random() * 0.15) + 's';
            container.appendChild(span);
        }
        setTimeout(function() { container.innerHTML = ''; }, 1200);
    }

    // Ensure document exists, then handle views and likes
    counterRef.get().then(function(snap) {
        var chain;

        if (!snap.exists) {
            // Only set defaults if doc doesn't exist at all
            chain = counterRef.set({ views: 1, likes: 0 }).then(function() {
                sessionStorage.setItem(SESSION_KEY, '1');
            });
        } else if (!sessionStorage.getItem(SESSION_KEY)) {
            chain = counterRef.update({ views: firebase.firestore.FieldValue.increment(1) }).then(function() {
                sessionStorage.setItem(SESSION_KEY, '1');
            });
        } else {
            chain = Promise.resolve();
        }

        chain.then(function() {
            return counterRef.get();
        }).then(function(freshSnap) {
            var data = freshSnap.data();
            renderCount(data.views || 0);
            renderLikes(data.likes || 0);

            // --- Like Button ---
            var btn = document.getElementById('likeBtn');
            if (!btn) return;

            if (sessionStorage.getItem(LIKE_SESSION_KEY)) {
                btn.classList.add('liked');
            }

            btn.addEventListener('click', function() {
                if (sessionStorage.getItem(LIKE_SESSION_KEY)) return;
                sessionStorage.setItem(LIKE_SESSION_KEY, '1');
                btn.classList.add('liked');
                burstHearts();

                counterRef.update({ likes: firebase.firestore.FieldValue.increment(1) }).then(function() {
                    counterRef.get().then(function(s) {
                        renderLikes(s.data().likes || 0);
                    });
                });
            });
        });

    }).catch(function(e) {
        console.warn('Firebase counter error:', e);
    });
}

// Wait for Firebase SDK to load (async), then init
function waitForFirebase() {
    if (typeof firebase !== 'undefined' && firebase.firestore) {
        initFirebaseCounters();
    } else {
        setTimeout(waitForFirebase, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForFirebase);
} else {
    waitForFirebase();
}
