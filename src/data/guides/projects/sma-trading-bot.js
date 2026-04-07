const guide = {
  slug: "sma-trading-bot",
  title: "Algorithmic Backtesting Framework",
  description: "Learn why writing robust backtests is harder than it looks, and evolve past simple moving averages.",
  sections: [
    {
      id: "project-overview",
      title: "Project Overview",
      content: `
        <p>A basic script that calculates two moving averages and prints out when they cross is fundamentally flawed for actual trading. It ignores massive hurdles like execution latency, slippage, survivor bias, and lookahead bias.</p>
        <p><strong>The Objective:</strong> Shift away from naive Pandas column-shifting and implement a rigorous, event-driven backtesting framework capable of evaluating more advanced quantitative strategies.</p>
      `,
    },
    {
      id: "the-backtester",
      title: "Event-Driven vs Vectorized Backtesting",
      content: `
        <p>To accurately simulate trading, an event-driven backtester iterates through time tick-by-tick, ensuring your strategy cannot "peek" into the future.</p>
        <div class="guide-callout guide-callout-warning">
          <strong>The Vectorized Trap:</strong> Using <code>df['Signal'].shift(1)</code> in Pandas is a vectorized approach. It is blazing fast but extremely dangerous for production systems because it naturally breeds look-ahead bias and ignores order execution delays.
        </div>
        <p>Instead of writing a backtester from scratch, integrate robust open-source libraries like <strong>Backtrader</strong>, <strong>Zipline</strong>, or <strong>VectorBT</strong> into your project workflow.</p>
      `,
    },
    {
      id: "advanced-strategies",
      title: "Leveling Up: Statistical Arbitrage",
      content: `
        <p>Moving Average crossovers are lagging momentum indicators and rarely hold alpha on their own. To stand out, implement a strategy with rigorous statistical foundations like <strong>Mean Reversion</strong> or <strong>Pairs Trading</strong>.</p>
        <ul>
          <li><strong>Cointegration:</strong> Find two assets whose price spread tends to stay constant over time. When the spread deviates significantly, short the outperforming asset and long the underperforming one.</li>
          <li><strong>Z-Score Thresholds:</strong> Program your framework to dynamically calculate the rolling Z-Score of the spread to determine mathematically sound entry and exit thresholds.</li>
        </ul>
      `,
    },
    {
      id: "metrics",
      title: "Institutional Metrics",
      content: `
        <p>Firms do not just look at "Total Profit". Your backtesting framework must calculate risk-adjusted returns to prove the strategy's validity.</p>
        <ul>
          <li><strong>Sharpe & Sortino Ratios:</strong> Measure return relative to downside volatility.</li>
          <li><strong>Maximum Drawdown (MDD):</strong> The largest peak-to-trough drop in portfolio value.</li>
          <li><strong>Beta:</strong> Calculate how much of your strategy's returns are just beta (market correlation) versus pure alpha.</li>
        </ul>
        <pre><code class="language-python"># High-level backtest execution concept
cerebro = bt.Cerebro()
cerebro.addstrategy(StatisticalArbitrageStrategy, z_score_entry=2.0)
cerebro.adddata(cointegrated_data_feed)

cerebro.broker.setcommission(commission=0.001)  # Simulating reality
results = cerebro.run()
</code></pre>
      `,
    }
  ],
};

export default guide;
