# 大学生个人主页网站

一个现代化、响应式的大学生个人主页网站，展示个人信息、技能、项目经历等内容。

## 项目结构

```
self-info/
├── index.html          # 主页面文件
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript 脚本
├── images/             # 图片资源目录
│   ├── avatar.jpg      # 个人头像
│   ├── school-logo.png # 学校校徽
│   ├── project1.jpg    # 项目截图1
│   ├── project2.jpg    # 项目截图2
│   └── project3.jpg    # 项目截图3
└── README.md           # 项目说明文档
```

## 功能模块

1. **基础身份标识** - 姓名、头像、个人标签
2. **校园背景** - 学校、专业、学历信息
3. **专业技能** - 技术技能进度条、软技能星级展示
4. **核心技能** - 突出展示擅长技能及应用案例
5. **校园经历** - 实践经历时间轴展示
6. **竞赛获奖** - 获奖成果卡片展示
7. **项目成果** - 项目作品展示
8. **兴趣爱好** - 图文结合展示
9. **发展路线** - 时间轴展示职业规划
10. **联系方式** - 联系信息及留言表单

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - Flexbox/Grid 布局、动画效果
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库

## 特性

- 响应式设计，适配 PC、平板、手机
- 平滑滚动和悬停动画效果
- 技能进度条动画
- 滚动触发的元素动画
- 导航栏响应式菜单
- 返回顶部按钮
- 表单验证与提交反馈

## 本地运行

### 方法一：直接打开

双击 `index.html` 文件，在浏览器中直接打开。

### 方法二：使用本地服务器

使用 Python 内置服务器：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问 `http://localhost:8000`

或使用 Node.js 的 http-server：

```bash
# 安装
npm install -g http-server

# 运行
http-server -p 8000
```

## 部署方式

### 1. GitHub Pages（推荐）

1. 在 GitHub 创建新仓库
2. 上传项目文件
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支，文件夹选择 `/ (root)`
5. 保存后等待部署完成
6. 访问 `https://用户名.github.io/仓库名`

### 2. Vercel

1. 注册 Vercel 账号
2. 连接 GitHub 仓库或直接上传文件
3. 自动部署完成
4. 获得免费域名

### 3. Netlify

1. 注册 Netlify 账号
2. 拖拽项目文件夹到上传区域
3. 自动部署完成
4. 获得免费域名

### 4. 传统虚拟主机

1. 购买虚拟主机服务
2. 通过 FTP 上传项目文件到网站根目录
3. 绑定域名

## 自定义修改

### 修改个人信息

编辑 `index.html` 文件，修改以下内容：

- 姓名：搜索 "张明" 替换为您的姓名
- 学校信息：修改学校名称、学院、专业等
- 技能信息：调整技能名称和熟练度百分比
- 经历信息：添加或修改实践经历
- 联系方式：更新邮箱、GitHub 等链接

### 修改配色方案

编辑 `css/style.css` 文件顶部的 CSS 变量：

```css
:root {
    --primary-color: #4A90E2;    /* 主色调 */
    --secondary-color: #67C23A;  /* 辅助色 */
    --accent-color: #E6A23C;     /* 强调色 */
    /* ... */
}
```

### 添加图片

将图片文件放入 `images/` 目录，并更新 `index.html` 中的图片路径。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 不支持 IE 浏览器

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎联系。
