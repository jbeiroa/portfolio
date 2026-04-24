const translations = {
  en: {
    hero_tagline: 'Machine Learning & AI Engineer',
    bio_title: 'about.txt',
    bio_text: [
      "Over the last 10 years, I've dedicated most of my life to teaching STEM and education policy. I've taught well over 1000 students from 13 to 25 years old, managed teacher teams in curricular design and worked as a government advisor for teacher salary negotiations.",
      "Currently, I'm bringing all that experience into building MLOps pipelines and LLM-powered applications. From architecting salary dashboards and deploying predictive models to building agentic systems, I thrive on solving complex problems and turning raw data into strategic intelligence with Python, scikit-learn, PyTorch and AWS.",
      "I'm a firm believer in the KISS and YAGNI principles—building AI that is robust, impactful, and devoid of unnecessary complexity."
    ],
    skills_title: 'skills.sh',
    skills: {
      programming: 'Programming',
      ml_ai: 'ML / IA',
      data: 'Data',
      cloud_mlops: 'Cloud / MLOps',
      web_apps: 'Web / Apps',
      background: {
        title: 'Background',
        items: ['Physics Education', 'Public Policy', 'Strategic Planning']
      },
      languages: {
        title: 'Languages',
        items: ['Spanish (Native)', 'English (Fluent)', 'French (Basic)']
      }
    },
    projects_title: 'projects/',
    projects: {
      thereisnohr: { title: 'thereisnohr', desc: 'A small, flexible, provider-agnostic Applicant Tracking System with AI-driven candidate matching and interview preparation.' },
      teacher_salaries: { title: 'Teacher Salary Analytics Dashboard', desc: 'Interactive web application to visualize and analyze teacher salary data across Argentina with inflation adjustment and provincial benchmarking.' },
      desercionar: { title: 'desercionAR', desc: 'Early Warning System to identify at-risk students prone to school dropout in Argentina using data from the Permanent Household Survey.' },
      rappi_agent: { title: 'Rappi Intelligent Operations Agent', desc: 'Multi-agent AI system to democratize access to operational data at Rappi, enabling natural language queries and strategic reports.' },
      rappi_dashboard: { title: 'Rappi Competitive Intelligence Dashboard', desc: 'Competitive intelligence system with specialized scrapers for Rappi, Uber Eats, and Chedraui, plus visualization dashboard.' }
    },
    project_links: { github: 'GitHub', demo: 'Demo', live: 'Live', details: 'Details' },
    experience_title: 'experience.log',
    experience: [
      {
        date: 'Aug 2020 - Present',
        title: 'Assistant Professor',
        org: 'University of Buenos Aires',
        desc: 'Physics course for Medicine/Veterinary students in UBA XXI distance learning program.',
        highlights: ['Manage student inquiries via Moodle virtual campus', 'Design and grade examinations aligned with pedagogical goals', 'Develop educational resources: materials, interactive tools, instructional videos']
      },
      {
        date: 'Feb 2020 - Dec 2025',
        title: 'Head of Science and IT | Physics and Computer Science Professor',
        org: 'Colegio Bayard',
        desc: 'Led STEM department in a bilingual school, overseeing academic strategy and modern Computer Science curriculum transition.',
        highlights: ['Team Leadership: Managed 6 teachers across Math, Chemistry, Biology, Physics, and Technology', 'Curriculum Engineering: Complete overhaul of Math and Technology curricula to IGCSE standards', 'Teaching: Physics, ICT, and Computer Science in English for senior secondary students']
      },
      {
        date: 'Jun 2022 - Jan 2024',
        title: 'Educational Policy Advisor | Fiscal Data & Scenario Analyst',
        org: 'Ministerio de Educación de la Nación',
        desc: 'General Secretariat of the Federal Council of Education. Technical framework for national-level teacher salary negotiations.',
        highlights: ['Fiscal Modeling: Built simulation models for salary increase scenarios', 'Data Pipeline: Collected and normalized salary data across 24 Argentine jurisdictions', 'Strategic Reporting: Authored technical briefs for Ministry of Finance, Education authorities, and Trade Unions']
      },
      {
        date: 'Feb 2022 - Jun 2022',
        title: 'Natural Sciences Teacher Trainer',
        org: 'Escuela de Maestros',
        desc: 'Teacher training program improving science education across primary schools in Buenos Aires.',
        highlights: ['Developed and delivered training sessions for primary school teachers', 'Conducted school visits for direct instructional support']
      },
      {
        date: 'Aug 2019 - Apr 2022',
        title: 'Academic Coordinator & Secretary | Professor',
        org: 'Bachillerato Popular de Jóvenes y Adultos IMPA',
        desc: 'Self-managed educational organization with horizontal governance and consensus-based decision-making.',
        highlights: ['Institutional Management: Academic Secretary overseeing documentation and compliance', 'Collaborative Leadership: Co-led school as part of four-member coordination team', 'Teaching: Physics and Mathematics for young adult learners']
      },
      {
        date: 'Aug 2018 - Dec 2019',
        title: 'Physics Teacher & Laboratory Assistant',
        org: 'Escuela Tecnica ORT',
        desc: 'Technical-pedagogical team within the Physics Department of Argentina\'s leading technical high school.',
        highlights: ['Designed and standardized laboratory experiments and curriculum materials', 'Co-authored didactic sequence on mobile GPS sensors for kinematics experiments']
      },
      {
        date: 'Mar 2017 - Jul 2018',
        title: 'Technological Systems Professor',
        org: 'Colegio Agustiniano',
        desc: 'Taught Technological Systems for 7th and 8th grade students (ages 12-13).',
        highlights: ['Introduced core physics concepts and analysis of physical systems']
      },
      {
        date: 'Mar 2016 - Jul 2018',
        title: 'Mathematics and IT Professor',
        org: "St. Patrick's School",
        desc: 'Teacher in bilingual environment, integrating mathematical logic with applied technological tools.'
      },
      {
        date: 'Mar 2016 - Aug 2017',
        title: 'Teaching Assistant',
        org: 'Facultad de Ciencias Exactas y Naturales, UBA',
        desc: 'Competitive examination position in Physics Department of Argentina\'s premier science faculty.',
        highlights: ['Facilitated practical laboratory and problem-solving sessions for Biology, Geology, and Chemistry majors', 'High rankings in student evaluations for clarity in explaining complex phenomena']
      },
      {
        date: 'Oct 2009 - Mar 2016',
        title: 'Research Development Laboratory Technician',
        org: 'CITEDEF',
        desc: 'Research group focused on shape-memory alloys (SMA), studying thermomechanical properties and engineering applications.',
        highlights: ['Instrumentation Engineering: Custom DAQ system for electrical resistance measurements', 'Materials Testing: Mechanical tensile tests, crystallographic preparation, microstructural analysis', 'Co-authored two peer-reviewed papers on CuAlNi single crystals and martensitic transformations']
      },
      {
        date: 'Mar 2008 - Mar 2009',
        title: 'Quality Assurance Analyst',
        org: 'BGH S.A.',
        desc: 'QA software testing for Motorola mobile devices.',
        highlights: ['Executed test protocols for network connectivity, media capture, and voice services']
      }
    ],
    social_title: 'connect.sh',
footer: 'Built with HTML, CSS & Vanilla JS | KISS + YAGNI',
    nav: { bio: 'bio', skills: 'skills', projects: 'projects', experience: 'experience', contact: 'contact' },
    projectPages: {
      thereisnohr: {
        menu: { bio: 'bio', projects: 'projects', contact: 'contact' },
        backToProjects: '← Back to projects',
        title: 'thereisnohr',
        subtitle: 'Flexible, provider-agnostic Applicant Tracking System',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Overview',
        keyFeatures: 'Key Features',
        techStack: 'Tech Stack',
        gallery: 'Gallery',
        overviewText: [
          "Back in late 2024, I was tasked with the hiring process for a Mathematics and Biology teacher at a school I worked at. I thought HR would be in charge of gathering and filtering resumes, but I was wrong. There was no HR department to handle this task.",
          "And so thereisnohr was born, a small, flexible, provider-agnostic Applicant Tracking System (ATS). It provides a complete end-to-end pipeline for resume processing, from PDF ingestion to AI-driven candidate matching and interview preparation.",
          "The system leverages multiple LLM providers (Ollama, OpenAI) to enable intelligent resume parsing, candidate scoring, and automated interview question generation. Built with a focus on modularity and extensibility."
        ],
        features: [
          { title: 'Multi-Source Ingestion', desc: 'Add resumes via local folder batch processing or direct PDF uploads through the web UI.' },
          { title: 'Intelligent Parsing', desc: 'Extract markdown from PDFs with automated section detection and bilingual support (English/Spanish).' },
          { title: 'Identity Resolution', desc: 'Deterministic and LLM-backed candidate identification to prevent duplicates.' },
          { title: 'Structured Signal Extraction', desc: 'Derivation of skills, experience, and education from resumes and job descriptions using LLMs.' },
          { title: 'Hybrid Retrieval & Ranking', desc: 'A multi-stage funnel combining vector search (pgvector), deterministic skill matching, and LLM reranking.' },
          { title: 'Evidence-Based Explanations', desc: 'Transparent match rationales grounded in resume quotes with explicit gap and risk analysis.' },
          { title: 'Automated Interview Preparation', desc: 'Generation of tailored technical and behavioral questions based on candidate-job fit.' },
          { title: 'Async API', desc: 'A FastAPI backend with a database-backed task queue for long-running LLM and processing tasks.' }
        ],
        footer: { back: '← Back to Portfolio', github: 'View on GitHub' }
      },
      teacher_salaries: {
        menu: { bio: 'bio', projects: 'projects', contact: 'contact' },
        backToProjects: '← Back to projects',
        title: 'Teacher Salary Analytics Dashboard',
        subtitle: 'Interactive visualization of Argentina\'s teacher salary data',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Overview',
        keyFeatures: 'Key Features',
        techStack: 'Tech Stack',
        gallery: 'Gallery',
        overviewText: [
          "An interactive web application built with Dash to visualize and analyze teacher salary data (category MG10) across Argentina's 24 jurisdictions.",
          "Features dynamic inflation adjustment, enabling real-time comparison of purchasing power across provinces and time periods. Provincial benchmarking allows users to understand relative compensation and identify disparities.",
          "This project demonstrates expertise in building data-driven applications that translate complex fiscal data into actionable insights—a skill honed during my time as a government policy advisor."
        ],
        features: [
          { title: 'Inflation Adjustment', desc: 'Salaries are adjusted for inflation using the Consumer Price Index (CPI) from INDEC, allowing for accurate comparisons of real wages over time.' },
          { title: 'Provincial Benchmarking', desc: 'Users can compare salaries across all 24 jurisdictions, identifying trends and disparities in teacher compensation.' },
          { title: 'Interactive Visualizations', desc: 'The dashboard includes line charts for historical comparison against poverty lines and bar graphs for comparisons between jurisdictions.' },
          { title: 'Advanced Analytics and ML', desc: 'The application incorporates machine learning to cluster similar jurisdictions through KShape and IsolationForest for anomaly detection in salary trends.' }
        ],
        footer: { back: '← Back to Portfolio', github: 'View on GitHub' }
      },
      desercionar: {
        menu: { bio: 'bio', projects: 'projects', contact: 'contact' },
        backToProjects: '← Back to projects',
        title: 'desercionAR',
        subtitle: 'Early Warning System for school dropout prediction',
        links: { github: 'GitHub' },
        overview: 'Overview',
        techStack: 'Tech Stack',
        overviewText: [
          "This project develops an Early Warning System (EWS) to identify at-risk students prone to school dropout in Argentina, using data from the Permanent Household Survey (EPH - Encuesta Permanente de Hogares).",
          "The system combines socioeconomic indicators with machine learning models to predict dropout risk, enabling proactive intervention by educators and policymakers. Built with a focus on interpretability—understanding why a student is at risk is as important as predicting the risk itself.",
          "Deployed on AWS EC2, this project represents the intersection of my education background and technical ML skills, demonstrating how data-driven approaches can support educational policy goals."
        ],
        features: [],
        footer: { back: '← Back to Portfolio', github: 'View on GitHub' }
      },
      rappi_agent: {
        menu: { bio: 'bio', projects: 'projects', contact: 'contact' },
        backToProjects: '← Back to projects',
        title: 'Rappi Intelligent Operations Agent',
        subtitle: 'Multi-agent AI system for operational data access',
        links: { github: 'GitHub' },
        overview: 'Overview',
        keyFeatures: 'Key Features',
        techStack: 'Tech Stack',
        gallery: 'Gallery',
        overviewText: [
          "A multi-agent AI system designed to democratize access to operational data at Rappi as part of a technical interview process. The system enables Strategy, Planning, and Analytics (SP&A) teams to obtain deep insights, interactive visualizations, and strategic reports using natural language.",
          "Built using Google ADK with Gemini 3 Flash as the underlying model, the system orchestrates multiple specialized agents that collaborate to understand queries, fetch data, generate visualizations, and produce actionable reports.",
          "This project demonstrates production-ready multi-agent system architecture and the ability to bridge complex data systems with non-technical stakeholders through intuitive natural language interfaces."
        ],
        features: [
          { title: 'Multi-Agent Collaboration', desc: 'Specialized agents for query understanding, data retrieval, visualization generation, and report writing that work together to fulfill user requests.' },
          { title: 'Orchestrator-Driven Workflow', desc: 'A centralized orchestrator manages the interaction between agents, ensuring seamless coordination and efficient execution of complex tasks.' },
          { title: 'Natural Language Interface', desc: 'Intuitive natural language processing for seamless interaction with the system.' },
          { title: 'Data Access & Visualization', desc: 'Integration with internal data sources and the ability to generate interactive visualizations on the fly.' },
          { title: 'Actionable Reporting', desc: 'Generation of strategic reports with clear insights and recommendations based on the retrieved data and visualizations.' },
          { title: 'Anomaly Detection', desc: 'ML pipeline to detect unusual patterns in the data and alert relevant stakeholders when metrics deteriorate.' }
        ],
        footer: { back: '← Back to Portfolio', github: 'View on GitHub' }
      },
      rappi_dashboard: {
        menu: { bio: 'bio', projects: 'projects', contact: 'contact' },
        backToProjects: '← Back to projects',
        title: 'Rappi Competitive Intelligence Dashboard',
        subtitle: 'Automated competitive intelligence for the Mexican delivery market',
        links: { github: 'GitHub' },
        overview: 'Overview',
        keyFeatures: 'Key Features',
        techStack: 'Tech Stack',
        gallery: 'Gallery',
        overviewText: [
          "A technical evaluation project for Rappi focused on building a resilient, automated competitive intelligence system for the Mexican delivery market.",
          "The system features specialized web scrapers for Rappi, Uber Eats, and Chedraui, built with Playwright to handle dynamic content and anti-bot measures. A Plotly Dash dashboard visualizes key performance metrics and competitive positioning.",
          "This project demonstrates expertise in web scraping at scale, data pipeline architecture, and translating raw market data into strategic competitive insights."
        ],
        features: [
          { title: 'Robust Web Scraping', desc: 'Playwright-based scrapers for Rappi, Uber Eats, and Chedraui with proxy rotation and anti-bot evasion techniques.' },
          { title: 'Automated Data Pipeline', desc: 'Scheduled scraping via GitHub Actions with error handling, data validation, and storage in a structured format for analysis.' },
          { title: 'Interactive Dashboard', desc: 'A Plotly Dash application providing visualizations of market share, pricing trends, delivery times, and customer reviews.' },
          { title: 'Strategic Insights', desc: 'Analysis of competitive positioning, identification of market opportunities, and actionable recommendations based on the collected data.' }
        ],
        footer: { back: '← Back to Portfolio', github: 'View on GitHub' }
      }
    },
    terminal: {
      name: 'juan_ignacio_beiroa',
      role: 'ML/AI Engineer | MLOps & Cloud Deployment',
      background: 'Physics | Education | Public Policy',
      journey: '"From teaching 1000+ students to building ML & AI solutions"',
      expertise: ['ML_pipelines/', 'LLM_applications/', 'data_analysis/', 'cloud_deployment/', 'education_policy/']
    }
  },
  es: {
    hero_tagline: 'Ingeniero de Machine Learning & IA',
    bio_title: 'sobre_mi.txt',
    bio_text: [
      "Durante los últimos 10 años, he dedicado gran parte de mi vida a la enseñanza de STEM y a las políticas educativas. He enseñado a más de 1000 estudiantes de entre 13 y 25 años, liderado equipos docentes en el diseño curricular y trabajado como asesor gubernamental en negociaciones salariales docentes.",
      "Actualmente, estoy aplicando toda esa experiencia en la creación de pipelines de MLOps y aplicaciones basadas en LLMs. Desde el diseño de dashboards salariales y el despliegue de modelos predictivos hasta el desarrollo de sistemas de agentes, disfruto resolviendo problemas complejos y transformando datos brutos en inteligencia estratégica con Python, scikit-learn, PyTorch y AWS.",
      "Soy un firme creyente en los principios KISS y YAGNI: mi objetivo es construir soluciones de IA que sean robustas, impactantes y libres de complejidad innecesaria."
    ],
    skills_title: 'habilidades.sh',
    skills: {
      programming: 'Programación',
      ml_ai: 'ML / IA',
      data: 'Datos',
      cloud_mlops: 'Cloud / MLOps',
      web_apps: 'Web / Apps',
      background: {
        title: 'Formación',
        items: ['Educación en Física', 'Políticas Públicas', 'Planificación Estratégica']
      },
      languages: {
        title: 'Idiomas',
        items: ['Español (Nativo)', 'Inglés (Fluido)', 'Francés (Básico)']
      }
    },
    projects_title: 'proyectos/',
    projects: {
      thereisnohr: { title: 'thereisnohr', desc: 'Sistema de Seguimiento de Candidatos (ATS) flexible e independiente del proveedor, con emparejamiento de candidatos impulsado por IA y preparación de entrevistas.' },
      teacher_salaries: { title: 'Panel de Análisis de Salarios Docentes', desc: 'Aplicación web interactiva para visualizar y analizar datos de salarios docentes en Argentina con ajuste por inflación y benchmarking provincial.' },
      desercionar: { title: 'desercionAR', desc: 'Sistema de Alerta Temprana para identificar estudiantes en riesgo de abandono escolar en Argentina utilizando datos de la Encuesta Permanente de Hogares (EPH).' },
      rappi_agent: { title: 'Agente de Operaciones Inteligente de Rappi', desc: 'Sistema multiagente de IA para democratizar el acceso a datos operativos en Rappi, permitiendo consultas en lenguaje natural y reportes estratégicos.' },
      rappi_dashboard: { title: 'Panel de Inteligencia Competitiva de Rappi', desc: 'Sistema de inteligencia competitiva con scrapers especializados para Rappi, Uber Eats y Chedraui, además de un panel de visualización.' }
    },
    project_links: { github: 'GitHub', demo: 'Demo', live: 'En vivo', details: 'Detalles' },
    experience_title: 'experiencia.log',
    experience: [
      {
        date: 'Ago 2020 - Presente',
        title: 'Profesor Asistente',
        org: 'Universidad de Buenos Aires',
        desc: 'Curso de Física para estudiantes de Medicina y Veterinaria en el programa UBA XXI.',
        highlights: ['Gestión de consultas de estudiantes vía campus virtual Moodle', 'Diseño y corrección de exámenes alineados con objetivos pedagógicos', 'Desarrollo de recursos educativos: materiales, herramientas interactivas y videos instructivos']
      },
      {
        date: 'Feb 2020 - Dic 2025',
        title: 'Jefe de Ciencias y TI | Profesor de Física y Computación',
        org: 'Colegio Bayard',
        desc: 'Dirección del departamento STEM en una escuela bilingüe, supervisando la estrategia académica y la transición al currículo moderno de Computación.',
        highlights: ['Liderazgo de equipo: gestión de 6 profesores de diversas áreas científicas', 'Ingeniería curricular: renovación completa al estándar IGCSE de Cambridge', 'Enseñanza: Física y Computación dictadas íntegramente en inglés']
      },
      {
        date: 'Jun 2022 - Ene 2024',
        title: 'Asesor de Política Educativa | Analista de Datos Fiscales',
        org: 'Ministerio de Educación de la Nación',
        desc: 'Secretaría General del Consejo Federal de Educación. Marco técnico para negociaciones salariales docentes nacionales.',
        highlights: ['Modelado fiscal: creación de modelos de simulación para escenarios de aumento salarial', 'Pipeline de datos: recolección y normalización de datos de las 24 jurisdicciones argentinas', 'Logro clave: marco de datos que sustentó un aumento del 27% en el salario mínimo docente']
      },
      {
        date: 'Feb 2022 - Jun 2022',
        title: 'Formador de Maestros en Ciencias Naturales',
        org: 'Escuela de Maestros',
        desc: 'Programa de formación docente para mejorar la enseñanza de las ciencias en escuelas primarias de CABA.',
        highlights: ['Desarrollo y dictado de sesiones de capacitación para docentes', 'Visitas escolares para brindar apoyo pedagógico directo']
      },
      {
        date: 'Ago 2019 - Abr 2022',
        title: 'Coordinador Académico y Secretario | Profesor',
        org: 'Bachillerato Popular de Jóvenes y Adultos IMPA',
        desc: 'Organización educativa autogestionada con gobernanza horizontal y toma de decisiones por consenso.',
        highlights: ['Gestión institucional: Secretaría académica, documentación y cumplimiento normativo', 'Liderazgo colaborativo: integrante del equipo de coordinación de la escuela', 'Enseñanza: Física y Matemáticas para jóvenes y adultos']
      },
      {
        date: 'Ago 2018 - Dic 2019',
        title: 'Profesor de Física y Asistente de Laboratorio',
        org: 'Escuela Técnica ORT',
        desc: 'Equipo técnico-pedagógico del Departamento de Física de la principal escuela técnica de Argentina.',
        highlights: ['Diseño y estandarización de experimentos de laboratorio y secuencias didácticas', 'Co-autoría de material didáctico sobre sensores GPS para experimentos de cinemática']
      },
      {
        date: 'Mar 2017 - Jul 2018',
        title: 'Profesor de Sistemas Tecnológicos',
        org: 'Colegio Agustiniano',
        desc: 'Enseñanza de Sistemas Tecnológicos para alumnos de 7° y 8° grado.',
        highlights: ['Introducción a conceptos físicos fundamentales y análisis de sistemas físicos']
      },
      {
        date: 'Mar 2016 - Jul 2018',
        title: 'Profesor de Matemáticas e IT',
        org: "St. Patrick's School",
        desc: 'Docente en entorno bilingüe, integrando lógica matemática con herramientas tecnológicas aplicadas.'
      },
      {
        date: 'Mar 2016 - Ago 2017',
        title: 'Auxiliar de Docencia',
        org: 'Facultad de Ciencias Exactas y Naturales, UBA',
        desc: 'Posición obtenida por concurso en el Departamento de Física de la facultad de ciencias más prestigiosa del país.',
        highlights: ['Coordinación de laboratorios y resolución de problemas para carreras de ciencias biológicas', 'Excelentes evaluaciones docentes por claridad en la explicación de fenómenos complejos']
      },
      {
        date: 'Oct 2009 - Mar 2016',
        title: 'Técnico de Laboratorio de I+D',
        org: 'CITEDEF',
        desc: 'Grupo de investigación en aleaciones con memoria de forma (SMA), estudiando propiedades termomecánicas.',
        highlights: ['Ingeniería de instrumentación: sistema DAQ personalizado para mediciones eléctricas', 'Ensayos de materiales: tracción mecánica, preparación cristalográfica y análisis microestructural', 'Co-autoría de dos artículos en revistas arbitradas sobre monocristales CuAlNi']
      },
      {
        date: 'Mar 2008 - Mar 2009',
        title: 'Analista de QA',
        org: 'BGH S.A.',
        desc: 'Pruebas de calidad de software para dispositivos móviles Motorola.',
        highlights: ['Ejecución de protocolos de prueba de conectividad, multimedia y servicios de voz']
      }
    ],
    social_title: 'contacto.sh',
    footer: 'Construido con HTML, CSS & Vanilla JS | KISS + YAGNI',
    nav: { bio: 'bio', skills: 'skills', projects: 'proyectos', experience: 'experiencia', contact: 'contacto' },
    projectPages: {
      thereisnohr: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'thereisnohr',
        subtitle: 'Sistema de Seguimiento de Candidatos flexible e independiente del proveedor',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "A finales de 2024, me confiaron el proceso de selección de un docente de Matemáticas y Biología en una escuela donde trabajaba. Supuse que RR.HH. se encargaría de la recepción y filtrado de CVs, pero no fue así: no existía un departamento de RR.HH. para esa tarea.",
          "Así nació thereisnohr, un pequeño y flexible Sistema de Seguimiento de Candidatos (ATS) independiente del proveedor. Proporciona un pipeline completo para el procesamiento de CVs, desde la ingesta de PDFs hasta el emparejamiento con IA y la preparación de entrevistas.",
          "El sistema utiliza múltiples proveedores de LLM (Ollama, OpenAI) para permitir el parseo inteligente de CVs, puntuación de candidatos y generación automática de preguntas. Construido con un enfoque en la modularidad y extensibilidad."
        ],
        features: [
          { title: 'Ingesta Multi-Fuente', desc: 'Agregado de CVs mediante procesamiento por lotes de carpetas locales o cargas directas de PDF vía web.' },
          { title: 'Parseo Inteligente', desc: 'Extracción de Markdown desde PDFs con detección automática de secciones y soporte bilingüe (inglés/español).' },
          { title: 'Resolución de Identidad', desc: 'Identificación de candidatos mediante métodos deterministas y apoyados en LLM para prevenir duplicados.' },
          { title: 'Extracción de Señales Estructuradas', desc: 'Derivación de habilidades, experiencia y educación a partir de CVs y descripciones de puestos usando LLMs.' },
          { title: 'Recuperación Híbrida y Ranking', desc: 'Embudo de múltiples etapas que combina búsqueda vectorial (pgvector), coincidencia determinista y re-ranking con LLM.' },
          { title: 'Explicaciones Basadas en Evidencia', desc: 'Justificaciones de emparejamiento transparentes basadas en citas del CV, con análisis explícito de brechas y riesgos.' },
          { title: 'Preparación Automatizada de Entrevistas', desc: 'Generación de preguntas técnicas y conductuales adaptadas a la compatibilidad entre el candidato y el puesto.' },
          { title: 'API Asíncrona', desc: 'Backend en FastAPI con cola de tareas respaldada por base de datos para procesos largos de procesamiento y LLM.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      teacher_salaries: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Panel de Análisis de Salarios Docentes',
        subtitle: 'Visualización interactiva de datos salariales docentes en Argentina',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Una aplicación web interactiva construida con Dash para visualizar y analizar datos de salarios docentes (categoría MG10) en las 24 jurisdicciones de Argentina.",
          "Cuenta con ajuste dinámico por inflación, permitiendo la comparación en tiempo real del poder adquisitivo entre provincias y períodos. El benchmarking provincial permite entender la compensación relativa e identificar disparidades.",
          "Este proyecto demuestra experiencia en la creación de aplicaciones de datos que traducen información fiscal compleja en insights accionables—una habilidad perfeccionada durante mi etapa como asesor de políticas públicas."
        ],
        features: [
          { title: 'Ajuste por Inflación', desc: 'Los salarios se ajustan mediante el Índice de Precios al Consumidor (IPC) del INDEC, permitiendo comparaciones precisas de salarios reales en el tiempo.' },
          { title: 'Benchmarking Provincial', desc: 'Comparación de salarios entre las 24 jurisdicciones, identificando tendencias y brechas en la compensación docente.' },
          { title: 'Visualizaciones Interactivas', desc: 'Incluye gráficos de líneas para comparación histórica frente a líneas de pobreza y gráficos de barras para comparar jurisdicciones.' },
          { title: 'Analítica Avanzada y ML', desc: 'Incorpora Machine Learning para agrupar jurisdicciones similares mediante KShape y detección de anomalías con IsolationForest.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      desercionar: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'desercionAR',
        subtitle: 'Sistema de Alerta Temprana para la predicción de abandono escolar',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        techStack: 'Tecnologías',
        overviewText: [
          "Este proyecto desarrolla un Sistema de Alerta Temprana (SAT) para identificar estudiantes en riesgo de abandono escolar en Argentina, utilizando datos de la Encuesta Permanente de Hogares (EPH).",
          "El sistema combina indicadores socioeconómicos con modelos de Machine Learning para predecir el riesgo de deserción, permitiendo intervenciones proactivas de educadores y decisores políticos. Se prioriza la interpretabilidad: entender por qué un estudiante está en riesgo.",
          "Desplegado en AWS EC2, este proyecto representa la intersección entre mi formación educativa y mis habilidades técnicas en ML, demostrando cómo los datos pueden apoyar los objetivos de las políticas públicas."
        ],
        features: [],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      rappi_agent: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Agente de Operaciones Inteligente de Rappi',
        subtitle: 'Sistema multi-agente de IA para el acceso a datos operativos',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Un sistema de IA multi-agente diseñado para democratizar el acceso a datos operativos en Rappi. Permite a los equipos de Estrategia, Planificación y Analítica (SP&A) obtener insights profundos, visualizaciones interactivas e informes estratégicos mediante lenguaje natural.",
          "Desarrollado con Google ADK y Gemini 3 Flash, el sistema orquesta múltiples agentes especializados que colaboran para comprender consultas, extraer datos, generar visualizaciones y producir informes accionables.",
          "Este proyecto demuestra una arquitectura de sistemas multi-agente lista para producción y la capacidad de conectar sistemas de datos complejos con stakeholders no técnicos mediante interfaces intuitivas."
        ],
        features: [
          { title: 'Colaboración Multi-Agente', desc: 'Agentes especializados en comprensión de consultas, recuperación de datos, visualización y redacción que colaboran para cumplir con las solicitudes de los usuarios.' },
          { title: 'Flujo dirigido por Orquestador', desc: 'Un orquestador centralizado gestiona la interacción entre agentes, asegurando una coordinación fluida y una ejecución eficiente de tareas complejas.' },
          { title: 'Interfaz de Lenguaje Natural', desc: 'Procesamiento de lenguaje natural intuitivo para una interacción fluida con el sistema.' },
          { title: 'Acceso a Datos y Visualización', desc: 'Integración con fuentes de datos internas y capacidad de generar visualizaciones interactivas sobre la marcha.' },
          { title: 'Reportes Accionables', desc: 'Generación de informes estratégicos con insights claros y recomendaciones basadas en los datos y visualizaciones obtenidos.' },
          { title: 'Detección de Anomalías', desc: 'Pipeline de ML para detectar patrones inusuales en los datos y alertar a los responsables cuando las métricas se deterioran.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      rappi_dashboard: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Panel de Inteligencia Competitiva de Rappi',
        subtitle: 'Inteligencia competitiva automatizada para el mercado de delivery en México',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Proyecto de evaluación técnica para Rappi enfocado en construir un sistema de inteligencia competitiva resiliente y automatizado para el mercado de delivery mexicano.",
          "El sistema cuenta con scrapers especializados para Rappi, Uber Eats y Chedraui, desarrollados con Playwright para manejar contenido dinámico y medidas anti-bot. Un dashboard en Plotly Dash visualiza métricas clave de rendimiento.",
          "Este proyecto demuestra experiencia en web scraping a escala, arquitectura de pipelines de datos y la transformación de datos de mercado en insights competitivos estratégicos."
        ],
        features: [
          { title: 'Web Scraping Robusto', desc: 'Scrapers basados en Playwright para Rappi, Uber Eats y Chedraui con rotación de proxies y técnicas de evasión de anti-bots.' },
          { title: 'Pipeline de Datos Automatizado', desc: 'Scraping programado vía GitHub Actions con manejo de errores, validación de datos y almacenamiento estructurado para su análisis.' },
          { title: 'Dashboard Interactivo', desc: 'Aplicación en Plotly Dash que provee visualizaciones de cuota de mercado, tendencias de precios, tiempos de entrega y reseñas de clientes.' },
          { title: 'Insights Estratégicos', desc: 'Análisis del posicionamiento competitivo, identificación de oportunidades de mercado y recomendaciones accionables basadas en los datos recopilados.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      }
    },
    terminal: {
      name: 'juan_ignacio_beiroa',
      role: 'Ing. ML/AI | MLOps & Cloud',
      background: 'Física | Educación | Políticas Públicas',
      journey: '"De enseñar a más de 1000 estudiantes a construir soluciones de ML e IA"',
      expertise: ['ML_pipelines/', 'LLM_applications/', 'data_analysis/', 'cloud_deployment/', 'politicas_educativas/']
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getCurrentProjectPage() {
  const path = window.location.pathname;
  if (path.includes('thereisnohr')) return 'thereisnohr';
  if (path.includes('teacher-salaries')) return 'teacher_salaries';
  if (path.includes('desercionar')) return 'desercionar';
  if (path.includes('rappi-agent')) return 'rappi_agent';
  if (path.includes('rappi-dashboard')) return 'rappi_dashboard';
  return null;
}

function getOriginalLinkText(projectIndex, linkIndex) {
  const projectCards = document.querySelectorAll('.project-card');
  const card = projectCards[projectIndex];
  if (!card) return '';
  const links = card.querySelectorAll('.project-links a');
  if (links[linkIndex]) return links[linkIndex].textContent;
  return '';
}

function updateContent() {
  const t = translations[currentLang];
  const tagline = document.querySelector('.tagline');
  const bioTitle = document.querySelector('#bio h2');
  const skillsTitle = document.querySelector('#skills h2');
  const projectsTitle = document.querySelector('#projects h2');
  const expTitle = document.querySelector('#experience h2');
  const socialTitle = document.querySelector('#social h2');
  const footer = document.querySelector('footer p');
  if (tagline) tagline.textContent = t.hero_tagline;
  if (bioTitle) bioTitle.textContent = t.bio_title;
  if (skillsTitle) skillsTitle.textContent = t.skills_title;
  if (projectsTitle) projectsTitle.textContent = t.projects_title;
  if (expTitle) expTitle.textContent = t.experience_title;
  if (socialTitle) socialTitle.textContent = t.social_title;
  if (footer) footer.innerHTML = t.footer.replace('KISS + YAGNI', '<span style="color: var(--yellow);">KISS + YAGNI</span>');
  const navLinks = document.querySelectorAll('nav ul li a');
  if (navLinks[0]) navLinks[0].textContent = t.nav.bio;
  if (navLinks[1]) navLinks[1].textContent = t.nav.skills;
  if (navLinks[2]) navLinks[2].textContent = t.nav.projects;
  if (navLinks[3]) navLinks[3].textContent = t.nav.experience;
  if (navLinks[4]) navLinks[4].textContent = t.nav.contact;
  const bioParagraphs = document.querySelectorAll('#bio .bio-text p');
  t.bio_text.forEach((text, i) => {
    if (bioParagraphs[i]) bioParagraphs[i].textContent = text;
  });
  const skillCategories = document.querySelectorAll('.skill-category');
  if (skillCategories[0]) skillCategories[0].querySelector('h3').textContent = t.skills.programming;
  if (skillCategories[1]) skillCategories[1].querySelector('h3').textContent = t.skills.ml_ai;
  if (skillCategories[2]) skillCategories[2].querySelector('h3').textContent = t.skills.data;
  if (skillCategories[3]) skillCategories[3].querySelector('h3').textContent = t.skills.cloud_mlops;
  if (skillCategories[4]) skillCategories[4].querySelector('h3').textContent = t.skills.web_apps;
  
  if (skillCategories[5]) {
    skillCategories[5].querySelector('h3').textContent = t.skills.background.title;
    const items = skillCategories[5].querySelectorAll('li');
    t.skills.background.items.forEach((item, j) => {
      if (items[j]) items[j].textContent = item;
    });
  }
  
  if (skillCategories[6]) {
    skillCategories[6].querySelector('h3').textContent = t.skills.languages.title;
    const items = skillCategories[6].querySelectorAll('li');
    t.skills.languages.items.forEach((item, j) => {
      if (items[j]) items[j].textContent = item;
    });
  }
  const projectCards = document.querySelectorAll('.project-card');
  const projectsData = ['thereisnohr', 'teacher_salaries', 'desercionar', 'rappi_agent', 'rappi_dashboard'];
  projectCards.forEach((card, i) => {
    const key = projectsData[i];
    const title = card.querySelector('h3');
    const desc = card.querySelector('p');
    const links = card.querySelectorAll('.project-links a');
    if (title && t.projects[key]) title.textContent = t.projects[key].title;
    if (desc && t.projects[key]) desc.textContent = t.projects[key].desc;
    if (links[0]) links[0].textContent = t.project_links.github;
    if (links[1]) {
      const originalText = getOriginalLinkText(i, 1);
      if (originalText === 'Live') {
        links[1].textContent = t.project_links.live;
      } else if (originalText === 'Demo') {
        links[1].textContent = t.project_links.demo;
      } else if (originalText === 'Details') {
        links[1].textContent = t.project_links.details;
      }
    }
    if (links[2]) links[2].textContent = t.project_links.details;
  });
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (t.experience) {
    timelineItems.forEach((item, i) => {
      const exp = t.experience[i];
      if (!exp) return;
      const date = item.querySelector('.date');
      const title = item.querySelector('h3');
      const org = item.querySelector('.org');
      const desc = item.querySelector('.desc');
      const highlights = item.querySelectorAll('.highlights li');
      if (date) date.textContent = exp.date;
      if (title) title.textContent = exp.title;
      if (org) org.textContent = exp.org;
      if (desc) desc.textContent = exp.desc;
      if (exp.highlights) {
        highlights.forEach((li, j) => {
          if (exp.highlights[j]) li.textContent = exp.highlights[j];
        });
      }
    });
  }
  if (t.projectPages) {
    const projectPage = t.projectPages[getCurrentProjectPage()];
    if (projectPage) {
      const navItems = document.querySelectorAll('nav ul li a');
      if (navItems[0]) navItems[0].textContent = projectPage.menu.bio;
      if (navItems[1]) navItems[1].textContent = projectPage.menu.projects;
      if (navItems[2]) navItems[2].textContent = projectPage.menu.contact;
      const backLink = document.querySelector('#project-header .container a');
      if (backLink) backLink.textContent = projectPage.backToProjects;
      const projectTitle = document.querySelector('#project-header h1');
      if (projectTitle) projectTitle.textContent = projectPage.title;
      const projectSubtitle = document.querySelector('#project-header p');
      if (projectSubtitle) projectSubtitle.textContent = projectPage.subtitle;
      const projectLinks = document.querySelectorAll('#project-header .project-links a');
      if (projectLinks[0]) projectLinks[0].textContent = projectPage.links.github;
      if (projectLinks[1] && projectPage.links.demo) projectLinks[1].textContent = projectPage.links.demo;
      const overviewTitle = document.querySelector('#overview h2');
      if (overviewTitle) overviewTitle.textContent = projectPage.overview;
      const overviewParagraphs = document.querySelectorAll('#overview .bio-text p');
      if (projectPage.overviewText) {
        overviewParagraphs.forEach((p, i) => {
          if (projectPage.overviewText[i]) p.textContent = projectPage.overviewText[i];
        });
      }
      const keyFeaturesTitle = document.querySelector('#overview h3');
      if (keyFeaturesTitle && projectPage.keyFeatures) {
        keyFeaturesTitle.textContent = projectPage.keyFeatures;
        const featureItems = document.querySelectorAll('#overview .bio-text ul li');
        if (projectPage.features) {
          featureItems.forEach((li, i) => {
            if (projectPage.features[i]) {
              li.textContent = projectPage.features[i].title + ': ' + projectPage.features[i].desc;
            }
          });
        }
      }
      const stackTitle = document.querySelector('#stack h2');
      if (stackTitle) stackTitle.textContent = projectPage.techStack;
      const galleryTitle = document.querySelector('#gallery h2');
      if (galleryTitle) galleryTitle.textContent = projectPage.gallery;
      const footerLinks = document.querySelectorAll('footer a');
      if (footerLinks[0]) footerLinks[0].textContent = projectPage.footer.back;
      if (footerLinks[1]) footerLinks[1].textContent = projectPage.footer.github;
    }
  }
}

function initLanguageToggle() {
  const btn = document.getElementById('lang-btn');
  if (!btn) return;
  btn.textContent = currentLang.toUpperCase();
  
  // Always update content to ensure the selected language is applied,
  // especially on project pages that might have hardcoded text.
  updateContent();

  if (document.querySelector('.terminal-body') && currentLang === 'es') {
    refreshTerminal();
  }
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', currentLang);
    btn.textContent = currentLang.toUpperCase();
    updateContent();
    if (document.querySelector('.terminal-body')) {
      refreshTerminal();
    }
  });
}

function refreshTerminal() {
  const terminalBody = document.querySelector('.terminal-body');
  const t = translations[currentLang].terminal;
  if (!terminalBody) return;

  const lines = [
    { text: '> ', delay: 0 },
    { text: 'whoami', delay: 100 },
    { text: '\n', delay: 300 },
    { text: t.name, delay: 500, class: 'highlight' },
    { text: '\n\n', delay: 700 },
    { text: '> ', delay: 800 },
    { text: 'cat summary.txt', delay: 900 },
    { text: '\n', delay: 1100 },
    { text: t.role, delay: 1300, class: 'comment' },
    { text: '\n' + t.background, delay: 1500, class: 'comment' },
    { text: '\n\n', delay: 1700 },
    { text: '> ', delay: 1800 },
    { text: 'echo $JOURNEY', delay: 1900 },
    { text: '\n', delay: 2100 },
    { text: t.journey, delay: 2300, class: 'highlight' },
    { text: '\n\n', delay: 2500 },
    { text: '> ', delay: 2600 },
    { text: 'ls ./expertise/', delay: 2700 },
    { text: '\n', delay: 2900 },
    { text: t.expertise[0], delay: 3000, class: 'comment' },
    { text: t.expertise[1], delay: 3200, class: 'comment' },
    { text: t.expertise[2], delay: 3400, class: 'comment' },
    { text: t.expertise[3], delay: 3600, class: 'comment' },
    { text: t.expertise[4], delay: 3800, class: 'comment' },
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

  let style = document.getElementById('terminal-animation-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'terminal-animation-style';
    style.textContent = `
      .terminal-body span { opacity: 0; animation: fadeIn 0.3s forwards; }
      .terminal-body .highlight { color: #ffff00; }
      .terminal-body .comment { color: #808080; }
      @keyframes fadeIn { to { opacity: 1; } }
    `;
    document.head.appendChild(style);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  setTimeout(() => refreshTerminal(), 0);
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
      animation: fadeIn 0.3s forwards;
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