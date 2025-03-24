
import React from 'react';
import { Bell } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ActivityItem, useActivity } from '@/contexts/ActivityContext';

const NotificationPopover: React.FC = () => {
  const { activities, markAllAsRead, hasUnreadActivities } = useActivity();

  const getTypeColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'info': return 'bg-blue-500';
      case 'success': return 'bg-dashboard-green';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (open && hasUnreadActivities) {
      markAllAsRead();
    }
  };

  return (
    <Popover onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button className="relative rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-colors">
          <Bell size={18} />
          {hasUnreadActivities && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-3 border-b">
          <h3 className="font-medium">お知らせ</h3>
        </div>
        {activities.length > 0 ? (
          <div className="max-h-[300px] overflow-y-auto">
            {activities.map((activity) => (
              <div key={activity.id} className="p-3 border-b hover:bg-accent/50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={cn(`w-2 h-2 mt-1.5 rounded-full ${getTypeColor(activity.type)}`)} />
                  <div className="flex-1">
                    <p className="text-sm">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(activity.timestamp).toLocaleString('ja-JP', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-muted-foreground">
            <p>新しいお知らせはありません</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
