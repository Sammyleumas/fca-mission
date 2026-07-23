import { WhyChooseItem, JourneyStep } from '../types';

export const ACADEMY_INFO = {
  name: 'Fusion Connect Academy',
  tagline: 'Where Technology Meets Creativity',
  email: 'fusionconnectacademy@gmail.com',
  phone: '+234 814 959 7924',
  whatsapp: 'https://wa.me/2348149597924',
  address: 'Fusion Connect Academy Campus, Tech & Arts District',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.726880016142!2d3.379205314770289!3d6.428055695349258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9ef!2sLagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng',
  stats: [
    { label: 'Active Students & Alumni', value: '1,200+' },
    { label: 'Specialized Track Courses', value: '12 Dual-Track' },
    { label: 'Industry Projects Built', value: '450+' },
    { label: 'Graduate Employment Rate', value: '94%' }
  ],
  about: {
    whoWeAre: 'Fusion Connect Academy is a premier dual-track educational institution founded on the belief that the future belongs to those who bridge the gap between technical engineering and creative artistic expression.',
    whyWeExist: 'Traditional education often separates technology from art. We exist to dissolve that boundary — preparing innovators, designers, developers, and creators who possess both deep technical proficiency and boundless artistic imagination.',
    whatMakesUsDifferent: 'We provide hands-on project-based mentorship from active industry professionals. Students don\'t just study theory; they build real portfolios, collaborate across tracks, and launch real-world digital and creative projects.'
  },
  mission: 'To empower the next generation of global innovators and creators by providing cutting-edge education at the convergence of technology and creative arts, fostering practical mastery, collaborative problem-solving, and lifelong career growth.',
  vision: 'To be the global benchmark institution where technological mastery and creative artistry converge, cultivating visionary thinkers who shape the digital and cultural landscape of tomorrow.'
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'practical-learning',
    title: 'Practical Learning',
    description: 'Immersive, hands-on studios where you spend 80% of your time executing real projects rather than sitting through lecture slides.',
    iconName: 'Wrench'
  },
  {
    id: 'industry-experts',
    title: 'Industry Experts',
    description: 'Learn directly from seasoned software engineers, art directors, filmmakers, and digital strategists working in top global firms.',
    iconName: 'Users'
  },
  {
    id: 'real-projects',
    title: 'Real Projects',
    description: 'Work on live client briefs, commercial films, and production applications that directly enhance your professional portfolio.',
    iconName: 'FolderCheck'
  },
  {
    id: 'career-development',
    title: 'Career Development',
    description: 'Personalized resume workshops, interview coaching, portfolio reviews, and direct connections with leading industry recruiters.',
    iconName: 'Briefcase'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Access state-of-the-art tech labs, generative AI tools, cinema camera rigs, and modern creative studio environments.',
    iconName: 'Lightbulb'
  },
  {
    id: 'creative-thinking',
    title: 'Creative Thinking',
    description: 'Nurture cross-disciplinary design thinking that combines logical problem-solving with expressive aesthetic storytelling.',
    iconName: 'Brain'
  },
  {
    id: 'technology-integration',
    title: 'Technology Integration',
    description: 'Seamlessly blend tech tools (code, AI, digital graphics) into creative arts workflows for groundbreaking outputs.',
    iconName: 'Layers'
  },
  {
    id: 'community-support',
    title: 'Community Support',
    description: 'Join a vibrant lifelong network of peers, mentors, alumni, and creative tech visionaries across both tracks.',
    iconName: 'HeartHandshake'
  }
];

export const STUDENT_JOURNEY: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Apply',
    description: 'Explore our technology and art tracks, consult with an admissions counselor, and submit your application.',
    iconName: 'FileCheck',
    highlight: 'Seamless Admissions'
  },
  {
    stepNumber: 2,
    title: 'Learn',
    description: 'Immerse in interactive live lectures, mentor-led code/art reviews, and foundational skill workshops.',
    iconName: 'GraduationCap',
    highlight: 'Hands-On Mentorship'
  },
  {
    stepNumber: 3,
    title: 'Build Projects',
    description: 'Collaborate with peers across Technology and Art tracks to engineer real-world software or direct narrative films.',
    iconName: 'Code2',
    highlight: 'Cross-Track Synergy'
  },
  {
    stepNumber: 4,
    title: 'Showcase Portfolio',
    description: 'Refine your personal showcase, polish your digital portfolio, and present at the Academy Innovation Expo.',
    iconName: 'Award',
    highlight: 'Industry Exposure'
  },
  {
    stepNumber: 5,
    title: 'Graduate',
    description: 'Receive your official Fusion Connect Academy Certification backed by practical project credentials.',
    iconName: 'Trophy',
    highlight: 'Recognized Credential'
  },
  {
    stepNumber: 6,
    title: 'Launch Career',
    description: 'Connect with our hiring partner network, land high-impact tech or creative roles, or launch your own studio.',
    iconName: 'Rocket',
    highlight: 'Career Acceleration'
  }
];

export const FAQS = [
  {
    question: 'Do I need prior experience in programming or art before applying?',
    answer: 'No! We offer beginner-friendly foundational modules in both tracks. All you need is passion, curiosity, and a commitment to learn.'
  },
  {
    question: 'Can I take courses in both Technology and Art tracks simultaneously?',
    answer: 'Yes! We actively encourage cross-track electives. Our curriculum is specifically built to enable web developers to learn design or film editors to learn AI automation.'
  },
  {
    question: 'Are classes held online or on-campus?',
    answer: 'We offer flexible learning options including full-time on-campus cohorts, hybrid learning, and self-paced online interactive evening options.'
  },
  {
    question: 'What kind of certificate will I receive upon completion?',
    answer: 'You will receive an official Fusion Connect Academy Certificate of Mastery along with a verified digital portfolio link detailing your completed projects.'
  }
];
