export interface ArticlesType {
    id: number,
    name: string,
    title: string,
    date: string,
    tags: string[]
}
const articles: ArticlesType[] = [
    {
        id: 1,
        name: "PersonalResume",
        title: "个人简历",
        date: "2023-12-24",
        tags: ["关于我"]
    },
    {
        id: 2,
        name: "WorldOutlook",
        title: "我的世界观",
        date: "2023-12-27",
        tags: ["世界观"]
    },
    {
        id: 3,
        name: "AboutMe",
        title: "关于我",
        date: "2024-5-5",
        tags: ["关于我"]
    },
    {
        id: 4,
        name: "WorldOutlook2",
        title: "世界观所使用的语言",
        date: "2025-1-17",
        tags: ["世界观"]
    },
    {
        id: 5,
        name: "HighlightTest",
        title: "使用Vue + TypeScript实现代码高亮+行号测试",
        date: "2025-4-25",
        tags: ["编程"]
    },
    {
        id: 6,
        name: "BlackWorldBefore",
        title: "世界观——前言",
        date: "2025-5-6",
        tags: ["世界观", "小说"]
    },
    {
        id: 7,
        name: "MegalodonLanguage",
        title: "自制编程语言——巨齿鲨语言",
        date: "2025-5-8",
        tags: ["编程"]
    }
]
const avatars = import.meta.glob<{ default: string }>(
  '@/assets/img/*',
  { eager: true }
);
const avatarMap: Record<string, string> = {};

Object.entries(avatars).forEach(([path, module]) => {
  const name = path.substring(path.lastIndexOf('/') + 1, path.length) || 0;
  if (name) {
    avatarMap[name] = module.default;
  }
});
interface FriendlinkType {
    avatar: string,
    name: string,
    description: string,
    url: string,
}
const friendlinks: FriendlinkType[] = [
    {
        avatar: avatarMap['Chiloven945.jpg'],
        name: 'Chiloven945',
        description: '咦惹',
        url: 'https://chiloven945.github.io/'
    }
]
export {
    articles,
    friendlinks
}