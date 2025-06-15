// src/collections/LandingPage.ts
import type { CollectionConfig } from 'payload'

export const LandingPage: CollectionConfig = {
  slug: 'landing-page',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Landing Page',
    },
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Transforme insights em métricas reais',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: 'Sua estratégia de OKR e acompanhamento de resultados em tempo real.',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Comece sua transformação',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Features Section
    {
      name: 'features',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'O coração do OKR bate dentro do Mangooh',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: 'Gerir metas deixou de ser tão complexo como imaginávamos na energia.',
        },
        {
          name: 'featuresList',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'icon',
              type: 'text', // Para classes de ícones ou emojis
            },
          ],
          defaultValue: [
            {
              title: 'Produtividade aumenta',
              description: 'Aumento significativo na produtividade da equipe',
              icon: '📈',
            },
            {
              title: 'Comunicação eficiente',
              description: 'Melhora na comunicação interna',
              icon: '💬',
            },
            {
              title: 'Colaboração aumenta',
              description: 'Maior colaboração entre departamentos',
              icon: '🤝',
            },
            {
              title: 'Foco nos resultados',
              description: 'Foco direcionado para resultados mensuráveis',
              icon: '🎯',
            },
          ],
        },
      ],
    },
    // Bottom Section
    {
      name: 'bottomSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Uma tecnologia projetada para o mundo real',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: 'Simples, eficiente e que gera resultado.',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Comece agora sua transformação digital',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
