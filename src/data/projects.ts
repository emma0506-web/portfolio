export interface Metric {
  label: string
  value: string
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
]
