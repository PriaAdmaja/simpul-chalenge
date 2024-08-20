export type ChatListType = {
  id: number;
  date: string;
  name: string;
  description: string;
  seen?: boolean;
};

export const chatList: ChatListType[] = [
  {
    id: 1,
    date: "2022-11-17T14:32:10Z",
    name: "You",
    description:
      "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus",
    seen: true,
  },
  {
    id: 2,
    date: "2023-03-05T08:15:45Z",
    name: "You",
    seen: true,
    description:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis",
  },
  {
    id: 3,
    date: "2021-07-29T22:48:30Z",
    name: "Ervin",
    seen: true,
    description:
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    date: "2020-12-22T05:23:00Z",
    name: "Ervin",
    seen: true,
    description:
      "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    date: "2023-08-30T12:07:55Z",
    name: "You",
    seen: true,
    description:
      "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    id: 6,
    date: "2023-08-30T11:42:20Z",
    name: "Daniel",
    seen: true,
    description: "dolore placeat quibusdam ea quo ",
  },
];
