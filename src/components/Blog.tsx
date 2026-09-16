import { useState } from 'react'
import { posts, type Post, type PostBlock } from '../data/posts'

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return <h4 className="post__h2">{block.text}</h4>
    case 'p':
      return <p className="post__p">{block.text}</p>
    case 'ul':
      return (
        <ul className="post__ul">
          {block.items?.map((i) => <li key={i}>{i}</li>)}
        </ul>
      )
    case 'code':
      return <pre className="post__code"><code>{block.text}</code></pre>
  }
}

export default function Blog() {
  const [active, setActive] = useState<Post | null>(null)

  return (
    <section className="section" id="blog">
      <h2 className="section__title">技术文章</h2>
      <p className="section__intro">把踩过的坑写出来，比简历上的关键词更有说服力。</p>

      <div className="posts">
        {posts.map((post) => (
          <button className="post-card" key={post.id} onClick={() => setActive(post)}>
            <span className="post-card__date">{post.date}</span>
            <span className="post-card__title">{post.title}</span>
            <span className="post-card__summary">{post.summary}</span>
            <span className="post-card__more">阅读全文 →</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)} aria-label="关闭">×</button>
            <h3 className="modal__title">{active.title}</h3>
            <p className="modal__date">{active.date}</p>
            <div className="modal__body">
              {active.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
