import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate Docs',
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/interstate-labs'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/+-i4dP7U2BggxMzAx'
    },
  ],
  sidebar: [
    {
      text: 'Intro',
      link: '/intro',
    },
    {
      text: 'For Validators',
      items: [
        {
          text: 'Benefits and Risks',
          link: '/validator/benefits-and-risks',
        },

        {
          text: 'Quickstart',
          link: '/validator/quickstart',
        },
        {
          text: 'Long Form Setup',
          link: '/validator/long-form-setup',
        },
        {
          text: 'How To Run Signer',
          link: '/validator/how-to-run-signer',
        }
      ]
    },
    {
      text: 'For Users',
      items: [
        {
          text: 'Quickstart',
          link: '/user/quickstart',
        },
        {
          text: 'API Specification',
          link: '/user/api-specification',
        },
      ]
    },
    {
      text: 'For Operators',
      items: [
        {
          text: 'Run Restaking Offchain (Karak, Eigenlayer, Symbiotic)',
          link: '/operator/run-restaking-offchain-module',
        },
      ]
    }
  ],
})
