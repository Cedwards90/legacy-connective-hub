import FirecrawlApp from '@mendable/firecrawl-js';

interface CrawlResponse {
  success: boolean;
  error?: string;
  data?: {
    data: Array<{
      title?: string;
      content?: string;
      description?: string;
      url?: string;
      publishedAt?: string;
    }>;
  };
}

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async crawlWebsite(url: string): Promise<CrawlResponse> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return {
        success: false,
        error: 'API key not found. Please set your Firecrawl API key first.'
      };
    }

    try {
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      const response = await this.firecrawlApp.crawlUrl(url, {
        limit: 10,
        scrapeOptions: {
          formats: ['markdown', 'html'],
          selectors: {
            title: 'h1, .article-title, .post-title',
            content: 'article, .article-content, .post-content',
            publishedAt: 'time, .published-date, meta[property="article:published_time"]'
          }
        }
      });

      if (!response.success) {
        throw new Error(response.error || 'Failed to crawl website');
      }

      return {
        success: true,
        data: {
          data: response.data.map((item: any) => ({
            title: item.title || 'Untitled',
            content: item.content || item.description || '',
            url: item.url || '',
            publishedAt: item.publishedAt || new Date().toISOString()
          }))
        }
      };
    } catch (error) {
      console.error('Error crawling website:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to crawl website'
      };
    }
  }
}