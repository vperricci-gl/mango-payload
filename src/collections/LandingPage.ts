// src/collections/LandingPage.ts
import type { CollectionConfig } from 'payload'
import { FormBlock } from '../blocks/Form/config'

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
          name: 'titleText1',
          type: 'text',
          required: true,
          defaultValue: 'Transforme insights',
        },
        {
          name: 'titleText2',
          type: 'text',
          required: true,
          defaultValue: 'em métricas reais',
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
    // Benefícios Section
    {
      name: 'benefits',
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
          name: 'benefitImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'benefitsList',
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
              title: 'Medição contínua do tráfego e do comportamento do público',
            },
            {
              title: 'Captura precisa de impressões visíveis e tráfego qualificado',
            },
            {
              title: 'Integração perfeita com plataformas analíticas e simuladores OOH',
            },
            {
              title: 'Totalmente compatível com LGPD, com anonimização nativa de dados',
            },
            {
              title: 'Sensores inteligentes com baixo consumo de energia e manutenção mínima',
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
    // Form Section
    // {
    //   name: 'contactForm',
    //   type: 'group',
    //   fields: [
    //     {
    //       name: 'title',
    //       type: 'text',
    //       defaultValue: 'Entre em contato',
    //     },
    //     {
    //       name: 'subtitle',
    //       type: 'textarea',
    //       defaultValue: 'Preencha o formulário e entraremos em contato em breve.',
    //     },
    //     {
    //       name: 'form',
    //       type: 'blocks',
    //       blocks: [FormBlock],
    //       maxRows: 1,
    //     },
    //   ],
    // },
  ],
}
