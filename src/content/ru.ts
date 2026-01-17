import type { Content } from '@/types'

export const content: Content = {
  nav: {
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Проекты',
    skills: 'Навыки',
    contact: 'Контакты',
  },

  hero: {
    title: 'Привет, я',
    subtitle: 'Regil.',
    paragrath:
      'Инженер-программист, специализирующийся на создании современных, масштабируемых и готовых к продакшену веб-приложений. Магистр программной инженерии с практическим опытом Full Stack разработки и реальных проектов.',
    viewWork: 'Посмотреть проекты',
    downloadCV: 'Скачать CV',
    image: '/image/regil.png',
  },

  about: {
    title: 'Обо мне',
    description:
      'Я инженер-программист с магистерской степенью в области программной инженерии и более чем 2-летним опытом разработки современных веб-приложений. Специализируюсь на Full Stack разработке, оптимизации производительности и чистой архитектуре.',
    journey: 'Мой путь',
    journeyText:
      'Я начал свою карьеру как frontend-разработчик и вырос до Full Stack, работая над реальными проектами, включая e-commerce платформы и бизнес-сайты. В настоящее время я углубляю знания в backend-разработке, облачных технологиях и архитектуре систем. Следующий шаг — внедрение AI-решений и разработка SaaS-продуктов для реальных задач.',
    sections: [
      {
        title: 'Full Stack разработка',
        description:
          'Опыт работы с frontend и backend, создание масштабируемых и поддерживаемых приложений.',
        icon: 'FaCode',
      },
      {
        title: 'Дизайн и UX',
        description:
          'Создание понятных интерфейсов и качественного пользовательского опыта.',
        icon: 'FaPalette',
      },
      {
        title: 'Производительность',
        description:
          'Постоянная оптимизация для быстроты, эффективности и стабильности приложений.',
        icon: 'FaRocket',
      },
      {
        title: 'Командная работа',
        description:
          'Эффективное взаимодействие и коммуникация для достижения качественных результатов.',
        icon: 'FaUsers',
      },
    ],
  },

  projects: {
    title: 'Проекты',
    subtitle: 'Реальные приложения, разработанные и опубликованные',
    filterAll: 'Все',
    projects: [
      {
        category: 'Web',
        title: 'Сайт по ремонту квартир',
        description:
          'Корпоративный сайт с современным дизайном, калькулятором стоимости услуг и адаптивной версткой.',
        technologies: ['React 18', 'Vite', 'Swiper', 'HTML', 'CSS'],
        demo: 'https://remont-apartment.vercel.app/',
        code: 'https://github.com/regil2019/remont_apartment',
        image: '/image/remont-apartment.png',
      },
      {
        category: 'Web',
        title: 'Современная E-commerce платформа',
        description:
          'Полнофункциональная e-commerce платформа с управлением товарами, админ-панелью и интеграцией платежей.',
        technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JavaScript'],
        demo: 'https://ecommerce-platform-drab.vercel.app',
        code: 'https://github.com/regil2019/ecommerce-platform.git',
        image: '/image/ecommerce-bg.png',
      },
    ],
  },

  skills: {
    title: 'Мои навыки',
    subtitle:
      'Технологии и инструменты, которые я использую для создания масштабируемых решений.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Инструменты',
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
    title: 'Связаться со мной',
    subtitle:
      'Заинтересованы в сотрудничестве? Давайте обсудим ваш проект.',
    infoTitle: 'Контактная информация',
    infoText:
      'Открыт для фриланса, сотрудничества и долгосрочных предложений.',
    email: 'Email',
    phone: 'Телефон',
    location: 'Локация',
    whatsapp: 'WhatsApp',
    chatWithMe: 'Написать мне',
    formTitle: 'Отправить сообщение',
    name: 'Имя *',
    namePlaceholder: 'Ваше полное имя',
    emailPlaceholder: 'your@email.com',
    subject: 'Тема *',
    subjectPlaceholder: 'Тема сообщения',
    message: 'Сообщение *',
    messagePlaceholder:
      'Расскажите о вашем проекте или чем я могу помочь...',
    send: 'Отправить сообщение',
    successMessage: 'Сообщение успешно отправлено!',
    errorMessage: 'Пожалуйста, заполните все поля.',
  },

  footer: {
    copyright: 'Портфолио Regil. Все права защищены.',
  },
}
