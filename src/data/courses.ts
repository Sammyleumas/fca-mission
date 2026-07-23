import { Course } from '../types';

export const COURSES: Course[] = [
  // --- TECHNOLOGY TRACK ---
  {
    id: 'web-design',
    title: 'Web Design',
    track: 'technology',
    shortDescription: 'Master modern frontend architectures, responsive design systems, and web graphics.',
    overview: 'The Web Design program empowers students to create visually breathtaking, accessible, and ultra-performant websites. From foundational HTML5, CSS3, and modern JavaScript to React and Tailwind CSS, students build production-grade web experiences.',
    outcomes: [
      'Design and deploy responsive full-stack layouts',
      'Integrate interactive UI frameworks and CSS animations',
      'Optimize web graphics, user accessibility, and performance metrics',
      'Deploy live web applications with custom domains'
    ],
    careerOpportunities: [
      'Frontend Web Developer',
      'Web Designer / Developer',
      'UI Graphic Designer',
      'Freelance Web Specialist'
    ],
    skillsGained: ['HTML5 & Modern CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Layouts', 'Web Accessibility (WCAG)', 'Git & Deployment'],
    duration: '12 Weeks',
    level: 'All Levels',
    iconName: 'Layout',
    popular: true
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    track: 'technology',
    shortDescription: 'Create high-impact brand visual identities, vector illustrations, and digital editorial design.',
    overview: 'Unleash your visual storytelling potential. Learn design theory, typography, color psychology, and industry-standard tools (Photoshop, Illustrator, Canva) to create compelling visual assets for digital and print media.',
    outcomes: [
      'Build comprehensive brand style guides and visual identities',
      'Master vector graphics, logo creation, and typographic composition',
      'Design marketing collateral, social media assets, and advertising layouts',
      'Prepare print-ready and digital vector assets for commercial use'
    ],
    careerOpportunities: [
      'Graphic Designer',
      'Brand Identity Specialist',
      'Visual Designer',
      'Creative Marketing Designer'
    ],
    skillsGained: ['Typography & Color Theory', 'Vector Illustration', 'Logo & Brand Systems', 'Digital Composition', 'Adobe Illustrator / Figma', 'Print & Web Layouts'],
    duration: '10 Weeks',
    level: 'Beginner',
    iconName: 'Palette'
  },
  {
    id: 'product-development',
    title: 'Product Development',
    track: 'technology',
    shortDescription: 'Transform concepts into scalable tech products through software engineering and product management.',
    overview: 'Learn how modern software products are conceived, architected, and launched. Covering agile methodologies, rapid prototyping, full-stack API integrations, and database design, this course bridges the gap between code and market success.',
    outcomes: [
      'Architect end-to-end software product prototypes',
      'Implement API integrations and cloud database storage',
      'Master product lifecycle management, user analytics, and testing',
      'Lead cross-functional tech product initiatives'
    ],
    careerOpportunities: [
      'Junior Product Manager',
      'Full-Stack Developer',
      'Technical Product Lead',
      'Software Entrepreneur'
    ],
    skillsGained: ['Product Strategy & Lifecycle', 'Full-Stack Web APIs', 'Agile & Scrum Methodologies', 'User Testing & Analytics', 'Database Fundamentals', 'Prototyping'],
    duration: '16 Weeks',
    level: 'Intermediate',
    iconName: 'Cpu',
    popular: true
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    track: 'technology',
    shortDescription: 'Engineer intuitive digital product interfaces through human-centered user research and wireframing.',
    overview: 'Dive deep into user experience research, wireframing, high-fidelity prototyping, and design system creation using Figma. Learn to solve real human problems by creating seamless, accessible software interfaces.',
    outcomes: [
      'Conduct user interviews, persona creation, and empathy mapping',
      'Build clickable interactive prototypes with advanced micro-interactions',
      'Develop scalable Figma design systems and component libraries',
      'Perform usability testing and design iteration'
    ],
    careerOpportunities: [
      'UI/UX Designer',
      'Product Designer',
      'User Researcher',
      'Interaction Designer'
    ],
    skillsGained: ['User Research & Wireframing', 'Figma Mastery', 'Prototyping & Micro-interactions', 'Design Systems', 'Usability Testing', 'Information Architecture'],
    duration: '12 Weeks',
    level: 'All Levels',
    iconName: 'Smartphone',
    popular: true
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    track: 'technology',
    shortDescription: 'Harness cutting-edge AI models, prompt engineering, and automated workflow pipelines.',
    overview: 'Learn to leverage generative AI tools, LLM APIs, prompt engineering, and no-code/low-code workflow platforms (Make, Zapier, Python scripts) to automate repetitive business tasks and amplify creative productivity.',
    outcomes: [
      'Build custom AI workflows and automated business pipelines',
      'Master prompt engineering for text, code, and media generation',
      'Integrate AI APIs into web platforms and operational workflows',
      'Optimize organizational productivity with AI agents'
    ],
    careerOpportunities: [
      'AI Automation Specialist',
      'AI Workflow Engineer',
      'Prompt Engineer',
      'Operations Automation Consultant'
    ],
    skillsGained: ['Prompt Engineering', 'Generative AI APIs', 'Workflow Automation (Zapier/Make)', 'Python AI Scripting', 'Data Processing', 'Business Process Design'],
    duration: '10 Weeks',
    level: 'All Levels',
    iconName: 'Sparkles',
    popular: true
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    track: 'technology',
    shortDescription: 'Drive brand growth through SEO, social media strategy, content creation, and analytics.',
    overview: 'Master data-driven marketing strategies to scale brand presence online. Learn Search Engine Optimization (SEO), pay-per-click advertising, content marketing, social media algorithms, and marketing analytics.',
    outcomes: [
      'Execute multi-channel digital marketing campaigns',
      'Optimize search engine visibility and website traffic',
      'Create high-converting social media content and ad funnels',
      'Analyze marketing KPIs using Google Analytics and tracking pixels'
    ],
    careerOpportunities: [
      'Digital Marketing Specialist',
      'SEO / SEM Strategist',
      'Social Media Manager',
      'Content Marketing Manager'
    ],
    skillsGained: ['SEO & Content Strategy', 'Social Media Marketing', 'PPC & Paid Ads', 'Google Analytics', 'Email Campaign Funnels', 'Brand Storytelling'],
    duration: '8 Weeks',
    level: 'Beginner',
    iconName: 'TrendingUp'
  },

  // --- ART TRACK ---
  {
    id: 'filmmaking',
    title: 'Filmmaking',
    track: 'art',
    shortDescription: 'Learn cinematic storytelling, direct live scenes, and produce compelling narrative films.',
    overview: 'Immerse yourself in cinematic storytelling from script to screen. Learn pre-production planning, directing actors, camera blocking, scene composition, lighting set-ups, and post-production overview.',
    outcomes: [
      'Direct original short films and narrative visual pieces',
      'Manage onset production, cast, and camera crews',
      'Develop shot lists, storyboards, and production budgets',
      'Understand distribution channels and film festival submissions'
    ],
    careerOpportunities: [
      'Film Director',
      'Assistant Director',
      'Independent Filmmaker',
      'Video Producer'
    ],
    skillsGained: ['Directing & Blocking', 'Storyboarding & Shot Lists', 'On-Set Production Management', 'Narrative Storytelling', 'Sound & Lighting Design', 'Film Aesthetics'],
    duration: '14 Weeks',
    level: 'All Levels',
    iconName: 'Clapperboard',
    popular: true
  },
  {
    id: 'cinematography',
    title: 'Cinematography',
    track: 'art',
    shortDescription: 'Master camera movement, camera gear, lighting setups, and exposure geometry.',
    overview: 'The art of painting with light and motion. Gain hands-on mastery over professional cameras, lenses, lighting rigs, camera stabilization gear, and exposure control to create captivating cinematic visuals.',
    outcomes: [
      'Operate cinema camera systems and professional lens setups',
      'Design complex lighting setups for drama, interviews, and commercial sets',
      'Execute fluid camera movements using gimbals, dollies, and rigs',
      'Master lens selection, focal length dynamics, and depth-of-field control'
    ],
    careerOpportunities: [
      'Director of Photography (DP)',
      'Camera Operator',
      'Gaffer / Lighting Director',
      'Commercial Cinematographer'
    ],
    skillsGained: ['Camera Mechanics & Lenses', '3-Point Lighting & Mood', 'Composition & Camera Movement', 'Color Science & Log Profiles', 'Gimbal & Stabilization', 'Onset Safety'],
    duration: '12 Weeks',
    level: 'Intermediate',
    iconName: 'Camera'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    track: 'art',
    shortDescription: 'Craft seamless visual narratives, motion graphics, color grading, and sound design.',
    overview: 'Master post-production storytelling using industry-grade tools (Adobe Premiere Pro, DaVinci Resolve, After Effects). Learn rhythmic pacing, audio mixing, visual effects compositing, and professional color grading.',
    outcomes: [
      'Edit narrative films, commercials, music videos, and social content',
      'Execute professional color grading and LUT application in DaVinci Resolve',
      'Mix multi-track audio, sound FX, and dialogue cleanups',
      'Incorporate basic 2D motion graphics and title animations'
    ],
    careerOpportunities: [
      'Video Editor',
      'Post-Production Supervisor',
      'Colorist',
      'Content Creator / Reel Editor'
    ],
    skillsGained: ['Adobe Premiere Pro & DaVinci Resolve', 'Pacing & Narrative Cuts', 'Color Grading & Scopes', 'Sound Design & Audio Cleaning', 'Motion Graphics', 'Codec & Export Optimization'],
    duration: '10 Weeks',
    level: 'All Levels',
    iconName: 'Video',
    popular: true
  },
  {
    id: 'painting-drawing',
    title: 'Painting & Drawing',
    track: 'art',
    shortDescription: 'Develop visual fundamentals in traditional drawing, color theory, and digital painting.',
    overview: 'Explore fine art techniques and digital illustration. Master anatomy, perspective, light and shadow, value scales, and medium applications ranging from sketchwork to digital tablet painting.',
    outcomes: [
      'Create figurative and landscape artwork with precise perspective',
      'Master traditional mediums and modern digital painting software',
      'Understand color harmonies, values, and atmospheric lighting',
      'Build a strong fine art portfolio for exhibition or concept art'
    ],
    careerOpportunities: [
      'Digital Illustrator',
      'Concept Artist',
      'Fine Artist',
      'Visual Development Artist'
    ],
    skillsGained: ['Proportion & Perspective', 'Shading & Value Control', 'Color Theory & Mixing', 'Digital Tablet Painting', 'Figure Drawing', 'Portfolio Curation'],
    duration: '10 Weeks',
    level: 'Beginner',
    iconName: 'Brush'
  },
  {
    id: 'scriptwriting',
    title: 'Scriptwriting',
    track: 'art',
    shortDescription: 'Craft engaging screenplays, dialogue, character arcs, and narrative structures.',
    overview: 'Turn ideas into captivating screenplays. Learn 3-act story structure, character development, dialogue construction, scene subtext, and industry-standard script formatting using tools like Final Draft.',
    outcomes: [
      'Write feature-length screenplays, short film scripts, and pilot episodes',
      'Construct deep character arcs, conflict dynamics, and subtext',
      'Format screenplays to Hollywood industry standards',
      'Pitch concepts effectively to producers and studio executives'
    ],
    careerOpportunities: [
      'Screenwriter',
      'Script Consultant / Reader',
      'Content Writer',
      'Creative Writer for Media'
    ],
    skillsGained: ['3-Act Narrative Structure', 'Industry Script Formatting', 'Dialogue & Subtext', 'Character Arc Design', 'Pitch Deck Creation', 'Story Editing'],
    duration: '8 Weeks',
    level: 'All Levels',
    iconName: 'FileText'
  },
  {
    id: 'stage-act-production',
    title: 'Stage Act & Production',
    track: 'art',
    shortDescription: 'Perform with emotion, master stage presence, voice projection, and theatrical production.',
    overview: 'Discover the power of theatrical expression and live stage production. Develop acting techniques (Stanislavski, Meisner), voice control, body movement, stage management, and live theatrical lighting.',
    outcomes: [
      'Deliver emotionally authentic acting performances for stage and camera',
      'Master vocal projection, diction, and body physicalization',
      'Collaborate on live stage lighting, set production, and sound design',
      'Perform confidently in live ensemble theatrical productions'
    ],
    careerOpportunities: [
      'Stage / Screen Actor',
      'Theater Producer',
      'Stage Manager',
      'Performing Arts Coach'
    ],
    skillsGained: ['Acting Techniques & Monologues', 'Vocal Projection & Diction', 'Stage Movement & Blocking', 'Theater Set & Lighting Basics', 'Improv & Ensemble Work', 'Audition Preparation'],
    duration: '12 Weeks',
    level: 'All Levels',
    iconName: 'Theater'
  }
];
