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
      ml_ai: 'ML / AI',
      data: 'Data',
      cloud_mlops: 'Cloud / MLOps',
      web_apps: 'Web / Apps',
      background: 'Background',
      languages: 'Languages'
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
      "Durante los últimos 10 años, dediqué la mayor parte de mi vida a la enseñanza STEM y a las políticas educativas. Tuve a mi cargo a más de 1000 estudiantes de entre 13 y 25 años, lideré equipos docentes en diseño curricular y me desempeñé como asesor gubernamental en mesas de negociación salarial docente.",
      "Actualmente, estoy volcando toda esa experiencia en la construcción de pipelines de MLOps y aplicaciones potenciadas por LLMs. Desde el diseño de dashboards salariales y el despliegue de modelos predictivos hasta el desarrollo de agentes de IA, mi enfoque está en resolver problemas complejos y transformar datos crudos en inteligencia estratégica utilizando Python, scikit-learn, PyTorch y AWS.",
      "Soy un firme creyente en los principios KISS y YAGNI: mi objetivo es construir soluciones de IA que sean robustas, impactantes y libres de complejidad innecesaria."
    ],
    skills_title: 'habilidades.sh',
    skills: {
      programming: 'Programación',
      ml_ai: 'ML / IA',
      data: 'Datos',
      cloud_mlops: 'Cloud / MLOps',
      web_apps: 'Web / Apps',
      background: 'Formación',
      languages: 'Idiomas'
    },
    projects_title: 'proyectos/',
    projects: {
      thereisnohr: { title: 'thereisnohr', desc: 'Sistema de Seguimiento de Candidatos flexible y agnóstico de proveedor con rankeo de candidatos impulsado por RAG y preparación de entrevistas con LLMs.' },
      teacher_salaries: { title: 'Panel de Análisis de Salarios Docentes', desc: 'Aplicación web interactiva para visualizar y analizar datos de salarios docentes en Argentina con ajuste por inflación y comparación provincial.' },
      desercionar: { title: 'desercionAR', desc: 'Sistema de Alerta Temprana para identificar estudiantes en riesgo de abandono escolar en Argentina usando datos de la Encuesta Permanente de Hogares.' },
      rappi_agent: { title: 'Agente de Operaciones Inteligente de Rappi', desc: 'Sistema multiagente de IA para democratizar el acceso a datos operativos en Rappi, permitiendo consultas en lenguaje natural y informes estratégicos.' },
      rappi_dashboard: { title: 'Panel de Inteligencia Competitiva de Rappi', desc: 'Sistema de inteligencia competitiva con scrapers especializados para Rappi, Uber Eats y Chedraui, más panel de visualización.' }
    },
    project_links: { github: 'GitHub', demo: 'Demo', live: 'En vivo', details: 'Detalles' },
    experience_title: 'experiencia.log',
    experience: [
      {
        date: 'Ago 2020 - Presente',
        title: 'Profesor Asistente',
        org: 'Universidad de Buenos Aires',
        desc: 'Curso de Física para estudiantes de Medicina/Veterinaria en el programa de aprendizaje a distancia UBA XXI.',
        highlights: ['Gestiono consultas de estudiantes via campus virtual Moodle', 'Diseño y corrijo examenes alineados con objetivos pedagogicos', 'Desarrollo recursos educativos: materiales, herramientas interactivas, videos instructivos']
      },
      {
        date: 'Feb 2020 - Dic 2025',
        title: 'Jefe de Ciencias y TI | Profesor de Física y Computación',
        org: 'Colegio Bayard',
        desc: 'Dirigí el departamento STEM en una escuela bilingüe, supervisando estrategia académica y transición al currículo de Computación.',
        highlights: ['Liderazgo de equipo: Gestioné 6 profesores', 'Ingeniería curricular: Renovación completa al estándar IGCSE', 'Enseñanza: Física, TIC y Computación en inglés']
      },
      {
        date: 'Jun 2022 - Ene 2024',
        title: 'Asesor de Política Educativa | Analista de Datos Fiscales',
        org: 'Ministerio de Educación de la Nación',
        desc: 'Secretaría General del Consejo Federal de Educación. Marco técnico para negociaciones salariales docentes.',
        highlights: ['Modelado fiscal: Modelos de simulación para aumentos salariales', 'Pipeline de datos: Datos de 24 jurisdicciones', 'Logro clave: Marco que ayudó a aumentar un 27% en el salario mínimo docente']
      },
      {
        date: 'Feb 2022 - Jun 2022',
        title: 'Formador de Maestros en Ciencias Naturales',
        org: 'Escuela de Maestros',
        desc: 'Programa de formación docente para mejorar ciencias en primarias de Buenos Aires.',
        highlights: ['Desarrollé y dicté sesiones de capacitación', 'Visitas escolares para apoyo instructivo directo']
      },
      {
        date: 'Ago 2019 - Abr 2022',
        title: 'Coordinador Académico y Secretario | Profesor',
        org: 'Bachillerato Popular de Jóvenes y Adultos IMPA',
        desc: 'Organización educativa autogestionada con gobernanza horizontal.',
        highlights: ['Gestión de documentación y cumplimiento', 'Co-liderazgo como parte del equipo de coordinación', 'Enseñanza: Física y Matemáticas']
      },
      {
        date: 'Ago 2018 - Dic 2019',
        title: 'Profesor de Física y Asistente de Laboratorio',
        org: 'Escuela Técnica ORT',
        desc: 'Equipo técnico-pedagógico del Departamento de Física.',
        highlights: ['Diseño de experiments de laboratorio', 'Co-autoría de secuencia didáctica sobre sensores GPS']
      },
      {
        date: 'Mar 2017 - Jul 2018',
        title: 'Profesor de Sistemas Tecnológicos',
        org: 'Colegio Agustiniano',
        desc: 'Enseñanza de Sistemas Tecnológicos para 7° y 8° grado.',
        highlights: ['Introduje conceptos físicos y análisis de sistemas']
      },
      {
        date: 'Mar 2016 - Jul 2018',
        title: 'Profesor de Matemáticas e TI',
        org: "St. Patrick's School",
        desc: 'Docente en entorno bilingüe.'
      },
      {
        date: 'Mar 2016 - Ago 2017',
        title: 'Auxiliar de Docencia',
        org: 'Facultad de Ciencias Exactas y Naturales, UBA',
        desc: 'Posición por examen de competencia en el Departamento de Física.',
        highlights: ['Facilito sesiones de laboratorio y resolución de problemas', 'Altas evaluaciones por claridad']
      },
      {
        date: 'Oct 2009 - Mar 2016',
        title: 'Técnico de Laboratorio de Investigación y Desarrollo',
        org: 'CITEDEF',
        desc: 'Grupo de investigación en aleaciones con memoria de forma.',
        highlights: ['Ingeniería de instrumentación: Sistema DAQ personalizado', 'Testing de materiales: Ensayos de tracción', 'Co-autoría de dos artículos arbitrados']
      },
      {
        date: 'Mar 2008 - Mar 2009',
        title: 'Analista de Aseguramiento de Calidad',
        org: 'BGH S.A.',
        desc: 'Testing de software QA para dispositivos móviles Motorola.',
        highlights: ['Ejecuté protocolos de prueba']
      }
    ],
    social_title: 'conectar.sh',
    footer: 'Construido con HTML, CSS & Vanilla JS | KISS + YAGNI',
    nav: { bio: 'sobre_mi', skills: 'habilidades', projects: 'proyectos', experience: 'experiencia', contact: 'contacto' },
    projectPages: {
      thereisnohr: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'thereisnohr',
        subtitle: 'Sistema de Seguimiento de Candidatos flexible y agnóstico de proveedor',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "A finales de 2024, me encargaron el proceso de contratación de un profesor de Matemáticas y Biología en una escuela donde trabajaba. Pensé que RR.HH. se encargaría de recopilar y filtrar currículums, pero estaba equivocado. No había un departamento de RR.HH. para manejar esta tarea.",
          "Y así nació thereisnohr, un pequeño y flexible Sistema de Seguimiento de Candidatos (ATS) agnóstico de proveedor. Proporciona un pipeline completo para el procesamiento de currículums, desde la ingestión de PDF hasta el emparejamiento de candidatos impulsado por IA y la preparación de entrevistas.",
          "El sistema aprovecha múltiples proveedores de LLM (Ollama, OpenAI) para permitir el análisis inteligente de currículums, puntuación de candidatos y generación automática de preguntas de entrevista. Construido con enfoque en modularidad y extensibilidad."
        ],
        features: [
          { title: 'Ingestión Multi-Fuente', desc: 'Agregar currículums vía procesamiento por lotes de carpeta local o cargas directas de PDF a través de la interfaz web.' },
          { title: 'Análisis Inteligente', desc: 'Extraer markdown de PDFs con detección automática de secciones y soporte bilingüe (inglés/español).' },
          { title: 'Resolución de Identidad', desc: 'Identificación determinista y basada en LLM para prevenir duplicados.' },
          { title: 'Extracción de Señales Estructuradas', desc: 'Derivar habilidades, experiencia y educación de currículums y descripciones de puesto usando LLMs.' },
          { title: 'Recuperación Híbrida y Ranking', desc: 'Un embudo multi-etapa que combina búsqueda vectorial (pgvector), emparejamiento determinista de habilidades y rerankeado por LLM.' },
          { title: 'Explicaciones Basadas en Evidencia', desc: 'Rationales de emparejamiento transparentes fundamentados en citas del currículum con análisis de brechas y riesgos explícitos.' },
          { title: 'Preparación Automatizada de Entrevistas', desc: 'Generación de preguntas técnicas y behavioral adaptadas basadas en la compatibilidad candidato-puesto.' },
          { title: 'API Asíncrona', desc: 'Un backend FastAPI con una cola de tareas con base de datos para tareas largas de LLM y procesamiento.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
teacher_salaries: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Panel de Análisis de Salarios Docentes',
        subtitle: 'Visualización interactiva de datos de salarios docentes en Argentina',
        links: { github: 'GitHub', demo: 'Demo' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Una aplicación web interactiva construida con Dash para visualizar y analizar datos de salarios docentes (categoría MG10) en las 24 jurisdicciones de Argentina.",
          "Cuenta con ajuste dinámico por inflación, permitiendo comparación en tiempo real del poder adquisitivo entre provincias y períodos. El benchmark provincial permite a los usuarios entender la compensación relativa e identificar disparidades.",
          "Este proyecto demuestra experiencia en la construcción de aplicaciones basadas en datos que traducen complejos datos fiscales en accionables—una habilidad pulida durante mi tiempo como asesor de políticas gubernamentales."
        ],
        features: [
          { title: 'Ajuste por Inflación', desc: 'Los salarios se ajustan por inflación usando el Índice de Precios al Consumidor (IPC) del INDEC, permitiendo comparaciones precisas de salarios reales en el tiempo.' },
          { title: 'Benchmark Provincial', desc: 'Los usuarios pueden comparar salarios en las 24 jurisdicciones, identificando tendencias y disparidades en la compensación docente.' },
          { title: 'Visualizaciones Interactivas', desc: 'El panel incluye gráficos de línea para comparación histórica contra líneas de pobreza y gráficos de barra para comparaciones entre jurisdicciones.' },
          { title: 'Analítica Avanzada y ML', desc: 'La aplicación incorpora aprendizaje automático para agrupar jurisdicciones similares a través de KShape e IsolationForest para detección de anomalías en tendencias salariales.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      desercionar: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'desercionAR',
        subtitle: 'Sistema de Alerta Temprana para prédicción de abandono escolar',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        techStack: 'Tecnologías',
        overviewText: [
          "Este proyecto desarrolla un Sistema de Alerta Temprana (SAT) para identificar estudiantes en riesgo de abandono escolar en Argentina, usando datos de la Encuesta Permanente de Hogares (EPH).",
          "El sistema combina indicadores socioeconómicos con modelos de aprendizaje automático para prédcir el riesgo de abandono, permitiendo intervención proactiva por educadores y formuladores de políticas. Construido con enfoque en interpretabilidad—entender por qué un estudiante está en riesgo es tan importante como prédcir el riesgo en sí.",
          "Desplegado en AWS EC2, este proyecto representa la intersección de mi formación educativa y habilidades técnicas de ML, demostrando cómo los enfoques basados en datos pueden apoyar objetivos de políticas educativas."
        ],
        features: [],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      rappi_agent: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Agente de Operaciones Inteligente de Rappi',
        subtitle: 'Sistema multiagente de IA para acceso a datos operativos',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Un sistema multiagente de IA diseñado para democratizar el acceso a datos operativos en Rappi como parte de un proceso de entrevista técnica. El sistema permite a los equipos de Estrategia, Planificación y Analítica (SP&A) obtener profundas introspecciones, visualizaciones interactivas e informes estratégicos usando lenguaje natural.",
          "Construido usando Google ADK con Gemini 3 Flash como modelo subyacente, el sistema orquesta múltiples agentes especializados que colaboran para entender consultas, obtener datos, generar visualizaciones y producir informes accionables.",
          "Este proyecto demuestra arquitectura de sistema multiagente lista para producción y la habilidad de bridgear sistemas de datos complejos con stakeholders no técnicos a través de interfaces intuitivas de lenguaje natural."
        ],
        features: [
          { title: 'Colaboración Multi-Agente', desc: 'Agentes especializados para comprensión de consultas, recuperación de datos, generación de visualización y redacción de informes que trabajan juntos para fulfill solicitudes de usuarios.' },
          { title: 'Flujo de Trabajo Dirigido por Orquestador', desc: 'Un orquestador centralizado gestiona la interacción entre agentes, asegurando coordinación sin fisuras y ejecución eficiente de tareas complejas.' },
          { title: 'Interfaz de Lenguaje Natural', desc: 'Procesamiento de lenguaje natural intuitivo para interacción sin costuras con el sistema.' },
          { title: 'Acceso a Datos y Visualización', desc: 'Integración con fuentes de datos internas y habilidad de generar visualizaciones interactivas sobre la marcha.' },
          { title: 'Informes Accionables', desc: 'Generación de informes estratégicos con introspecciones claras y recomendaciones basados en los datos y visualizaciones obtidos.' },
          { title: 'Detección de Anomalías', desc: 'Pipeline de ML para detectar patrones inusuales en los datos y alertar a los stakeholders relevantes cuando las métricas se deterioran.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      },
      rappi_dashboard: {
        menu: { bio: 'bio', projects: 'proyectos', contact: 'contacto' },
        backToProjects: '← Volver a proyectos',
        title: 'Panel de Inteligencia Competitiva de Rappi',
        subtitle: 'Inteligencia competitiva automatizada para el mercado de delivery mexicano',
        links: { github: 'GitHub' },
        overview: 'Resumen',
        keyFeatures: 'Características Clave',
        techStack: 'Tecnologías',
        gallery: 'Galería',
        overviewText: [
          "Un proyecto de evaluación técnica para Rappi enfocado en construir un sistema de inteligencia competitiva automatizado y resiliente para el mercado de delivery mexicano.",
          "El sistema cuenta con scrapers web especializados para Rappi, Uber Eats y Chedraui, construidos con Playwright para manejar contenido dinámico y medidas anti-bot. Un panel de Plotly Dash visualiza métricas clave de rendimiento y posicionamiento competitivo.",
          "Este proyecto demuestra experiencia en web scraping a escala, arquitectura de pipeline de datos y traducción de datos de mercado crudos en introspecciones competitivas estratégicas."
        ],
        features: [
          { title: 'Web Scraping Robusto', desc: 'Scrapers basados en Playwright para Rappi, Uber Eats y Chedraui con rotación de proxy y técnicas de evasión anti-bot.' },
          { title: 'Pipeline de Datos Automatizado', desc: 'Scraping programado vía GitHub Actions con manejo de errores, validación de datos y almacenamiento en formato estructurado para análisis.' },
          { title: 'Panel Interactivo', desc: 'Una aplicación Plotly Dash provee visualizaciones de participación de mercado, tendencias de precios, tiempos de entrega y reseñas de clientes.' },
          { title: 'Introspecciones Estratégicas', desc: 'Análisis de posicionamiento competitivo, identificación de oportunidades de mercado y recomendaciones accionables basadas en los datos recogidos.' }
        ],
        footer: { back: '← Volver al Portafolio', github: 'Ver en GitHub' }
      }
    },
    terminal: {
      name: 'juan_ignacio_beiroa',
      role: 'Ing. ML/AI | MLOps & Cloud',
      background: 'Física | Educación | Políticas Públicas',
      journey: '"De enseñar 1000+ estudiantes a construir soluciones ML & AI"',
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
  const skillCategories = document.querySelectorAll('.skill-category h3');
  if (skillCategories[0]) skillCategories[0].textContent = t.skills.programming;
  if (skillCategories[1]) skillCategories[1].textContent = t.skills.ml_ai;
  if (skillCategories[2]) skillCategories[2].textContent = t.skills.data;
  if (skillCategories[3]) skillCategories[3].textContent = t.skills.cloud_mlops;
  if (skillCategories[4]) skillCategories[4].textContent = t.skills.web_apps;
  if (skillCategories[5]) skillCategories[5].textContent = t.skills.background;
  if (skillCategories[6]) skillCategories[6].textContent = t.skills.languages;
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
  if (currentLang === 'es') {
    updateContent();
  }
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