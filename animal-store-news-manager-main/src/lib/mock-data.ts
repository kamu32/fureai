
import { Animal, Store, News } from "@/types/models";
import { v4 as uuidv4 } from "uuid";

// モックデータを生成する関数
export const generateMockData = () => {
  // ストアのモックデータ
  const stores: Store[] = [
    {
      id: uuidv4(),
      name: "ペットパラダイス 東京店",
      address: "東京都新宿区西新宿1-1-1",
      phone: "03-1234-5678",
      email: "tokyo@petparadise.com",
      description: "東京の中心部にある最大級のペットショップです。",
      imageUrl: "https://placehold.co/600x400",
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-01"),
    },
    {
      id: uuidv4(),
      name: "ペットパラダイス 大阪店",
      address: "大阪府大阪市北区梅田2-2-2",
      phone: "06-1234-5678",
      email: "osaka@petparadise.com",
      description: "関西最大のペット専門店です。",
      imageUrl: "https://placehold.co/600x400",
      createdAt: new Date("2023-02-01"),
      updatedAt: new Date("2023-02-01"),
    },
    {
      id: uuidv4(),
      name: "ペットパラダイス 名古屋店",
      address: "愛知県名古屋市中区栄3-3-3",
      phone: "052-1234-5678",
      email: "nagoya@petparadise.com",
      description: "東海地方最大のペットショップです。",
      imageUrl: "https://placehold.co/600x400",
      createdAt: new Date("2023-03-01"),
      updatedAt: new Date("2023-03-01"),
    },
  ];

  // 動物のモックデータ
  const animals: Animal[] = [
    {
      id: uuidv4(),
      name: "マロン",
      species: "犬",
      breed: "柴犬",
      age: 2,
      description: "元気で活発な柴犬です。散歩が大好きです。",
      imageUrl: "https://placehold.co/600x400",
      storeId: stores[0].id,
      createdAt: new Date("2023-01-15"),
      updatedAt: new Date("2023-01-15"),
    },
    {
      id: uuidv4(),
      name: "ミケ",
      species: "猫",
      breed: "三毛猫",
      age: 1,
      description: "おっとりとした性格の三毛猫です。",
      imageUrl: "https://placehold.co/600x400",
      storeId: stores[0].id,
      createdAt: new Date("2023-01-20"),
      updatedAt: new Date("2023-01-20"),
    },
    {
      id: uuidv4(),
      name: "チョコ",
      species: "犬",
      breed: "トイプードル",
      age: 3,
      description: "賢くてしつけがしやすいトイプードルです。",
      imageUrl: "https://placehold.co/600x400",
      storeId: stores[1].id,
      createdAt: new Date("2023-02-15"),
      updatedAt: new Date("2023-02-15"),
    },
    {
      id: uuidv4(),
      name: "ポチ",
      species: "犬",
      breed: "ゴールデンレトリバー",
      age: 1,
      description: "人懐っこいゴールデンレトリバーの子犬です。",
      imageUrl: "https://placehold.co/600x400",
      storeId: stores[1].id,
      createdAt: new Date("2023-02-20"),
      updatedAt: new Date("2023-02-20"),
    },
    {
      id: uuidv4(),
      name: "タマ",
      species: "猫",
      breed: "アメリカンショートヘア",
      age: 2,
      description: "穏やかな性格のアメリカンショートヘアです。",
      imageUrl: "https://placehold.co/600x400",
      storeId: stores[2].id,
      createdAt: new Date("2023-03-15"),
      updatedAt: new Date("2023-03-15"),
    },
  ];

  // ニュースのモックデータ
  const news: News[] = [
    {
      id: uuidv4(),
      title: "夏の犬・猫用クールグッズフェア開催中！",
      content: "今年の夏も暑くなりそうです。ペットを熱中症から守るための特集を行っています。",
      imageUrl: "https://placehold.co/600x400",
      published: true,
      publishedAt: new Date("2023-06-01"),
      createdAt: new Date("2023-05-15"),
      updatedAt: new Date("2023-05-15"),
    },
    {
      id: uuidv4(),
      title: "新しい動物の飼い方講座を開催します",
      content: "初めてペットを飼う方向けの講座を各店舗で開催します。参加費無料、予約制です。",
      imageUrl: "https://placehold.co/600x400",
      published: true,
      publishedAt: new Date("2023-07-01"),
      createdAt: new Date("2023-06-15"),
      updatedAt: new Date("2023-06-15"),
    },
    {
      id: uuidv4(),
      title: "冬の健康ケア特集",
      content: "寒い季節のペットの健康管理についての特集です。暖房の使い方や適切な運動量について解説します。",
      imageUrl: "https://placehold.co/600x400",
      published: false,
      createdAt: new Date("2023-10-15"),
      updatedAt: new Date("2023-10-15"),
    },
  ];

  return { stores, animals, news };
};

// モックデータのインスタンスを作成
const mockData = generateMockData();

export default mockData;
