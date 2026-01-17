import type { Content } from '@/types'

export const content: Content = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },

  hero: {
    title: "Hello, I'm",
    subtitle: 'Regil.',
    paragrath:
      'Software Engineer focused on building modern, scalable, and production-ready web applications. Master’s degree in Software Engineering with hands-on experience in Full-Stack development and real-world projects.',
    viewWork: 'View My Work',
    downloadCV: 'Download CV.',
    image: '/image/regil.png',
  },

  about: {
    title: 'About Me',
    description:
      "I'm a Software Engineer with a Master’s degree in Software Engineering and over 2 years of experience building modern web applications. I specialize in Full-Stack development, performance optimization, and clean architecture, focusing on delivering reliable and scalable solutions.",
    journey: 'My Journey',
    journeyText:
      'I started my career as a frontend developer and evolved into Full-Stack development by working on real-world projects such as e-commerce platforms and business websites. Currently, I’m focused on strengthening backend systems, cloud deployment, and system design. My next step is to build AI-powered features and SaaS products, applying these technologies to real production scenarios.',
    sections: [
      {
        title: 'Full-Stack Development',
        description:
          'Experience across frontend and backend, building robust, scalable, and maintainable applications.',
        icon: 'FaCode',
      },
      {
        title: 'Design & UX',
        description:
          'Focus on intuitive interfaces and clean user experiences that convert and scale.',
        icon: 'FaPalette',
      },
      {
        title: 'Performance',
        description:
          'Continuous optimization to ensure fast, efficient, and reliable applications.',
        icon: 'FaRocket',
      },
      {
        title: 'Collaboration',
        description:
          'Strong communication and teamwork to deliver high-quality results.',
        icon: 'FaUsers',
      },
    ],
  },

  projects: {
    title: 'Projects',
    subtitle: 'Real-world applications built and deployed',
    filterAll: 'All',
    projects: [
      {
        category: 'Web',
        title: 'Apartment Remodeling Website',
        description:
          'Business website with modern UI, service cost calculator, and fully responsive design.',
        technologies: ['React 18', 'Vite', 'Swiper', 'HTML', 'CSS'],
        demo: 'https://remont-apartment.vercel.app/',
        code: 'https://github.com/regil2019/remont_apartment',
        image: '/image/remont-apartment.png',
      },
      {
        category: 'Web',
        title: 'Modern E-commerce Platform',
        description:
          'Complete e-commerce platform with product management, admin panel, and payment integration.',
        technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JavaScript'],
        demo: 'https://ecommerce-platform-drab.vercel.app',
        code: 'https://github.com/regil2019/ecommerce-platform.git',
        image: '/image/ecommerce-bg.png',
      },
    ],
  },

  skills: {
    title: 'My Skills',
    subtitle:
      'Technologies and tools I use to build efficient and scalable solutions.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    skills: [
      { name: 'React', percentage: 70 },
      { name: 'Next.js', percentage: 65 },
      { name: 'TypeScript', percentage: 50 },
      { name: 'Tailwind CSS', percentage: 60 },
      { name: 'Node.js', percentage: 60 },
      { name: 'Python', percentage: 55 },
      { name: 'PostgreSQL', percentage: 50 },
      { name: 'MongoDB', percentage: 50 },
      { name: 'Git', percentage: 80 },
      { name: 'Docker', percentage: 40 },
      { name: 'CI/CD', percentage: 45 },
      { name: 'AWS', percentage: 40 },
    ],
  },

  contact: {
    title: 'Get In Touch',
    subtitle:
      'Interested in working together? Let’s discuss your project and how I can help.',
    infoTitle: 'Contact Information',
    infoText:
      'I’m open to freelance work, collaborations, and long-term opportunities.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    whatsapp: 'WhatsApp',
    chatWithMe: 'Chat with me',
    formTitle: 'Send a Message',
    name: 'Name *',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'your@email.com',
    subject: 'Subject *',
    subjectPlaceholder: 'Message subject',
    message: 'Message *',
    messagePlaceholder:
      'Tell me about your project or how I can help you...',
    send: 'Send Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Please fill in all fields.',
  },

  footer: {
    copyright: 'Regil Portfolio. All rights reserved.',
  },
}
