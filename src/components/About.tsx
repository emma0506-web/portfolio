const skills = [
  { group: '框架与语言', items: ['React', 'TypeScript', 'Vue 2/3', 'Node.js'] },
  { group: '工程化', items: ['Vite', 'Webpack', 'qiankun 微前端', 'ESLint / Prettier'] },
  { group: '性能与安全', items: ['首屏优化', '虚拟滚动', 'CSP / XSS / CSRF', '等保 2.0'] },
  { group: '数据与多端', items: ['神策埋点', 'App / H5 / 小程序', 'WebSocket', '可视化编排'] },
]

const timeline = [
  { time: '2022 – 至今', title: '天翼电子商务（翼支付）· 高级前端开发工程师' },
  { time: '2020 – 2021', title: '世纪畅链 · 高级前端开发工程师' },
  { time: '2018 – 2020', title: '上海格欣信息技术 · 前端开发工程师' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">关于我</h2>
      <p className="section__intro">
        我把前端当作"解决业务问题的工程"，而不是写页面。7 年里从业务模块开发做到平台级架构，
        擅长在复杂业务里抽出高复用组件、用工程化手段把团队效率与线上质量一起拉起来。
      </p>

      <div className="skills">
        {skills.map((s) => (
          <div className="skills__card" key={s.group}>
            <h3>{s.group}</h3>
            <div className="skills__tags">
              {s.items.map((i) => (
                <span className="tag" key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ul className="timeline">
        {timeline.map((t) => (
          <li key={t.title}>
            <span className="timeline__time">{t.time}</span>
            <span className="timeline__title">{t.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
