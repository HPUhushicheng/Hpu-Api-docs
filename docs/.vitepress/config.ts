import { defineConfig } from 'vitepress'
// import { withPwa } from '@vite-pwa/vitepress'
import Container from 'markdown-it-container'
import Token from 'markdown-it/lib/token'

const currentYear = new Date().getFullYear()

export default // withPwa(
defineConfig({
  title: 'Hpu-Api开发者文档',
  lang: 'zh-CN',
  lastUpdated: true,
  // cleanUrls: 'without-subfolders',
  description:
    '开箱即用的河南理工大学教务请求，根据请求的接口逆向做的，接口仅供个人使用和学习，不得用于商业用途，仅做学习交流，违法使用请自行承担。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    /**
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.svg', color: '#8921ff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
     */
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(Container, 'theorem', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]
          const info = token.info.trim().slice(7).trim()
          if (token.nesting === 1) {
            const title = md.renderInline(info)
            return `<div class="theorem"><p class="title">${title}</p>\n`
          } else {
            return `</div>\n`
          }
        }
      })
    }
  },
  themeConfig: {
    logo: './logo.png',
    // smoothScroll: true,
    // nav: require("./nav"),
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>'
        },
        link: 'https://qm.qq.com/q/yCC5UYYnIs'
      },
      { icon: 'github', link: 'https://github.com/HPUhushicheng' }
    ],
    nav: [
      // Nav 1
      {
        text: '首页',
        link: '/'
      },
      {
        text: '代码说明',
        link: '/sentence/'
      },
      {
        text: '核心接口',
        link: '/core/'
      },
      // Nav 2
      {
        text: '相关',
        items: [
          { text: '电器开发部社团招新', link: 'https://baike.baidu.com/item/%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E5%99%A8%E5%BC%80%E5%8F%91%E9%83%A8/6646926' },
          { text: '关于我', link: 'https://github.com/HPUhushicheng/' }
        ]
      }
    ],
    footer: {
      message: '本文档遵循 MIT 协议',
      copyright: `© ${currentYear} MoeTeam All Rights Reserved.`
    },
    sidebar: [
      {
        text: '文档',
        // collapsed: false,
        items: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/introduce' }
        ]
      },
      {
        text: '代码说明',
        // collapsed: false,
        items: [
          { text: '代码说明', link: '/sentence/' },
          { text: '使用示例', link: '/sentence/demo' },
          { text: '部署实例', link: '/sentence/deploy' }
        ]
      },
      {
        text: '核心接口',
        // collapsed: false,
        items: [
          { text: '核心接口', link: '/core/' },
          { text: '接口定义', link: '/core/interface' }
        ]
      }
    ],
    editLink: {
      pattern:
        'https://github.com/HPUhushicheng/Hpu-Api-docs/edit',
      text: '本页内容有误？修改本页...'
    }
    // lastUpdated: "最后更新",

    // searchMaxSuggestoins: 10,
  }
})
// )
