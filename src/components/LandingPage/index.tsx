// src/components/LandingPage.tsx
import React from 'react'
import Image from 'next/image'

export interface LandingPageProps {
  data: {
    hero: {
      titleText1: string
      titleText2: string
      subtitle: string
      ctaText: string
      ctaLink: string
      heroImage: {
        url: string
        alt: string
      }
    }
    benefits: {
      title: string
      subtitle: string
      benefitImage: {
        url: string
        alt: string
      }
      benefitsList: Array<{
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
      <section className="bg-destructive text-white min-h-[700px] h-screen max-h-[900px] rounded-bl-[150px]">
        <div className="flex container px-4 sm:px-6 lg:px-8 pb-20 h-[100%]">
          <div className="items-center w-[100%]">
            <div className="flex relative justify-between z-40 w-[100%] top-[335px]">
              <h1 className="text-6xl lg:text-[65px] font-bold mb-6 leading-tight slide-in-left">
                {data.hero.titleText1}
              </h1>

              <div>
                <h1 className="text-4xl lg:text-[65px] font-bold mb-6 leading-tight slide-in-right">
                  {data.hero.titleText2}
                </h1>

                <p className="text-xl max-w-[390px] mb-8 opacity-90 fade-in-delay-1">
                  {data.hero.subtitle}
                </p>
                <a
                  href={data.hero.ctaLink}
                  className="bg-gray-800 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-700 inline-block rounded-full scale-in transition-transform hover:scale-105"
                >
                  {data.hero.ctaText}
                </a>
              </div>
            </div>
          </div>

          <div className="absolute z-30 top-0 ml-16">
            {data.hero.heroImage.url.endsWith('.svg') ? (
              <img
                src={data.hero.heroImage.url}
                alt={data.hero.heroImage.alt || 'Hero Image'}
                className="rounded-lg w-[904px] h-[888px] bounce-in"
              />
            ) : (
              <Image
                src={data.hero.heroImage.url}
                alt={data.hero.heroImage.alt || 'Hero Image'}
                width={904}
                height={888}
                className="rounded-lg bounce-in"
              />
            )}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-start">
            <div className="flex flex-col gap-5">
              <p className="uppercase text-xl text-accent font-bold">PRINCIPAIS BENEFÍCIOS</p>
              <h2 className="text-3xl lg:text-4xl text-destructive font-bold text-gray-900 mb-4 slide-up">
                {data.benefits.title}
              </h2>
              <p className="text-lg text-primary font-normal mb-8 fade-in-delay-1">
                {data.benefits.subtitle}
              </p>
            </div>

            <div className="relative">
              {/* Círculo central com logo */}
              <div className="mx-auto rounded-full flex items-center justify-center bounce-in">
                <Image
                  src={data.benefits.benefitImage.url}
                  alt={data.benefits.benefitImage.alt || 'Benefits Image'}
                  width={600}
                  height={600}
                  className="w-[600px] h-[600px]"
                />
              </div>

              {/* Features em círculo */}
              <div className="absolute inset-0">
                {data.benefits.benefitsList.map((feature, index) => {
                  const positionsByIndex = [
                    [50, 100],
                    [620, 100],
                    [650, 320],
                    [335, 550],
                    [0, 330],
                  ]

                  return (
                    <div
                      key={index}
                      className="absolute w-auto max-w-[185px] flex flex-col items-center justify-center text-center p-2"
                      style={{
                        left: `${positionsByIndex?.[index]?.[0]}px`,
                        top: `${positionsByIndex?.[index]?.[1]}px`,
                      }}
                    >
                      <span className="text-base font-semibold text-gray-700 leading-tight">
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
        <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 slide-up">
            {data.bottomSection.title}
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 fade-in-delay-1">
            {data.bottomSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg scale-in">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 pulse-grow"></div>
              <p className="text-gray-700 font-semibold">Reduza em até 50% o tempo de análise</p>
            </div>
            <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg scale-in float">
              <h3 className="text-2xl font-bold mb-2">+10.000</h3>
              <p className="opacity-90">empresas já transformaram seus resultados</p>
              <a
                href={data.bottomSection.ctaLink}
                className="mt-4 bg-white text-pink-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 inline-block transition-all hover:scale-105"
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
