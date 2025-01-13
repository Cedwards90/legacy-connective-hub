import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Loader2 } from "lucide-react";

interface NewsItem {
  title: string;
  content: string;
  url: string;
  date: string;
  source: string;
}

export const BlogFeed = () => {
  const { toast } = useToast();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const sources = [
        'https://blockclubchicago.org/category/neighborhoods/west-side/',
        'https://www.chicagotribune.com/neighborhoods/west-side/',
        'https://abc7chicago.com/place/garfield-park/'
      ];

      const results = await Promise.all(
        sources.map(url => FirecrawlService.crawlWebsite(url))
      );

      const newsItems = results
        .filter(result => result.success && result.data)
        .flatMap(result => {
          const data = result.data.data || [];
          return data.map((item: any) => ({
            title: item.title || 'Untitled',
            content: item.content || item.description || '',
            url: item.url || '',
            date: item.publishedAt || new Date().toISOString(),
            source: new URL(item.url || '').hostname
          }));
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      setNews(newsItems);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: "Error",
        description: "Failed to fetch news updates. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
      {news.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-playfair line-clamp-2">
              {item.title}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {new Date(item.date).toLocaleDateString()} • {item.source}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 line-clamp-4 mb-4">
              {item.content}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 font-medium"
            >
              Read full article →
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};