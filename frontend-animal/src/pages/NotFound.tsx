
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold mb-6 text-pugeat-dark-green">404</h1>
          <p className="text-xl text-pugeat-dark-green/80 mb-8">ページが見つかりませんでした。</p>
          <div className="flex justify-center">
            <Link to="/" className="btn-primary">
              ホームに戻る
            </Link>
          </div>
          <div className="mt-16 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="mx-auto text-pugeat-dark-green">
              <path d="M12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22M12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20M17,8.5C17,7.7 16.3,7 15.5,7C14.7,7 14,7.7 14,8.5C14,9.3 14.7,10 15.5,10C16.3,10 17,9.3 17,8.5M10,8.5C10,7.7 9.3,7 8.5,7C7.7,7 7,7.7 7,8.5C7,9.3 7.7,10 8.5,10C9.3,10 10,9.3 10,8.5M12,18C9,18 6.5,15.9 6,13H18C17.5,15.9 15,18 12,18Z" />
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
