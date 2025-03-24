
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useActivity } from '@/contexts/ActivityContext';
import { useAuth } from '@/contexts/AuthContext';

// Login form schema
const formSchema = z.object({
  username: z.string().min(1, { message: 'ユーザー名を入力してください' }),
  password: z.string().min(1, { message: 'パスワードを入力してください' }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setActivities } = useActivity();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // Hard-coded credentials for demo (in a real app, this would be handled securely)
      if (data.username === 'admin' && data.password === 'password') {
        // Use the login function from auth context
        login();
        
        // Add login activity
        setActivities(prev => [
          {
            id: Date.now().toString(),
            description: 'ログインしました',
            timestamp: new Date(),
            type: 'info',
            read: false,
          },
          ...prev
        ]);
        
        toast({
          title: 'ログイン成功',
          description: 'ダッシュボードにリダイレクトします',
        });
        
        navigate('/dashboard');
      } else {
        toast({
          variant: 'destructive',
          title: 'ログイン失敗',
          description: 'ユーザー名またはパスワードが間違っています',
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-dashboard-green text-white p-4">
        <div className="container flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <ArrowLeft size={20} />
            アニマルストア管理システム
          </Link>
        </div>
      </header>
      
      <main className="flex-1 container py-12 px-4 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">ログイン</CardTitle>
            <CardDescription className="text-center">
              管理システムにアクセスするには認証が必要です
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ユーザー名</FormLabel>
                      <FormControl>
                        <Input placeholder="ユーザー名を入力" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>パスワード</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="パスワードを入力" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'ログイン中...' : 'ログイン'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="px-8 text-center text-sm text-muted-foreground mt-2">
              <span className="text-dashboard-green font-semibold">ヒント:</span> ユーザー名「admin」、パスワード「password」でログインできます
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
