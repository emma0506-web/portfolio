# 谢芬 · 前端开发工程师作品集

基于 **React 18 + TypeScript + Vite** 的个人技术站点，用于展示项目经历与技术文章。

## 本地开发

```bash
npm install
npm run dev        # 本地预览 http://localhost:5173
npm run build      # 产出 dist/ 静态文件
npm run preview    # 本地预览构建产物
```

## 部署（二选一，push 后自动获得在线地址）

### 方式 A：GitHub Pages（推荐，免费）

1. 把本仓库推送到 GitHub（默认分支 `main`）。
2. 仓库 **Settings → Pages → Build and deployment → Source 选 "GitHub Actions"**。
3. 之后每次 `git push` 到 `main` 会自动部署，地址为
   `https://<你的用户名>.github.io/<仓库名>/`

> 已内置 `.github/workflows/deploy.yml`，无需额外配置。

### 方式 B：Vercel（最省事）

1. 推送到 GitHub 后，打开 https://vercel.com 用 GitHub 登录。
2. **Add New → Project**，选择本仓库，Framework 选 Vercel 会自动识别 Vite。
3. Build Command：`npm run build`，Output Directory：`dist`。
4. 点 Deploy，几十秒后获得 `*.vercel.app` 地址，之后 push 自动更新。

## 目录结构

```
src/
  components/   站点各区块组件
  data/         projects.ts（项目案例）、posts.ts（技术文章）
  App.tsx       页面组装
  index.css     样式
```

> 内容是占位示例，请按真实项目替换 `src/data/` 中的数据。
