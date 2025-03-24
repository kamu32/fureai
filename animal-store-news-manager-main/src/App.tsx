
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "@/contexts/DataContext";
import { ActivityProvider } from "@/contexts/ActivityContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

// ページコンポーネントをインポート
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import AnimalsPage from "./pages/dashboard/AnimalsPage";
import StoresPage from "./pages/dashboard/StoresPage";
import NewsPage from "./pages/dashboard/NewsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children, requiresAuth = true }: { children: JSX.Element, requiresAuth?: boolean }) => {
  const { isLoggedIn } = useAuth();
  
  useEffect(() => {
    console.log('ProtectedRoute - isLoggedIn:', isLoggedIn, 'requiresAuth:', requiresAuth);
  }, [isLoggedIn, requiresAuth]);
  
  // Allow access to base dashboard for all users
  if (!requiresAuth) {
    return children;
  }
  
  // For routes that require authentication
  return isLoggedIn ? children : <Navigate to="/login" />;
};

// AppRoutes component that uses AuthProvider
const AppRoutes = () => {
  // モバイル向けのビューポート高さ修正
  useEffect(() => {
    const setViewHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setViewHeight();
    window.addEventListener('resize', setViewHeight);
    
    return () => window.removeEventListener('resize', setViewHeight);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Base dashboard route doesn't require auth */}
      <Route path="/dashboard" element={<ProtectedRoute requiresAuth={false}><Dashboard /></ProtectedRoute>} />
      
      {/* Protected routes requiring auth */}
      <Route path="/dashboard/animals" element={<ProtectedRoute><AnimalsPage /></ProtectedRoute>} />
      <Route path="/dashboard/stores" element={<ProtectedRoute><StoresPage /></ProtectedRoute>} />
      <Route path="/dashboard/news" element={<ProtectedRoute><NewsPage /></ProtectedRoute>} />
      <Route path="/dashboard/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/dashboard/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      
      {/* 404ページ */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <ActivityProvider>
          <BrowserRouter>
            <AuthProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <AppRoutes />
              </TooltipProvider>
            </AuthProvider>
          </BrowserRouter>
        </ActivityProvider>
      </DataProvider>
    </QueryClientProvider>
  );
};

export default App;
