
import { Animal, Store, News } from "@/types/models";
import mockData from "./mock-data";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";

// データを保持するためのクラス
class DataService {
  private animals: Animal[] = [...mockData.animals];
  private stores: Store[] = [...mockData.stores];
  private news: News[] = [...mockData.news];

  // Animalに関するメソッド
  getAnimals(): Animal[] {
    return [...this.animals];
  }

  getAnimalById(id: string): Animal | undefined {
    return this.animals.find(animal => animal.id === id);
  }

  getAnimalsByStoreId(storeId: string): Animal[] {
    return this.animals.filter(animal => animal.storeId === storeId);
  }

  createAnimal(animal: Omit<Animal, "id" | "createdAt" | "updatedAt">): Animal {
    const now = new Date();
    const newAnimal: Animal = {
      id: uuidv4(),
      ...animal,
      createdAt: now,
      updatedAt: now,
    };
    this.animals.push(newAnimal);
    toast({
      title: "動物を追加しました",
      description: `${newAnimal.name}を正常に追加しました。`,
    });
    return newAnimal;
  }

  updateAnimal(id: string, data: Partial<Animal>): Animal | undefined {
    const index = this.animals.findIndex(animal => animal.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "更新する動物が見つかりませんでした。",
        variant: "destructive",
      });
      return undefined;
    }

    const updatedAnimal = {
      ...this.animals[index],
      ...data,
      updatedAt: new Date(),
    };
    this.animals[index] = updatedAnimal;
    
    toast({
      title: "動物情報を更新しました",
      description: `${updatedAnimal.name}の情報を更新しました。`,
    });
    
    return updatedAnimal;
  }

  deleteAnimal(id: string): boolean {
    const index = this.animals.findIndex(animal => animal.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "削除する動物が見つかりませんでした。",
        variant: "destructive",
      });
      return false;
    }

    const animalName = this.animals[index].name;
    this.animals.splice(index, 1);
    
    toast({
      title: "動物を削除しました",
      description: `${animalName}を正常に削除しました。`,
    });
    
    return true;
  }

  // Storeに関するメソッド
  getStores(): Store[] {
    return [...this.stores];
  }

  getStoreById(id: string): Store | undefined {
    return this.stores.find(store => store.id === id);
  }

  createStore(store: Omit<Store, "id" | "createdAt" | "updatedAt">): Store {
    const now = new Date();
    const newStore: Store = {
      id: uuidv4(),
      ...store,
      createdAt: now,
      updatedAt: now,
    };
    this.stores.push(newStore);
    toast({
      title: "店舗を追加しました",
      description: `${newStore.name}を正常に追加しました。`,
    });
    return newStore;
  }

  updateStore(id: string, data: Partial<Store>): Store | undefined {
    const index = this.stores.findIndex(store => store.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "更新する店舗が見つかりませんでした。",
        variant: "destructive",
      });
      return undefined;
    }

    const updatedStore = {
      ...this.stores[index],
      ...data,
      updatedAt: new Date(),
    };
    this.stores[index] = updatedStore;
    
    toast({
      title: "店舗情報を更新しました",
      description: `${updatedStore.name}の情報を更新しました。`,
    });
    
    return updatedStore;
  }

  deleteStore(id: string): boolean {
    const index = this.stores.findIndex(store => store.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "削除する店舗が見つかりませんでした。",
        variant: "destructive",
      });
      return false;
    }

    // この店舗に関連する動物がいるかチェック
    const hasAnimals = this.animals.some(animal => animal.storeId === id);
    if (hasAnimals) {
      toast({
        title: "エラー",
        description: "この店舗には動物が登録されています。先に動物を削除してください。",
        variant: "destructive",
      });
      return false;
    }

    const storeName = this.stores[index].name;
    this.stores.splice(index, 1);
    
    toast({
      title: "店舗を削除しました",
      description: `${storeName}を正常に削除しました。`,
    });
    
    return true;
  }

  // Newsに関するメソッド
  getNews(): News[] {
    return [...this.news];
  }

  getPublishedNews(): News[] {
    return this.news.filter(news => news.published);
  }

  getNewsById(id: string): News | undefined {
    return this.news.find(news => news.id === id);
  }

  createNews(news: Omit<News, "id" | "createdAt" | "updatedAt">): News {
    const now = new Date();
    const newNews: News = {
      id: uuidv4(),
      ...news,
      createdAt: now,
      updatedAt: now,
    };
    this.news.push(newNews);
    toast({
      title: "ニュースを追加しました",
      description: `「${newNews.title}」を正常に追加しました。`,
    });
    return newNews;
  }

  updateNews(id: string, data: Partial<News>): News | undefined {
    const index = this.news.findIndex(news => news.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "更新するニュースが見つかりませんでした。",
        variant: "destructive",
      });
      return undefined;
    }

    const updatedNews = {
      ...this.news[index],
      ...data,
      updatedAt: new Date(),
    };
    
    // 公開状態が変わる場合、publishedAtを更新
    if (data.published && !this.news[index].published) {
      updatedNews.publishedAt = new Date();
    }
    
    this.news[index] = updatedNews;
    
    toast({
      title: "ニュースを更新しました",
      description: `「${updatedNews.title}」の情報を更新しました。`,
    });
    
    return updatedNews;
  }

  deleteNews(id: string): boolean {
    const index = this.news.findIndex(news => news.id === id);
    if (index === -1) {
      toast({
        title: "エラー",
        description: "削除するニュースが見つかりませんでした。",
        variant: "destructive",
      });
      return false;
    }

    const newsTitle = this.news[index].title;
    this.news.splice(index, 1);
    
    toast({
      title: "ニュースを削除しました",
      description: `「${newsTitle}」を正常に削除しました。`,
    });
    
    return true;
  }

  // 統計情報
  getStatistics() {
    return {
      totalAnimals: this.animals.length,
      totalStores: this.stores.length,
      totalNews: this.news.length,
      publishedNews: this.news.filter(news => news.published).length,
      animalsBySpecies: this.getAnimalsBySpecies(),
      animalsByStore: this.getAnimalsByStore(),
    };
  }

  private getAnimalsBySpecies() {
    const result: Record<string, number> = {};
    this.animals.forEach(animal => {
      if (!result[animal.species]) {
        result[animal.species] = 0;
      }
      result[animal.species]++;
    });
    return result;
  }

  private getAnimalsByStore() {
    const result: Record<string, number> = {};
    this.stores.forEach(store => {
      result[store.id] = 0;
    });
    
    this.animals.forEach(animal => {
      if (result[animal.storeId] !== undefined) {
        result[animal.storeId]++;
      }
    });
    
    return Object.entries(result).map(([storeId, count]) => {
      const store = this.getStoreById(storeId);
      return {
        storeId,
        storeName: store?.name || "不明な店舗",
        count,
      };
    });
  }
}

// DataServiceのシングルトンインスタンスを作成
const dataService = new DataService();

export default dataService;
