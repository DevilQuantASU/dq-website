const projects = [
  {
    title: "DevilQuant Data Lake",
    type: "Infrastructure",
    description:
      "A data collection pipeline that continuously scrapes and stores prediction market prices, volumes, and contract metadata into a local database. Serves as the club's foundational data layer for research and model development.",
    tags: ["Python", "SQL", "Web Scraping", "ETL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "Sentiment Scraper",
    type: "Infrastructure",
    description:
      "A scheduled pipeline that collects headlines and sentiment scores from financial news RSS feeds and Reddit communities on a cron schedule. Stores timestamped sentiment signals for backtesting and real-time analysis.",
    tags: ["Python", "NLP", "RSS", "Reddit API"],
    image: "https://images.unsplash.com/photo-1616509091215-57bbece93654?w=800&q=80",
  },
  {
    title: "Odds Comparison Aggregator",
    type: "Infrastructure",
    description:
      "Scrapes odds and lines from multiple sportsbooks and prediction markets, storing historical spread data. Enables members to track line movement, spot pricing inefficiencies, and study market efficiency across platforms.",
    tags: ["Python", "Web Scraping", "SQL", "Cron"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
  },
];

export default projects;
