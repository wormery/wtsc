import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wtsc/',
  title: 'WTSC',
  description: 'A solution of TS in CSS',
  themeConfig: {
    nav: [
      {
        text: '引导',
        link: '/guide/',
      },
    ],
    sidebar: [
      {
        text: '引导',
        link: '/guide/',
        children: [
          { text: '安装', link: '/guide/installation' },
          { text: '介绍', link: '/guide/introduction' },
          { text: 'wtsc实例', link: '/guide/defWTSC' },
          { text: '响应', link: '/guide/reactive' },
          { text: '更多', link: '/guide/more' },
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
