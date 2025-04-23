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
        title: "世界观",
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
        avatar: avatarMap['avatar.jpg'],
        name: 'MyName',
        description: 'My Description',
        url: 'https://github.com/MyName'
    }
]
export {
    articles,
    friendlinks
}