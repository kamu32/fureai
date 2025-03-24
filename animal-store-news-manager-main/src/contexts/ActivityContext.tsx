
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface ActivityItem {
  id: string;
  description: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

interface ActivityContextType {
  activities: ActivityItem[];
  setActivities: React.Dispatch<React.SetStateAction<ActivityItem[]>>;
  markAllAsRead: () => void;
  hasUnreadActivities: boolean;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export const ActivityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  const hasUnreadActivities = activities.some(activity => !activity.read);

  const markAllAsRead = useCallback(() => {
    setActivities(prevActivities => 
      prevActivities.map(activity => ({
        ...activity,
        read: true
      }))
    );
  }, []);

  return (
    <ActivityContext.Provider value={{ 
      activities, 
      setActivities, 
      markAllAsRead,
      hasUnreadActivities
    }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = (): ActivityContextType => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};
