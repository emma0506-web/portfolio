export interface Metric {
  label: string
  value: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  name: string
  role: string
  period: string
  tags: string[]
  summary: string
  highlights: string[]
  metrics: Metric[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'equity-platform',
    name: '千万级权益平台前端架构重构',
    role: '高级前端开发工程师',
    period: '2022.01 – 至今',
    tags: ['React', 'TypeScript', 'qiankun', 'Webpack', '微前端'],
    summary:
      '主导运营商级权益生态核心前端，承载千万级用户访问、日活峰值 200 万+，覆盖权益专区、秒杀、本地生活等多业态。',
    highlights: [
      '基于 React + TypeScript 搭建 40+ 通用组件库，代码复用率提升 60%',
      '引入 qiankun 微前端，拆分 20+ 业务模块，5 条业务线并行开发，需求响应周期缩短 40%',
      '首屏加载 2.8s → 0.6s（路由懒加载 + 虚拟滚动 + CDN 缓存），错误率稳定 < 0.1%',
      '设计 CSP / XSS / CSRF 安全方案，助力平台通过等保 2.0 三级认证',
    ],
    metrics: [
      { label: '首屏加载', value: '2.8s → 0.6s' },
      { label: '代码复用率', value: '+60%' },
      { label: '需求响应', value: '-40%' },
      { label: '日活峰值', value: '200万+' },
    ],
  },
  {
    id: 'perf-system',
    name: '前端性能与工程化体系',
    role: '前端技术负责人',
    period: '2020 – 2022',
    tags: ['Vue', 'Webpack', '工程化', '性能优化'],
    summary:
      '在多个中后台与 C 端项目中建立组件化与性能优化标准，推动团队研发效率与线上质量双提升。',
    highlights: [
      '主导前端基础组件库，封装通用业务组件与工具函数，显著减少重复代码',
      '推动 ESLint + Prettier 落地，BUG 发生率降低 70%，部署效率提升 50%',
      '虚拟滚动 / 图片懒加载 / 防抖节流，长列表滚动帧率稳定 60fps',
    ],
    metrics: [
      { label: 'BUG 率', value: '-70%' },
      { label: '部署效率', value: '+50%' },
      { label: '长列表帧率', value: '60fps' },
    ],
  },
  {
    id: 'ai-inspector',
    name: '前端 + AI 可视化巡检平台',
    role: '前端开发',
    period: '2023 – 至今',
    tags: ['WebSocket', '可视化编排', '前端 + AI'],
    summary:
      '构建自动化测试脚本的可视化编排系统，连接 AI 巡检能力，支撑测试人员低代码生成巡检脚本。',
    highlights: [
      'WebSocket 远程浏览器控制，服务端 / 浏览器双向通信，兼容中文输入法',
      '拖拽式脚本编排引擎（10+ 动作节点），图形化编辑与后端数据结构双向转换',
      '截图选区标注，支撑视觉检测，沉淀巡检异常知识库',
    ],
    metrics: [
      { label: '动作节点', value: '10+' },
      { label: '交互链路', value: '端到端' },
    ],
  },
  {
    id: 'flow-grid',
    name: 'flow-grid · 零依赖响应式瀑布流引擎',
    role: '作者 / 开源维护',
    period: '2026',
    tags: ['TypeScript', '开源', '瀑布流', 'Vitest', '零依赖'],
    summary:
      '从工作中的瀑布流实战抽象出的通用布局引擎：纯函数核心算法 + 框架无关的 DOM 渲染器，支持响应式列数、等比缩放、最短列优先布局。',
    highlights: [
      '纯函数 computeLayout（最短列优先算法），框架无关、易测试',
      '原生 DOM 渲染器 + ResizeObserver，容器宽度变化实时重排',
      'Vitest 12 例单元测试全过，GitHub Actions 自动 test + build',
      'README 含完整 API 文档与算法说明，可交互在线 Demo',
    ],
    metrics: [
      { label: '运行时依赖', value: '0' },
      { label: '单元测试', value: '12 例全过' },
      { label: '产物', value: 'ESM+CJS+d.ts' },
    ],
    links: [
      { label: '查看在线 Demo', url: '/flow-grid/' },
      { label: 'GitHub Pages', url: 'https://emma0506-web.github.io/flow-grid/' },
      { label: '源码仓库', url: 'https://github.com/emma0506-web/flow-grid' },
    ],
  },
  {
    id: 'perf-playground',
    name: 'perf-playground · 前端性能优化实验室',
    role: '作者 / 开源维护',
    period: '2026',
    tags: ['React', 'TypeScript', '性能优化', 'Vite', '零后端'],
    summary:
      '把虚拟滚动、防抖/节流、图片懒加载等高频优化手段做成可交互、实时看数据的演示站，源自千万级金融前端首屏优化的实战沉淀。',
    highlights: [
      '虚拟列表：10 万条数据下对比全量渲染与虚拟滚动的 DOM 节点数与 FPS',
      '防抖/节流实验室：同一输入框实时对比 raw / debounce / throttle 触发计数',
      '图片懒加载：IntersectionObserver 懒加载 vs 全量加载，实时统计已加载数量',
      '自研 useFps hook 基于 requestAnimationFrame 测实时帧率与掉帧',
    ],
    metrics: [
      { label: '交互实验', value: '3 个' },
      { label: '运行时依赖', value: '0' },
      { label: '构建', value: 'Vite' },
    ],
    links: [
      { label: '查看在线 Demo', url: '/perf-playground/' },
      { label: 'GitHub Pages', url: 'https://emma0506-web.github.io/perf-playground/' },
      { label: '源码仓库', url: 'https://github.com/emma0506-web/perf-playground' },
    ],
  },
]
