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
        description: "来自我的个人简历，我在里面写了很多我自己的个人事迹、个人经历等。我已经几乎能把我能公开的信息全部公开了！各位可以从中了解我的生平，了解我的一些个人准则等。",
        tags: ["关于我"]
    },
    {
        id: 2,
        name: "WorldOutlook",
        title: "我的世界观",
        date: "2023-12-27",
        description: "这是我的世界观嗷~各位可以来看看我的世界观里有什么是能吸引到你的！我可是一名福瑞控控呀，欢迎各位来基于我的世界观来创作小说嗷~",
        tags: ["世界观"]
    },
    {
        id: 3,
        name: "AboutMe",
        title: "关于我",
        date: "2024-5-5",
        description: "一些令我非常气愤的事情，不想多说，只想摆烂。。",
        tags: ["关于我"]
    },
    {
        id: 4,
        name: "WorldOutlook2",
        title: "世界观所使用的语言",
        date: "2025-1-17",
        description: "我世界观里使用的语言！啊呀，虽然并不是真正意义上的语言，这其实是我的游戏【八个问题】使用的语言啦！不过各位倒可以从中借鉴一下。",
        tags: ["世界观"]
    },
    {
        id: 5,
        name: "HighlightTest",
        title: "使用Vue + TypeScript实现代码高亮+行号测试",
        date: "2025-4-25",
        description: "这只是一篇短教程罢了，可以让各位快速学习如何通过Vue+Typescript实现一个highlightjs的行号显示！里面实现可能有点粗糙，不过可以用就对了！",
        tags: ["编程"]
    },
    {
        id: 6,
        name: "BlackWorldBefore",
        title: "世界观——前言",
        date: "2025-5-6",
        description: "这是世界观的前言，只是为了满足我某个群的某个群u的幻想罢了（里面初步介绍了八个问题的问题来源是什么，围绕着我的自制游戏进行~写得不好，欢迎批评！",
        tags: ["世界观", "小说"]
    },
    {
        id: 7,
        name: "MegalodonLanguage",
        title: "自制编程语言——巨齿鲨语言",
        date: "2025-5-9",
        description: "我的自制语言！巨齿鲨语言！这是一门编程语言，皆在为又想要Rust的那种没有gc但是内存超级安全，适合写底层。但是却没有Rust那么抽象的语法的一门新语言！",
        tags: ["编程"]
    },
    {
        id: 8,
        name: "MegalodonGrammer",
        title: "巨齿鲨语言——语法介绍",
        date: "2025-5-16",
        description: "自制语言的语法介绍！这只是一个初步的构想罢了~",
        tags: ["编程"]
    },
    {
        id: 9,
        name: "MegalodonKeywords",
        title: "巨齿鲨语言——关键字介绍",
        date: "2025-5-17",
        description: "这是关键字介绍，介绍了巨齿鲨语言里的所有关键字。各位可以来看看~",
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
        url: 'https://chiloven945.github.io/',
    },
    {
        avatar: avatarMap['WolfYang.jpg'],
        name: '阳帆の小窝',
        description: '黄鹤一去不复返，白云千载空悠悠',
        url: 'https://blog.wolfyang.fan',
    },
    {
        avatar: avatarMap['Milu.jpg'],
        name: '米露小窝',
        description: '放弃个性,就和死了没什么区别',
        url: 'https://milu.ink',
    },
    {
        avatar: avatarMap['Hill233.jpg'],
        name: 'Hill233の小窝',
        description: '只是一个普普通通的 blog',
        url: 'https://hill233.top',
    }
]
export {
    articles,
    friendlinks
}