const guide = {
  slug: "sentiment-trading-signal",
  title: "News Sentiment Trading Signal",
  description: "Build a pipeline that turns financial news and social media into quantifiable trading signals.",
  sections: [
    {
      id: "the-idea",
      title: "The Idea",
      content: `
        <p>Markets react to information. Earnings reports, Fed announcements, analyst upgrades, even tweets. The question is whether you can systematically capture that information and turn it into a signal before it's fully priced in.</p>
        <p>This project is about building a pipeline that ingests financial text data (news headlines, Reddit posts, SEC filings, whatever you want), scores it for sentiment, and produces a buy/sell/hold signal that you can actually backtest.</p>
      `,
    },
    {
      id: "data-sources",
      title: "Where to Get the Data",
      content: `
        <p>The quality of your signal depends entirely on the quality of your data. Here are some realistic options:</p>
        <ul>
          <li><strong>News Headlines:</strong> APIs like <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI</a> or <a href="https://finnhub.io/" target="_blank" rel="noopener noreferrer">Finnhub</a> give you headlines tagged to specific tickers. The free tiers are enough to get started.</li>
          <li><strong>Reddit:</strong> The <code>praw</code> Python library lets you scrape subreddits like r/wallstreetbets, r/stocks, or r/investing. This data is noisy but can capture retail sentiment shifts early.</li>
          <li><strong>SEC Filings:</strong> The EDGAR database is free and public. 10-K and 10-Q filings are long, but running sentiment analysis on the "Risk Factors" section over time can surface interesting trends.</li>
        </ul>
        <div class="guide-callout guide-callout-warning">
          <strong>Be realistic:</strong> Free data has limitations. You won't be getting real-time Bloomberg terminal feeds. That's fine. The point of this project is to demonstrate the pipeline and methodology, not to build a production trading system.
        </div>
      `,
    },
    {
      id: "sentiment-scoring",
      title: "Scoring Sentiment",
      content: `
        <p>You have a few options here, and they range from dead simple to fairly involved:</p>
        <ul>
          <li><strong>Dictionary-Based (Simple):</strong> Use a pre-built lexicon like the Loughran-McDonald dictionary, which was specifically designed for financial text. Words like "liability" and "loss" mean different things in finance than in everyday language, so general-purpose sentiment tools (like VADER) tend to misfire on financial text.</li>
          <li><strong>Pre-Trained Transformer (Better):</strong> Use a model like <code>FinBERT</code>, which is BERT fine-tuned on financial text. Hugging Face makes this easy to plug in. You feed it a headline, it gives you a sentiment score. Much more accurate than dictionary approaches.</li>
          <li><strong>Custom Model (Advanced):</strong> Fine-tune your own model on labeled financial data. This is a lot more work but gives you full control and is a strong resume item.</li>
        </ul>
      `,
    },
    {
      id: "building-the-signal",
      title: "Building the Signal",
      content: `
        <p>Raw sentiment scores by themselves aren't useful for trading. You need to turn them into something actionable:</p>
        <ul>
          <li><strong>Aggregation:</strong> For any given ticker on any given day, you might have dozens of headlines. Average the scores, weight them by recency, or weight by source credibility. Experiment with what works.</li>
          <li><strong>Normalization:</strong> Compare today's sentiment to a rolling average. A single positive headline doesn't mean much, but a sustained shift in sentiment over a few days might. Calculate a z-score of daily sentiment relative to a 30-day rolling window.</li>
          <li><strong>Signal Generation:</strong> Define thresholds. For example: if the sentiment z-score crosses above +1.5, go long. Below -1.5, go short. Between those, do nothing. These thresholds are parameters you tune during backtesting.</li>
        </ul>
        <div class="guide-callout guide-callout-info">
          <strong>Key point:</strong> The signal generation logic is where you get to be creative. There's no single "right" answer here. What matters is that you can explain why you made the choices you did and how you validated them.
        </div>
      `,
    },
    {
      id: "backtesting",
      title: "Backtesting the Signal",
      content: `
        <p>You need to prove this signal actually has predictive power. Pull historical price data for the same period your sentiment data covers and run a simple backtest:</p>
        <ul>
          <li>Does going long on high-sentiment days produce positive excess returns?</li>
          <li>What's the Sharpe ratio of a strategy that trades purely on your signal vs. buy-and-hold?</li>
          <li>Is the signal actually leading price moves, or is it just reacting to moves that already happened?</li>
        </ul>
        <p>That last point is critical. A lot of sentiment signals look great in backtests but are actually just lagging indicators dressed up to look predictive. Plot the timing carefully.</p>
      `,
    },
    {
      id: "extensions",
      title: "Taking It Further",
      content: `
        <p>Some ways to push this further:</p>
        <ul>
          <li><strong>Multi-Source Fusion:</strong> Combine sentiment from news, Reddit, and Twitter into a single composite score. Weight each source differently and see if the combined signal outperforms any individual one.</li>
          <li><strong>Sector-Level Analysis:</strong> Instead of individual stocks, aggregate sentiment at the sector level and see if you can predict sector rotation.</li>
          <li><strong>Event Detection:</strong> Flag sudden spikes in mention volume for a ticker (not just sentiment, but raw volume of discussion). A stock going from 5 mentions a day to 500 is a signal in itself, regardless of whether the sentiment is positive or negative.</li>
        </ul>
      `,
    }
  ],
};

export default guide;
