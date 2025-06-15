import { LandingPage, LandingPageProps } from '../../components/LandingPage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function getLandingPageData(): Promise<LandingPageProps> {
  try {
    const payload = await getPayload({ config: configPromise })

    // Verificar se a coleção existe e buscar dados
    const result = await payload.find({
      collection: 'landing-page',
      limit: 1,
      depth: 2, // Garantir que os relacionamentos sejam carregados
    })

    const doc = result.docs[0] as LandingPageProps['data']

    if (!doc) {
      console.warn('Nenhum documento encontrado na coleção landing-page')
      throw new Error('Landing page data not found')
    }

    return {
      data: {
        hero: doc.hero,
        bottomSection: doc.bottomSection,
        features: doc.features,
      },
    }
  } catch (error) {
    console.error('Error fetching landing page data:', error)

    return {
      data: {
        hero: {
          title: 'Transforme insights em métricas reais errored',
          subtitle: 'Sua estratégia de OKR e acompanhamento de resultados em tempo real.',
          ctaText: 'Comece sua transformação',
          ctaLink: '#',
          heroImage: {
            url: '/placeholder-hero.jpg',
            alt: 'Hero Image',
          },
        },
        features: {
          title: 'O coração do OKR bate dentro do Mangooh',
          subtitle: 'Gerir metas deixou de ser tão complexo como imaginávamos na energia.',
          featuresList: [],
        },
        bottomSection: {
          title: 'Uma tecnologia projetada para o mundo real',
          subtitle: 'Simples, eficiente e que gera resultado.',
          ctaText: 'Comece agora',
          ctaLink: '#',
        },
      },
    }
  }
}

export default async function Home() {
  const landingPageData = await getLandingPageData()

  return <LandingPage {...landingPageData} />
}
