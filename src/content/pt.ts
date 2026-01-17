import type { Content } from '@/types'

export const content: Content = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Competências',
    contact: 'Contacto',
  },

  hero: {
    title: 'Olá, eu sou',
    subtitle: 'Regil.',
    paragrath:
      'Engenheiro de Software focado na criação de aplicações web modernas, escaláveis e prontas para produção. Mestre em Engenharia de Software, com experiência prática em desenvolvimento Full Stack e projetos reais.',
    viewWork: 'Ver Projetos',
    downloadCV: 'Descarregar CV',
    image: '/image/regil.png',
  },

  about: {
    title: 'Sobre Mim',
    description:
      'Sou Engenheiro de Software com mestrado em Engenharia de Software e mais de 2 anos de experiência no desenvolvimento de aplicações web modernas. Trabalho como Full Stack, com foco em performance, arquitetura limpa e soluções escaláveis.',
    journey: 'O Meu Percurso',
    journeyText:
      'Iniciei a minha carreira como desenvolvedor frontend e evoluí para Full Stack ao trabalhar em projetos reais, como plataformas de e-commerce e websites empresariais. Atualmente, foco-me em backend, cloud e arquitetura de sistemas, com planos de aplicar Inteligência Artificial e desenvolver produtos SaaS.',
    sections: [
      {
        title: 'Desenvolvimento Full Stack',
        description:
          'Experiência completa em frontend e backend, criando aplicações robustas e escaláveis.',
        icon: 'FaCode',
      },
      {
        title: 'Design & UX',
        description:
          'Criação de interfaces intuitivas e experiências de utilizador claras e eficazes.',
        icon: 'FaPalette',
      },
      {
        title: 'Performance',
        description:
          'Otimização contínua para garantir aplicações rápidas e eficientes.',
        icon: 'FaRocket',
      },
      {
        title: 'Colaboração',
        description:
          'Boa comunicação e trabalho em equipa para entregar resultados de qualidade.',
        icon: 'FaUsers',
      },
    ],
  },

  projects: {
    title: 'Projetos',
    subtitle: 'Projetos reais desenvolvidos e publicados',
    filterAll: 'Todos',
    projects: [
      {
        category: 'Web',
        title: 'Website de Remodelação de Apartamentos',
        description:
          'Website empresarial com design moderno, calculadora de custos de serviços e layout totalmente responsivo.',
        technologies: ['React 18', 'Vite', 'Swiper', 'HTML', 'CSS'],
        demo: 'https://remont-apartment.vercel.app/',
        code: 'https://github.com/regil2019/remont_apartment',
        image: '/image/remont-apartment.png',
      },
      {
        category: 'Web',
        title: 'Plataforma de E-commerce Moderna',
        description:
          'Plataforma completa de e-commerce com gestão de produtos, painel administrativo e integração de pagamentos.',
        technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JavaScript'],
        demo: 'https://ecommerce-platform-drab.vercel.app',
        code: 'https://github.com/regil2019/ecommerce-platform.git',
        image: '/image/ecommerce-bg.png',
      },
    ],
  },

  skills: {
    title: 'As Minhas Competências',
    subtitle:
      'Tecnologias e ferramentas que utilizo para criar soluções eficientes e escaláveis.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
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
    title: 'Contacto',
    subtitle:
      'Interessado em trabalhar comigo? Vamos falar sobre o seu projeto.',
    infoTitle: 'Informações de Contacto',
    infoText:
      'Estou disponível para trabalhos freelance, colaborações e oportunidades de longo prazo.',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    whatsapp: 'WhatsApp',
    chatWithMe: 'Falar comigo',
    formTitle: 'Enviar Mensagem',
    name: 'Nome *',
    namePlaceholder: 'O seu nome completo',
    emailPlaceholder: 'seu@email.com',
    subject: 'Assunto *',
    subjectPlaceholder: 'Assunto da mensagem',
    message: 'Mensagem *',
    messagePlaceholder:
      'Fale-me sobre o seu projeto ou como posso ajudar...',
    send: 'Enviar Mensagem',
    successMessage: 'Mensagem enviada com sucesso!',
    errorMessage: 'Por favor, preencha todos os campos.',
  },

  footer: {
    copyright: 'Portfólio Regil. Todos os direitos reservados.',
  },
}
