import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wtsc/',
  title: 'WTSC docs',
  description: 'A solution of TS in CSS',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
        children: [
          { text: '安装', link: '/guide/installation' },
          { text: '介绍', link: '/guide/introduction' },
        ],
      },
    ],
    // 发布后开启
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name',
    //   searchParameters: {
    //     facetFilters: ['tags:guide,api'],
    //   },
    // },
  },
  markdown: {
    lineNumbers: true,
  },
})
