
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-5xl font-bold text-dashboard-green mb-6">404</h1>
        <p className="text-xl mb-8">申し訳ありません。ページが見つかりませんでした。</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/dashboard">ダッシュボードへ</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">ホームへ戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
