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
  static async crawlWebsite(url: string): Promise<CrawlResponse> {
    try {
      // For now, return mock data since we don't have the API key set up
      return {
        success: true,
        data: {
          data: [
            {
              title: "Community Development Project Launches in West Garfield Park",
              content: "A new initiative focused on supporting local families and promoting community growth has been announced in West Garfield Park...",
              url: "https://example.com/article1",
              publishedAt: new Date().toISOString()
            },
            {
              title: "Local Education Program Expands Reach",
              content: "The successful after-school program serving West Garfield Park families has received additional funding to expand its services...",
              url: "https://example.com/article2",
              publishedAt: new Date(Date.now() - 86400000).toISOString()
            }
          ]
        }
      };
    } catch (error) {
      console.error('Error crawling website:', error);
      return {
        success: false,
        error: 'Failed to crawl website'
      };
    }
  }
}