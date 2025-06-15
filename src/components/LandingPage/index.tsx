// src/components/LandingPage.tsx
import React from 'react'
import Image from 'next/image'

export interface LandingPageProps {
  data: {
    hero: {
      title: string
      subtitle: string
      ctaText: string
      ctaLink: string
      heroImage: {
        url: string
        alt: string
      }
    }
    features: {
      title: string
      subtitle: string
      featuresList: Array<{
        title: string
        description: string
        icon: string
      }>
    }
    bottomSection: {
      title: string
      subtitle: string
      backgroundImage?: {
        url: string
        alt: string
      }
      ctaText: string
      ctaLink: string
    }
  }
}

export const LandingPage: React.FC<LandingPageProps> = ({ data }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xl mb-8 opacity-90">{data.hero.subtitle}</p>
              <a
                href={data.hero.ctaLink}
                className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 inline-block"
              >
                {data.hero.ctaText}
              </a>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={data.hero.heroImage.url}
                  alt={data.hero.heroImage.alt || 'Hero Image'}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-400 rounded-lg opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute top-10 right-10 w-8 h-8 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {data.features.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">{data.features.subtitle}</p>
            </div>

            <div className="relative">
              {/* Círculo central com logo */}
              <div className="w-48 h-48 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold text-pink-500">mangooh</span>
                  <p className="text-sm text-gray-600 mt-2">ECOSSISTEMA</p>
                </div>
              </div>

              {/* Features em círculo */}
              <div className="absolute inset-0">
                {data.features.featuresList.map((feature, index) => {
                  const angle = (index * 360) / data.features.featuresList.length
                  const radius = 140
                  const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius
                  const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius

                  return (
                    <div
                      key={index}
                      className="absolute w-24 h-24 bg-white rounded-full shadow-md flex flex-col items-center justify-center text-center p-2"
                      style={{
                        left: `calc(50% + ${x}px - 48px)`,
                        top: `calc(50% + ${y}px - 48px)`,
                      }}
                    >
                      <span className="text-2xl mb-1">{feature.icon}</span>
                      <span className="text-xs font-semibold text-gray-700 leading-tight">
                        {feature.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: data.bottomSection.backgroundImage
            ? `url(${data.bottomSection.backgroundImage.url})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {data.bottomSection.title}
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">{data.bottomSection.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-700 font-semibold">Reduza em até 50% o tempo de análise</p>
            </div>
            <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">+10.000</h3>
              <p className="opacity-90">empresas já transformaram seus resultados</p>
              <a
                href={data.bottomSection.ctaLink}
                className="mt-4 bg-white text-pink-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 inline-block"
              >
                {data.bottomSection.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
