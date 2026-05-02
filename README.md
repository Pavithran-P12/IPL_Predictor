# IPL 2026 – Points Table & Playoff Predictor

A lightweight, modern web app that displays the live IPL 2026 points table with recent form and lets you predict playoff qualifiers by simulating remaining match outcomes.

## Features

- **Points Table** – Full standings with Points, NRR, and last-5-match form indicators (W/L)
- **Playoff Predictor** – Pick winners for all remaining matches and see the predicted final standings update in real time
- **Team Simulator** – One-click simulation: select a team and auto-predict all their remaining matches as wins
- **Smart Notifications** – Popup toasts show which teams moved up or down after each prediction
- **Responsive Design** – Works on desktop, tablet, and mobile
- **Zero Dependencies** – Pure HTML, CSS, and vanilla JavaScript; no build step required

## Screenshot

> _Replace this with a screenshot of the app._

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ipl-playoff-predictor.git
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
│   └── app.js        # App controller (rendering, prediction logic)
├── README.md
└── LICENSE
```

## Data Source

Match results and standings sourced from [Cricbuzz](https://www.cricbuzz.com/) (IPL 2026, Series ID 9241).

## License

This project is licensed under the [MIT License](LICENSE).
