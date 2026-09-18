export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">联系我</h2>
      <p className="section__intro">正在看新的前端机会（上海 / 远程）。欢迎邮件或微信沟通。</p>

      <div className="contact__grid">
        <a className="contact__item" href="mailto:18052453080@163.com">
          <span className="contact__label">邮箱</span>
          <span className="contact__value">18052453080@163.com</span>
        </a>
        <div className="contact__item">
          <span className="contact__label">电话 / 微信</span>
          <span className="contact__value">180-5245-3080</span>
        </div>
        <a className="contact__item" href="https://github.com/emma0506-web" target="_blank" rel="noreferrer">
          <span className="contact__label">GitHub</span>
          <span className="contact__value">github.com/emma0506-web</span>
        </a>
        <a className="contact__item" href="https://emma0506-web.github.io/portfolio/" target="_blank" rel="noreferrer">
          <span className="contact__label">作品站镜像</span>
          <span className="contact__value">emma0506-web.github.io/portfolio</span>
        </a>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} 谢芬 · 高级前端开发工程师</span>
        <span>用 React + Vite 构建</span>
      </footer>
    </section>
  )
}
