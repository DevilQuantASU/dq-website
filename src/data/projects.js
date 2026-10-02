// Photos from Unsplash (unsplash.com/license), stored locally.
import dataLakeImage from "../assets/projects/data-lake.jpg";
import sentimentScraperImage from "../assets/projects/sentiment-scraper.jpg";
import oddsAggregatorImage from "../assets/projects/odds-aggregator.jpg";

const projects = [
  {
    title: "DevilQuant Data Lake",
    type: "Infrastructure",
    description:
      "A data collection pipeline that continuously scrapes and stores prediction market prices, volumes, and contract metadata into a local database. Serves as the club's foundational data layer for research and model development.",
    tags: ["Python", "SQL", "Web Scraping", "ETL"],
    image: dataLakeImage,
    visible: true,
  },
  {
    title: "Sentiment Scraper",
    type: "Infrastructure",
    description:
      "A scheduled pipeline that collects headlines and sentiment scores from financial news RSS feeds and Reddit communities on a cron schedule. Stores timestamped sentiment signals for backtesting and real-time analysis.",
    tags: ["Python", "NLP", "RSS", "Reddit API"],
    image: sentimentScraperImage,
    visible: true,
  },
  {
    title: "Odds Comparison Aggregator",
    type: "Infrastructure",
    description:
      "Scrapes odds and lines from multiple sportsbooks and prediction markets, storing historical spread data. Enables members to track line movement, spot pricing inefficiencies, and study market efficiency across platforms.",
    tags: ["Python", "Web Scraping", "SQL", "Cron"],
    image: oddsAggregatorImage,
    visible: false,
  },
];

export default projects;
