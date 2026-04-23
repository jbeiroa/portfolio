# AGENTS.md

## Project: jbeiroa Portfolio

Personal portfolio website showcasing professional background and projects. Neo-brutalist terminal aesthetic.

### Tech Stack
- HTML, CSS, Vanilla JavaScript (no frameworks)
- Static site deployed on GitHub Pages

### Structure
```
├── index.html           # Main landing page
├── css/styles.css      # Neo-brutalist terminal styling
├── js/main.js        # Typing animation, easter egg, lightbox
├── projects/         # Project detail pages
│   ├── thereisnohr.html
│   ├── teacher-salaries.html
│   ├── desercionar.html
│   ├── rappi-agent.html
│   └── rappi-dashboard.html
└── assets/          # Images (profile, project screenshots)
```

### Commands
- No build step - open `index.html` directly or serve locally
- Deploy: push to GitHub and enable Pages in repo settings

### Features
- Terminal typing animation on hero
- Profile picture (grayscale, color on hover)
- Skills matrix in terminal style
- ASCII timeline for experience
- Hidden easter egg: click `>` in bottom-right corner, type `help` for commands
- Lightbox: click gallery images to enlarge
- Responsive design (mobile-first)
- Styled h3 and ul/li in Overview sections

### Key Sections
1. Hero with terminal + profile pic
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

### Customizing
- Edit `index.html` for bio, experience, skills
- Add images to `assets/`
- Project pages: `projects/*.html`
- Lightbox activates automatically on any `#gallery img`