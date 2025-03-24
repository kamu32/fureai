
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-dashboard-green text-white p-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold">アニマルストア管理システム</h1>
          <Link to="/login">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-dashboard-green">
              ログイン
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 container py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-dashboard-green">アニマルストアデータ管理ソリューション</h2>
          <p className="text-lg mb-8">
            動物、店舗、ニュースを簡単に管理できる管理システムです。<br />
            直感的なインターフェースでデータを作成、編集、削除できます。
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" asChild>
              <Link to="/login">
                ログイン
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">
                ダッシュボードへ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4 text-dashboard-green">動物管理</h3>
              <p className="mb-4 flex-1">全ての動物データを一元管理。詳細な情報を記録し、簡単に更新できます。</p>
              <Button variant="outline" className="w-full mt-auto" asChild>
                <Link to="/dashboard/animals">詳細を見る</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4 text-dashboard-green">店舗管理</h3>
              <p className="mb-4 flex-1">店舗情報を管理。各店舗の在籍動物を一目で確認できます。</p>
              <Button variant="outline" className="w-full mt-auto" asChild>
                <Link to="/dashboard/stores">詳細を見る</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4 text-dashboard-green">ニュース管理</h3>
              <p className="mb-4 flex-1">ニュースコンテンツを作成・公開。下書き保存や公開予約も可能です。</p>
              <Button variant="outline" className="w-full mt-auto" asChild>
                <Link to="/dashboard/news">詳細を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 アニマルストア管理システム. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
