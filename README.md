# IPL 2026 – Points Table & Playoff Predictor

A lightweight, modern web app that displays the live IPL 2026 points table with recent form and lets you predict playoff qualifiers by simulating remaining match outcomes.

## Features

- **Points Table** – Full standings with Points, NRR, and last-5-match form indicators (W/L)
- **Playoff Predictor** – Pick winners for all remaining matches and see the predicted final standings update in real time
- **Team Simulator** – Colored team badges to simulate all remaining matches as wins for a selected team
- **Smart Notifications** – Popup toasts show which teams moved up or down after each prediction
- **Live View Counter** – Real-time page view tracking powered by Firebase Firestore
- **Like Button** – Heart-shaped like button with burst animation, 1 like per session, stored in Firestore
- **Responsive Design** – Works on desktop, tablet, and mobile
- **No Build Step** – Pure HTML, CSS, and vanilla JavaScript; Firebase loaded via CDN

## Screenshot

> _Replace this with a screenshot of the app._

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavithran-P12/ipl-playoff-predictor.git
   ```
2. Open `index.html` in any modern browser – that's it!

No server, no bundler, no package manager needed.

## Project Structure

```
├── index.html        # Main HTML page
├── css/
│   └── styles.css    # All styling (light theme, responsive)
├── js/
│   ├── data.js       # IPL 2026 standings, form, and fixture data
│   ├── app.js        # App controller (rendering, prediction logic)
│   └── views.js      # Firebase view counter & like button logic
├── README.md
└── LICENSE
```

## Tech

- Vanilla HTML/CSS/JS (no frameworks)
- [Google Fonts – Inter](https://fonts.google.com/specimen/Inter)
- [Firebase Firestore](https://firebase.google.com/docs/firestore) (compat SDK via CDN) for shared view & like counters

## Data Source

Match results and standings sourced from [Cricbuzz](https://www.cricbuzz.com/) (IPL 2026, Series ID 9241).

## License

This project is licensed under the [MIT License](LICENSE).
