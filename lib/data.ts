import { Project, TechStack } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Store',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration',
    longDescription: 'A comprehensive e-commerce solution built with Next.js and TypeScript, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    features: [
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Advanced product filtering and search',
      'Responsive admin dashboard'
    ],
    image: '/images/ecommerce.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    category: 'web'
  },
  {
    id: '2',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by OpenAI GPT-4 with context-aware responses',
    longDescription: 'An advanced AI chatbot leveraging OpenAI\'s GPT-4 API with conversation history, context awareness, and natural language processing capabilities.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'React', 'Tailwind CSS', 'Vercel AI SDK'],
    features: [
      'Context-aware conversations',
      'Real-time streaming responses',
      'Conversation history management',
      'Custom personality and tone settings'
    ],
    image: '/images/chatbot.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
    category: 'ai'
  },
  {
    id: '3',
    title: 'E-commerce Store with AI Chatbot',
    description: 'Advanced e-commerce platform with integrated AI shopping assistant',
    longDescription: 'A next-generation e-commerce platform that combines traditional shopping features with an AI-powered shopping assistant to help customers find products and answer questions.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'AI-powered product recommendations',
      'Natural language product search',
      'Automated customer support',
      'Personalized shopping experience'
    ],
    image: '/images/ecommerce-ai.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-ai',
    category: 'web'
  },
  {
    id: '4',
    title: 'Connect-4 Game',
    description: 'Interactive Connect-4 game with AI opponent and multiplayer support',
    longDescription: 'A fully functional Connect-4 game featuring both single-player mode with AI opponent and real-time multiplayer capabilities.',
    techStack: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Tailwind CSS'],
    features: [
      'Single-player vs AI with multiple difficulty levels',
      'Real-time multiplayer mode',
      'Game state persistence',
      'Animated game pieces and win detection'
    ],
    image: '/images/connect4.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/connect4',
    category: 'game'
  },
  {
    id: '5',
    title: 'Nexus Noir',
    description: 'Full-stack social media application with real-time updates and user interactions',
    longDescription: 'A modern social media platform featuring real-time posts, likes, comments, user profiles, and friend connections with a focus on performance and user experience.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'WebSockets'],
    features: [
      'Real-time post updates and notifications',
      'User authentication and profiles',
      'Like, comment, and share functionality',
      'Image upload and media gallery'
    ],
    image: '/images/screenshots/nexus-noir.png',
    liveUrl: 'https://nexus-noir.vercel.app/',
    githubUrl: 'https://github.com/bigdg14/nexus-noir',
    category: 'social'
  }
];

export const techStack: TechStack[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'HTML5', icon: '🌐', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { name: 'Bootstrap', icon: '🅱️', category: 'frontend' },
  { name: 'Material UI', icon: '🎯', category: 'frontend' },
  { name: 'jQuery', icon: '💎', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'PHP', icon: '🐘', category: 'backend' },
  { name: 'C#', icon: '#️⃣', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'MySQL', icon: '🐬', category: 'database' },

  // Cloud & DevOps
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Azure', icon: '☁️', category: 'tools' },
  { name: 'Linux', icon: '🐧', category: 'tools' },
  { name: 'Ubuntu', icon: '🟠', category: 'tools' },

  // AI & Data Science
  { name: 'OpenAI', icon: '🤖', category: 'tools' },
  { name: 'Meta Llama', icon: '🦙', category: 'tools' },
  { name: 'Hugging Face', icon: '🤗', category: 'tools' },
  { name: 'Pandas', icon: '🐼', category: 'tools' },
  { name: 'Matplotlib', icon: '📊', category: 'tools' },
  { name: 'Seaborn', icon: '📈', category: 'tools' },
  { name: 'Tableau', icon: '📉', category: 'tools' },

  // Design Tools
  { name: 'Figma', icon: '🎨', category: 'tools' },
  { name: 'Adobe XD', icon: '🎨', category: 'tools' },
  { name: 'Photoshop', icon: '🖼️', category: 'tools' },
  { name: 'Canva', icon: '🎨', category: 'tools' },

  // Development Tools
  { name: 'Git', icon: '🔀', category: 'tools' },
  { name: 'GitHub', icon: '🐙', category: 'tools' },
  { name: 'Bitbucket', icon: '🪣', category: 'tools' },
  { name: 'VS Code', icon: '💻', category: 'tools' },
  { name: 'Jira', icon: '📋', category: 'tools' },
  { name: 'WordPress', icon: '📝', category: 'tools' },
];
