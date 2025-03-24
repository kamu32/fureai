
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';

const SettingsPage = () => {
  const handleSave = () => {
    toast({
      title: "設定を保存しました",
      description: "設定が正常に保存されました。",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">設定</h1>
          <p className="text-muted-foreground">アプリケーションの設定を管理します。</p>
        </div>
        
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">一般</TabsTrigger>
            <TabsTrigger value="appearance">表示</TabsTrigger>
            <TabsTrigger value="notifications">通知</TabsTrigger>
            <TabsTrigger value="account">アカウント</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>一般設定</CardTitle>
                <CardDescription>基本的なアプリケーション設定を行います。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">サイト名</Label>
                  <Input id="site-name" defaultValue="アニマルストア管理システム" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">サイトの説明</Label>
                  <Input id="site-description" defaultValue="動物、店舗、ニュースを一元管理するシステム" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">サイトURL</Label>
                  <Input id="site-url" defaultValue="https://example.com" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">メンテナンスモード</Label>
                  <Switch id="maintenance-mode" />
                </div>
                <Button onClick={handleSave}>保存</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>データ管理</CardTitle>
                <CardDescription>データベースのバックアップとリストア</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">データのバックアップ</h4>
                    <p className="text-sm text-muted-foreground">データをJSONファイルとしてエクスポートします。</p>
                  </div>
                  <Button variant="outline">エクスポート</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">データのリストア</h4>
                    <p className="text-sm text-muted-foreground">JSONファイルからデータをインポートします。</p>
                  </div>
                  <Button variant="outline">インポート</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>表示設定</CardTitle>
                <CardDescription>アプリケーションの外観を設定します。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme-mode">ダークモード</Label>
                  <Switch id="theme-mode" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="items-per-page">ページあたりの表示件数</Label>
                  <Input id="items-per-page" type="number" defaultValue="10" min="5" max="100" />
                </div>
                <Button onClick={handleSave}>保存</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>通知設定</CardTitle>
                <CardDescription>通知の受け取り方法を設定します。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">メール通知</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="browser-notifications">ブラウザ通知</Label>
                  <Switch id="browser-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="update-notifications">更新通知</Label>
                  <Switch id="update-notifications" defaultChecked />
                </div>
                <Button onClick={handleSave}>保存</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>アカウント設定</CardTitle>
                <CardDescription>ユーザーアカウントの設定を行います。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">ユーザー名</Label>
                  <Input id="username" defaultValue="管理者" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" defaultValue="admin@example.com" />
                </div>
                <Button onClick={handleSave}>保存</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>パスワード変更</CardTitle>
                <CardDescription>セキュリティのためにパスワードを変更します。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">現在のパスワード</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">新しいパスワード</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">パスワードの確認</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button onClick={handleSave}>パスワードを変更</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
