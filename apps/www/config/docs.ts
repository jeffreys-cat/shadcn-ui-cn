import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "快速开始",
      items: [
        {
          title: "介绍",
          href: "/docs",
          items: [],
        },
        {
          title: "安装",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "主题",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "暗黑模式",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Monorepo",
          href: "/docs/monorepo",
          items: [],
        },
        {
          title: "Tailwind v4",
          href: "/docs/tailwind-v4",
          items: [],
          label: "New",
        },
        {
          title: "Next.js 15 + React 19",
          href: "/docs/react-19",
          items: [],
        },
        {
          title: "印刷格式 Typography)",
          href: "/docs/components/typography",
          items: [],
        },
        {
          title: "在 v0 中打开",
          href: "/docs/v0",
          items: [],
        },
        {
          title: "Blocks",
          href: "/docs/blocks",
          items: [],
        },
        {
          title: "Figma",
          href: "/docs/figma",
          items: [],
        },
        {
          title: "更新纪录",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "安装",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
        {
          title: "React Router",
          href: "/docs/installation/react-router",
          items: [],
          label: "New",
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Tanstack Start",
          href: "/docs/installation/tanstack",
          items: [],
          label: "New",
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "组件",
      items: [
        {
          title: "侧边栏 Sidebar",
          href: "/docs/components/sidebar",
          items: [],
          label: "New",
        },
        {
          title: "手风琴 Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "警告 Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "警告弹窗 Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "纵横比 Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          title: "头像 Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "徽章 Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "面包屑 Breadcrumb",
          href: "/docs/components/breadcrumb",
          items: [],
        },
        {
          title: "按钮 Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "日历 Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          title: "卡片 Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "轮播 Carousel",
          href: "/docs/components/carousel",
          items: [],
        },
        {
          title: "图表 Chart",
          href: "/docs/components/chart",
          items: [],
        },
        {
          title: "复选框 Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "折叠 Collapsible",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "组合框 Combobox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "命令 Command",
          href: "/docs/components/command",
          items: [],
        },
        {
          title: "上下文菜单 Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "数据表格 Data Table",
          href: "/docs/components/data-table",
          items: [],
        },
        {
          title: "日期选择器 Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "对话框 Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "抽屉 Drawer",
          href: "/docs/components/drawer",
          items: [],
        },
        {
          title: "下拉菜单 Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "表单 Form",
          href: "/docs/components/form",
          items: [],
        },
        {
          title: "悬浮卡片 Hover Card",
          href: "/docs/components/hover-card",
          items: [],
        },
        {
          title: "输入框 Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "OTP 输入框 Input OTP",
          href: "/docs/components/input-otp",
          items: [],
        },
        {
          title: "标签 Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "菜单栏 Menubar",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          title: "导航菜单 Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          title: "分页器 Pagination",
          href: "/docs/components/pagination",
          items: [],
        },
        {
          title: "弹出窗 Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "进度条 Progress",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "选项组 Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "可调整大小 Resizable",
          href: "/docs/components/resizable",
          items: [],
        },
        {
          title: "滚动区 Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          title: "选择器 Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "分离器 Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          title: "侧边栏 Sheet",
          href: "/docs/components/sheet",
          items: [],
        },
        {
          title: "Sidebar",
          href: "/docs/components/sidebar",
          items: [],
        },
        {
          title: "占位符 Skeleton",
          href: "/docs/components/skeleton",
          items: [],
        },
        {
          title: "滑块 Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "提醒 Sonner",
          href: "/docs/components/sonner",
          items: [],
        },
        {
          title: "开关 Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "表格 Table",
          href: "/docs/components/table",
          items: [],
        },
        {
          title: "选项卡 Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "文本框 Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "提示 Toast",
          href: "/docs/components/toast",
          items: [],
        },
        {
          title: "切换 Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "切换组 Toggle Group",
          href: "/docs/components/toggle-group",
          items: [],
        },
        {
          title: "工具提示 Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
    {
      title: "Registry",
      label: "New",
      items: [
        {
          title: "Introduction",
          href: "/docs/registry",
          items: [],
        },
        {
          title: "Getting Started",
          href: "/docs/registry/getting-started",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/docs/registry/open-in-v0",
          items: [],
        },
        {
          title: "FAQ",
          href: "/docs/registry/faq",
          items: [],
        },
        {
          title: "registry.json",
          href: "/docs/registry/registry-json",
          items: [],
        },
        {
          title: "registry-item.json",
          href: "/docs/registry/registry-item-json",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/docs/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/docs/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/docs/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/docs/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/docs/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/docs/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
}