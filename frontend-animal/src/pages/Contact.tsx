import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('http://35.79.42.26/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message, isSubmitting })
    });
    const result = await response.json();
    console.log(result.message);
    
    // フォーム送信をシミュレート
    setTimeout(() => {
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。48時間以内にご返信いたします。",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-pugeat-light-green">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">CONTACT</h1>
          <p className="text-xl text-center text-pugeat-dark-green/80 max-w-3xl mx-auto">
            お気軽にお問い合わせください
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="mb-6">
              <Label htmlFor="name" className="block text-pugeat-dark-green font-medium mb-2">
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pugeat-green"
                placeholder="山田 太郎"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="email" className="block text-pugeat-dark-green font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pugeat-green"
                placeholder="your-email@example.com"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="subject" className="block text-pugeat-dark-green font-medium mb-2">
                件名
              </Label>
              <Input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pugeat-green"
                placeholder="お問い合わせの件名"
              />
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="block text-pugeat-dark-green font-medium mb-2">
                メッセージ <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pugeat-green focus:border-transparent"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-pugeat-green hover:bg-pugeat-dark-green text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  '送信する'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;