import { FaArrowRight, FaDownload } from 'react-icons/fa'

type HeroContent = {
  title: string
  subtitle: string
  paragrath: string
  viewWork: string
  downloadCV: string
  image: string
}

type Props = {
  content: HeroContent
  currentLanguage?: 'pt' | 'en' | 'ru'
}

const Hero = ({ content, currentLanguage }: Props) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
      aria-labelledby="hero-title"
      role="banner"
    >
      <div className="flex-1 flex flex-col justify-center items-start gap-6 pl-0 md:pl-16 md:mt-10">
        <h1 id="hero-title" className="text-3xl md:text-6xl font-extrabold text-white mb-4 leading-tight max-w-sm">
          {content.title}
          <br />
          <span className="text-indigo-400">{content.subtitle}</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-6">
          {content.paragrath}
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow transition"
            aria-label={`View my projects - ${content.viewWork}`}
          >
            <FaArrowRight aria-hidden="true" />
            {content.viewWork}
          </a>

          {/* ✅ Botão funcional para descarregar o CV */}
          <a
            href={
              currentLanguage === 'pt' ? '/CV/CV_REGIL_ENG.pdf' :
              currentLanguage === 'en' ? '/CV/CV_REGIL_ENG.pdf' :
              '/CV/CV_REGIL_ENG.pdf' // Default to Portuguese if language not specified or Russian
            }
            download
            className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-gray-200 transition"
            aria-label={`Download my CV - ${content.downloadCV}`}
          >
            <FaDownload aria-hidden="true" />
            {content.downloadCV}
          </a>
        </div>
      </div>

          <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
            <div className="relative">
              <img
                src={content.image}
                alt="Profile picture of Regil Daniel"
                loading="lazy"
                className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                width="256"
                height="256"
                aria-label="Profile picture"
              />
              <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-30 blur-2xl" aria-hidden="true"></div>
            </div>
          </div>
    </section>
  )
}

export default Hero
