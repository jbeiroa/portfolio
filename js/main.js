document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimation();
  initBackToTop();
  initEasterEgg();
  initLightbox();
});

function initTypingAnimation() {
  const terminalBody = document.querySelector('.terminal-body');
  if (!terminalBody) return;

  const lines = [
    { text: '> ', delay: 0 },
    { text: 'whoami', delay: 100 },
    { text: '\n', delay: 300 },
    { text: 'juan_ignacio_beiroa', delay: 500, class: 'highlight' },
    { text: '\n\n', delay: 700 },
    { text: '> ', delay: 800 },
    { text: 'cat summary.txt', delay: 900 },
    { text: '\n', delay: 1100 },
    { text: 'ML/AI Engineer | MLOps & Cloud Deployment', delay: 1300, class: 'comment' },
    { text: '\nPhysics | Education | Public Policy', delay: 1500, class: 'comment' },
    { text: '\n\n', delay: 1700 },
    { text: '> ', delay: 1800 },
    { text: 'echo $JOURNEY', delay: 1900 },
    { text: '\n', delay: 2100 },
    { text: '"From teaching 1000+ students to building ML & AI solutions"', delay: 2300, class: 'highlight' },
    { text: '\n\n', delay: 2500 },
    { text: '> ', delay: 2600 },
    { text: 'ls ./expertise/', delay: 2700 },
    { text: '\n', delay: 2900 },
    { text: 'ML_pipelines/', delay: 3000, class: 'comment' },
    { text: 'LLM_applications/', delay: 3200, class: 'comment' },
    { text: 'data_analysis/', delay: 3400, class: 'comment' },
    { text: 'cloud_deployment/', delay: 3600, class: 'comment' },
    { text: 'education_policy/', delay: 3800, class: 'comment' },
    { text: '\n\n', delay: 4000 },
    { text: '> _', delay: 4100, cursor: true }
  ];

  let html = '';
  lines.forEach(line => {
    const classAttr = line.class ? ` class="${line.class}"` : '';
    let text = line.text;
    if (text === '\n\n') {
      html += '<br><br>';
      return;
    }
    if (text === '\n') {
      html += '<br>';
      return;
    }
    text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html += `<span style="animation-delay: ${line.delay}ms"${classAttr}>${text}</span>`;
  });
  terminalBody.innerHTML = html;

  const style = document.createElement('style');
  style.textContent = `
    .terminal-body span {
      opacity: 0;
      animation: fadeIn 0.01s forwards;
    }
    .terminal-body .highlight {
      color: #ffff00;
    }
    .terminal-body .comment {
      color: #808080;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initEasterEgg() {
  const trigger = document.querySelector('.hidden-trigger');
  const easterEgg = document.querySelector('.easter-egg');
  const input = document.querySelector('.easter-egg input');
  const closeBtn = document.querySelector('.easter-egg .close');

  if (!trigger || !easterEgg) return;

  let clickCount = 0;
  trigger.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 5) {
      easterEgg.classList.add('active');
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      easterEgg.classList.remove('active');
      clickCount = 0;
    });
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        input.value = '';

        const responses = {
          'help': '> Available commands:\n> whoami - Who is Juan?\n> skills - List technical skills\n> projects - View projects\n> contact - Get in touch\n> exit - Close terminal',
          'whoami': '> Name: Juan Ignacio Beiroa\n> Role: ML/AI Engineer\n> Background: Physics, Education, Public Policy\n> Mission: Building AI that is robust, impactful, and devoid of unnecessary complexity.',
          'skills': '> Languages: Python, SQL, JavaScript\n> ML/AI: PyTorch, scikit-learn, LangChain, LiteLLM\n> Data: Pandas, NumPy, PostgreSQL, pgvector\n> Cloud: AWS (Lambda, ECR, EC2)\n> MLOps: MLflow, Metaflow, DVC\n> Tools: Streamlit, Plotly Dash, Playwright',
          'projects': '> 1. thereisnohr - ATS with LLMs\n> 2. teacher-salaries - Salary analytics\n> 3. desercionAR - Dropout prediction\n> 4. rappi-agent - Multi-agent system\n> 5. rappi-dashboard - Competitive intel',
          'contact': '> GitHub: github.com/jbeiroa\n> LinkedIn: linkedin.com/in/jibeiroa\n> Twitter/X: x.com/juanibeiroa',
          'exit': '> Closing terminal...',
          'kiss': '> Keep It Simple, Stupid\n> A principle I live by in every ML pipeline.',
          'yagni': '> You Aren\'t Gonna Need It\n> Build what matters, not what might matter.',
          'sudo': '> Nice try. You\'re not getting root access.',
          'ls': '> . .. bio.txt experience.txt projects/\n> Tip: Try "ls ./projects/"',
          'pwd': '> /home/juan/portfolio\n> Home sweet home.',
          'date': '> Current date: ' + new Date().toLocaleDateString(),
          'cat': '> Usage: cat <file>\n> Files: bio.txt, experience.txt',
          'vim': '> vim is a beautiful text editor.\n> But nano is faster when you\'re tired.',
          'neofetch': '>       .--.        juan@portfolio\n>      |o_o |       OS: HTML5/CSS3\n>      |:_/ |       Shell: Vanilla JS\n>     //   \\ \\      DE: Browser\n>    (|     | )     WM: Window Manager\n>   /_\\_   _/_\\    Theme: Neo-Brutalist\n>   \\___)(___)\\n> I\'m running out of ASCII art ideas.'
        };

        let response = '> Command not found. Type "help" for available commands.';
        if (responses[cmd]) {
          response = responses[cmd];
        }

        const output = document.createElement('div');
        output.style.cssText = 'margin-top: 10px; white-space: pre-wrap; color: #00ff00;';
        output.textContent = response;

        const container = easterEgg.querySelector('.output') || (() => {
          const div = document.createElement('div');
          div.className = 'output';
          div.style.cssText = 'border-top: 1px solid #00ff00; margin-top: 10px; padding-top: 10px; max-height: 200px; overflow-y: auto;';
          easterEgg.insertBefore(div, input);
          return div;
        })();
        container.appendChild(output);

        if (cmd === 'exit') {
          setTimeout(() => {
            easterEgg.classList.remove('active');
            clickCount = 0;
          }, 1000);
        }
      }
    });
  }
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('#gallery img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
  }
}