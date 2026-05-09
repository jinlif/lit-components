# 🎨 Lit Components

一个使用 Lit.js 开发的高质量 Web Components 组件库，不依赖任何第三方 API。

## ✨ 特点

- 🚀 **高性能** - 基于 Lit.js，轻量级且高效
- 🎯 **零依赖** - 仅依赖 Lit，无其他外部依赖
- 🎨 **美观设计** - 现代化的渐变设计和流畅动画
- 📱 **响应式** - 完全响应式布局，适配各种屏幕
- ♿ **可访问性** - 遵循 Web 标准和无障碍设计原则
- 📦 **易于使用** - 简单的 API，易于集成

## 📦 组件列表

### 1. **Button** - 按钮组件
多变体的按钮组件，支持不同的样式和状态。

#### 属性
- `variant`: 按钮变体 - `'primary'` | `'secondary'` | `'success'` | `'danger'` (默认: `'primary'`)
- `size`: 尺寸 - `'small'` | `'medium'` | `'large'` (默认: `'medium'`)
- `disabled`: 禁用状态 (默认: `false`)
- `loading`: 加载状态 (默认: `false`)

#### 使用示例
\`\`\`html
<lit-button variant="primary" size="medium">Click Me</lit-button>
<lit-button variant="danger" size="large" disabled>Disabled</lit-button>
<lit-button id="loading-btn" variant="success" loading>Loading...</lit-button>
\`\`\`

---

### 2. **Card** - 卡片组件
用于展示内容的卡片容器组件。

#### 属性
- `title`: 卡片标题 (字符串)
- `subtitle`: 卡片副标题 (字符串)
- `image`: 卡片图片 URL (字符串)

#### 使用示例
\`\`\`html
<lit-card 
  title="My Card" 
  subtitle="Card Subtitle"
  image="https://example.com/image.jpg"
>
  Card content goes here
</lit-card>
\`\`\`

---

### 3. **Badge** - 徽章组件
用于标记和分类的徽章组件。

#### 属性
- `variant`: 徽章变体 - `'default'` | `'primary'` | `'success'` | `'warning'` | `'error'` | `'info'` (默认: `'default'`)
- `size`: 尺寸 - `'small'` | `'medium'` | `'large'` (默认: `'medium'`)

#### 使用示例
\`\`\`html
<lit-badge variant="primary" size="small">New</lit-badge>
<lit-badge variant="success" size="medium">Active</lit-badge>
<lit-badge variant="warning" size="large">Pending</lit-badge>
\`\`\`

---

### 4. **Modal** - 模态框组件
弹出式模态框，用于展示重要信息或获取用户输入。

#### 属性
- `open`: 是否打开模态框 (默认: `false`)
- `title`: 模态框标题 (字符串)

#### 事件
- `modal-close`: 模态框关闭时触发

#### 使用示例
\`\`\`html
<lit-modal id="my-modal" title="Confirm Action">
  <p>Are you sure?</p>
  <div slot="footer">
    <lit-button variant="secondary">Cancel</lit-button>
    <lit-button variant="primary">Confirm</lit-button>
  </div>
</lit-modal>

<script>
  const modal = document.getElementById('my-modal');
  modal.open = true;
</script>
\`\`\`

---

### 5. **ProgressBar** - 进度条组件
显示任务进度的进度条组件。

#### 属性
- `value`: 进度值 0-100 (默认: `0`)
- `label`: 进度标签文本 (字符串)
- `variant`: 颜色变体 - `'primary'` | `'success'` | `'warning'` | `'danger'` (默认: `'primary'`)
- `animated`: 是否启用动画 (默认: `true`)
- `showLabel`: 是否显示标签 (默认: `true`)

#### 使用示例
\`\`\`html
<lit-progress-bar 
  label="下载中" 
  variant="primary" 
  value="45"
  animated
></lit-progress-bar>
\`\`\`

---

## 🚀 快速开始

### 安装

\`\`\`bash
npm install
\`\`\`

### 开发

\`\`\`bash
npm run dev
\`\`\`

### 构建

\`\`\`bash
npm run build
\`\`\`

### 查看演示

在浏览器中打开 `demo/index.html` 查看所有组件的演示。

---

## 📝 HTML 集成示例

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Lit Components Demo</title>
</head>
<body>
  <!-- 使用组件 -->
  <lit-button variant="primary">Click Me</lit-button>
  
  <lit-card title="My Card">
    Card content here
  </lit-card>

  <lit-badge variant="success">Active</lit-badge>

  <!-- 加载组件库 -->
  <script type="module">
    import { LitButton, LitCard, LitBadge, LitModal, LitProgressBar } from './dist/index.js';
  </script>
</body>
</html>
\`\`\`

---

## 🎨 设计特点

- 现代化的渐变背景
- 流畅的过渡和动画效果
- 响应式设计
- 深思熟虑的颜色方案
- 高质量的阴影效果

---

## 📄 许可证

MIT

---

## 👨‍💻 作者

**jinlif** - [GitHub](https://github.com/jinlif)

---

## 🤝 贡献

欢迎提交 PR 和 Issue！

---

**享受使用 Lit Components！** ✨
