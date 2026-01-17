import React from 'react';
import { Helmet } from 'react-helmet';
import type { Content } from '@/types';

interface SEOProps {
  content: Content;
  currentLanguage: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ content, currentLanguage, url }) => {
  const image = content.hero?.image || '/image/regil.png';
  const fullUrl = url || 'https://regil-daniel-portfolio.vercel.app/';

  // Language-specific meta tags
  const getLanguageMeta = () => {
    switch(currentLanguage) {
      case 'pt':
        return {
          title: "Regil Daniel | Portfólio de Engenheiro de Software",
          description: "Engenheiro de Software focado na criação de aplicações web modernas, escaláveis e prontas para produção. Desenvolvedor Full Stack com experiência em React, Next.js, Node.js e soluções de IA."
        };
      case 'ru':
        return {
          title: "Регил Даниэль | Портфолио инженера-программиста",
          description: "Инженер-программист, специализирующийся на создании современных, масштабируемых и готовых к продакшену веб-приложений. Full Stack разработчик с опытом работы в React, Next.js, Node.js и решениях на основе ИИ."
        };
      default: // English
        return {
          title: "Regil Daniel | Software Engineer Portfolio",
          description: "Software Engineer focused on building modern, scalable, and production-ready web applications. Full Stack Developer with expertise in React, Next.js, Node.js, and AI solutions."
        };
    }
  };

  const langMeta = getLanguageMeta();

  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>{langMeta.title}</title>
      <meta name="description" content={langMeta.description} />
      <meta name="keywords" content="Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, AI Solutions, Web Development, Portfolio, Regil Daniel" />
      <meta name="author" content="Regil Daniel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4f46e5" />

      {/* OpenGraph / Facebook */}
      <meta property="og:title" content={langMeta.title} />
      <meta property="og:description" content={langMeta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullUrl + image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Regil Daniel Portfolio" />
      <meta property="og:locale" content={currentLanguage === 'pt' ? 'pt_PT' : currentLanguage === 'ru' ? 'ru_RU' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={langMeta.title} />
      <meta name="twitter:description" content={langMeta.description} />
      <meta name="twitter:image" content={fullUrl + image} />
      <meta name="twitter:site" content="@regil_daniel" />
      <meta name="twitter:creator" content="@regil_daniel" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Regil Daniel",
            "url": "${fullUrl}",
            "image": "${fullUrl + image}",
            "sameAs": [
              "https://github.com/regil2019",
              "https://linkedin.com/in/regil",
              "https://wa.me/+79197250946"
            ],
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": "${langMeta.description.replace(/"/g, '\\"')}",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Engineer"
            },
            "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "AI Solutions", "Web Development", "Full Stack Development"]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
