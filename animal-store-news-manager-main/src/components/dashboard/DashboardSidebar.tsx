
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Store, Cat, Newspaper, Settings, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    console.log('DashboardSidebar - isLoggedIn:', isLoggedIn);
  }, [isLoggedIn]);

  // Base navigation items
  const baseNavItems = [
    { icon: Home, label: 'ホーム', path: '/dashboard' },
  ];

  // Additional navigation items only visible when logged in
  const loggedInNavItems = [
    { icon: Cat, label: '動物管理', path: '/dashboard/animals' },
    { icon: Store, label: '店舗管理', path: '/dashboard/stores' },
    { icon: Newspaper, label: 'ニュース管理', path: '/dashboard/news' },
    { icon: Settings, label: '設定', path: '/dashboard/settings' },
  ];

  // Determine which nav items to show based on login status
  const navItems = isLoggedIn ? [...baseNavItems, ...loggedInNavItems] : baseNavItems;

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to the top page after logout
  };

  return (
    <div className="h-screen w-64 bg-dashboard-green flex flex-col shadow-lg animate-fade-in">
      <div className="p-6">
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <span className="text-white">アニマル</span>
          <span className="text-white">ストア</span>
        </h2>
      </div>
      
      <nav className="mt-6 flex-1">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn("sidebar-item", isActive(item.path) && "active")}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 mt-auto border-t border-dashboard-green-400">
        <ul className="space-y-1">
          <li>
            <a href="#" className="sidebar-item">
              <HelpCircle size={20} />
              <span>サポート</span>
            </a>
          </li>
          <li>
            <button onClick={handleLogout} className="sidebar-item w-full text-left">
              <LogOut size={20} />
              <span>ログアウト</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
