import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">代表项目</h2>
      <p className="section__intro">以下为脱敏后的代表性案例，完整细节可在面试中展开。</p>

      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.id}>
            <div className="project__head">
              <h3>{p.name}</h3>
              <span className="project__role">{p.role}</span>
            </div>
            <p className="project__period">{p.period}</p>
            <p className="project__summary">{p.summary}</p>

            <ul className="project__highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="project__metrics">
              {p.metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <span className="metric__value">{m.value}</span>
                  <span className="metric__label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="project__tags">
              {p.tags.map((t) => (
                <span className="tag tag--sm" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
