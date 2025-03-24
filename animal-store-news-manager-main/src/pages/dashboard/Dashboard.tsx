import React, { useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ProgressCircle from '@/components/dashboard/ProgressCircle';
import ActivityLog from '@/components/dashboard/ActivityLog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cat, Store, Newspaper } from 'lucide-react';
import { useData } from '@/contexts/DataContext';
import { useActivity } from '@/contexts/ActivityContext';

const Dashboard = () => {
  const data = useData();
  const stats = data.getStatistics();
  const { activities, setActivities } = useActivity();
  
  useEffect(() => {
    // アクティビティログのモックデータ
    setActivities([
      {
        id: '1',
        description: '新しい動物「マロン」が追加されました',
        timestamp: new Date(Date.now() - 1000 * 60 * 20),
        type: 'success',
        read: false,
      },
      {
        id: '2',
        description: '東京店の情報が更新されました',
        timestamp: new Date(Date.now() - 1000 * 60 * 120),
        type: 'info',
        read: false,
      },
      {
        id: '3',
        description: '夏の犬・猫用クールグッズフェアのニュースが公開されました',
        timestamp: new Date(Date.now() - 1000 * 60 * 240),
        type: 'info',
        read: false,
      },
    ]);
  }, [setActivities]);

  return (
    <DashboardLayout>
      <div className="grid gap-6 animate-fade-in">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="動物数"
            value={stats.totalAnimals}
            icon={<Cat className="text-dashboard-green" size={18} />}
            trend={{ value: "前月比 +5%", variant: "increase" }}
          />
          <StatCard
            title="店舗数"
            value={stats.totalStores}
            icon={<Store className="text-dashboard-green" size={18} />}
            description="アクティブな店舗"
          />
          <StatCard
            title="ニュース"
            value={stats.totalNews}
            icon={<Newspaper className="text-dashboard-green" size={18} />}
            description={`${stats.publishedNews}件が公開中`}
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="dashboard-card md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">動物種別分布</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-[200px]">
              <div className="relative w-[120px] h-[120px]">
                <ProgressCircle value={70} />
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">店舗ごとの動物数</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {stats.animalsByStore.map((item: any) => (
                  <li key={item.storeId} className="p-4 flex justify-between items-center">
                    <span className="text-sm">{item.storeName}</span>
                    <span className="text-dashboard-green font-semibold">{item.count}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <ActivityLog activities={activities} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
