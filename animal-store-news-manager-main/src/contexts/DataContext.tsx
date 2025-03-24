
import React, { createContext, useContext, ReactNode } from "react";
import dataService from "@/lib/data-service";
import { Animal, Store, News } from "@/types/models";

interface DataContextType {
  // Animal関連
  getAnimals: () => Animal[];
  getAnimalById: (id: string) => Animal | undefined;
  getAnimalsByStoreId: (storeId: string) => Animal[];
  createAnimal: (animal: Omit<Animal, "id" | "createdAt" | "updatedAt">) => Animal;
  updateAnimal: (id: string, data: Partial<Animal>) => Animal | undefined;
  deleteAnimal: (id: string) => boolean;
  
  // Store関連
  getStores: () => Store[];
  getStoreById: (id: string) => Store | undefined;
  createStore: (store: Omit<Store, "id" | "createdAt" | "updatedAt">) => Store;
  updateStore: (id: string, data: Partial<Store>) => Store | undefined;
  deleteStore: (id: string) => boolean;
  
  // News関連
  getNews: () => News[];
  getPublishedNews: () => News[];
  getNewsById: (id: string) => News | undefined;
  createNews: (news: Omit<News, "id" | "createdAt" | "updatedAt">) => News;
  updateNews: (id: string, data: Partial<News>) => News | undefined;
  deleteNews: (id: string) => boolean;
  
  // 統計情報
  getStatistics: () => any;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DataContext.Provider value={dataService}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
