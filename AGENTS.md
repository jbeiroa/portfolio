# AGENTS.md

## Project: jbeiroa Portfolio

Personal portfolio website showcasing professional background and projects. Neo-brutalist terminal aesthetic.

### Tech Stack
- HTML, CSS, Vanilla JavaScript (no frameworks)
- Static site for GitHub Pages deployment

### Structure
```
├── index.html           # Main landing page
├── css/
│   └── styles.css       # Neo-brutalist terminal styling
├── js/
│   └── main.js          # Typing animation, easter egg
├── projects/            # Individual project pages
│   ├── thereisnohr.html
│   ├── teacher-salaries.html
│   ├── desercionar.html
│   ├── rappi-agent.html
│   └── rappi-dashboard.html
└── assets/              # (empty - add images here)
```

### Commands
- No build step required - open `index.html` directly
- For GitHub Pages: push to `gh-pages` branch or configure in repo settings

### Features
- Terminal typing animation on hero
- Skills matrix in terminal style
- ASCII timeline for experience
- Hidden easter egg: click bottom-right corner 5x, type `help` for commands
- Responsive design (mobile-first)

### Key Sections
1. Hero with animated terminal
2. Bio (professional summary)
3. Skills matrix (categorized)
4. Experience timeline (11 positions)
5. Projects grid (5 projects with links)
6. Social links (LinkedIn, GitHub, X)

### Projects
| Name | GitHub | Demo |
|------|--------|------|
| thereisnohr | github.com/jbeiroa/thereisnohr | huggingface.co/spaces |
| Teacher Salary Dashboard | github.com/jbeiroa/teacher_salaries | AWS Lambda URL |
| desercionAR | github.com/jbeiroa/desercionAR | - |
| Rappi Agent | github.com/jbeiroa/rappi_agent | - |
| Rappi Dashboard | github.com/jbeiroa/rappi_dashboard | - |

### Design System
- Colors: `#0a0a0a` bg, `#00ff00` text, `#ffff00` accent, `#808080` gray
- Font: JetBrains Mono (Google Fonts)
- Borders: 2px solid white, no rounded corners
- Hover: translate + yellow shadow

### Adding Content
- Replace `[Screenshot X]` placeholders with real images (300px+ width)
- Update social links in `index.html#social`
- Modify experience in `index.html#experience` timeline