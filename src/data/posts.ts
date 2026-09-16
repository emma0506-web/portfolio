export interface PostBlock {
  type: 'h2' | 'p' | 'code' | 'ul'
  text?: string
  items?: string[]
}

export interface Post {
  id: string
  title: string
  date: string
  summary: string
  blocks: PostBlock[]
}

export const posts: Post[] = [
  {
    id: 'qiankun-micro-frontend',
    title: '从 0 到 1 落地 qiankun 微前端：多团队并行开发的坑与解',
    date: '2026-08-12',
    summary: '当权益专区、电商、本地生活由不同团队维护，单体仓库的耦合让发布互相阻塞。我是如何用 qiankun 拆开的。',
    blocks: [
      {
        type: 'p',
        text: '业务扩张后，一个仓库里塞进了权益、电商、本地生活三条业务线，任何一次发布都要等所有人就绪，发布窗口越排越晚。微前端能把"一个巨石应用"切成"主应用 + 独立子应用"，各自开发、各自部署。',
      },
      { type: 'h2', text: '主子应用拆分' },
      {
        type: 'p',
        text: '主应用负责路由分发与全局状态共享，子应用独立开发部署。注册方式如下：',
      },
      {
        type: 'code',
        text:
          "import { registerMicroApps, start } from 'qiankun';\n\nregisterMicroApps([\n  {\n    name: 'equity',\n    entry: '//localhost:7101',\n    container: '#subapp',\n    activeRule: '/equity',\n  },\n]);\n\nstart();",
      },
      { type: 'h2', text: '踩过的坑' },
      {
        type: 'ul',
        items: [
          '样式隔离：开启 strictStyleIsolation，避免子应用样式互相污染',
          '全局状态：用主应用下发的 store，子应用只读不写，避免状态错乱',
          '公共依赖：把 React / lodash 等抽成 externals，减小子应用包体',
        ],
      },
      {
        type: 'p',
        text: '落地后，5 条业务线并行开发，需求响应周期从按周排期缩短到按天，发布也不再互相阻塞。',
      },
    ],
  },
  {
    id: 'performance-optimization',
    title: '首屏从 2.8s 到 0.6s：我踩过的性能优化全流程',
    date: '2026-07-03',
    summary: '一次真实的首屏优化记录：定位瓶颈、分步施策、用数据闭环验证结果。',
    blocks: [
      { type: 'h2', text: '定位瓶颈' },
      {
        type: 'p',
        text: '先用 Lighthouse 跑分，再接自研前端监控，确认首屏瓶颈在 JS 体积过大与接口串行请求两块。',
      },
      { type: 'h2', text: '优化手段' },
      {
        type: 'ul',
        items: [
          '路由懒加载 + 组件异步加载，首屏只加载必要代码',
          '图片懒加载 + 骨架屏，消除白屏等待感',
          'Webpack 分包 + Tree Shaking，打包体积减少 35%',
          'CDN 缓存静态资源，配合强缓存策略',
        ],
      },
      {
        type: 'code',
        text:
          "export default {\n  optimization: {\n    splitChunks: { chunks: 'all' },\n  },\n  build: {\n    rollupOptions: {\n      output: { manualChunks: { vendor: ['react', 'react-dom'] } },\n    },\n  },\n};",
      },
      { type: 'h2', text: '结果' },
      {
        type: 'p',
        text: '首屏加载从 2.8s 降到 0.6s，白屏时间缩短 50%，核心页面错误率稳定在 0.1% 以下。性能优化不是一次性的，要接监控做长期闭环。',
      },
    ],
  },
]
