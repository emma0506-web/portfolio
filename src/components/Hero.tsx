export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__eyebrow">高级前端开发工程师 · 上海</p>
        <h1 className="hero__title">谢芬</h1>
        <p className="hero__lead">
          7 年前端开发经验，专注 <strong>React / 微前端 / 性能优化 / 前端安全</strong>。
          曾主导千万级用户权益平台的前端架构，从 0 到 1 落地 qiankun 微前端，
          并把核心首屏从 2.8s 优化到 0.6s。
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">查看项目</a>
          <a className="btn btn--ghost" href="#contact">联系我</a>
        </div>
      </div>
    </section>
  )
}
